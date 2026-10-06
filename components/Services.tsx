"use client";

import SectionHeading from "@/components/SectionHeading";
import { FadeIn } from "@/components/motion/primitives";
import { serviceGroups, type Service } from "@/lib/content";

function ServiceRow({ service, index }: { service: Service; index: number }) {
  return (
    <FadeIn
      delay={0.06 * index}
      y={28}
      className="group relative border-t border-bone/10 last:border-b"
    >
      <div
        id={service.id}
        className="scroll-mt-32 py-9 transition-colors duration-500 md:py-11"
      >
        <span
          className="pointer-events-none absolute left-0 top-0 h-px w-0 bg-accent-soft transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"
          aria-hidden="true"
        />

        <div className="grid gap-5 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <div className="flex items-start gap-4">
              <span className="mt-1.5 font-display text-xs font-semibold tracking-[0.2em] text-accent-soft/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight text-bone transition-colors duration-500 group-hover:text-accent-soft md:text-[1.75rem]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-accent-soft/80">{service.short}</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 md:pl-4">
            <p className="max-w-xl text-sm leading-relaxed text-smoke md:text-[15px]">
              {service.description}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-bone/12 px-3.5 py-1.5 text-[11px] tracking-wide text-bone/55 transition-colors duration-500 group-hover:border-accent-soft/30 group-hover:text-bone/75"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Services() {
  return (
    <section id="servicos" className="relative scroll-mt-24 py-28 md:py-40">
      <div className="accent-glow pointer-events-none absolute inset-x-0 top-0 h-96" />
      <div className="container-x">
        <SectionHeading
          kicker="Serviços"
          lines={[
            <span key="s">
              Duas frentes, uma{" "}
              <em className="font-accent italic text-bone">
                responsável
              </em>
              .
            </span>,
          ]}
          description="A obra civil e a engenharia de instalações que dá vida a ela, sob o mesmo CREA. É o que evita o vazio entre fornecedores — onde quase todo atraso nasce."
        />

        <div className="mt-16 space-y-20 md:mt-24 md:space-y-28">
          {serviceGroups.map((group, gi) => (
            <div key={group.id} className="grid gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-3">
                <div className="lg:sticky lg:top-32">
                  <FadeIn y={20}>
                    <span className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-soft">
                      <span className="h-px w-8 bg-accent-soft/50" />
                      0{gi + 1}
                    </span>
                    <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-tight text-bone md:text-3xl">
                      {group.label}
                    </h3>
                    <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-smoke">
                      {group.caption}
                    </p>
                  </FadeIn>
                </div>
              </div>

              <div className="lg:col-span-9">
                {group.services.map((service, si) => (
                  <ServiceRow key={service.id} service={service} index={si} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
