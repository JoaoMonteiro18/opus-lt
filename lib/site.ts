/* ═══════════════════════════════════════════════════════════════════
   CONFIGURAÇÃO CENTRAL DO SITE — Opus LT Engenharia
   Edite este arquivo para trocar contatos, textos-chave e imagens.
   Os pontos marcados com  // TODO: substituir  são placeholders.
   ═══════════════════════════════════════════════════════════════════ */

export const site = {
  name: "Opus LT Engenharia",
  shortName: "Opus LT",
  tagline: "Projetos & Instalações",
  description:
    "Soluções completas em instalações elétricas e infraestrutura de dados para empresas que exigem segurança, desempenho e confiabilidade.",
  url: "https://opuslt.com.br", // TODO: substituir pelo domínio real
} as const;

/* ── Contatos ──────────────────────────────────────────────────────── */
export const contact = {
  whatsappDisplay: "(11) 93026-1603",
  whatsappNumber: "5511930261603", // formato internacional, só dígitos
  contactName: "Daniel Schmidt", // responsável pelo atendimento
  // TODO: substituir e-mail (ainda placeholder — não informado)
  email: "contato@opuslt.com.br",
  // TODO: substituir localização (ainda placeholder — não informada)
  location: "São Paulo — SP",
} as const;

/** Monta um link de WhatsApp com mensagem opcional. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${contact.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/* ── Imagens (placeholders Unsplash) ───────────────────────────────────
   TODO: substituir pelas fotos reais das obras.
   Sugestão: salve as fotos em /public/images e troque as URLs por
   caminhos locais, ex.: "/images/hero.jpg".
   ───────────────────────────────────────────────────────────────────── */
export const images = {
  // Disjuntor industrial em quadro elétrico — foto nítida (foco total), vibe de engenharia elétrica.
  // w=3840 (origem 4000x3000) + q=85 para o hero full-bleed ficar nítido em telas grandes/retina.
  hero: "https://images.unsplash.com/photo-1566417110090-6b15a06ec800?auto=format&fit=crop&w=3840&q=85",
  about:
    "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80",
  sectors: {
    corporativo:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    industrial:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=80",
    saude:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80",
    varejo:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
  },
  portfolio: {
    residencial:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    industrial:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80",
    comercial:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
} as const;
