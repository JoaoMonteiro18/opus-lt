"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type CountUpProps = {
  /** Valor numérico final. */
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number; // segundos
  className?: string;
};

/** Conta de 0 até `value` quando entra na viewport (uma única vez). */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1.4,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    let start: number | null = null;
    const ms = duration * 1000;

    const tick = (t: number) => {
      if (start === null) start = t;
      const progress = Math.min((t - start) / ms, 1);
      // ease-out (cubic) para desaceleração suave
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, reduceMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
