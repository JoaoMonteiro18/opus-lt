"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FadeIn } from "@/components/motion/primitives";
import { processSteps } from "@/lib/content";

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const track = trackRef.current!;
          const getDistance = () => track.scrollWidth - window.innerWidth;

          gsap.to(track, {
            x: () => -getDistance(),
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: () => `+=${getDistance()}`,
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          gsap.fromTo(
            progressRef.current,
            { scaleX: 0 },
            {
              scaleX: 1,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: () => `+=${getDistance()}`,
                scrub: 1,
              },
            }
          );
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="processo"
      className="relative scroll-mt-24 overflow-hidden bg-coal lg:h-screen"
    >
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-40" />
      <div
        ref={trackRef}
        className="relative flex flex-col gap-14 px-6 py-28 md:px-10 lg:h-screen lg:w-max lg:flex-row lg:items-center lg:gap-28 lg:px-[8vw] lg:py-0"
      >
        <div className="max-w-md shrink-0 lg:w-[32vw]">
          <FadeIn y={16} blur={false}>
            <span className="kicker">Processo</span>
          </FadeIn>
          <FadeIn delay={0.15} y={28}>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,4.2vw,4rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-bone">
              Do diagnóstico às{" "}
              <em className="font-accent italic text-bone">chaves</em>.
            </h2>
          </FadeIn>
          <FadeIn delay={0.3} y={24}>
            <p className="mt-8 max-w-sm leading-relaxed text-smoke">
              Seis etapas que existem para o cliente saber, a qualquer momento,
              em que ponto a obra está e quanto já foi medido.
            </p>
          </FadeIn>
          <FadeIn delay={0.45} y={16} className="mt-10 hidden items-center gap-4 lg:flex">
            <span className="text-[11px] uppercase tracking-[0.3em] text-bone/40">
              Continue rolando
            </span>
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-accent-soft">
              <path d="M4 12H20M20 12L13 5M20 12L13 19" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </FadeIn>
        </div>

        {processSteps.map((step, i) => (
          <FadeIn
            key={step.number}
            delay={0.1 * i}
            y={40}
            className="relative shrink-0 border-t border-bone/10 pt-10 lg:w-[24rem] lg:border-t-0 lg:pt-0"
          >
            <div className="relative">
              <span className="pointer-events-none absolute -top-16 left-0 select-none font-display text-[7rem] font-semibold leading-none tracking-tight text-bone/[0.05] lg:-top-24 lg:text-[10rem]">
                {step.number}
              </span>
              <div className="relative">
                <span className="flex items-center gap-4">
                  <span className="font-display text-sm font-semibold tracking-[0.2em] text-accent-soft">
                    {step.number}
                  </span>
                  <span className="h-px w-14 bg-accent-soft/40" />
                </span>
                <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight text-bone lg:text-4xl">
                  {step.title}
                </h3>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-smoke lg:text-[15px]">
                  {step.text}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="absolute inset-x-[8vw] bottom-14 hidden h-px bg-bone/10 lg:block">
        <div
          ref={progressRef}
          className="h-full origin-left bg-accent-soft"
          style={{ transform: "scaleX(0)" }}
        />
      </div>
    </section>
  );
}
