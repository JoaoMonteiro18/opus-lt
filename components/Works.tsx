"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { EASE, FadeIn } from "@/components/motion/primitives";
import { sectors, type Sector } from "@/lib/content";
import { images } from "@/lib/site";

const PANEL_EASE = "cubic-bezier(0.16,1,0.3,1)";

function PanelMedia({ sector }: { sector: Sector }) {
  return (
    <>
      <Image
        src={images.works[sector.id]}
        alt={`Obras no setor ${sector.name}`}
        fill
        sizes="(max-width: 1024px) 70vw, 40vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/10" />
    </>
  );
}

/** Desktop: painéis lado a lado que expandem no hover. Altura fixa, sem rolagem.
 *  Os painéis são elementos simples de propósito: num `motion` component o
 *  framer-motion reescreve o style imperativamente e anula o flex-grow. */
function Panels() {
  const [active, setActive] = useState(0);

  return (
    <FadeIn y={36} duration={1}>
      <div
        className="hidden h-[30rem] gap-3 lg:flex"
        onMouseLeave={() => setActive(0)}
      >
        {sectors.map((sector, i) => {
          const isActive = active === i;
          return (
            <article
              key={sector.id}
              onMouseEnter={() => setActive(i)}
              onMouseOver={() => setActive(i)}
              onFocus={() => setActive(i)}
              tabIndex={0}
              aria-label={`${sector.name} — ${sector.caption}`}
              className="group relative min-w-0 cursor-pointer overflow-hidden outline-none"
              style={{
                flexGrow: isActive ? 2.6 : 1,
                flexBasis: 0,
                transition: `flex-grow 900ms ${PANEL_EASE}`,
              }}
              data-cursor
            >
              <div
                className="absolute inset-0 transition-transform duration-[1200ms]"
                style={{
                  transform: isActive ? "scale(1.04)" : "scale(1)",
                  transitionTimingFunction: PANEL_EASE,
                }}
              >
                <PanelMedia sector={sector} />
              </div>

              <div
                className="pointer-events-none absolute inset-0 border transition-colors duration-700"
                style={{
                  borderColor: isActive
                    ? "rgba(147,174,143,0.45)"
                    : "rgba(242,240,236,0.1)",
                }}
              />

              <div className="absolute inset-x-6 bottom-6">
                <span
                  className="block text-[10px] font-medium uppercase tracking-[0.3em] text-accent-soft transition-opacity duration-500"
                  style={{ opacity: isActive ? 1 : 0.65 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2.5 whitespace-nowrap font-display text-2xl font-semibold tracking-tight text-bone xl:text-3xl">
                  {sector.name}
                </h3>
                <div
                  className="overflow-hidden transition-all duration-700"
                  style={{
                    maxHeight: isActive ? "8rem" : "0rem",
                    opacity: isActive ? 1 : 0,
                    transitionTimingFunction: PANEL_EASE,
                  }}
                >
                  <p className="mt-1.5 text-xs uppercase tracking-[0.2em] text-bone/50">
                    {sector.caption}
                  </p>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-bone/75">
                    {sector.description}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </FadeIn>
  );
}

/** Mobile e tablet: faixa horizontal com snap, uma banda só em vez de 4 blocos empilhados. */
function Strip() {
  return (
    <div
      tabIndex={0}
      aria-label="Setores atendidos — arraste para o lado"
      className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:-mx-10 md:px-10 lg:hidden"
    >
      {sectors.map((sector, i) => (
        <motion.article
          key={sector.id}
          className="relative h-[22rem] w-[15rem] shrink-0 snap-start overflow-hidden sm:h-[24rem] sm:w-[18rem]"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: EASE, delay: i * 0.07 }}
        >
          <PanelMedia sector={sector} />
          <div className="pointer-events-none absolute inset-0 border border-bone/10" />
          <div className="absolute inset-x-5 bottom-5">
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-accent-soft">
              {sector.caption}
            </span>
            <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-bone">
              {sector.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-bone/70">
              {sector.description}
            </p>
          </div>
        </motion.article>
      ))}
      <span aria-hidden="true" className="w-2 shrink-0" />
    </div>
  );
}

export default function Works() {
  return (
    <section id="atuacao" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            kicker="Atuação"
            lines={[
              "Onde a Opus",
              <span key="p">
                <em className="font-accent italic text-bone">atua</em>.
              </span>,
            ]}
          />
          <FadeIn delay={0.3} y={16} className="pb-2">
            <a
              href="#contato"
              className="link-underline text-sm font-medium uppercase tracking-[0.2em] text-bone/70 hover:text-bone"
            >
              Falar sobre um projeto
            </a>
          </FadeIn>
        </div>

        <div className="mt-12 md:mt-16">
          <Panels />
          <Strip />
        </div>
      </div>
    </section>
  );
}
