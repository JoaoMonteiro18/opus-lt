export type Service = {
  id: string;
  title: string;
  short: string;
  description: string;
  tags: string[];
};

export type ServiceGroup = {
  id: string;
  label: string;
  caption: string;
  services: Service[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "construcao",
    label: "Construção & Obras",
    caption: "Da fundação à entrega das chaves",
    services: [
      {
        id: "construcao-civil",
        title: "Construção Civil",
        short: "Obras completas, do terreno à entrega",
        description:
          "Execução de obras comerciais, industriais e corporativas com equipe própria, controle tecnológico de materiais e responsabilidade técnica integral.",
        tags: ["Obra nova", "Estrutura e alvenaria", "Acabamento", "ART/RRT"],
      },
      {
        id: "gerenciamento-de-obras",
        title: "Gerenciamento de Obras",
        short: "Gestão de prazo, custo e qualidade",
        description:
          "Planejamento, fiscalização e gestão de contratos de obra. Cronograma físico-financeiro, medições e relatórios periódicos para o cliente decidir com dados.",
        tags: ["Cronograma físico-financeiro", "Medições", "Fiscalização", "Compatibilização"],
      },
      {
        id: "retrofit-reformas",
        title: "Retrofit e Reformas Corporativas",
        short: "Modernização sem parar a operação",
        description:
          "Reforma de sedes, lojas e plantas em operação, com etapas noturnas e planejamento de convivência para a atividade do cliente não parar.",
        tags: ["Obra em operação", "Etapas noturnas", "Layout corporativo", "Fachadas"],
      },
      {
        id: "projetos-consultoria",
        title: "Projetos e Consultoria",
        short: "Engenharia antes da primeira pá",
        description:
          "Projetos executivos, memoriais descritivos, laudos técnicos e acompanhamento de obra. Viabilidade e compatibilização antes de o custo virar problema.",
        tags: ["Projeto executivo", "Laudo técnico", "PPCI", "Viabilidade"],
      },
    ],
  },
  {
    id: "instalacoes",
    label: "Instalações & Tecnologia",
    caption: "A engenharia que dá vida ao prédio",
    services: [
      {
        id: "instalacoes-eletricas-e-dados",
        title: "Instalações Elétricas e de Dados",
        short: "Da entrada de energia ao último ponto de rede",
        description:
          "Sistemas elétricos, redes estruturadas, data centers e redes sem fio corporativas em ambientes comerciais, industriais e corporativos — projetados, instalados e certificados pela mesma equipe, com laudo de conformidade.",
        tags: [
          "Painéis e quadros",
          "SPDA / Para-raios",
          "Cabeamento Cat6 / Cat6A",
          "Fibra óptica",
          "Certificação de rede",
          "Wi-Fi corporativo",
          "CFTV e controle de acesso",
        ],
      },
      {
        id: "manutencao-preventiva",
        title: "Manutenção Preventiva",
        short: "Para a falha não virar parada",
        description:
          "Programas de manutenção periódica para sistemas elétricos e de TI, com termografia e análise de qualidade de energia para antecipar o problema.",
        tags: ["Cronograma anual", "Termografia", "Qualidade de energia", "Suporte"],
      },
    ],
  },
];

export const allServices: Service[] = serviceGroups.flatMap((g) => g.services);

export type ProjectStatus = "Entregue" | "Em andamento" | "Em projeto";

export type Project = {
  id: "verticeJardins" | "aureaFariaLima" | "origemPinheiros" | "lilu";
  name: string;
  segment: string;
  location: string;
  status: ProjectStatus;
  /** Ocupa duas colunas no grid. */
  wide: boolean;
};

/* Exemplos provisórios — substituir por obras reais da Opus. */
export const projects: Project[] = [
  {
    id: "verticeJardins",
    name: "Vértice Jardins",
    segment: "Residencial",
    location: "Jardim Europa · São Paulo",
    status: "Em andamento",
    wide: true,
  },
  {
    id: "aureaFariaLima",
    name: "Áurea Faria Lima",
    segment: "Corporativo",
    location: "Itaim Bibi · São Paulo",
    status: "Entregue",
    wide: false,
  },
  {
    id: "origemPinheiros",
    name: "Origem Alto de Pinheiros",
    segment: "Residencial",
    location: "Alto de Pinheiros · São Paulo",
    status: "Entregue",
    wide: false,
  },
  {
    id: "lilu",
    name: "Lilu",
    segment: "Restaurante",
    location: "Rua Amauri, Itaim Bibi · São Paulo",
    status: "Em andamento",
    wide: true,
  },
];

export type ProcessStep = {
  number: string;
  title: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Diagnóstico",
  },
  {
    number: "02",
    title: "Projeto",
  },
  {
    number: "03",
    title: "Planejamento",
  },
  {
    number: "04",
    title: "Execução",
  },
  {
    number: "05",
    title: "Comissionamento",
  },
  {
    number: "06",
    title: "Entrega e suporte",
  },
];

export type Sector = {
  id: "residencial" | "industrial" | "saude" | "restaurantes";
  name: string;
  caption: string;
  description: string;
};

export const sectors: Sector[] = [
  {
    id: "residencial",
    name: "Residencial",
    caption: "Casas e edifícios",
    description: "Residências de alto padrão, edifícios e reformas completas, da estrutura ao acabamento.",
  },
  {
    id: "industrial",
    name: "Industrial",
    caption: "Galpões e plantas",
    description: "Galpões, subestações, infraestrutura elétrica de média tensão e expansões fabris.",
  },
  {
    id: "saude",
    name: "Saúde",
    caption: "Hospitais e clínicas",
    description: "Ambientes com exigência normativa severa, redundância elétrica e obra em área crítica.",
  },
  {
    id: "restaurantes",
    name: "Restaurantes",
    caption: "Casas de gastronomia",
    description:
      "Cozinhas, exaustão, carga elétrica e acabamento de salão — com etapas noturnas para a casa não fechar.",
  },
];

export const aboutChecklist: string[] = [
  "Obra civil e instalações sob uma única responsabilidade técnica",
  "Equipe própria — sem terceirizar o que define a qualidade da entrega",
  "Atendimento a empresas de pequeno, médio e grande porte",
  "Documentação completa e laudo técnico ao final de cada serviço",
];
