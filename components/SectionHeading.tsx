"use client";

import type { ReactNode } from "react";
import { FadeIn, MaskLines } from "@/components/motion/primitives";

type SectionHeadingProps = {
  kicker: string;
  lines: ReactNode[];
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  kicker,
  lines,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <FadeIn y={16} blur={false}>
        <span className="kicker">{kicker}</span>
      </FadeIn>
      <MaskLines
        lines={lines}
        className={`mt-6 block font-display text-[clamp(2.2rem,4.6vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-bone ${
          centered ? "mx-auto" : ""
        }`}
      />
      {description ? (
        <FadeIn
          delay={0.25}
          y={20}
          className={`mt-8 max-w-xl text-base leading-relaxed text-smoke md:text-lg ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </FadeIn>
      ) : null}
    </div>
  );
}
