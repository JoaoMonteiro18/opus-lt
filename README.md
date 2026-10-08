# Opus — Site Institucional

Site institucional da Opus Engenharia: construtora, gerenciadora de obras e engenharia de instalações elétricas e de dados. Dark theme, animações de scroll de alto nível e um mega-menu de serviços cobrindo as duas frentes da empresa.

Construído sobre a base do projeto X.INC (mesma arquitetura e vocabulário de animação), com identidade, conteúdo e estrutura próprios.

## Stack

- **Next.js 15** (App Router, 100% estático)
- **React 19 + TypeScript**
- **Tailwind CSS v4** (tokens via `@theme` no CSS, sem `tailwind.config`)
- **GSAP + ScrollTrigger** — parallax do hero e das imagens
- **Lenis** — smooth scroll
- **Framer Motion** — micro animações, máscaras de texto, mega-menu

## Rodando

```bash
npm install
npm run dev      # http://localhost:3020
npm run build    # build de produção
npm start        # serve o build
```

> Não rode `npm run build` com o `npm run dev` ativo na mesma pasta: o build sobrescreve o `.next` do servidor de desenvolvimento e ele passa a dar erro. Pare o dev antes, ou apague `.next` depois.

## Identidade visual (em transição)

A marca está sendo redesenhada. Tudo foi tokenizado para a troca ser barata:

**Paleta** — `app/globals.css`, bloco `@theme`. O verde da marca é `--color-accent` (#374335). Como ele é escuro demais para texto sobre o fundo quase-preto (contraste 1,9:1), vale só para preenchimentos sólidos — botão primário, ícone do WhatsApp. Textos finos, filetes, bordas e hover usam `--color-accent-soft` (#93AE8F), o mesmo verde clareado na mesma matiz (111°), com 8:1 de contraste. Para trocar o verde, altere os dois mantendo a matiz. Nenhum componente tem cor fixa no código.

**Logo** — `components/Logo.tsx`. O wordmark é um SVG inline que herda a cor via `currentColor`, então ele se adapta sozinho ao acento e ao fundo:

- `<Wordmark />` — só a marca, usada também como marca-d'água gigante no hero e no rodapé.
- `<Logo />` — o lockup "opus | ENGENHARIA" do cabeçalho.

O path vem de `components/logo-path.ts` (gerado a partir do SVG original). Para trocar a logo, substitua o `d` desse arquivo e o `viewBox`, mais `public/logo.svg` e `app/icon.svg` (favicon).

**Nome** — o wordmark novo traz só "opus". Os textos do site ainda dizem "Opus LT" (nome atual da empresa). Se a marca passar a ser apenas "Opus", é um find-replace em `lib/site.ts`, `lib/content.ts` e nos componentes.

## Estrutura

```
app/
  layout.tsx        # fontes, SEO, JSON-LD, smooth scroll, cursor, ruído
  page.tsx          # composição das seções
  globals.css       # tokens da paleta, utilitários, noise, blueprint grid
  icon.svg          # favicon
lib/
  site.ts           # nome, contatos, WhatsApp, imagens
  content.ts        # serviços, pilares, números, processo, setores
components/
  Navbar.tsx        # navbar inteligente + mega-menu de serviços
  Hero.tsx  About.tsx  Works.tsx  Pillars.tsx  Services.tsx
  Projects.tsx  Marquee.tsx  Contact.tsx  Footer.tsx
  Logo.tsx  logo-path.ts  Preloader.tsx  Cursor.tsx
  SmoothScroll.tsx  SectionHeading.tsx  WhatsAppButton.tsx
  motion/primitives.tsx  # FadeIn, MaskLines, Magnetic, TiltCard
```

## Conteúdo

Os serviços ficam em `lib/content.ts`, divididos em dois grupos que alimentam ao mesmo tempo o mega-menu, a seção de serviços e o rodapé — adicionar ou remover um serviço em um lugar atualiza os três.

| Construção & Obras | Instalações & Tecnologia |
| --- | --- |
| Construção Civil | Instalações Elétricas |
| Gerenciamento de Obras | Infraestrutura de Dados |
| Retrofit e Reformas Corporativas | Redes Wi-Fi e CFTV |
| Projetos e Consultoria | Manutenção Preventiva |

**Reais:** WhatsApp (11) 93026-1603 (Daniel Schmidt), atendimento em São Paulo, e todo o escopo técnico das instalações elétricas e de dados (herdado do site anterior). Setores atendidos: corporativo, industrial, saúde e restaurantes.

**Placeholders a substituir:** e-mail `contato@opuslt.com.br`, domínio `opuslt.com.br`, e sobretudo as obras da seção Obras (`projects` em `lib/content.ts` e `images.projects` em `lib/site.ts`) — hoje são nomes e fotos de exemplo, com status Entregue / Em obra / Em projeto. Todas as imagens vêm do Unsplash via `next/image`.
