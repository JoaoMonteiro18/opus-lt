"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";

// Links âncora da home (funcionam de qualquer página via "/#id") + Portfólio.
const navLinks = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Diferenciais", href: "/#diferenciais" },
  { label: "Setores", href: "/#setores" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Contato", href: "/contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do body quando o menu mobile está aberto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-smooth",
        scrolled || open
          ? "border-b border-neutralbg-border bg-neutralbg-white/90 backdrop-blur-md shadow-soft"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="container-site flex h-[4.5rem] items-center justify-between">
        <Logo />

        {/* Links — desktop */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative text-sm font-medium text-charcoal-600 transition-colors duration-300 hover:text-charcoal-900"
              >
                {link.label}
                {/* Underline animado em cobre */}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-copper-500 transition-all duration-300 ease-smooth group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="/contato" size="md">
            Solicitar orçamento
          </Button>
        </div>

        {/* Botão do menu — mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-charcoal-800 lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Painel mobile */}
      <div
        className={cn(
          "overflow-hidden border-t border-neutralbg-border bg-neutralbg-white transition-[max-height,opacity] duration-300 ease-smooth lg:hidden",
          open ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="container-site flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-charcoal-700 transition-colors hover:bg-neutralbg-warm hover:text-copper-600"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="px-3 pt-3">
            <Button href="/contato" size="md" className="w-full" >
              Solicitar orçamento
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
