"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { PortfolioCard } from "../PortfolioCard";
import { portfolioCategories } from "@/lib/content";
import { images } from "@/lib/site";
import { staggerContainer, viewportOnce } from "@/lib/motion";

const categoryImage: Record<string, string> = {
  residencial: images.portfolio.residencial,
  industrial: images.portfolio.industrial,
  comercial: images.portfolio.comercial,
};

export function PortfolioGrid() {
  return (
    <section className="bg-neutralbg-white py-20 sm:py-24">
      <div className="container-site">
        <SectionHeading
          eyebrow="Nosso trabalho"
          title="Portfólio por segmento"
          description="Selecione um segmento para conhecer os projetos. Estamos documentando cada categoria com fotos e detalhes técnicos."
          align="center"
        />

        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {portfolioCategories.map((cat) => (
            <PortfolioCard
              key={cat.slug}
              name={cat.name}
              href={`/portfolio/${cat.slug}`}
              image={categoryImage[cat.slug]}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
