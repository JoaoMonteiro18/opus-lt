"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_SMOOTH, viewportOnce } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  /** Atraso de entrada (s) — útil para encadear elementos. */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
};

// Variante com delay via `custom` para que o delay não seja sobrescrito.
const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_SMOOTH, delay },
  }),
};

/**
 * Reveal no scroll: fade-in + leve translateY, anima uma única vez.
 * Respeita prefers-reduced-motion automaticamente (Framer Motion).
 */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
