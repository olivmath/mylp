export const profile = {
  name: "Lucas Bispo de Oliveira",
  brand: "olivmath",
  headline: "Senior Blockchain Engineer & Cryptography Specialist",
  subheadline:
    "Principal Engineer at DREX | Stellar Ambassador | NASA 1st Place",
  bio: "6+ years architecting, building, and securing blockchain systems. Principal Engineer at DREX (Brazil's CBDC), Head of Education at NearX, and 4x Web3 hackathon winner. Creator of Merkly (105k+ downloads) and Stellar Ambassador.",
  location: "Florianópolis, SC, Brasil",
  email: "lucas@protonmail.com",
  whatsapp: "+55 (48) 99901-3089",
  whatsappLink: "https://wa.me/5548999013089",
  cvPath: "/Lucas Oliveira - cv.pdf",
  social: {
    linkedin: "https://linkedin.com/in/olivmath",
    github: "https://github.com/olivmath",
    twitter: "https://twitter.com/olivmath_",
    blog: "/blog",
  },
  metrics: [
    { value: "6+", label: "Years Experience" },
    { value: "105k+", label: "Downloads" },
    { value: "≈100", label: "Students" },
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
    title: "Brazil CBDC — DREX",
    tech: ["Solidity", "ZKP", "CBDC", "Hyperledger Besu", "DvP"],
    link: "https://www.bcb.gov.br/estabilidadefinanceira/drex",
    images: ["/blockchainrio.jpg"],
    links: [
      { label: "DREX — Banco Central", href: "https://www.bcb.gov.br/estabilidadefinanceira/drex" },
      { label: "Visa VTAP", href: "https://developer.visa.com/capabilities/visa-tokenized-asset-platform" },
    ],
    milestones: [
      { name: "VISA / XP", link: "https://www.bcb.gov.br/estabilidadefinanceira/drex" },
      { name: "Tecban / Clearsale", link: "https://clearsale.com.br" },
    ],
  },
  {
    id: "crypto-libs",
    title: "Cryptography Libs",
    tech: ["Python", "Rust", "Cryptography", "Merkle Trees", "Ed25519"],
    link: "https://github.com/olivmath/merkly",
    images: ["/meridian-friends.jpg"],
    links: [
      { label: "Merkly — PyPI", href: "https://pypi.org/project/merkly/" },
      { label: "Keccaky — PyPI", href: "https://pypi.org/project/keccaky/" },
      { label: "merkletreers — crates.io", href: "https://crates.io/crates/merkletreers" },
      { label: "BrBitcoin — GitHub", href: "https://github.com/olivmath/brbitcoin" },
    ],
    milestones: [
      { name: "Merkly", link: "https://github.com/olivmath/merkly" },
      { name: "Keccaky", link: "https://github.com/olivmath/keccaky" },
      { name: "ed25519-axolotl", link: "https://github.com/lunes-platform/ed25519-axolotl" },
      { name: "BrBitcoin", link: "https://github.com/olivmath/brbitcoin" },
    ],
  },
  {
    id: "blockchain-eng",
    title: "Blockchain Engineering",
    tech: ["Stellar", "Soroban", "Rust", "Scala", "Solidity", "DeFi"],
    link: "https://github.com/olivmath",
    images: ["/mentor-meridian.jpg"],
    links: [
      { label: "Stellar Foundation", href: "https://stellar.org" },
      { label: "Lunes Protocol", href: "https://lunes.io" },
    ],
    milestones: [
      { name: "Stellar", link: "https://stellar.org" },
      { name: "Lunes", link: "https://lunes.io" },
      { name: "OnePercent", link: "https://github.com/olivmath" },
      { name: "Extracto DAO", link: "https://github.com/olivmath" },
    ],
  },
  {
    id: "education",
    title: "Education / DevRel",
    tech: ["Education", "Web3", "Content", "Community"],
    link: "https://nearx.com.br",
    images: ["/posgrad.jpg"],
    links: [
      { label: "NearX", href: "https://nearx.com.br" },
      { label: "YouTube", href: "https://youtube.com/@olivmath" },
    ],
    milestones: [
      { name: "FloripaWeb3", link: "https://github.com/olivmath" },
      { name: "YouTube", link: "https://youtube.com/@olivmath" },
      { name: "NearX", link: "https://nearx.com.br" },
    ],
  },
];

