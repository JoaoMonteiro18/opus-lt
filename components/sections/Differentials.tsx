"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { differentials } from "@/lib/content";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="relative overflow-hidden bg-charcoal-900 py-24 text-white sm:py-28"
    >
      {/* Brilho cobre sutil no fundo */}
      <div
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-copper-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-site relative">
        <SectionHeading
          eyebrow="Por que a Opus LT"
          title="Diferenciais que sustentam cada projeto"
          description="Rigor técnico, transparência e suporte contínuo — do primeiro contato ao pós-entrega."
          inverted
        />

        <motion.div
          className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {differentials.map((d) => (
            <motion.div key={d.number} variants={staggerItem} className="group">
              <div className="flex items-baseline gap-4">
                <span className="bg-copper-metal bg-clip-text font-display text-4xl font-bold text-transparent">
                  {d.number}
                </span>
                <span className="h-px flex-1 bg-white/10 transition-colors duration-300 group-hover:bg-copper-500/50" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                {d.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {d.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
