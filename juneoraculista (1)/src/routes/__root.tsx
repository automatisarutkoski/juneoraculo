import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteFooter, SiteHeader, WhatsAppFloat } from "@/components/june/SiteChrome";
import { Button } from "@/components/ui/button";

function NotFoundComponent() { return <div className="error-page"><span className="roman">404</span><h1>Caminho não encontrado</h1><p>Esta página pode ter mudado de lugar.</p><Link to="/">Voltar ao início</Link></div>; }
function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) { console.error(error); const router = useRouter(); useEffect(() => { reportLovableError(error instanceof Error ? error : new Error(String(error)), { boundary: "tanstack_root_error_component" }); }, [error]); return <div className="error-page"><h1>Esta página não carregou</h1><p>Tente novamente ou volte ao início.</p><Button onClick={() => { router.invalidate(); reset(); }}>Tentar novamente</Button><Link to="/">Voltar ao início</Link></div>; }
export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({ meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { name: "author", content: "June Oráculos" }, { property: "og:site_name", content: "June Oráculos" }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "stylesheet", href: appCss }, { rel: "preconnect", href: "https://fonts.googleapis.com" }, { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }, { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=IM+Fell+English+SC&display=swap" }, { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }] }), shellComponent: RootShell, component: RootComponent, notFoundComponent: NotFoundComponent, errorComponent: ErrorComponent,
});
function RootShell({ children }: { children: ReactNode }) { return <html lang="pt-BR"><head><HeadContent /></head><body>{children}<Scripts /></body></html>; }
function RootComponent() { const { queryClient } = Route.useRouteContext(); return <QueryClientProvider client={queryClient}><SiteHeader/><main><Outlet /></main><SiteFooter/><WhatsAppFloat/></QueryClientProvider>; }
