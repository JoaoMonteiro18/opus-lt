"use client";

import { FadeIn } from "@/components/motion/primitives";
import { processSteps } from "@/lib/content";

/** O processo correndo em faixa contínua, numerado para a sequência seguir legível. */
export default function Marquee() {
  return (
    <section id="processo" className="relative scroll-mt-24 py-16 md:py-20">
      <FadeIn y={20}>
        <p className="container-x text-[11px] uppercase tracking-[0.35em] text-bone/30">
          Do diagnóstico à entrega
        </p>

        <div className="relative mt-7 overflow-hidden border-y border-bone/10 py-7 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-marquee flex w-max items-center">
            {[...processSteps, ...processSteps].map((step, i) => (
              <span
                key={`${step.number}-${i}`}
                className="flex items-center gap-5 pr-14 font-display text-lg font-medium tracking-[-0.01em] text-bone/55 md:text-xl"
              >
                <span className="text-xs font-semibold tracking-[0.2em] text-accent-soft">
                  {step.number}
                </span>
                {step.title}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
