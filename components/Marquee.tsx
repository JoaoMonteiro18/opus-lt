"use client";

import { FadeIn } from "@/components/motion/primitives";
import { processSteps } from "@/lib/content";

/**
 * Um ciclo = as seis etapas + um separador largo. O separador é o que
 * deixa claro onde a volta termina; sem ele o 06 emenda no 01 e a
 * sequência vira um fluxo sem começo.
 */
function Cycle({ duplicate }: { duplicate?: boolean }) {
  return (
    <div className="flex items-center" aria-hidden={duplicate || undefined}>
      {processSteps.map((step) => (
        <span
          key={step.number}
          className="flex shrink-0 items-center gap-5 pr-14 font-display text-lg font-medium tracking-[-0.01em] text-bone/55 md:text-xl"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-accent-soft">
            {step.number}
          </span>
          {step.title}
        </span>
      ))}

      <span className="flex shrink-0 items-center gap-5 pr-14" aria-hidden="true">
        <span className="h-px w-16 bg-bone/15 md:w-20" />
        <span className="size-1.5 rotate-45 bg-accent-soft/60" />
        <span className="h-px w-16 bg-bone/15 md:w-20" />
      </span>
    </div>
  );
}

/** O processo correndo em faixa contínua, numerado e com as voltas separadas. */
export default function Marquee() {
  return (
    <section id="processo" className="relative scroll-mt-24 py-16 md:py-20">
      <FadeIn y={20}>
        <p className="container-x text-[11px] uppercase tracking-[0.35em] text-bone/30">
          Do diagnóstico à entrega
        </p>

        <div className="relative mt-7 overflow-hidden border-y border-bone/10 py-7 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-marquee flex w-max items-center">
            <Cycle />
            <Cycle duplicate />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
