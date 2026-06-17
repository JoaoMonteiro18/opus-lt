import type { Metadata } from "next";
import { UnderConstruction } from "@/components/UnderConstruction";

export const metadata: Metadata = {
  title: "Portfólio Industrial",
  description:
    "Projetos industriais da Opus LT Engenharia — em documentação. Fale com a nossa equipe.",
};

export default function PortfolioIndustrialPage() {
  return <UnderConstruction segment="Projetos industriais" />;
}
