import Link from "next/link";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────────────
   LOGO — componente isolado para troca fácil.

   ▸ PLACEHOLDER ATUAL: anel decorativo (SVG) + wordmark "OPUS LT".
   ▸ PARA USAR A LOGO REAL:
       1. Salve o arquivo em /public/logo.png
       2. Descomente o bloco <Image> abaixo e remova o placeholder SVG.
   ───────────────────────────────────────────────────────────────────── */

// import Image from "next/image";

type LogoProps = {
  /** "dark" = para fundos claros (texto grafite); "light" = fundos escuros. */
  tone?: "dark" | "light";
  className?: string;
  /** Renderiza sem o <Link> (ex.: dentro do footer com link próprio). */
  asPlainMark?: boolean;
};

function Mark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const textColor = tone === "light" ? "text-white" : "text-charcoal-800";
  const subColor = tone === "light" ? "text-white/60" : "text-charcoal-500";

  return (
    <span className="flex items-center gap-2.5">
      {/* Anel decorativo metálico (placeholder que remete à logo) */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="copperRing" x1="0" y1="0" x2="36" y2="36">
            <stop offset="0%" stopColor="#D2A48F" />
            <stop offset="100%" stopColor="#A56A52" />
          </linearGradient>
        </defs>
        <circle cx="18" cy="18" r="15.5" stroke="url(#copperRing)" strokeWidth="2.5" />
        <circle cx="18" cy="18" r="6.5" stroke="url(#copperRing)" strokeWidth="2" opacity="0.7" />
      </svg>

      {/*
        // LOGO REAL — descomente após adicionar /public/logo.png:
        <Image src="/logo.png" alt="Opus LT Engenharia" width={140} height={36} priority />
      */}

      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-lg font-bold tracking-tight", textColor)}>
          OPUS LT
        </span>
        <span className={cn("text-[0.6rem] font-medium uppercase tracking-[0.28em]", subColor)}>
          Engenharia
        </span>
      </span>
    </span>
  );
}

export function Logo({ tone = "dark", className, asPlainMark = false }: LogoProps) {
  if (asPlainMark) {
    return (
      <span className={className}>
        <Mark tone={tone} />
      </span>
    );
  }
  return (
    <Link href="/" className={cn("inline-flex", className)} aria-label="Opus LT Engenharia — Início">
      <Mark tone={tone} />
    </Link>
  );
}
