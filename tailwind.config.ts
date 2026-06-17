import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ─────────────────────────────────────────────────────────────
        // TOKENS DA MARCA — extraídos da logo Opus LT.
        // Para reajustar a identidade, altere apenas estes valores.
        // ─────────────────────────────────────────────────────────────

        // Grafite / gunmetal (texto, seções escuras)
        charcoal: {
          900: "#1E2730", // footer, base do hero escuro
          800: "#2B3742", // texto principal, seções escuras (cor do texto da logo)
          600: "#475461", // texto secundário escuro
          500: "#6E7A85", // texto auxiliar / muted
        },
        // Cobre / rosé gold — COR DE ACENTO (assinatura da marca)
        copper: {
          600: "#A56A52", // hover / estados ativos
          500: "#C08A72", // acento principal
          400: "#D2A48F",
          200: "#EBD7CC", // tints de fundo
          50: "#F7EFEA", // tint muito suave
        },
        // Neutros / fundo
        neutralbg: {
          white: "#FFFFFF", // fundo principal
          warm: "#FAF7F4", // seções alternadas
          soft: "#F2EFEB",
          border: "#E9E3DD", // bordas
        },
      },
      fontFamily: {
        // Configuradas via next/font em app/layout.tsx
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        // Toque metálico premium — usar SOMENTE em detalhes pequenos.
        "copper-metal": "linear-gradient(135deg, #D2A48F, #A56A52)",
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(30, 39, 48, 0.04), 0 8px 24px rgba(30, 39, 48, 0.06)",
        lift: "0 18px 40px -12px rgba(30, 39, 48, 0.18)",
      },
      transitionTimingFunction: {
        // Ease-out expressivo, sóbrio (sem bounce).
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "ken-burns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "ken-burns": "ken-burns 22s ease-out forwards",
        "spin-slow": "spin-slow 14s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
