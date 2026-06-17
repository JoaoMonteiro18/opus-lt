"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { services } from "@/lib/content";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

export function Services() {
  return (
    <section id="servicos" className="bg-neutralbg-warm py-24 sm:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="O que fazemos"
          title="Serviços completos, da concepção à entrega"
          description="Soluções técnicas integradas em energia, dados e segurança — dimensionadas para o porte e a operação do seu negócio."
        />

        <motion.div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.id}
                variants={staggerItem}
                className="group flex flex-col rounded-2xl border border-neutralbg-border bg-neutralbg-white p-7 shadow-soft transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-copper-500 hover:shadow-lift"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-copper-50 text-copper-600 transition-colors duration-300 group-hover:bg-copper-500 group-hover:text-white">
                  <Icon size={22} strokeWidth={1.8} />
                </span>

                <h3 className="mt-5 font-display text-xl font-semibold text-charcoal-800">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-500">
                  {service.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-neutralbg-border bg-neutralbg-soft px-3 py-1 text-xs font-medium text-charcoal-600"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
