"use client";

import { Logo, Wordmark } from "@/components/Logo";
import { FadeIn } from "@/components/motion/primitives";
import { contact, site, whatsappLink } from "@/lib/site";
import { allServices } from "@/lib/content";

const NAV = [
  { label: "Sobre", href: "#sobre" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Serviços", href: "#servicos" },
  { label: "Obras", href: "#obras" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  const goTo = (href: string) => {
    const target = document.querySelector(href);
    if (target && window.__lenis) {
      window.__lenis.scrollTo(target as HTMLElement, { duration: 1.6 });
    } else {
      target?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-bone/10">
      <Wordmark className="pointer-events-none absolute -bottom-14 right-8 w-[34rem] max-w-[62%] text-bone opacity-[0.04]" />

      <div className="container-x py-16 md:py-24">
        <FadeIn y={24}>
          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-start">
            <div className="max-w-sm">
              <Logo markClassName="h-11 w-auto" />
              <p className="mt-6 text-sm leading-relaxed text-smoke">
                {site.description}
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm text-accent-soft transition-colors hover:text-accent-soft"
              >
                {contact.whatsappDisplay}
                <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 -rotate-45">
                  <path d="M4 12H20M20 12L13 5M20 12L13 19" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </a>
            </div>

            <div className="flex flex-wrap gap-12 lg:gap-20">
              <nav aria-label="Rodapé">
                <p className="text-[10px] uppercase tracking-[0.3em] text-bone/40">
                  Navegação
                </p>
                <ul className="mt-5 space-y-3">
                  {NAV.map((link) => (
                    <li key={link.href}>
                      <button
                        onClick={() => goTo(link.href)}
                        className="text-sm text-bone/70 transition-colors duration-300 hover:text-accent-soft"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-bone/40">
                  Serviços
                </p>
                <ul className="mt-5 space-y-3">
                  {allServices.map((service) => (
                    <li key={service.id}>
                      <button
                        onClick={() => goTo(`#${service.id}`)}
                        className="text-left text-sm text-bone/70 transition-colors duration-300 hover:text-accent-soft"
                      >
                        {service.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-bone/40">
                  Atendimento
                </p>
                <p className="mt-5 max-w-[220px] text-sm leading-relaxed text-bone/70">
                  {contact.location}
                  <br />
                  Obras em todo o estado
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-3 inline-block text-sm text-bone/70 transition-colors hover:text-accent-soft"
                >
                  {contact.email}
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="mt-16 flex flex-col gap-4 border-t border-bone/10 pt-8 text-xs text-bone/35 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. Todos os direitos reservados.</p>
          <p>Responsabilidade técnica registrada no CREA-SP</p>
        </div>
      </div>
    </footer>
  );
}
