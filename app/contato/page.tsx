import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { contact, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Opus LT Engenharia. Solicite um orçamento para instalações elétricas e infraestrutura de dados.",
};

const infoItems = [
  {
    icon: Phone,
    label: "WhatsApp / Telefone",
    value: contact.whatsappDisplay,
    href: whatsappLink("Olá! Gostaria de mais informações."),
  },
  {
    icon: Mail,
    label: "E-mail",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: MapPin,
    label: "Localização",
    value: contact.location,
  },
  {
    icon: Clock,
    label: "Atendimento",
    value: "Seg. a Sex., 8h às 18h",
  },
];

export default function ContatoPage() {
  return (
    <div className="bg-neutralbg-warm pt-[4.5rem]">
      <div className="container-site py-20 sm:py-24">
        {/* Cabeçalho */}
        <Reveal className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="eyebrow">Contato</span>
            <span className="metal-rule" aria-hidden="true" />
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-charcoal-800 sm:text-5xl">
            Vamos conversar sobre o seu projeto
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-charcoal-500">
            Preencha o formulário ou fale direto pelos nossos canais. Retornamos
            com um diagnóstico técnico e um cronograma claro.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          {/* Coluna de informações */}
          <Reveal className="space-y-4">
            {infoItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-start gap-4 rounded-2xl border border-neutralbg-border bg-neutralbg-white p-5 transition-colors duration-300 hover:border-copper-400">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-copper-50 text-copper-600">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-charcoal-500">
                      {item.label}
                    </p>
                    <p className="mt-1 font-medium text-charcoal-800">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </Reveal>

          {/* Formulário */}
          <Reveal delay={0.1} className="rounded-3xl border border-neutralbg-border bg-neutralbg-white p-7 shadow-soft sm:p-9">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
