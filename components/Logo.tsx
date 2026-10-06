import { OPUS_WORDMARK_PATH, OPUS_WORDMARK_VIEWBOX } from "@/components/logo-path";

type WordmarkProps = {
  className?: string;
  title?: string;
};

/** Wordmark "opus" — herda a cor via currentColor. */
export function Wordmark({ className = "h-7 w-auto", title }: WordmarkProps) {
  return (
    <svg
      viewBox={OPUS_WORDMARK_VIEWBOX}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d={OPUS_WORDMARK_PATH}
        fill="currentColor"
      />
    </svg>
  );
}

type LogoProps = {
  className?: string;
  markClassName?: string;
};

export function Logo({ className = "", markClassName = "h-7 w-auto" }: LogoProps) {
  return (
    <span className={`flex items-end gap-3 text-bone ${className}`}>
      <Wordmark className={markClassName} />
      <span className="mb-[0.15em] hidden border-l border-bone/20 pl-3 text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-accent-soft sm:block">
        Engenharia
      </span>
      <span className="sr-only">Opus Engenharia</span>
    </span>
  );
}
