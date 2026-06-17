/* ═══════════════════════════════════════════════════════════════════
   CONTEÚDO EDITORIAL — textos das seções, serviços e diferenciais.
   Edite aqui para alterar os textos do site.
   ═══════════════════════════════════════════════════════════════════ */

import {
  Zap,
  Network,
  Wifi,
  ClipboardList,
  Cctv,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
};

export const services: Service[] = [
  {
    id: "instalacoes-eletricas",
    icon: Zap,
    title: "Instalações Elétricas",
    description:
      "Instalação, manutenção e modernização de sistemas elétricos em ambientes comerciais, industriais e corporativos. Projetos sob medida com laudo de conformidade.",
    tags: [
      "Painéis elétricos",
      "Quadros de distribuição",
      "SPDA/Para-raios",
      "Manutenção preventiva",
    ],
  },
  {
    id: "infraestrutura-de-dados",
    icon: Network,
    title: "Infraestrutura de Dados",
    description:
      "Projetos e instalação de redes estruturadas, data centers e salas de telecomunicações com certificação e padrão internacional de qualidade.",
    tags: [
      "Cabeamento Cat6/Cat6A",
      "Fibra óptica",
      "Rack e patch panel",
      "Certificação de rede",
    ],
  },
  {
    id: "redes-wifi",
    icon: Wifi,
    title: "Redes Wi-Fi Corporativas",
    description:
      "Planejamento e instalação de redes sem fio de alta performance para ambientes corporativos. Cobertura total, segmentação e controle de acesso.",
    tags: ["Access points", "Controller Wi-Fi", "Firewall", "Site survey"],
  },
  {
    id: "projetos-consultoria",
    icon: ClipboardList,
    title: "Projetos e Consultoria",
    description:
      "Elaboração de projetos elétricos e de TI com memorial descritivo, laudos, acompanhamento técnico de obra.",
    tags: ["Projeto elétrico", "Laudo técnico", "PPCI", "Visita técnica"],
  },
  {
    id: "cftv-seguranca",
    icon: Cctv,
    title: "CFTV e Segurança",
    description:
      "Instalação de câmeras IP e analógicas, controle de acesso, alarmes e monitoramento remoto integrado à rede.",
    tags: ["Câmeras IP", "DVR/NVR", "Controle de acesso", "Monitoramento"],
  },
  {
    id: "manutencao-preventiva",
    icon: Wrench,
    title: "Manutenção Preventiva",
    description:
      "Programas de manutenção periódica para sistemas elétricos e de TI, reduzindo falhas e prevenindo paradas.",
    tags: ["Cronograma", "Termografia", "Análise de qualidade"],
  },
];

export type Differential = {
  number: string;
  title: string;
  description: string;
};

export const differentials: Differential[] = [
  {
    number: "01",
    title: "Segurança em primeiro lugar",
    description:
      "Equipe com NR-10 e NR-35, EPI completo e protocolos rigorosos.",
  },
  {
    number: "02",
    title: "Conformidade com normas técnicas",
    description:
      "Projetos dentro de ABNT NBR 5410, NBR 14565 e Anatel.",
  },
  {
    number: "03",
    title: "Materiais certificados pelo INMETRO",
    description:
      "Equipamentos de qualidade comprovada e rastreável.",
  },
  {
    number: "04",
    title: "Documentação e laudo técnico",
    description:
      "Dossiê completo: memorial, certificado de conformidade, diagramas.",
  },
  {
    number: "05",
    title: "Atendimento ágil e cronograma claro",
    description:
      "Cronograma realista desde a proposta, atualização por etapa.",
  },
  {
    number: "06",
    title: "Suporte pós-instalação",
    description:
      "Suporte remoto e visitas presenciais após a entrega.",
  },
];

export type Sector = {
  id: string;
  name: string;
  caption: string;
};

export const sectors: Sector[] = [
  { id: "corporativo", name: "Corporativo", caption: "Escritórios e sedes" },
  { id: "industrial", name: "Industrial", caption: "Galpões e fábricas" },
  { id: "saude", name: "Saúde", caption: "Hospitais e clínicas" },
  { id: "varejo", name: "Varejo", caption: "Lojas e shoppings" },
];

export const aboutChecklist: string[] = [
  "Equipe com formação técnica e certificações atualizadas",
  "Projetos dimensionados conforme normas NBR 5410 e NR-10",
  "Atendimento a empresas de pequeno, médio e grande porte",
  "Uso de materiais certificados pelo INMETRO",
  "Documentação completa e laudos técnicos ao final de cada serviço",
];

export type PortfolioCategory = {
  slug: "residencial" | "industrial" | "comercial";
  name: string;
  /** Nome usado no contexto da tela "em desenvolvimento" */
  contextName: string;
};

export const portfolioCategories: PortfolioCategory[] = [
  { slug: "residencial", name: "Residencial", contextName: "Projetos residenciais" },
  { slug: "industrial", name: "Industrial", contextName: "Projetos industriais" },
  { slug: "comercial", name: "Comercial", contextName: "Projetos comerciais" },
];
