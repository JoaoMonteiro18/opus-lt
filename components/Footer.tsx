import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { contact, whatsappLink } from "@/lib/site";

const navColumns = [
  {
    title: "Navegação",
    links: [
      { label: "Sobre", href: "/#sobre" },
      { label: "Serviços", href: "/#servicos" },
      { label: "Diferenciais", href: "/#diferenciais" },
      { label: "Setores", href: "/#setores" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Portfólio", href: "/portfolio" },
      { label: "Contato", href: "/contato" },
      { label: "Solicitar orçamento", href: "/contato" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Marca + frase */}
        <div className="lg:col-span-2">
          <Logo tone="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
            Energia e dados que movem o seu negócio. Instalações elétricas e
            infraestrutura de dados com segurança, conformidade e suporte
            contínuo.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-white/70">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 transition-colors hover:text-copper-400"
              >
                <Phone size={16} className="text-copper-500" />
                {contact.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2.5 transition-colors hover:text-copper-400"
              >
                <Mail size={16} className="text-copper-500" />
                {contact.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2.5">
              <MapPin size={16} className="text-copper-500" />
              {contact.location}
            </li>
          </ul>
        </div>

        {/* Colunas de links */}
        {navColumns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white/80">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-copper-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>© 2025 Opus LT Engenharia. Todos os direitos reservados.</p>
          <p>Instalações elétricas · Infraestrutura de dados</p>
        </div>
      </div>
    </footer>
  );
}
