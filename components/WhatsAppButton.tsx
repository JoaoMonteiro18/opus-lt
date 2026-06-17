"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

const defaultMessage =
  "Olá! Vim pelo site da Opus LT Engenharia e gostaria de mais informações.";

/** Botão flutuante de WhatsApp, presente em todas as páginas. */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(defaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform duration-300 ease-smooth hover:-translate-y-0.5 hover:scale-105"
    >
      {/* Pulso sutil */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 transition-transform duration-700 ease-smooth group-hover:scale-125 group-hover:opacity-0" />
      <MessageCircle size={26} className="relative" fill="currentColor" />
    </a>
  );
}
