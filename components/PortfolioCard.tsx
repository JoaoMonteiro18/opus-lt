"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { staggerItem } from "@/lib/motion";

type PortfolioCardProps = {
  name: string;
  href: string;
  image: string;
};

/** Card grande de categoria de portfólio com hover sofisticado. */
export function PortfolioCard({ name, href, image }: PortfolioCardProps) {
  return (
    <motion.div variants={staggerItem}>
      <Link
        href={href}
        className="group relative block aspect-[4/5] overflow-hidden rounded-3xl"
      >
        <Image
          src={image} // TODO: substituir pela foto real da categoria
          alt={`Portfólio ${name}`}
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 33vw, 90vw"
          className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
        />
        {/* Overlay que escurece levemente no hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/30 to-transparent transition-opacity duration-500 group-hover:from-charcoal-900/95" />

        <div className="absolute inset-x-0 bottom-0 p-7">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                {name}
              </h3>
              {/* Revelação suave no hover */}
              <p className="mt-1 max-h-0 overflow-hidden text-sm text-white/70 opacity-0 transition-all duration-500 ease-smooth group-hover:max-h-12 group-hover:opacity-100">
                Ver projetos da categoria
              </p>
              <span className="mt-3 block h-0.5 w-10 rounded-full bg-copper-metal transition-all duration-500 ease-smooth group-hover:w-20" />
            </div>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 ease-smooth group-hover:border-copper-500 group-hover:bg-copper-500">
              <ArrowUpRight size={20} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
