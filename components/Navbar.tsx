"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { EASE } from "@/components/motion/primitives";
import { serviceGroups } from "@/lib/content";

const LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Serviços", href: "#servicos", mega: true },
  { label: "Obras", href: "#obras" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setHidden(y > 600 && y > lastY);
      lastY = y;
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

  useEffect(() => {
    if (open) {
      window.__lenis?.stop();
    } else {
      window.__lenis?.start();
    }
    return () => window.__lenis?.start();
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMega(false);
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const goTo = useCallback((href: string) => {
    setOpen(false);
    setMega(false);
    setMobileServices(false);
    const target = document.querySelector(href);
    if (!target) return;
    if (window.__lenis) {
      window.__lenis.start();
      window.__lenis.scrollTo(target as HTMLElement, {
        duration: 1.6,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
      });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMega(true);
  };

  const scheduleCloseMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMega(false), 180);
  };

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-700 ${
          (scrolled || mega) && !open
            ? "border-b border-bone/5 bg-ink/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
        animate={{ y: hidden && !open && !mega ? "-100%" : "0%" }}
        transition={{ duration: 0.6, ease: EASE }}
        onMouseLeave={scheduleCloseMega}
      >
        <div className="container-x flex h-20 items-center justify-between md:h-24">
          <button
            onClick={() => goTo("#hero")}
            aria-label="Opus LT Engenharia — início"
            className="relative z-[70]"
          >
            <Logo markClassName="h-9 w-auto md:h-11" />
          </button>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Principal">
            {LINKS.map((link) =>
              link.mega ? (
                <button
                  key={link.href}
                  onClick={() => goTo(link.href)}
                  onMouseEnter={openMega}
                  onMouseOver={openMega}
                  onFocus={openMega}
                  aria-expanded={mega}
                  className={`link-underline flex items-center gap-1.5 text-[13px] font-medium tracking-[0.08em] transition-colors duration-300 ${
                    mega ? "text-bone" : "text-bone/70 hover:text-bone"
                  }`}
                >
                  {link.label}
                  <motion.svg
                    viewBox="0 0 10 6"
                    fill="none"
                    className="h-[5px] w-[9px]"
                    animate={{ rotate: mega ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                  >
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.3" />
                  </motion.svg>
                </button>
              ) : (
                <button
                  key={link.href}
                  onClick={() => goTo(link.href)}
                  onMouseEnter={scheduleCloseMega}
                  className="link-underline text-[13px] font-medium tracking-[0.08em] text-bone/70 transition-colors duration-300 hover:text-bone"
                >
                  {link.label}
                </button>
              )
            )}
          </nav>

          <div className="hidden lg:block">
            <button onClick={() => goTo("#contato")} className="btn btn-ghost !px-6 !py-3">
              Solicitar orçamento
            </button>
          </div>

          <button
            className="relative z-[70] flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            <motion.span
              className="block h-px w-6 bg-bone"
              animate={open ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="block h-px w-6 bg-bone"
              animate={open ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
            />
          </button>
        </div>

        <AnimatePresence>
          {mega && !open && (
            <motion.div
              className="absolute inset-x-0 top-full hidden overflow-hidden border-t border-bone/5 bg-ink/[0.99] backdrop-blur-2xl lg:block"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.55, ease: EASE }}
              onMouseEnter={openMega}
            >
              <div className="container-x grid grid-cols-2 gap-14 py-12 xl:grid-cols-[1fr_1fr_0.8fr]">
                {serviceGroups.map((group, gi) => (
                  <div key={group.id}>
                    <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-accent-soft">
                      <span className="h-px w-6 bg-accent-soft/50" />
                      {group.label}
                    </p>
                    <ul className="mt-6 space-y-1">
                      {group.services.map((service, si) => (
                        <motion.li
                          key={service.id}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.5,
                            ease: EASE,
                            delay: 0.08 + gi * 0.05 + si * 0.04,
                          }}
                        >
                          <button
                            onClick={() => goTo(`#${service.id}`)}
                            className="group flex w-full items-center rounded-lg px-3 py-2 text-left transition-colors duration-300 hover:bg-bone/[0.04]"
                          >
                            <span className="text-[15px] font-medium text-bone transition-colors duration-300 group-hover:text-accent-soft">
                              {service.title}
                            </span>
                          </button>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ))}

                <motion.div
                  className="hidden border-l border-bone/10 pl-12 xl:block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
                >
                  <p className="font-display text-xl font-semibold leading-snug tracking-tight text-bone">
                    Obra civil e instalações com uma{" "}
                    <em className="font-accent italic text-bone">
                      única responsável
                    </em>
                    .
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-smoke">
                    Da fundação à energização, sem repassar a responsabilidade
                    técnica entre fornecedores.
                  </p>
                  <button
                    onClick={() => goTo("#contato")}
                    className="btn btn-accent mt-7 !px-6 !py-3"
                  >
                    Falar com a engenharia
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-ink/97 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <nav className="container-x my-auto flex flex-col gap-1 py-28" aria-label="Menu móvel">
              {LINKS.map((link, i) =>
                link.mega ? (
                  <div key={link.href}>
                    <span className="block overflow-hidden">
                      <motion.button
                        onClick={() => setMobileServices((v) => !v)}
                        aria-expanded={mobileServices}
                        className="flex w-full items-center justify-between py-2 text-left font-display text-3xl font-semibold tracking-tight text-bone transition-colors hover:text-accent-soft"
                        initial={{ y: "110%" }}
                        animate={{ y: "0%" }}
                        exit={{ y: "110%" }}
                        transition={{ duration: 0.7, ease: EASE, delay: 0.05 + i * 0.06 }}
                      >
                        {link.label}
                        <motion.svg
                          viewBox="0 0 10 6"
                          fill="none"
                          className="h-2 w-3.5 text-accent-soft"
                          animate={{ rotate: mobileServices ? 180 : 0 }}
                          transition={{ duration: 0.4, ease: EASE }}
                        >
                          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.3" />
                        </motion.svg>
                      </motion.button>
                    </span>
                    <AnimatePresence>
                      {mobileServices && (
                        <motion.div
                          className="overflow-hidden"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: EASE }}
                        >
                          <div className="space-y-5 border-l border-accent-soft/30 py-4 pl-5">
                            {serviceGroups.map((group) => (
                              <div key={group.id}>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-accent-soft">
                                  {group.label}
                                </p>
                                <ul className="mt-2 space-y-1.5">
                                  {group.services.map((service) => (
                                    <li key={service.id}>
                                      <button
                                        onClick={() => goTo(`#${service.id}`)}
                                        className="text-left text-[15px] text-bone/75 transition-colors hover:text-accent-soft"
                                      >
                                        {service.title}
                                      </button>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <span key={link.href} className="block overflow-hidden">
                    <motion.button
                      onClick={() => goTo(link.href)}
                      className="block py-2 text-left font-display text-3xl font-semibold tracking-tight text-bone transition-colors hover:text-accent-soft"
                      initial={{ y: "110%" }}
                      animate={{ y: "0%" }}
                      exit={{ y: "110%" }}
                      transition={{ duration: 0.7, ease: EASE, delay: 0.05 + i * 0.06 }}
                    >
                      {link.label}
                    </motion.button>
                  </span>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
