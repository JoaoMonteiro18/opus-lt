import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  /** Use em seções de fundo escuro para inverter as cores do texto. */
  inverted?: boolean;
  className?: string;
};

/** Cabeçalho de seção padronizado: eyebrow + linha metálica + título. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverted = false,
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        isCenter && "mx-auto text-center",
        className,
      )}
    >
      <div className={cn("flex items-center gap-3", isCenter && "justify-center")}>
        <span className="eyebrow">{eyebrow}</span>
        <span className="metal-rule" aria-hidden="true" />
      </div>
      <h2
        className={cn(
          "mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl",
          inverted ? "text-white" : "text-charcoal-800",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            inverted ? "text-white/70" : "text-charcoal-500",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
