export function BrandDivider() {
  return <div className="brand-divider" aria-hidden="true"><span /><b>JUNE TAROT</b><span /></div>;
}

export function MermaidOrnament({ flipped = false }: { flipped?: boolean }) {
  return (
    <svg className={`mermaid-ornament ${flipped ? "rotate-180" : ""}`} viewBox="0 0 720 190" role="img" aria-label="Ornamento Art Nouveau com duas sereias, lua e asas">
      <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M351 91c-26-21-28-48-1-68-5 28 17 42 28 58-9 12-16 21-27 35-9-9-9-16 0-25Z" />
        <path d="M342 86c-26 1-45 13-60 32 29-7 45 1 65 21M377 86c27 1 45 13 61 32-29-7-46 1-65 21" />
        <path d="M332 144c12-13 23-18 28-18s17 5 29 18M360 127v45M346 155l14 17 14-17" />
        <path d="M321 75C268 45 230 35 185 40c-45 5-82 33-100 70-9 18-5 37 12 45 20 9 45-5 58-21 21-26 16-55-5-71-17-13-44-14-56 3-8 12-1 26 12 28 13 2 23-11 17-22" />
        <path d="M323 77c-55-7-99-1-125 20-19 16-29 41-52 54-25 15-55 11-79-5 22 27 59 36 91 23 31-12 47-45 75-56 28-11 59-2 84 11" />
        <circle cx="183" cy="53" r="10" /><path d="M178 63c-2 18 5 27 18 34m-14-24-22 16m26-13 20 12m-18-36c8-8 18-7 24-1" />
        <path d="M399 75c53-30 91-40 136-35 45 5 82 33 100 70 9 18 5 37-12 45-20 9-45-5-58-21-21-26-16-55 5-71 17-13 44-14 56 3 8 12 1 26-12 28-13 2-23-11-17-22" />
        <path d="M397 77c55-7 99-1 125 20 19 16 29 41 52 54 25 15 55 11 79-5-22 27-59 36-91 23-31-12-47-45-75-56-28-11-59-2-84 11" />
        <circle cx="537" cy="53" r="10" /><path d="M542 63c2 18-5 27-18 34m14-24 22 16m-26-13-20 12m18-36c-8-8-18-7-24-1" />
        <path d="M96 112c-28-5-54 1-73 18 31-4 47 8 59 27M624 112c28-5 54 1 73 18-31-4-47 8-59 27" />
        <circle cx="360" cy="91" r="4" fill="currentColor" /><path d="M258 68l7 7m-15 0 8-7M462 68l-7 7m15 0-8-7" />
      </g>
    </svg>
  );
}

export function MysticIcon({ type = "star" }: { type?: "star" | "moon" | "eye" }) {
  if (type === "moon") return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M22 25A12 12 0 0 1 17 3a12 12 0 1 0 5 22Z" /></svg>;
  if (type === "eye") return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M2 16s5-8 14-8 14 8 14 8-5 8-14 8S2 16 2 16Z"/><circle cx="16" cy="16" r="4"/></svg>;
  return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="m16 2 2.6 11.4L30 16l-11.4 2.6L16 30l-2.6-11.4L2 16l11.4-2.6L16 2Z"/></svg>;
}
