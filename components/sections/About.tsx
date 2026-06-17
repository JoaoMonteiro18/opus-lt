"use client";

import Image from "next/image";
import { Check, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "../ui/Reveal";
import { aboutChecklist } from "@/lib/content";
import { images } from "@/lib/site";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

export function About() {
  return (
    <section id="sobre" className="bg-neutralbg-white py-24 sm:py-28">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Texto */}
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="eyebrow">Sobre a empresa</span>
              <span className="metal-rule" aria-hidden="true" />
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-charcoal-800 sm:text-4xl">
              Expertise técnica com responsabilidade
            </h2>
            <p className="mt-5 text-base leading-relaxed text-charcoal-500 sm:text-lg">
              A Opus LT Engenharia nasceu para entregar excelência em instalações
              elétricas e infraestrutura de dados. Atuamos com equipe
              especializada, seguindo rigorosamente as normas técnicas vigentes
              (ABNT NBR 5410, NR-10, NBR 14565), garantindo segurança e qualidade
              em cada projeto — do diagnóstico à entrega final.
            </p>
          </Reveal>

          <motion.ul
            className="mt-8 space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {aboutChecklist.map((item) => (
              <motion.li
                key={item}
                variants={staggerItem}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper-50 text-copper-600">
                  <Check size={15} strokeWidth={2.5} />
                </span>
                <span className="text-charcoal-700">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Imagem + selo */}
        <Reveal delay={0.1} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-lift">
            <Image
              src={images.about} // TODO: substituir pela foto real (engenheiro/painel)
              alt="Engenheiro trabalhando em painel elétrico"
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          {/* Selo de credibilidade — ajustável */}
          <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl border border-neutralbg-border bg-neutralbg-white p-5 shadow-soft">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-copper-50 text-copper-600">
              <BadgeCheck size={26} strokeWidth={1.7} />
            </span>
            <div>
              <p className="font-display text-base font-bold leading-tight text-charcoal-800">
                Equipe certificada
              </p>
              <p className="mt-0.5 text-sm font-medium text-charcoal-500">
                Normas NBR 5410 &amp; NR-10
              </p>
            </div>
          </div>
          {/* Anel decorativo metálico */}
          <div
            className="absolute -right-5 -top-5 h-20 w-20 rounded-full border-2 border-copper-400/60"
            aria-hidden="true"
          />
        </Reveal>
      </div>
    </section>
  );
}
