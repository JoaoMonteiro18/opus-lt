"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { sectors } from "@/lib/content";
import { images } from "@/lib/site";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

// Mapeia cada setor à sua imagem (placeholders em lib/site.ts).
const sectorImage: Record<string, string> = {
  corporativo: images.sectors.corporativo,
  industrial: images.sectors.industrial,
  saude: images.sectors.saude,
  varejo: images.sectors.varejo,
};

export function Sectors() {
  return (
    <section id="setores" className="bg-neutralbg-white py-24 sm:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Onde atuamos"
          title="Setores atendidos"
          description="Experiência adaptada à realidade de cada ambiente, com soluções sob medida."
        />

        <motion.div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {sectors.map((sector) => (
            <motion.article
              key={sector.id}
              variants={staggerItem}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
            >
              <Image
                src={sectorImage[sector.id]} // TODO: substituir pela foto real do setor
                alt={`${sector.name} — ${sector.caption}`}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw"
                className="object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
              />
              {/* Gradiente para legibilidade */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/85 via-charcoal-900/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-lg font-semibold text-white">
                  {sector.name}
                </h3>
                <p className="mt-0.5 text-sm text-white/70">{sector.caption}</p>
                <span className="mt-3 block h-0.5 w-8 rounded-full bg-copper-metal transition-all duration-300 ease-smooth group-hover:w-14" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
