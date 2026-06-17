"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "./ui/Button";
import { services } from "@/lib/content";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

type Fields = {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  servico: string;
  mensagem: string;
};

const initial: Fields = {
  nome: "",
  empresa: "",
  email: "",
  telefone: "",
  servico: "",
  mensagem: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});

  function update(key: keyof Fields, value: string) {
    setFields((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!fields.nome.trim()) next.nome = "Informe seu nome.";
    if (!fields.email.trim()) next.email = "Informe seu e-mail.";
    else if (!emailRegex.test(fields.email)) next.email = "E-mail inválido.";
    if (!fields.mensagem.trim()) next.mensagem = "Escreva uma mensagem.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;

    // Monta a mensagem e abre o WhatsApp com os dados preenchidos.
    const message = [
      "*Solicitação de orçamento — site Opus LT*",
      `Nome: ${fields.nome}`,
      fields.empresa && `Empresa: ${fields.empresa}`,
      `E-mail: ${fields.email}`,
      fields.telefone && `Telefone: ${fields.telefone}`,
      fields.servico && `Serviço: ${fields.servico}`,
      "",
      fields.mensagem,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");

    /* ── ALTERNATIVA: enviar por e-mail (mailto) ─────────────────────────
       Importe `contact` de "@/lib/site" e use:
       const subject = encodeURIComponent("Orçamento — site Opus LT");
       const body = encodeURIComponent(message);
       window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    */

    /* ── BACKEND FUTURO ──────────────────────────────────────────────────
       Para enviar de verdade por e-mail, plugue um endpoint aqui.
       Ex.: Resend (route handler em /app/api/contato/route.ts) ou Formspree:

       await fetch("https://formspree.io/f/SEU_ID", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(fields),
       });
    */
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="nome"
          label="Nome"
          required
          value={fields.nome}
          error={errors.nome}
          onChange={(v) => update("nome", v)}
          autoComplete="name"
        />
        <Field
          id="empresa"
          label="Empresa"
          value={fields.empresa}
          onChange={(v) => update("empresa", v)}
          autoComplete="organization"
        />
        <Field
          id="email"
          label="E-mail"
          type="email"
          required
          value={fields.email}
          error={errors.email}
          onChange={(v) => update("email", v)}
          autoComplete="email"
        />
        <Field
          id="telefone"
          label="Telefone"
          type="tel"
          value={fields.telefone}
          onChange={(v) => update("telefone", v)}
          autoComplete="tel"
        />
      </div>

      {/* Tipo de serviço */}
      <div>
        <label htmlFor="servico" className={labelClass}>
          Tipo de serviço
        </label>
        <select
          id="servico"
          value={fields.servico}
          onChange={(e) => update("servico", e.target.value)}
          className={cn(inputClass, "appearance-none bg-[length:0]")}
        >
          <option value="">Selecione uma opção</option>
          {services.map((s) => (
            <option key={s.id} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      {/* Mensagem */}
      <div>
        <label htmlFor="mensagem" className={labelClass}>
          Mensagem <span className="text-copper-600">*</span>
        </label>
        <textarea
          id="mensagem"
          rows={5}
          value={fields.mensagem}
          onChange={(e) => update("mensagem", e.target.value)}
          className={cn(inputClass, "resize-y")}
          placeholder="Conte um pouco sobre o seu projeto ou necessidade."
        />
        {errors.mensagem && <ErrorText>{errors.mensagem}</ErrorText>}
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Enviar via WhatsApp
        <Send size={18} />
      </Button>

      <p className="text-xs text-charcoal-500">
        Ao enviar, abriremos o WhatsApp com seus dados preenchidos para agilizar
        o atendimento.
      </p>
    </form>
  );
}

/* ── Subcomponentes de campo ─────────────────────────────────────────── */

const labelClass = "mb-1.5 block text-sm font-medium text-charcoal-700";
const inputClass =
  "w-full rounded-xl border border-neutralbg-border bg-neutralbg-white px-4 py-3 text-charcoal-800 placeholder:text-charcoal-500/60 transition-colors duration-200 focus:border-copper-500 focus:outline-none";

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  required = false,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label} {required && <span className="text-copper-600">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        onChange={(e) => onChange(e.target.value)}
        className={cn(inputClass, error && "border-red-400 focus:border-red-400")}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return <p className="mt-1.5 text-sm text-red-500">{children}</p>;
}
