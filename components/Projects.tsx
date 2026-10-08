"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { EASE, FadeIn } from "@/components/motion/primitives";
import { projects, type Project, type ProjectStatus } from "@/lib/content";
import { images } from "@/lib/site";

/** Entregue ganha o verde da marca; as demais ficam neutras. */
const STATUS_STYLE: Record<ProjectStatus, string> = {
  Entregue: "border-accent-soft/60 bg-accent/70 text-bone",
  "Em obra": "border-bone/35 bg-ink/50 text-bone",
  "Em projeto": "border-bone/20 bg-ink/50 text-bone/70",
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      className={`group relative overflow-hidden ${
        project.wide
          ? "aspect-[16/10] md:col-span-2 md:aspect-[21/9]"
          : "aspect-[4/5]"
      }`}
      initial={{ clipPath: "inset(6% 3% 6% 3%)", opacity: 0.35 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 1.2, ease: EASE }}
      data-cursor
    >
      <Image
        src={images.projects[project.id]}
        alt={`Obra ${project.name}`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/5" />
      <div className="pointer-events-none absolute inset-0 border border-bone/10 transition-colors duration-500 group-hover:border-accent-soft/40" />

      <div className="absolute left-6 top-6 md:left-8 md:top-8">
        <span
          className={`border px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.25em] backdrop-blur-md ${
            STATUS_STYLE[project.status]
          }`}
        >
          {project.status}
        </span>
      </div>

      <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4 md:inset-x-8 md:bottom-8">
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-bone/50">
            {project.segment}
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-bone md:text-3xl lg:text-4xl">
            {project.name}
          </h3>
          <p className="mt-2 text-sm text-bone/60">{project.location}</p>
        </div>
        <div className="mb-1 flex size-12 shrink-0 items-center justify-center rounded-full border border-bone/25 opacity-0 transition-all duration-500 group-hover:border-accent-soft group-hover:bg-accent-soft/10 group-hover:opacity-100 md:size-14">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5 -rotate-45 text-bone transition-transform duration-500 group-hover:rotate-0 group-hover:text-accent-soft"
          >
            <path d="M4 12H20M20 12L13 5M20 12L13 19" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="obras" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            kicker="Obras"
            lines={[
              "Alguns dos nossos",
              <span key="p">
                <em className="font-accent italic text-bone">trabalhos</em>.
              </span>,
            ]}
          />
          <FadeIn delay={0.3} y={16} className="pb-2">
            <a
              href="#contato"
              className="link-underline text-sm font-medium uppercase tracking-[0.2em] text-bone/70 hover:text-bone"
            >
              Solicitar portfólio
            </a>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