export const hackathons = [
  {
    name: "Stellar Hackathon",
    year: "2024",
    position: "1st Place",
    location: "Argentina",
    tech: ["Stellar", "Soroban", "Rust"],
    featured: true,
    logo: "/logo-stellar.png",
  },
  {
    name: "XRPL Hackathon",
    year: "2025",
    position: "2nd Place",
    location: "Brazil",
    tech: ["XRPL", "Solidity", "TypeScript"],
    logo: "/logo-xrpl.jpg",
  },
  {
    name: "Rayls Hackathon",
    year: "2025",
    position: "5th Place",
    location: "Argentina",
    tech: ["Rayls", "Blockchain"],
    logo: "/logo-rayls.svg",
  },
  {
    name: "Stellar ZKGame",
    year: "2026",
    position: "Honorable Mention",
    location: "Global",
    tech: ["Stellar", "ZKP", "Gaming"],
    logo: "/logo-stellar.png",
  },
  {
    name: "Chiliz Hackathon",
    year: "2024",
    position: "2nd Place",
    location: "Global",
    tech: ["Chiliz", "Solidity", "GameFi"],
    logo: "/logo-chiliz-pepper.png",
  },
  {
    name: "NASA Space Apps",
    year: "2022",
    position: "2nd Place",
    location: "Florianópolis",
    tech: ["Rust", "NASA APIs", "Blockchain"],
    logo: "/logo-nasa-dark.jpg",
  },
];

export const testimonials = [
  {
    name: "André Novaes",
    role: "Produtor de Conteúdo & Branding",
    company: "NearX",
    image: "/andre-novaes.png",
    content:
      "Trabalhar ao lado do Lucas é transformador. Ele estruturou programas de Blockchain e Web3 que se tornaram referência na América Latina. Lucas combina rigor técnico com empatia pedagógica, e sua capacidade de conectar ecossistemas e talentos torna cada projeto uma experiência de aprendizagem.",
  },
  {
    name: "Suely Brusko",
    role: "Tech Career Mentor",
    company: "NearX",
    image: "/suely-brusko.png",
    content:
      "Lucas é um dos profissionais mais inspiradores com quem já trabalhei. Como Head of Education, ele não só lidera a transformação de devs Web2 em mestres de Blockchain, mas criou o Postgraduate Program em Blockchain. Ele tem capacidade única de traduzir conceitos complexos em aprendizados práticos.",
  },
  {
    name: "Luis Malheiro",
    role: "Senior Software Engineer",
    company: "Azion",
    image: "/luis-malheiro.jpeg",
    content:
      "Lucas is a remarkable professional with genuine passion for learning. His enthusiasm for work is infectious, and he is constantly seeking new knowledge to enhance his abilities. It's inspiring to see his dedication to self-improvement and technical excellence.",
  },
  {
    name: "Ronilton Nunes",
    role: "Blockchain Engineer",
    company: "Lunes Platform",
    image: "/ronilton-nunes.png",
    content:
      "Exceptional Lead Blockchain with invaluable expertise in Blockchain technology. Your contributions to Lunes SDK, Blockchain Documentation, and Rust programming were outstanding. Your leadership qualities were instrumental in ensuring the project's success.",
  },
  {
    name: "Isaque Coelho",
    role: "AI Engineer",
    company: "Lunes",
    image: "/isaque-coelho.png",
    content:
      "Lucas is an excellent leader and mentor who helped me follow in the programming world with perfect advice. His technical part is impeccable, as well as his leadership. In any company where I am, the first name to be recommended will always be his.",
  },
  {
    name: "André Viotto",
    role: "Senior Backend Engineer",
    company: "Lunes",
    image: "/andre-viotto.png",
    content:
      "Lucas possui extrema capacidade técnica, excelente didática e criatividade fora do comum. Destaco sua proatividade, assertividade, empatia e excelente capacidade de comunicação.",
  },
];
