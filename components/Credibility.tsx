"use client";

import SectionHeading from "@/components/SectionHeading";
import { FadeIn } from "@/components/motion/primitives";
import { marqueeItems } from "@/lib/content";
import { whatsappLink } from "@/lib/site";

const HIGHLIGHTS = [
  { value: "CREA-SP", label: "responsabilidade técnica registrada, com ART por obra" },
  { value: "NR-10 / 35", label: "equipe própria certificada e reciclagem em dia" },
  { value: "Zero", label: "acidentes com afastamento no histórico da empresa" },
];


export default function Credibility() {
  return (
    <section
      id="credibilidade"
      className="relative scroll-mt-24 overflow-hidden py-28 md:py-44"
    >
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              kicker="Credibilidade"
              lines={[
                "Confiança que",
                <span key="i">
                  se{" "}
                  <em className="font-accent italic text-bone">
                    documenta
                  </em>
                  .
                </span>,
              ]}
              description="Em obra, palavra boa não substitui papel assinado. Tudo o que a Opus LT entrega vem com registro, laudo e rastreabilidade."
            />

            <div className="mt-12 space-y-8">
              {HIGHLIGHTS.map((item, i) => (
                <FadeIn key={item.value} delay={0.15 * i} x={-28} y={0}>
                  <div className="flex flex-col gap-2 border-b border-bone/10 pb-6 sm:flex-row sm:items-baseline sm:gap-6">
                    <span className="min-w-[9rem] font-display text-2xl font-semibold tracking-tight text-accent-soft md:text-3xl">
                      {item.value}
                    </span>
                    <span className="text-sm leading-relaxed text-smoke">
                      {item.label}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <FadeIn x={40} y={0} duration={1.3}>
              <div className="relative border border-bone/10 bg-gradient-to-b from-bone/[0.04] to-transparent p-9 md:p-12">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(147,174,143,0.09),transparent_70%)]" />
                <span className="kicker">O que vai junto com a obra</span>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-bone md:text-3xl">
                  A entrega não termina na chave — termina com tudo
                  documentado.
                </h3>
                <p className="mt-6 max-w-md leading-relaxed text-smoke">
                  Toda obra sai com a planta atualizada do que foi realmente
                  executado, memorial descritivo, laudos, certificação de rede e
                  a ART correspondente. É o que permite conferir a execução anos
                  depois — e o que a maioria não entrega.
                </p>
                <a
                  href={whatsappLink(
                    "Olá! Gostaria de conversar sobre um projeto com a Opus LT."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent mt-10"
                >
                  Conversar com a engenharia
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <FadeIn y={20} className="mt-20 md:mt-28">
        <div className="relative overflow-hidden border-y border-bone/10 py-7 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-marquee flex w-max items-center">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex items-center gap-12 pr-12 font-display text-lg font-medium tracking-[-0.01em] text-bone/35 md:text-xl"
              >
                {item}
                <span className="size-1.5 shrink-0 rotate-45 bg-accent-soft/50" />
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
