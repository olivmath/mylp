export const profile = {
  name: "Lucas Bispo de Oliveira",
  brand: "olivmath",
  headline: "Senior Blockchain Engineer & Cryptography Specialist",
  subheadline:
    "Principal Engineer at DREX | Stellar Ambassador | NASA 1st Place",
  bio: "6+ years architecting, building, and securing blockchain systems. Principal Engineer at DREX (Brazil's CBDC), Head of Education at NearX, and 4x Web3 hackathon winner. Creator of Merkly (55k+ downloads) and Stellar Ambassador.",
  location: "Florianópolis, SC, Brasil",
  email: "lucas@protonmail.com",
  whatsapp: "+55 (48) 99901-3089",
  whatsappLink: "https://wa.me/5548999013089",
  cvPath: "/Lucas Oliveira - cv.pdf",
  social: {
    github: "https://github.com/olivmath",
    linkedin: "https://linkedin.com/in/olivmath",
    twitter: "https://twitter.com/olivmath_",
  },
  metrics: [
    { value: "6+", label: "Years Experience" },
    { value: "55k+", label: "Downloads" },
    { value: "8000+", label: "Students" },
  ],
  companies: [
    "DREX - Banco Central do Brasil",
    "NearX Educational Platform",
    "Stellar Network",
    "OpenSense",
    "Clearsale (CLSA3)",
    "Azion Edge Platform",
  ],
  images: [
    "/blockchainrio.jpg",
    "/mentor-meridian.jpg",
    "/meridian-friends.jpg",
    "/posgrad.jpg",
  ],
};

export const projects = [
  {
    id: "drex",
    title: "DREX - Real Digital",
    description:
      "Principal Blockchain Engineer no projeto CBDC do Banco Central do Brasil. Arquitetura de smart contracts e privacy infrastructure com ZKP",
    tech: ["Solidity", "ZKP", "CBDC", "Hyperledger Besu"],
    link: "https://www.bcb.gov.br/estabilidadefinanceira/drex",
    featured: true,
  },
  {
    id: "merkly",
    title: "Merkly",
    description:
      "Biblioteca Python mais usada para Merkle Trees em blockchain, com 79 stars e 55.000+ downloads no PyPI",
    tech: ["Python", "Cryptography", "Merkle Trees"],
    link: "https://github.com/olivmath/merkly",
    featured: true,
  },
  {
    id: "nearx",
    title: "NearX Education Platform",
    description:
      "Head of Education criando programa de pós-graduação em Blockchain, bootcamps e conteúdo educacional para 8000+ alunos na LATAM",
    tech: ["Education", "Web3", "Rust", "Solidity"],
    link: "https://nearx.com.br",
    featured: true,
  },
  {
    id: "ed25519",
    title: "ed25519-axolotl",
    description:
      "Implementação segura de criptografia de chave pública com Ed25519 e X25519 em Rust",
    tech: ["Rust", "Cryptography", "Ed25519"],
    link: "https://github.com/olivmath/ed25519-axolotl",
  },
  {
    id: "brbitcoin",
    title: "brbitcoin",
    description:
      "SDK Bitcoin para Python, TypeScript e Rust com suporte a múltiplas plataformas e operações de carteira",
    tech: ["Rust", "Python", "TypeScript", "Bitcoin"],
    link: "https://github.com/olivmath/brbitcoin",
  },
  {
    id: "lunes",
    title: "Lunes L1 Protocol",
    description:
      "Tech Lead Blockchain desenvolvendo protocolo L1 token-centric. Redução de 83% no tempo de sync e gestão de validadores",
    tech: ["Scala", "Rust", "L1 Protocol", "LevelDB"],
    link: "https://lunes.io",
  },
  {
    id: "extracto",
    title: "Extracto DAO",
    description:
      "Senior Blockchain Engineer liderando squad de 4 pessoas em DeFi protocol para mercado de commodities descentralizado",
    tech: ["Solidity", "DeFi", "ERC2535", "GraphQL"],
    link: "https://github.com/olivmath",
  },
  {
    id: "stellar",
    title: "Stellar Network Contributions",
    description:
      "Official Brazil Ambassador contribuindo com protocolo Stellar, smart contracts Soroban e educação para desenvolvedores",
    tech: ["Stellar", "Soroban", "Rust"],
    link: "https://stellar.org",
  },
];

