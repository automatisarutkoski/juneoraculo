import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/june/SiteChrome";
import { consultas, formatMoney, whatsappUrl, type Consulta } from "@/data/servicos";

export const Route = createFileRoute("/oráculos e consultas")({
  head: () => ({ meta: [
    { title: "Oráculos e Consultas | June Oráculos" },
    { name: "description", content: "Consulta de tarot online com cartomante experiente: perguntas, sessões, Tarot de Osho, pêndulo e panoramas com acolhimento." },
    { property: "og:title", content: "Oráculos e Consultas | June Oráculos" },
    { property: "og:description", content: "Tarot online, oráculos e consultas individuais com clareza, sigilo e orientação." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }
  ], links: [{ rel: "canonical", href: "/oráculos e consultas" }] }),
  component: ConsultasPage,
});

function serviceMessage(nome: string, detail: string, total?: number) {
  const price = total === undefined ? detail : `${detail} (total ${formatMoney(total)})`;
  return `Olá! Vim pelo site da June Tarot e quero o serviço: ${nome} — ${price}.`;
}

function ConsultationCard({ item }: { item: Consulta }) {
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);
  const current = item.opcoes?.[selected];
  const unitPrice = current?.preco ?? item.preco;
  const total = item.precoPorQuantidade?.(quantity) ?? (item.quantidade && unitPrice ? unitPrice * quantity : unitPrice);
  const detail = item.quantidade ? `${quantity} ${quantity === 1 ? "pergunta" : "perguntas"}${current ? ` (${current.nome})` : ""}` : current ? `${current.nome} — ${formatMoney(current.preco)}` : `${formatMoney(item.preco ?? 0)} ${item.unidade ?? ""}`;
  const message = item.id === "objetiva"
    ? `Olá! Vim pelo site da June Tarot e quero ${quantity} ${quantity === 1 ? "pergunta objetiva" : "perguntas objetivas"} (total ${formatMoney(total ?? 0)}).`
    : item.id === "aprofundada"
    ? `Olá! Vim pelo site da June Tarot e quero ${quantity} ${quantity === 1 ? "pergunta aprofundada" : "perguntas aprofundadas"} (total ${formatMoney(total ?? 0)}).`
    : serviceMessage(item.nome, detail, total);
  const badge = current?.selo ?? item.selo;
  return <article className="consultation-card reveal">
    <div className="card-heading"><div><span className="mini-star">✦</span><h2>{item.nome}</h2></div>{badge && <span className="seal">{badge}</span>}</div>
    <p>{item.descricao}</p>
    {item.opcoes && <div className="option-list" role="radiogroup" aria-label={`Opções de ${item.nome}`}>{item.opcoes.map((option, index) => <Button key={option.nome} variant={selected === index ? "optionActive" : "option"} onClick={() => setSelected(index)} role="radio" aria-checked={selected === index}><span>{option.nome}</span><strong>{formatMoney(option.preco)}</strong></Button>)}</div>}
    {item.quantidade && <div className="quantity-row"><span>Quantidade</span><div className="stepper"><Button variant="iconLine" size="iconLg" onClick={() => setQuantity((q) => Math.max(1, q - 1))} aria-label="Diminuir quantidade" disabled={quantity === 1}><Minus /></Button><output aria-live="polite">{quantity}</output><Button variant="iconLine" size="iconLg" onClick={() => setQuantity((q) => Math.min(10, q + 1))} aria-label="Aumentar quantidade" disabled={quantity === 10}><Plus /></Button></div></div>}
    {!item.opcoes && <div className="price">{formatMoney(total ?? 0)} <small>{item.precoPorQuantidade ? `${quantity} ${quantity === 1 ? "pergunta" : "perguntas"}` : item.unidade}</small></div>}
    {item.adicional && <p className="additional">{item.adicional}</p>}
    {item.quantidade && <div className="total">Total <strong>{formatMoney(total ?? 0)}</strong></div>}
    <Button asChild variant="ivory" size="lg"><a href={whatsappUrl(message)} target="_blank" rel="noreferrer"><MessageCircle /> Quero este atendimento</a></Button>
  </article>;
}

function ConsultasPage() {
  return <><PageIntro numeral="II" title="Oráculos e Consultas">Um espaço de clareza, sigilo e orientação para olhar com cuidado o que pede resposta.</PageIntro>
    <section className="catalog-grid section-frame">{consultas.map((item) => <ConsultationCard key={item.id} item={item} />)}</section>
    <section className="closing-cta reveal"><span className="roman">✦</span><h2>Não sabe qual escolher?</h2><p>Me conte o que está vivendo. Eu te ajudo a encontrar o atendimento mais adequado.</p><Button asChild variant="ivory" size="xl"><a href={whatsappUrl("Olá! Vim pelo site e quero ajuda para escolher meu atendimento.")} target="_blank" rel="noreferrer"><MessageCircle /> Falar com a June</a></Button></section>
  </>;
}
