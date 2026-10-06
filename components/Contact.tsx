"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { FadeIn, Magnetic } from "@/components/motion/primitives";
import { contact, whatsappLink } from "@/lib/site";

const INFO = [
  {
    label: "WhatsApp",
    value: `${contact.whatsappDisplay} · ${contact.contactName}`,
    href: whatsappLink("Olá! Vim pelo site da Opus LT e gostaria de um orçamento."),
    external: true,
  },
  {
    label: "E-mail",
    value: contact.email,
    href: `mailto:${contact.email}`,
    external: false,
  },
  {
    label: "Atendimento",
    value: contact.location,
    href: null,
    external: false,
  },
];

function MapPanel() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        title="Mapa — área de atendimento da Opus LT Engenharia, São Paulo"
        src="https://maps.google.com/maps?q=S%C3%A3o%20Paulo%2C%20SP&z=10&output=embed"
        className="absolute inset-0 h-full w-full border-0 grayscale invert-[0.92] contrast-[0.88] sepia-[0.15]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    );
  }

  return (
    <div className="blueprint-grid absolute inset-0 flex flex-col items-center justify-center gap-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(147,174,143,0.1),transparent_70%)]" />
      <div className="relative flex flex-col items-center gap-5 text-center">
        <span className="relative flex size-14 items-center justify-center">
          <span className="absolute inset-0 animate-ping rounded-full bg-accent-soft/15" />
          <svg viewBox="0 0 24 24" fill="none" className="relative h-8 w-8 text-accent-soft">
            <path
              d="M12 21C12 21 19 14.5 19 9.5C19 5.6 15.9 2.5 12 2.5C8.1 2.5 5 5.6 5 9.5C5 14.5 12 21 12 21Z"
              stroke="currentColor"
              strokeWidth="1.3"
            />
            <circle cx="12" cy="9.5" r="2.6" stroke="currentColor" strokeWidth="1.3" />
          </svg>
        </span>
        <div>
          <p className="font-display text-lg font-semibold text-bone">
            São Paulo e Grande SP
          </p>
          <p className="mt-1 text-sm text-smoke">
            Obras atendidas em todo o estado
          </p>
        </div>
        <button onClick={() => setLoaded(true)} className="btn btn-ghost !px-6 !py-3">
          Carregar mapa
        </button>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative scroll-mt-24 overflow-hidden bg-coal py-28 md:py-44"
    >
      <div className="accent-glow pointer-events-none absolute inset-x-0 top-0 h-96" />
      <div className="container-x grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            kicker="Contato"
            lines={[
              "Traga a planta,",
              <span key="c">
                o problema ou só a{" "}
                <em className="font-accent italic text-bone">ideia</em>
              </span>,
              "— a gente dimensiona.",
            ]}
          />

          <div className="mt-12 space-y-1">
            {INFO.map((item, i) => {
              const content = (
                <>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-bone/40">
                    {item.label}
                  </span>
                  <span className="text-base text-bone/80 transition-colors duration-300 group-hover:text-accent-soft md:text-lg">
                    {item.value}
                  </span>
                </>
              );

              return (
                <FadeIn key={item.label} delay={0.1 * i} y={20}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="group flex flex-col gap-1 border-b border-bone/10 py-5 transition-colors duration-500 hover:border-accent-soft/40"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="group flex flex-col gap-1 border-b border-bone/10 py-5">
                      {content}
                    </div>
                  )}
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.5} y={24} className="mt-12 flex flex-wrap gap-4">
            <Magnetic>
              <a
                href={whatsappLink(
                  "Olá! Vim pelo site da Opus LT e gostaria de um orçamento."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
              >
                Chamar no WhatsApp
              </a>
            </Magnetic>
            <Magnetic>
              <a href={`mailto:${contact.email}`} className="btn btn-ghost">
                Enviar e-mail
              </a>
            </Magnetic>
          </FadeIn>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <FadeIn x={40} y={0} duration={1.3} className="h-full">
            <div className="relative h-full min-h-[420px] overflow-hidden border border-bone/10 bg-ink">
              <MapPanel />
              <div className="pointer-events-none absolute inset-0 border border-accent-soft/15" />
            </div>
            <p className="mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-smoke">
              <span className="h-px w-6 bg-accent-soft/60" />
              Visita técnica sem compromisso
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
