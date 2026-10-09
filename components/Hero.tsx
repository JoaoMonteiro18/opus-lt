"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Wordmark } from "@/components/Logo";
import { EASE, FadeIn, Magnetic, MaskLines } from "@/components/motion/primitives";
import { images } from "@/lib/site";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bgRef.current,
        { scale: 1.18 },
        { scale: 1, duration: 2.6, ease: "expo.out", delay: 0.2 }
      );
      gsap.to(bgRef.current, {
        yPercent: 16,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(contentRef.current, {
        yPercent: -14,
        autoAlpha: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "40% top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target && window.__lenis) {
      window.__lenis.scrollTo(target as HTMLElement, { duration: 1.6 });
    } else {
      target?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <Image
          src={images.hero}
          alt="Torres corporativas vistas de baixo"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/45 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_110%,rgba(13,18,23,0.92),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_75%_20%,rgba(147,174,143,0.16),transparent_70%)]" />
      </div>

      <Wordmark className="pointer-events-none absolute right-10 top-1/2 hidden w-[46vw] max-w-[52rem] -translate-y-1/2 text-bone opacity-[0.05] lg:block" />

      <div ref={contentRef} className="container-x relative z-10 pb-24 pt-40 md:pb-28">
        <FadeIn y={12} blur={false} delay={1.8} mode="mount">
          <span className="kicker">
            Construção civil · Gerenciamento de obras · Instalações
          </span>
        </FadeIn>

        <h1 className="mt-6 max-w-6xl">
          <MaskLines
            mode="mount"
            delay={1.9}
            lines={[
              <span key="l1" className="font-display font-semibold">
                Da fundação
              </span>,
              <span key="l2" className="font-display font-semibold">
                à{" "}
                <em className="font-accent font-normal italic text-bone">
                  energização
                </em>
                .
              </span>,
            ]}
            className="block text-[clamp(3rem,8.6vw,8rem)] leading-[0.98] tracking-[-0.03em] text-bone"
          />
        </h1>

        <FadeIn delay={2.4} y={24} mode="mount" className="mt-8 max-w-xl">
          <p className="text-base leading-relaxed text-bone/65 md:text-lg">
            Construtora e gerenciadora de obras com engenharia de instalações
            elétricas e de dados própria. Uma única responsável técnica, do
            primeiro traço à última tomada.
          </p>
        </FadeIn>

        <FadeIn
          delay={2.6}
          y={24}
          mode="mount"
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <button onClick={() => scrollToSection("#servicos")} className="btn btn-accent">
              Conheça os serviços
            </button>
          </Magnetic>
          <Magnetic>
            <button onClick={() => scrollToSection("#contato")} className="btn btn-ghost">
              Solicitar orçamento
            </button>
          </Magnetic>
        </FadeIn>
      </div>

      <motion.div
        className="absolute bottom-10 right-6 z-10 hidden flex-col items-center gap-4 md:flex lg:right-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.1, duration: 1, ease: EASE }}
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-bone/40 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <div className="relative h-20 w-px overflow-hidden bg-bone/15">
          <motion.span
            className="absolute left-0 top-0 h-8 w-px bg-accent-soft"
            animate={{ y: [-32, 80] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
