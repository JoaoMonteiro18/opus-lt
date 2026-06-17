import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "light";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium " +
  "transition-all duration-300 ease-smooth will-change-transform " +
  "hover:-translate-y-px focus-visible:-translate-y-px disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  // Acento cobre — botão primário
  primary:
    "bg-copper-500 text-white shadow-soft hover:bg-copper-600 hover:shadow-lift",
  // Outline sóbrio sobre fundo claro
  secondary:
    "border border-neutralbg-border bg-transparent text-charcoal-800 hover:border-copper-500 hover:text-copper-600",
  // Sem borda
  ghost: "text-charcoal-600 hover:text-copper-600",
  // Outline claro para fundos escuros
  light:
    "border border-white/30 bg-transparent text-white hover:border-copper-400 hover:text-copper-400",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentProps<"button">, keyof CommonProps> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<ComponentProps<typeof Link>, keyof CommonProps> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

/** Botão polimórfico: vira <Link>, <a> (externo) ou <button>. */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props;
    // Links externos (http, wa.me, mailto, tel) usam <a> nativo.
    const isExternal = /^(https?:|wa\.me|mailto:|tel:)/.test(href) || href.startsWith("https://wa.me");
    if (isExternal) {
      return (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={classes}
          {...(rest as ComponentProps<"a">)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...(rest as Omit<ComponentProps<typeof Link>, "href">)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ComponentProps<"button">)}>
      {children}
    </button>
  );
}
