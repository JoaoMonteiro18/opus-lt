import Link from "next/link";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────────────
   LOGO — medalhão oficial (SVG) + wordmark "OPUS LT ENGENHARIA".

   ▸ O símbolo (a "bolinha") fica em /public/logo-mark.svg.
     Para trocar o símbolo, basta substituir esse arquivo.
   ▸ O texto é renderizado como tipografia (fonte Sora) para nitidez e
     leveza. Se quiser a fonte exata da logo oficial, é só informar o
     nome da fonte que ajustamos aqui.
   ───────────────────────────────────────────────────────────────────── */

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
      {/* Medalhão oficial da marca */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-mark.svg"
        alt="Opus LT Engenharia"
        width={44}
        height={44}
        className="h-10 w-auto shrink-0"
      />

      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-bold tracking-tight",
            textColor,
          )}
        >
          OPUS LT
        </span>
        <span
          className={cn(
            "text-[0.62rem] font-semibold uppercase tracking-[0.26em]",
            subColor,
          )}
        >
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
