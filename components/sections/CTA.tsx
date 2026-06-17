"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { whatsappLink } from "@/lib/site";

const ctaMessage =
  "Olá! Gostaria de solicitar um orçamento com a Opus LT Engenharia.";

export function CTA() {
  return (
    <section className="bg-neutralbg-warm py-20 sm:py-24">
      <div className="container-site">
        <Reveal className="relative overflow-hidden rounded-3xl bg-charcoal-900 px-8 py-16 text-center sm:px-16">
          {/* Detalhes metálicos de fundo */}
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-copper-500/15 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-copper-500/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-2xl">
            <span className="eyebrow justify-center">Vamos conversar</span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              Pronto para um projeto seguro, eficiente e dentro do prazo?
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Fale com nossa equipe e receba um diagnóstico técnico para o seu
              ambiente. Resposta rápida e cronograma claro desde a proposta.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button href="/contato" size="lg">
                Solicitar orçamento
                <ArrowRight size={18} />
              </Button>
              <Button href={whatsappLink(ctaMessage)} variant="light" size="lg">
                <MessageCircle size={18} />
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
