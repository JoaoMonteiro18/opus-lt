import type { Metadata } from "next";
import { UnderConstruction } from "@/components/UnderConstruction";

export const metadata: Metadata = {
  title: "Portfólio Residencial",
  description:
    "Projetos residenciais da Opus LT Engenharia — em documentação. Fale com a nossa equipe.",
};

export default function PortfolioResidencialPage() {
  return <UnderConstruction segment="Projetos residenciais" />;
}
