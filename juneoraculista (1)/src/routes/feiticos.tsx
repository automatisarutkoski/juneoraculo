import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandDivider } from "@/components/june/Ornaments";
import { PageIntro } from "@/components/june/SiteChrome";
import { feiticos, formatMoney, whatsappUrl, type CategoriaFeitico } from "@/data/servicos";

export const Route = createFileRoute("/feiticos")({
  head: () => ({ meta: [
    { title: "Feitiços e Trabalhos Espirituais | June Oráculos" },
    { name: "description", content: "Trabalhos espirituais para amor, prosperidade, limpeza e proteção, conduzidos com intenção, ética e respeito." },
    { property: "og:title", content: "Feitiços e Trabalhos Espirituais | June Oráculos" },
    { property: "og:description", content: "Magias e pedidos de vela feitos com intenção, ética e respeito ao seu caminho." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }
  ], links: [{ rel: "canonical", href: "/feiticos" }] }),
  component: FeiticosPage,
});

function SpellCard({ category }: { category: CategoriaFeitico }) {
  return <article className="tarot-card spell-card reveal"><div className="tarot-panel"><span className="roman">{category.numero}</span><h2>{category.titulo}</h2><BrandDivider />
    <div className="spell-list">{category.trabalhos.map((work) => <details key={work.nome} className={work.vela ? "candle-item" : "spell-item"}><summary><span>{work.nome}</span><b>{formatMoney(work.preco)}</b></summary><div className="spell-detail"><p>{work.descricao}</p><small>Esta é uma breve explicação; cada trabalho é conversado individualmente.</small><Button asChild variant="ivory" size="default"><a href={whatsappUrl(`Olá! Vim pelo site da June Tarot e quero o trabalho: ${work.nome} (${formatMoney(work.preco)}).`)} target="_blank" rel="noreferrer"><MessageCircle /> Quero este trabalho</a></Button></div></details>)}</div>
    </div><div className="tarot-name">{category.nomeCarta}</div></article>;
}
function FeiticosPage() { return <><PageIntro numeral="I" title="Feitiços">Trabalhos espirituais, magias e pedidos de vela · feitos com intenção, ética e respeito ao seu caminho.</PageIntro><section className="spell-grid section-frame">{feiticos.map((category) => <SpellCard key={category.numero} category={category} />)}</section><section className="closing-cta reveal"><h2>Converse comigo sobre o seu caminho</h2><p>Cada história pede escuta antes de qualquer trabalho.</p><Button asChild variant="ivory" size="xl"><a href={whatsappUrl("Olá! Vim pelo site da June Tarot e quero conversar sobre um trabalho espiritual.")} target="_blank" rel="noreferrer"><MessageCircle /> Falar pelo WhatsApp</a></Button></section></> }
