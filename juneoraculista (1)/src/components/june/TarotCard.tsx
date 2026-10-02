import { Link } from "@tanstack/react-router";
import { BrandDivider } from "./Ornaments";

type HomeCardProps = { numeral: string; title: string; subtitle: string; cardName: string; to: "/oráculos e consultas" | "/feiticos" };
export function HomeTarotCard({ numeral, title, subtitle, cardName, to }: HomeCardProps) {
  return <Link to={to} className="tarot-card home-tarot-card">
    <div className="tarot-panel"><span className="roman">{numeral}</span><h2>{title}</h2><BrandDivider /><p>{subtitle}</p><span className="card-sigil" aria-hidden="true">✦</span><span className="card-hint">Clique e descubra.</span></div>
    <div className="tarot-name">{cardName}</div>
  </Link>;
}
