"use client";

import { FadeIn } from "@/components/motion/primitives";
import { marqueeItems } from "@/lib/content";

/** Faixa contínua de diferenciais, logo após o Processo. */
export default function Marquee() {
  return (
    <FadeIn y={20} className="py-4">
      <div className="relative overflow-hidden border-y border-bone/10 py-7 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex w-max items-center">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-12 pr-12 font-display text-lg font-medium tracking-[-0.01em] text-bone/35 md:text-xl"
            >
              {item}
              <span className="size-1.5 shrink-0 rotate-45 bg-accent-soft/50" />
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
