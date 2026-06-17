import type { Metadata } from "next";
import { UnderConstruction } from "@/components/UnderConstruction";

export const metadata: Metadata = {
  title: "Portfólio Comercial",
  description:
    "Projetos comerciais da Opus LT Engenharia — em documentação. Fale com a nossa equipe.",
};

export default function PortfolioComercialPage() {
  return <UnderConstruction segment="Projetos comerciais" />;
}
