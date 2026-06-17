import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Conheça os segmentos de atuação da Opus LT Engenharia: projetos residenciais, industriais e comerciais.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-[4.5rem]">
      <PortfolioGrid />
    </div>
  );
}
