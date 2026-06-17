"use client";

import { motion } from "framer-motion";
import { EASE_SMOOTH } from "@/lib/motion";

/**
 * Template re-renderiza a cada navegação — usado para a transição
 * suave (fade) entre páginas do App Router.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: EASE_SMOOTH }}
    >
      {children}
    </motion.div>
  );
}
