"use client";

import type { ReactNode } from "react";
import SectionHeading from "@/components/SectionHeading";
import { FadeIn, TiltCard } from "@/components/motion/primitives";
import { pillars } from "@/lib/content";

const ICONS: ReactNode[] = [
  <svg key="i1" viewBox="0 0 32 32" fill="none" className="h-8 w-8">
    <rect x="3" y="3" width="17" height="17" stroke="currentColor" strokeWidth="1.2" />
    <rect x="12" y="12" width="17" height="17" stroke="currentColor" strokeWidth="1.2" />
    <path d="M12 20H20V12" stroke="currentColor" strokeWidth="1.2" />
  </svg>,
  <svg key="i2" viewBox="0 0 32 32" fill="none" className="h-8 w-8">
    <path
      d="M16 2.8L28 7.2V15.4C28 22.4 23 27.6 16 29.4C9 27.6 4 22.4 4 15.4V7.2L16 2.8Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <path d="M10.8 15.6L14.6 19.4L21.4 12.6" stroke="currentColor" strokeWidth="1.3" />
  </svg>,
  <svg key="i3" viewBox="0 0 32 32" fill="none" className="h-8 w-8">
    <rect x="3" y="6" width="26" height="22" stroke="currentColor" strokeWidth="1.2" />
    <path d="M3 13H29M10 3V8M22 3V8" stroke="currentColor" strokeWidth="1.2" />
    <path d="M8 18.5H16M8 23H21" stroke="currentColor" strokeWidth="1.3" />
  </svg>,
];

export default function Pillars() {
  return (
    <section id="pilares" className="relative py-28 md:py-40">
      <div className="container-x">
        <SectionHeading
          kicker="Como trabalhamos"
          lines={[
            <span key="e">
              O que nos torna{" "}
              <em className="font-accent italic text-bone">
                responsáveis
              </em>
              .
            </span>,
          ]}
          description="Três compromissos que valem para a obra de R$ 50 mil e para a de R$ 5 milhões — porque é deles que depende a confiança de quem contrata."
        />

        <div className="mt-16 grid gap-5 md:mt-24 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={0.15 * i} y={40}>
              <TiltCard className="group h-full">
                <div className="relative flex h-full flex-col border border-bone/10 bg-gradient-to-b from-bone/[0.04] to-transparent p-9 transition-colors duration-700 hover:border-accent-soft/40 md:p-11">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(147,174,143,0.1),transparent_70%)]" />
                  </div>
                  <span className="text-accent-soft transition-transform duration-700 group-hover:-translate-y-1">
                    {ICONS[i]}
                  </span>
                  <h3 className="mt-10 font-display text-2xl font-semibold tracking-tight text-bone">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-smoke md:text-[15px]">
                    {pillar.text}
                  </p>
                  <span className="mt-8 block h-px w-10 bg-accent-soft/50 transition-all duration-700 group-hover:w-full group-hover:bg-accent-soft/30" />
                </div>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
