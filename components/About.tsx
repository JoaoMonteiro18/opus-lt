"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/SectionHeading";
import { FadeIn } from "@/components/motion/primitives";
import { images } from "@/lib/site";
import { aboutChecklist } from "@/lib/content";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { yPercent: -8, scale: 1.15 },
        {
          yPercent: 8,
          scale: 1.15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="sobre" className="relative py-28 md:py-44">
      <div className="container-x grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <SectionHeading
            kicker="Quem somos"
            lines={[
              "Engenharia que",
              <span key="a">
                <em className="font-accent italic text-bone">entrega</em>{" "}
                o que
              </span>,
              "foi combinado.",
            ]}
          />

          <FadeIn delay={0.3} x={-32} y={0} className="mt-10 space-y-6">
            <p className="max-w-lg leading-relaxed text-smoke">
              A Opus executa e gerencia a obra inteira, da estrutura ao
              comissionamento — incluindo as instalações elétricas e de dados,
              a parte em que não existe margem para improviso.
            </p>
            <p className="max-w-lg leading-relaxed text-smoke">
              O cliente deixa de coordenar construtora, elétrica e rede
              separadamente. É uma responsável técnica só — e, quando algo
              precisa de resposta, um número só.
            </p>
          </FadeIn>

          <FadeIn delay={0.45} x={-32} y={0} className="mt-10">
            <ul className="space-y-5">
              {aboutChecklist.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-2.5 h-px w-8 shrink-0 bg-accent-soft" />
                  <span className="text-sm leading-relaxed text-bone/75 md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <FadeIn x={48} y={0} duration={1.3} className="relative">
            <div className="pointer-events-none absolute -left-5 -top-5 hidden h-full w-full border border-accent-soft/25 md:block" />
            <div className="relative aspect-[4/5] overflow-hidden">
              <div ref={imgRef} className="absolute inset-0 will-change-transform">
                <Image
                  src={images.about}
                  alt="Projeto executivo sobre a prancheta"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </div>
            <p className="mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-smoke">
              <span className="h-px w-6 bg-accent-soft/60" />
              Do projeto executivo à obra
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
