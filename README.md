# Opus LT Engenharia — Site Institucional

Site institucional da **Opus LT Engenharia**, especializada em instalações
elétricas e infraestrutura de dados/cabeamento estruturado.

Construído com **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**,
**Framer Motion** e **lucide-react**. Pronto para deploy na **Vercel**.

---

## 🚀 Como rodar

Pré-requisitos: **Node.js 18.18+** (recomendado 20+) e npm.

```bash
# 1. Instalar dependências
npm install

# 2. Ambiente de desenvolvimento (http://localhost:3000)
npm run dev

# 3. Build de produção
npm run build
npm run start
```

### Deploy na Vercel
1. Suba o repositório para o GitHub.
2. Em [vercel.com](https://vercel.com), importe o projeto — a Vercel detecta o
   Next.js automaticamente. Sem configuração extra.

---

## 📁 Estrutura de pastas

```
.
├── app/                      # Rotas (App Router)
│   ├── layout.tsx            # Layout raiz: fonts, navbar, footer, metadata/SEO
│   ├── template.tsx          # Transição (fade) entre páginas
│   ├── page.tsx              # Home
│   ├── globals.css           # Estilos base + tokens + prefers-reduced-motion
│   ├── not-found.tsx         # Página 404
│   ├── sitemap.ts / robots.ts# SEO
│   ├── portfolio/
│   │   ├── page.tsx          # Lista de categorias
│   │   ├── residencial/      # Tela "em desenvolvimento"
│   │   ├── industrial/       # Tela "em desenvolvimento"
│   │   └── comercial/        # Tela "em desenvolvimento"
│   └── contato/page.tsx      # Página de contato (formulário + dados)
│
├── components/
│   ├── Logo.tsx              # ⭐ Logo isolada (trocar por /public/logo.png)
│   ├── Navbar.tsx            # Navbar fixa, scroll-state, menu mobile
│   ├── Footer.tsx
│   ├── WhatsAppButton.tsx    # Botão flutuante (todas as páginas)
│   ├── ContactForm.tsx       # Formulário (abre WhatsApp preenchido)
│   ├── PortfolioCard.tsx
│   ├── UnderConstruction.tsx # Tela "em desenvolvimento" reutilizável
│   ├── sections/             # Seções da home (Hero, About, Services, etc.)
│   └── ui/                   # Primitivos (Button, Reveal, CountUp, ...)
│
└── lib/
    ├── site.ts               # ⭐ Contatos, URLs e imagens (placeholders)
    ├── content.ts            # ⭐ Textos: serviços, diferenciais, setores
    ├── motion.ts             # Variantes de animação (Framer Motion)
    └── utils.ts
```

---

## ✅ Checklist — o que você precisa trocar

Os pontos editáveis estão marcados no código com `// TODO: substituir`.

- [ ] **Logo** — adicione `public/logo.png` e descomente o bloco `<Image>` em
      [`components/Logo.tsx`](components/Logo.tsx). O placeholder atual é um anel
      SVG + wordmark "OPUS LT".
- [ ] **Contatos** — em [`lib/site.ts`](lib/site.ts):
  - `whatsappNumber` (formato internacional, ex.: `5511999999999`)
  - `whatsappDisplay`, `email`, `location`
  - `url` (domínio real, usado em SEO/sitemap)
- [ ] **Imagens** — em [`lib/site.ts`](lib/site.ts), troque as URLs do Unsplash
      pelas fotos reais das obras (sugestão: salve em `public/images/` e use
      caminhos locais, ex.: `/images/hero.jpg`).
- [ ] **Textos** — ajuste serviços, diferenciais e setores em
      [`lib/content.ts`](lib/content.ts) (ex.: o selo "+5 anos" em
      [`components/sections/About.tsx`](components/sections/About.tsx)).
- [ ] **Formulário** — hoje o envio abre o WhatsApp com os dados preenchidos.
      Para receber por e-mail, plugue um endpoint (Resend/Formspree) em
      [`components/ContactForm.tsx`](components/ContactForm.tsx) (há comentário
      indicando onde). Há também a alternativa `mailto:`.
- [ ] **Vídeo no hero (opcional)** — em
      [`components/sections/Hero.tsx`](components/sections/Hero.tsx) há um bloco
      `<video>` comentado pronto para uso (`public/videos/hero.mp4`).

---

## 🎨 Identidade visual

Tokens definidos em [`tailwind.config.ts`](tailwind.config.ts):

| Token        | Uso                                             |
|--------------|-------------------------------------------------|
| `charcoal.*` | Grafite/gunmetal — texto e seções escuras       |
| `copper.*`   | Cobre/rosé gold — **acento** (use com restrição)|
| `neutralbg.*`| Fundos branco / off-white quente / bordas       |

Tipografia: **Sora** (títulos) + **Inter** (corpo), via `next/font`.

---

## ♿ Acessibilidade & performance

- Respeita `prefers-reduced-motion` (animações reduzidas/desligadas).
- HTML semântico, `alt` em imagens, `aria-label` em botões de ícone, foco visível.
- Imagens via `next/image` (lazy, exceto o hero), fonts via `next/font`.
- Responsivo (mobile-first), de 360px a desktop.

---

© 2025 Opus LT Engenharia.
