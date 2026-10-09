export const site = {
  name: "Opus LT Engenharia",
  shortName: "Opus LT",
  tagline: "Construção · Gerenciamento · Instalações",
  description:
    "Construtora e gerenciadora de obras com engenharia de instalações elétricas e infraestrutura de dados própria. Da fundação à energização, uma só responsável.",
  url: "https://opuslt.com.br",
} as const;

export const contact = {
  whatsappDisplay: "(11) 93026-1603",
  whatsappNumber: "5511930261603",
  contactName: "Daniel Schmidt",
  email: "contato@opuslt.com.br",
  location: "Av. Nove de Julho · São Paulo — SP",
} as const;

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${contact.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const mapQuery = "Av. Nove de Julho, São Paulo, SP";

export const images = {
  hero: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop",
  about:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1800&auto=format&fit=crop",
  works: {
    residencial:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2400&auto=format&fit=crop",
    industrial:
      "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?q=80&w=1600&auto=format&fit=crop",
    saude:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop",
    restaurantes:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2400&auto=format&fit=crop",
  },
  projects: {
    verticeJardins:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop",
    aureaFariaLima:
      "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1600&auto=format&fit=crop",
    origemPinheiros:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
    lilu: "/obras/lilu.jpg",
  },
} as const;
