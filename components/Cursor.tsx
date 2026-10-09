"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced || !dotRef.current || !ringRef.current) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    document.documentElement.classList.add("cursor-on");

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, autoAlpha: 0 });

    const dotX = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power2.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power2.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3.out" });

    let visible = false;

    const onMove = (e: MouseEvent) => {
      if (!visible) {
        visible = true;
        gsap.to([dot, ring], { autoAlpha: 1, duration: 0.3 });
      }
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        "a, button, [data-cursor]"
      );
      gsap.to(ring, {
        scale: target ? 2.1 : 1,
        backgroundColor: target ? "rgba(201,160,140,0.12)" : "rgba(201,160,140,0)",
        borderColor: target ? "rgba(201,160,140,0.9)" : "rgba(242,240,236,0.35)",
        duration: 0.4,
        ease: "power3.out",
      });
      gsap.to(dot, { scale: target ? 0.4 : 1, duration: 0.4 });
    };

    const onLeave = () => {
      visible = false;
      gsap.to([dot, ring], { autoAlpha: 0, duration: 0.3 });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.classList.remove("cursor-on");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden size-1.5 rounded-full bg-accent-soft md:block"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden size-9 rounded-full border border-bone/35 md:block"
      />
    </>
  );
}
