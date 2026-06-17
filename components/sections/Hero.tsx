"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { CountUp } from "../ui/CountUp";
import { images } from "@/lib/site";
import { EASE_SMOOTH } from "@/lib/motion";

type Stat = {
  value: number | string;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 100, suffix: "%", label: "Comprometimento com prazo" },
  { value: "NR-10", label: "Conformidade em segurança" },
  { value: "24/7", label: "Suporte técnico" },
];

// Sequência de entrada encadeada do hero.
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_SMOOTH } },
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden">
      {/* ── Fundo ──────────────────────────────────────────────────────
          Base em gradiente grafite (fallback elegante) + imagem + overlay.
          OPÇÃO FUTURA — vídeo de fundo: troque o <Image> abaixo por:
          <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
      */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900" />
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src={images.hero} // TODO: substituir pela foto real da obra (hero)
          alt="Disjuntor industrial em quadro elétrico"
          fill
          priority
          quality={90}
          sizes="100vw"
          className={`object-cover object-center ${reduceMotion ? "" : "animate-ken-burns"}`}
        />
      </div>
      {/* Overlay para legibilidade do texto */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal-900/90 via-charcoal-900/70 to-charcoal-900/40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent" />

      <div className="container-site w-full pt-28 pb-16">
        <motion.div
          className="max-w-3xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={item} className="eyebrow">
            <span className="metal-rule" aria-hidden="true" />
            Projetos &amp; Instalações
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Energia e dados que <span className="text-copper-500">movem</span> seu
            negócio.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75"
          >
            A Opus LT Engenharia entrega soluções completas em instalações
            elétricas e infraestrutura de dados para empresas que exigem
            segurança, desempenho e confiabilidade em cada conexão.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <Button href="/contato" size="lg">
              Solicitar orçamento
              <ArrowRight size={18} />
            </Button>
            <Button href="/#servicos" variant="light" size="lg">
              Ver serviços
            </Button>
          </motion.div>

          {/* Faixa de stats com count-up */}
          <motion.dl
            variants={item}
            className="mt-14 grid max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/10"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="px-6 py-5">
                <dd className="font-display text-3xl font-bold text-copper-500">
                  {typeof stat.value === "number" ? (
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  ) : (
                    stat.value
                  )}
                </dd>
                <dt className="mt-1 text-sm text-white/65">{stat.label}</dt>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}
