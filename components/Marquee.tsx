"use client";

import { FadeIn } from "@/components/motion/primitives";
import { marqueeItems, processSteps } from "@/lib/content";

/**
 * Duas faixas contínuas no lugar das seções longas:
 * em cima o processo, numerado, para a sequência continuar legível;
 * embaixo os diferenciais, correndo no sentido oposto.
 */
export default function Marquee() {
  return (
    <section id="processo" className="relative scroll-mt-24 py-16 md:py-20">
      <FadeIn y={20}>
        <p className="container-x text-[11px] uppercase tracking-[0.35em] text-bone/30">
          Do diagnóstico à entrega
        </p>

        <div className="relative mt-7 overflow-hidden border-y border-bone/10 py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-marquee flex w-max items-center">
            {[...processSteps, ...processSteps].map((step, i) => (
              <span
                key={`${step.number}-${i}`}
                className="flex items-center gap-5 pr-12 font-display text-lg font-medium tracking-[-0.01em] text-bone/55 md:text-xl"
              >
                <span className="text-xs font-semibold tracking-[0.2em] text-accent-soft">
                  {step.number}
                </span>
                {step.title}
              </span>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden border-b border-bone/10 py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-marquee-reverse flex w-max items-center">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex items-center gap-12 pr-12 font-display text-base font-medium tracking-[-0.01em] text-bone/30 md:text-lg"
              >
                {item}
                <span className="size-1.5 shrink-0 rotate-45 bg-accent-soft/50" />
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
