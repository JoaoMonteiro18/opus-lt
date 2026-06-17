/* ═══════════════════════════════════════════════════════════════════
   VARIANTES DE ANIMAÇÃO (Framer Motion)
   Curvas sóbrias, ease-out expressivo — sem bounce/quicada.
   Durações entre 0.5s e 0.8s. Menos é mais.
   ═══════════════════════════════════════════════════════════════════ */

import type { Variants } from "framer-motion";

// Ease-out expressivo (cubic-bezier 0.22, 1, 0.36, 1)
export const EASE_SMOOTH = [0.22, 1, 0.36, 1] as const;

/** Reveal padrão: fade-in + leve translateY. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_SMOOTH },
  },
};

/** Container para stagger suave entre filhos. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

/** Item dentro de um grupo com stagger. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_SMOOTH },
  },
};

/** Viewport padrão para whileInView (anima uma única vez). */
export const viewportOnce = { once: true, amount: 0.2 } as const;