export const hackathons = [
  {
    name: "NASA Space Apps Challenge",
    year: "2024",
    position: "1º Lugar",
    description:
      "Solução blockchain para rastreamento de dados de satélites e verificação de integridade usando Rust e APIs espaciais",
    tech: ["Rust", "Blockchain", "NASA APIs", "Satellite Data"],
    featured: true,
  },
  {
    name: "Stellar Network Hackathon",
    year: "2024",
    position: "1º Lugar",
    description:
      "Protocolo de pagamentos em stream na Aleph pop-city Buenos Aires com Stellar Soroban smart contracts",
    tech: ["Stellar", "Soroban", "Rust", "DeFi"],
  },
  {
    name: "XRPL Hackathon Brazil",
    year: "2022",
    position: "1º Lugar",
    description:
      "Bridge blockchain entre XRP Ledger e Ethereum com suporte a transferências cross-chain de múltiplos ativos",
    tech: ["XRPL", "Solidity", "TypeScript", "Bridge"],
  },
  {
    name: "Chiliz Game Hackathon",
    year: "2022",
    position: "1º Lugar",
    description:
      "Game de estratégia com tokenomics integrados usando CHZ e mechanics de DeFi para engajamento de fãs",
    tech: ["Solidity", "React", "Chiliz", "GameFi"],
  },
];

export const testimonials = [
  {
    name: "André Novaes",
    role: "Produtor de Conteúdo & Branding",
    company: "NearX",
    content:
      "Trabalhar ao lado do Lucas é transformador. Ele estruturou programas de Blockchain e Web3 que se tornaram referência na América Latina. Lucas combina rigor técnico com empatia pedagógica, e sua capacidade de conectar ecossistemas e talentos torna cada projeto uma experiência de aprendizagem.",
  },
  {
    name: "Suely Brusko",
    role: "Tech Career Mentor",
    company: "NearX",
    content:
      "Lucas é um dos profissionais mais inspiradores com quem já trabalhei. Como Head of Education, ele não só lidera a transformação de devs Web2 em mestres de Blockchain, mas criou o Postgraduate Program em Blockchain. Ele tem capacidade única de traduzir conceitos complexos em aprendizados práticos.",
  },
  {
    name: "Luis Malheiro",
    role: "Senior Software Engineer",
    company: "Azion",
    content:
      "Lucas is a remarkable professional with genuine passion for learning. His enthusiasm for work is infectious, and he is constantly seeking new knowledge to enhance his abilities. It's inspiring to see his dedication to self-improvement and technical excellence.",
  },
  {
    name: "Ronilton Nunes",
    role: "Blockchain Engineer",
    company: "Lunes Platform",
    content:
      "Exceptional Lead Blockchain with invaluable expertise in Blockchain technology. Your contributions to Lunes SDK, Blockchain Documentation, and Rust programming were outstanding. Your leadership qualities were instrumental in ensuring the project's success.",
  },
  {
    name: "Isaque Coelho",
    role: "AI Engineer",
    company: "Lunes",
    content:
      "Lucas is an excellent leader and mentor who helped me follow in the programming world with perfect advice. His technical part is impeccable, as well as his leadership. In any company where I am, the first name to be recommended will always be his.",
  },
  {
    name: "André Viotto",
    role: "Senior Backend Engineer",
    company: "Lunes",
    content:
      "Lucas possui extrema capacidade técnica, excelente didática e criatividade fora do comum. Destaco sua proatividade, assertividade, empatia e excelente capacidade de comunicação.",
  },
];

export const services = [
  "Smart Contract Development",
  "Blockchain Architecture",
  "Zero-Knowledge Proofs",
  "Protocol Engineering",
  "Technical Mentoring",
];

export const quickLinks = [
  { name: "Início", href: "#hero" },
  { name: "Projetos", href: "#projetos" },
  { name: "Hackathons", href: "#hackathons" },
  { name: "Testemunhos", href: "#testemunhos" },
];
