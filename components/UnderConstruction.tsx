"use client";

import { motion } from "framer-motion";
import { DraftingCompass, ArrowLeft, MessageCircle, Wrench } from "lucide-react";
import { Button } from "./ui/Button";
import { whatsappLink } from "@/lib/site";
import { EASE_SMOOTH } from "@/lib/motion";

type UnderConstructionProps = {
  /** Nome do segmento para contexto (ex.: "Projetos residenciais"). */
  segment: string;
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_SMOOTH } },
};

export function UnderConstruction({ segment }: UnderConstructionProps) {
  const message = `Olá! Tenho interesse nos projetos da Opus LT (categoria: ${segment}).`;

  return (
    <section className="relative overflow-hidden">
      {/* Brilho cobre sutil de fundo */}
      <div
        className="pointer-events-none absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-copper-500/10 blur-3xl"
        aria-hidden="true"
      />

      <motion.div
        className="container-site flex min-h-[78vh] flex-col items-center justify-center py-28 text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Animação elegante: anéis girando (remetem à logo) + ícone blueprint */}
        <motion.div variants={item} className="relative mb-10 h-40 w-40">
          <span
            className="absolute inset-0 rounded-full border-2 border-dashed border-copper-400/50 animate-spin-slow"
            aria-hidden="true"
          />
          <span
            className="absolute inset-5 rounded-full border border-copper-500/40"
            aria-hidden="true"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-copper-50 text-copper-600">
              <DraftingCompass size={34} strokeWidth={1.6} />
            </span>
          </span>
        </motion.div>

        <motion.span variants={item} className="eyebrow">
          <Wrench size={13} />
          {segment}
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-4 font-display text-3xl font-bold tracking-tight text-charcoal-800 sm:text-4xl"
        >
          Portfólio em construção
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 max-w-xl text-base leading-relaxed text-charcoal-500 sm:text-lg"
        >
          Estamos documentando nossos projetos desta categoria para apresentar
          aqui em breve, com fotos, detalhes técnicos e resultados. Enquanto
          isso, fale com a nossa equipe — teremos prazer em apresentar nosso
          trabalho pessoalmente.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href={whatsappLink(message)} size="lg">
            <MessageCircle size={18} />
            Falar no WhatsApp
          </Button>
          <Button href="/#servicos" variant="secondary" size="lg">
            Ver nossos serviços
          </Button>
          <Button href="/portfolio" variant="ghost" size="lg">
            <ArrowLeft size={18} />
            Voltar ao portfólio
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
