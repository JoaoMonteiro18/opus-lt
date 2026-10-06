"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/components/motion/primitives";
import { contact, whatsappLink } from "@/lib/site";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappLink(
            "Olá! Vim pelo site da Opus LT e gostaria de falar sobre um projeto."
          )}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Falar com ${contact.contactName} no WhatsApp`}
          className="group fixed bottom-6 right-6 z-[80] flex items-center gap-0 overflow-hidden rounded-full border border-accent-soft/40 bg-ink/85 py-3 pl-3 pr-3 backdrop-blur-xl transition-[gap,padding,border-color] duration-500 hover:gap-3 hover:border-accent-soft hover:pr-6 md:bottom-8 md:right-8"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <span className="relative flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-bone">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.07-.12-.27-.2-.57-.35Z" />
              <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.93L2.1 22l5.35-1.4a9.82 9.82 0 0 0 4.59 1.17h.01c5.43 0 9.85-4.42 9.85-9.86 0-2.63-1.02-5.1-2.88-6.96A9.77 9.77 0 0 0 12.04 2Zm0 17.98h-.01c-1.46 0-2.9-.4-4.15-1.14l-.3-.18-3.09.81.82-3.02-.19-.31a8.15 8.15 0 0 1-1.25-4.36c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.86 5.8 2.41a8.15 8.15 0 0 1 2.4 5.8c0 4.52-3.68 8.19-8.23 8.19Z" />
            </svg>
          </span>
          <span className="max-w-0 whitespace-nowrap text-sm font-medium text-bone opacity-0 transition-[max-width,opacity] duration-500 group-hover:max-w-[12rem] group-hover:opacity-100">
            Falar com a Opus LT
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
