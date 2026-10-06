"use client";

import {
  type ReactNode,
  type MouseEvent,
  useRef,
  useState,
} from "react";
import { motion, useInView } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1] as const;

type RevealMode = "view" | "mount";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  blur?: boolean;
  duration?: number;
  mode?: RevealMode;
};

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 32,
  x = 0,
  blur = true,
  duration = 1.1,
  mode = "view",
}: FadeInProps) {
  const visible = { opacity: 1, y: 0, x: 0, filter: "blur(0px)" };
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y,
        x,
        filter: blur ? "blur(10px)" : "blur(0px)",
      }}
      {...(mode === "mount"
        ? { animate: visible }
        : {
            whileInView: visible,
            viewport: { once: true, margin: "-12% 0px" },
          })}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

type MaskLinesProps = {
  lines: ReactNode[];
  className?: string;
  delay?: number;
  stagger?: number;
  mode?: RevealMode;
};

export function MaskLines({
  lines,
  className,
  delay = 0,
  stagger = 0.1,
  mode = "view",
}: MaskLinesProps) {
  return (
    <motion.span
      className={className}
      initial="hidden"
      {...(mode === "mount"
        ? { animate: "visible" }
        : {
            whileInView: "visible",
            viewport: { once: true, margin: "-8% 0px" },
          })}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className="block will-change-transform"
            variants={{
              hidden: { y: "112%" },
              visible: {
                y: "0%",
                transition: {
                  duration: 1.15,
                  ease: EASE,
                  delay: delay + i * stagger,
                },
              },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export function Magnetic({
  children,
  className,
  strength = 0.3,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({
      x: (e.clientX - rect.left - rect.width / 2) * strength,
      y: (e.clientY - rect.top - rect.height / 2) * strength,
    });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 180, damping: 16, mass: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

export function TiltCard({
  children,
  className,
  max = 5,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: -py * max, ry: px * max });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ transformStyle: "preserve-3d", perspective: 900 }}
      onMouseMove={onMouseMove}
      onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
      animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
      transition={{ type: "spring", stiffness: 160, damping: 18, mass: 0.8 }}
    >
      {children}
    </motion.div>
  );
}

export function useOnceInView(margin = "-20% 0px") {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: margin as never });
  return { ref, inView };
}
