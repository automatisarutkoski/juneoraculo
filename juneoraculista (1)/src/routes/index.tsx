import * as Accordion from "@radix-ui/react-accordion";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HomeTarotCard } from "@/components/june/TarotCard";
import { BrandDivider, MermaidOrnament, MysticIcon } from "@/components/june/Ornaments";
import { whatsappUrl } from "@/data/servicos";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "June Oráculos | Tarot Online e Trabalhos Espirituais" },
    { name: "description", content: "Consulta de tarot online com cartomante experiente. Oráculos e trabalhos espirituais com atendimento humano, sigiloso e acolhedor." },
    { property: "og:title", content: "June Oráculos | Tarot Online" },
    { property: "og:description", content: "Clareza para o que você sente. Direção para o que você vive." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }
  ], links: [{ rel: "canonical", href: "/" }] }), component: Index,
});

const trust = [
  ["star", "Sigilo e respeito"], ["eye", "Confiabilidade"], ["moon", "Orientações e acolhimento"], ["star", "Direto pelo WhatsApp"], ["moon", "7 anos de estudo e prática"],
] as const;
const moments = ["Uma decisão importante está travada.", "Você precisa de um conselho ou orientação.", "Alguma situação insiste em permanecer nos seus questionamentos.", "Você quer entender o que a pessoa amada sente.", "O mês ou o ano pede direção.", "Você sente que precisa de uma resposta objetiva."];
const faqs = [
  ["Qual o prazo de entrega do jogo após a confirmação do pagamento?", "Após a confirmação do pagamento ou recebimento do comprovante, o jogo será entregue em até 24h."],
  ["Como agendo ou peço?", "Você pode buscar o serviço que mais se encaixa com o seu momento aqui mesmo no site, que direcionará para o seu primeiro contato comigo, ou entrar em contato diretamente pelo WhatsApp para mais orientações através da seção de contato."],
  ["Meu atendimento é sigiloso?", "Sim, tudo o que você me conta é tratado com máximo de sigilo, respeito e livre de julgamentos."],
  ["Qual a diferença entre pergunta objetiva e aprofundada?", "A objetiva traz uma resposta direta, como um “sim” ou “não”. A aprofundada traz uma análise detalhada da situação, com maior número de cartas, clareza sobre o momento e orientação."],
];

function Index() {
  return <>
    <section className="hero section-frame"><div className="stars" aria-hidden="true">✦　·　✧　·　✦</div><MermaidOrnament /><div className="hero-copy"><span className="eyebrow">Cartomante · Oraculista</span><h1>June Oráculos</h1><BrandDivider /><p className="hero-lead">Clareza para o que você sente.<br />Direção para o que você vive.</p><p className="hero-sub">Tarot, oráculos e trabalhos espirituais com atendimento individual, acolhedor e sem julgamentos.</p></div></section>

    <section className="pathways section-frame reveal" aria-labelledby="caminhos"><span className="section-number">I · II</span><h2 id="caminhos">Escolha o seu caminho</h2><div className="home-card-grid"><HomeTarotCard numeral="II" title="Oráculos e Consultas" subtitle="Perguntas, consultas e panoramas para enxergar o seu caminho" cardName="The High Priestess" to="/oráculos e consultas"/><HomeTarotCard numeral="I" title="Feitiços" subtitle="Amor, prosperidade, limpeza e proteção" cardName="The Magician" to="/feiticos"/></div></section>

    <section className="trust-band" aria-label="Compromissos da June"><div>{trust.map(([icon, label]) => <div className="trust-item" key={label}><MysticIcon type={icon}/><span>{label}</span></div>)}</div></section>

    <section className="about section-frame reveal"><div className="about-copy"><span className="section-number">III</span><h2>Sobre a June</h2><BrandDivider /><div className="editable-story"><p>Tudo começou como uma semente: o desejo de entender o que existe por trás de cada carta, de cada símbolo, de cada silêncio. Plantei com estudo e aprofundamento, e reguei com prática, consulta após consulta, ao longo de 7 anos.</p><p>Nessa jornada, desenvolvi e estabeleci conexões profundas. Não apenas orientando e acolhendo quem busca o meu trabalho, mas criando raízes prósperas, em constante colheita.</p><p>Cada pessoa que chega até mim traz uma semente da sua própria história, e eu ofereço o que tenho de melhor: escuta, cuidado e orientação. E a terra devolve. O que recebi de volta foi o fruto: evolução. Cada acolhimento me ensinou algo, cada consulta me lapidou, e é por isso que hoje faço de cada atendimento algo único e especial.</p><p>Sou feliz e grata por saber que consigo ajudar e transformar um pouco da vida de cada pessoa que me procura. Porque quem planta com verdade colhe com abundância, e divide a colheita.</p></div><p className="tools">Tarot · Baralho de Osho · Pêndulo<br/><span>7 anos de estudo · 4 anos de atendimento</span></p></div></section>

    <section className="moments section-frame reveal"><span className="section-number">IV</span><h2>Quando procurar os oráculos</h2><BrandDivider /><div className="moment-grid">{moments.map((moment, i) => <div className="moment-card" key={moment}><MysticIcon type={i % 3 === 0 ? "star" : i % 3 === 1 ? "eye" : "moon"}/><p>{moment}</p></div>)}</div></section>

    <section className="faq section-frame reveal"><span className="section-number">V</span><h2>Perguntas frequentes</h2><BrandDivider /><Accordion.Root type="single" collapsible>{faqs.map(([question, answer], i) => <Accordion.Item value={`item-${i}`} key={question}><Accordion.Header><Accordion.Trigger>{question}<ChevronDown aria-hidden="true"/></Accordion.Trigger></Accordion.Header><Accordion.Content><p>{answer}</p></Accordion.Content></Accordion.Item>)}</Accordion.Root></section>

    <section className="closing-cta reveal"><span className="section-number">VI</span><h2>Não sabe por onde começar?</h2><p>Me chame e eu te ajudo a escolher.</p><Button asChild variant="ivory" size="xl"><a href={whatsappUrl("Olá! Vim pelo site, quero escolher meu atendimento.")} target="_blank" rel="noreferrer"><MessageCircle /> Conversar com a June</a></Button></section>
  </>;
}
