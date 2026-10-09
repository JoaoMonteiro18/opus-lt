"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LOGO_VIEWBOX } from "@/components/logo-path";
import { LtPart, OpusPart } from "@/components/Logo";
import { EASE } from "@/components/motion/primitives";

export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    const t = setTimeout(() => {
      setDone(true);
      document.documentElement.style.overflow = "";
    }, 2400);
    return () => {
      clearTimeout(t);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[95] flex flex-col items-center justify-center gap-10 bg-ink"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: EASE }}
          aria-hidden="true"
        >
          <svg
            viewBox={LOGO_VIEWBOX}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[62vw] max-w-[34rem] text-bone"
          >
            {/* "opus" se revela da esquerda para a direita */}
            <motion.g
              initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
              animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.45, ease: [0.45, 0, 0.25, 1], delay: 0.15 }}
            >
              <OpusPart />
            </motion.g>

            {/* o "LT" chega depois, deslizando da direita */}
            <motion.g
              initial={{ opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 1.5 }}
            >
              <LtPart />
            </motion.g>
          </svg>

          <motion.div
            className="h-px w-40 overflow-hidden bg-bone/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="h-full bg-accent-soft"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
