import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/data/servicos";
import { BrandDivider, MermaidOrnament } from "./Ornaments";

const defaultMessage = "Olá! Vim pelo site, quero escolher meu atendimento.";

export function SiteHeader() {
  return <header className="site-header"><div className="site-header-inner">
    <Link to="/" className="wordmark">JUNE <span>TAROT</span></Link>
    <nav aria-label="Navegação principal">
      <Link to="/oráculos e consultas" activeProps={{ className: "active" }}>Tarot</Link>
      <Link to="/feiticos" activeProps={{ className: "active" }}>Feitiços</Link>
      <a href={whatsappUrl(defaultMessage)} target="_blank" rel="noreferrer">Contato</a>
    </nav>
  </div></header>;
}

export function SiteFooter() {
  return <footer className="site-footer">
    <MermaidOrnament flipped />
    <BrandDivider />
    <p className="legal">Os atendimentos têm caráter de orientação espiritual e autoconhecimento e não substituem acompanhamento médico, psicológico, jurídico ou financeiro. Não há garantia de resultados.</p>
    <div className="footer-meta"><span>© June Oráculos — Todos os direitos reservados</span><a href="https://x.com/junetarologa" target="_blank" rel="noreferrer">X · @junetarologa</a></div>
  </footer>;
}

export function WhatsAppFloat() {
  return <Button asChild variant="whatsapp" size="iconLg" className="fixed bottom-[18px] right-[18px] z-[60]"><a href={whatsappUrl(defaultMessage)} target="_blank" rel="noreferrer" aria-label="Falar com June pelo WhatsApp"><MessageCircle /></a></Button>;
}

export function PageIntro({ numeral, title, children }: { numeral: string; title: string; children: React.ReactNode }) {
  return <section className="page-intro reveal"><BrandDivider /><span className="roman">{numeral}</span><h1>{title}</h1><p>{children}</p></section>;
}
