export type Locale = "pt" | "en" | "es";

export const translations = {
  pt: {
    hero: {
      headline:
        "Matemático\u00A0\u00A0|\u00A0\u00A0Engenheiro de Criptografia\u00A0\u00A0|\u00A0\u00A0Senior Blockchain Engineer",
      metricDownloads: "downloads em 16 bibliotecas open-source",
      metricStudents: "alunos",
      metricExperience: "anos de experiência em blockchain",
    },
    projetos: {
      sectionLabel: "02 / Projetos",
      viewProject: "Ver Projeto",
      descriptions: {
        drex: "Principal Blockchain Engineer no piloto CBDC do Banco Central do Brasil. Infraestrutura de privacidade com ZKP, tokenização de câmbio com DvP e integração Visa VTAP",
        "crypto-libs": "Bibliotecas open-source de criptografia com 166k+ downloads agregados entre PyPI, crates.io e npm",
        "blockchain-eng": "6+ anos construindo infraestrutura blockchain — de protocolos L1 a plataformas DeFi e smart contracts",
        education: "Educação e developer relations em blockchain, do conteúdo à formação acadêmica",
      },
      milestoneDescriptions: {
        "drex.VISA / XP": "Integração Visa VTAP com DREX para interoperabilidade cross-chain de ativos tokenizados (RWA). Tokenização de câmbio com settlement atômico DvP",
        "drex.Tecban / Clearsale": "Infraestrutura de privacidade com ZKP (Parfim/Anonymous Zether). DID descentralizado com Hyperledger Indy para a maior empresa anti-fraude do Brasil",
        "crypto-libs.Merkly": "Biblioteca Python mais usada para Merkle Trees em blockchain — 72k+ downloads no PyPI, 82 stars no GitHub. Suporte a keccak-256 e hashes customizados",
        "crypto-libs.Keccaky": "Implementação Python otimizada do hash Keccak-256 para aplicações blockchain — 15k+ downloads no PyPI",
        "crypto-libs.ed25519-axolotl": "Assinaturas Ed25519 com chaves X25519, estilo Axolotl — 35k+ downloads combinados entre PyPI e crates.io",
        "crypto-libs.BrBitcoin": "SDK Bitcoin multi-linguagem (Python, TypeScript, Rust). Design em camadas com API simples e acesso low-level, com zeroização de chaves",
        "blockchain-eng.Stellar": "Embaixador oficial Stellar Brasil. Smart contracts Soroban, hackathons e contribuições ao protocolo",
        "blockchain-eng.Lunes": "Tech Lead Blockchain no protocolo L1. SDK em JS, Python e Rust. Reduziu tempo de sync em 83% e liderou CI/CD com GitLab",
        "blockchain-eng.OnePercent": "Senior Blockchain Engineer — plataforma de tokenização de dívidas agro (CAPEX). Backend TypeScript, segurança e integrações BaaS com clientes CNH e Corteva",
        "blockchain-eng.Extracto DAO": "Liderou squad de 4 engenheiros. Smart contracts para mercado de commodities descentralizado, indexer GraphQL e 30% de ganho em performance",
        "education.FloripaWeb3": "Fundador da comunidade Web3 de Florianópolis — eventos presenciais, networking e onboarding de devs",
        "education.YouTube": "Canal de 0 a 20k inscritos. Desafio 30dias/30blockchains construindo um projeto blockchain diferente por dia. Bootcamps de Rust, Stellar, Optimism, StarkNet e Solidity/ENS",
        "education.NearX": "Head of Education. Criou o primeiro programa de pós-graduação em Blockchain do Brasil, 10+ hackathons, mentoreou 100+ devs Web2→Web3",
      },
    },
    hackathons: {
      sectionLabel: "03 / Hackathons",
    },
    testemunhos: {
      sectionLabel: "04 / Depoimentos",
      quotes: [
        "Trabalhar ao lado do Lucas é **transformador**. Ele estruturou programas de Blockchain e Web3 que se tornaram **referência na América Latina**. Lucas combina rigor técnico com *empatia pedagógica*, e sua capacidade de conectar ecossistemas e talentos torna cada projeto uma experiência de aprendizagem.",
        "Lucas é um dos profissionais **mais inspiradores** com quem já trabalhei. Como Head of Education, ele não só lidera a transformação de devs Web2 em mestres de Blockchain, mas criou o *Postgraduate Program em Blockchain*. Ele tem capacidade única de **traduzir conceitos complexos** em aprendizados práticos.",
        "Lucas é um profissional notável com **genuína paixão por aprendizado**. Seu entusiasmo pelo trabalho é *contagiante*, e ele está constantemente buscando novos conhecimentos para aprimorar suas habilidades. É inspirador ver sua dedicação ao auto-aperfeiçoamento e **excelência técnica**.",
        "Líder excepcional em Blockchain com **expertise inestimável** em tecnologia Blockchain. Suas contribuições para o *Lunes SDK*, *Documentação Blockchain* e *programação Rust* foram excepcionais. Suas qualidades de liderança foram **fundamentais para garantir o sucesso** do projeto.",
        "Lucas é um **excelente líder e mentor** que me ajudou a seguir no mundo da programação com conselhos perfeitos. Sua parte técnica é *impecável*, assim como sua liderança. Em qualquer empresa onde eu estiver, **o primeiro nome a ser recomendado será sempre o dele**.",
        "Lucas possui **extrema capacidade técnica**, excelente didática e *criatividade fora do comum*. Destaco sua proatividade, assertividade, empatia e **excelente capacidade de comunicação**.",
      ],
    },
    footer: {
      copyright: "olivmath \u00A9 2026",
    },
    menu: {
      hero: "HERO",
      proj: "PROJ",
      hack: "HACK",
      test: "TEST",
      end: "FIM",
    },
  },
  en: {
    hero: {
      headline:
        "Mathematician\u00A0\u00A0|\u00A0\u00A0Cryptography Engineer\u00A0\u00A0|\u00A0\u00A0Senior Blockchain Engineer",
      metricDownloads: "downloads across 16 open-source libs",
      metricStudents: "students",
      metricExperience: "years blockchain experience",
    },
    projetos: {
      sectionLabel: "02 / Projects",
      viewProject: "View Project",
      descriptions: {
        drex: "Principal Blockchain Engineer on Brazil's Central Bank CBDC pilot. Privacy infrastructure with ZKP, FX tokenization with DvP, and Visa VTAP integration",
        "crypto-libs": "Open-source cryptography libraries with 166k+ aggregate downloads across PyPI, crates.io, and npm",
        "blockchain-eng": "6+ years building blockchain infrastructure — from L1 protocols to DeFi platforms and smart contracts",
        education: "Blockchain education and developer relations, from content creation to academic programs",
      },
      milestoneDescriptions: {
        "drex.VISA / XP": "Visa VTAP integration with DREX for cross-chain tokenized asset (RWA) interoperability. FX tokenization with atomic DvP settlement",
        "drex.Tecban / Clearsale": "Privacy infrastructure with ZKP (Parfim/Anonymous Zether). Decentralized DID with Hyperledger Indy for Brazil's largest anti-fraud company",
        "crypto-libs.Merkly": "Most-used Python library for Merkle Trees in blockchain — 72k+ downloads on PyPI, 82 GitHub stars. Supports keccak-256 and custom hashes",
        "crypto-libs.Keccaky": "Optimized Python implementation of Keccak-256 hash for blockchain applications — 15k+ downloads on PyPI",
        "crypto-libs.ed25519-axolotl": "Ed25519 signatures with X25519 keys, Axolotl-style — 35k+ combined downloads on PyPI and crates.io",
        "crypto-libs.BrBitcoin": "Multi-language Bitcoin SDK (Python, TypeScript, Rust). Layered design with simple API and low-level access, with key zeroisation",
        "blockchain-eng.Stellar": "Official Stellar Ambassador Brazil. Soroban smart contracts, hackathons, and protocol contributions",
        "blockchain-eng.Lunes": "Lead Blockchain Engineer on L1 protocol. SDK in JS, Python, and Rust. Reduced sync time by 83% and led CI/CD with GitLab",
        "blockchain-eng.OnePercent": "Senior Blockchain Engineer — agro debt tokenization platform (CAPEX). TypeScript backend, security, and BaaS integrations with CNH and Corteva clients",
        "blockchain-eng.Extracto DAO": "Led 4-engineer squad. Smart contracts for decentralized commodities futures market, GraphQL indexer, and 30% front-end performance boost",
        "education.FloripaWeb3": "Founded Florianópolis Web3 community — in-person events, networking, and dev onboarding",
        "education.YouTube": "Channel from 0 to 20k subscribers. 30days/30blockchains challenge building a different blockchain project every day. Rust, Stellar, Optimism, StarkNet, and Solidity/ENS bootcamps",
        "education.NearX": "Head of Education. Created Brazil's first accredited Blockchain postgraduate program, 10+ hackathons, mentored 100+ devs Web2→Web3",
      },
    },
    hackathons: {
      sectionLabel: "03 / Hackathons",
    },
    testemunhos: {
      sectionLabel: "04 / Testimonials",
      quotes: [
        "Working alongside Lucas is **transformative**. He structured Blockchain and Web3 programs that became a **reference across Latin America**. Lucas combines technical rigor with *pedagogical empathy*, and his ability to connect ecosystems and talents makes every project a learning experience.",
        "Lucas is one of the **most inspiring** professionals I've ever worked with. As Head of Education, he not only leads the transformation of Web2 devs into Blockchain masters, but created the *Postgraduate Program in Blockchain*. He has a unique ability to **translate complex concepts** into practical learning.",
        "Lucas is a remarkable professional with **genuine passion for learning**. His enthusiasm for work is *infectious*, and he is constantly seeking new knowledge to enhance his abilities. It's inspiring to see his dedication to self-improvement and **technical excellence**.",
        "Exceptional Lead Blockchain with **invaluable expertise** in Blockchain technology. Your contributions to *Lunes SDK*, *Blockchain Documentation*, and *Rust programming* were outstanding. Your leadership qualities were **instrumental in ensuring the project's success**.",
        "Lucas is an **excellent leader and mentor** who helped me follow in the programming world with perfect advice. His technical part is *impeccable*, as well as his leadership. In any company where I am, **the first name to be recommended will always be his**.",
        "Lucas has **extreme technical capacity**, excellent teaching skills and *extraordinary creativity*. I highlight his proactivity, assertiveness, empathy and **excellent communication skills**.",
      ],
    },
    footer: {
      copyright: "olivmath \u00A9 2026",
    },
    menu: {
      hero: "HERO",
      proj: "PROJ",
      hack: "HACK",
      test: "TEST",
      end: "END",
    },
  },
  es: {
    hero: {
      headline:
        "Matemático\u00A0\u00A0|\u00A0\u00A0Ingeniero de Criptografía\u00A0\u00A0|\u00A0\u00A0Senior Blockchain Engineer",
      metricDownloads: "descargas en 16 libs open-source",
      metricStudents: "estudiantes",
      metricExperience: "años de experiencia en blockchain",
    },
    projetos: {
      sectionLabel: "02 / Proyectos",
      viewProject: "Ver Proyecto",
      descriptions: {
        drex: "Principal Blockchain Engineer en el piloto CBDC del Banco Central de Brasil. Infraestructura de privacidad con ZKP, tokenización de cambio con DvP e integración Visa VTAP",
        "crypto-libs": "Bibliotecas open-source de criptografía con 166k+ descargas agregadas entre PyPI, crates.io y npm",
        "blockchain-eng": "6+ años construyendo infraestructura blockchain — de protocolos L1 a plataformas DeFi y smart contracts",
        education: "Educación y developer relations en blockchain, del contenido a la formación académica",
      },
      milestoneDescriptions: {
        "drex.VISA / XP": "Integración Visa VTAP con DREX para interoperabilidad cross-chain de activos tokenizados (RWA). Tokenización de cambio con settlement atómico DvP",
        "drex.Tecban / Clearsale": "Infraestructura de privacidad con ZKP (Parfim/Anonymous Zether). DID descentralizado con Hyperledger Indy para la mayor empresa anti-fraude de Brasil",
        "crypto-libs.Merkly": "Biblioteca Python más usada para Merkle Trees en blockchain — 72k+ descargas en PyPI, 82 stars en GitHub. Soporte para keccak-256 y hashes personalizados",
        "crypto-libs.Keccaky": "Implementación Python optimizada del hash Keccak-256 para aplicaciones blockchain — 15k+ descargas en PyPI",
        "crypto-libs.ed25519-axolotl": "Firmas Ed25519 con claves X25519, estilo Axolotl — 35k+ descargas combinadas en PyPI y crates.io",
        "crypto-libs.BrBitcoin": "SDK Bitcoin multi-lenguaje (Python, TypeScript, Rust). Diseño en capas con API simple y acceso low-level, con zeroización de claves",
        "blockchain-eng.Stellar": "Embajador oficial Stellar Brasil. Smart contracts Soroban, hackathons y contribuciones al protocolo",
        "blockchain-eng.Lunes": "Lead Blockchain Engineer en protocolo L1. SDK en JS, Python y Rust. Redujo tiempo de sync en 83% y lideró CI/CD con GitLab",
        "blockchain-eng.OnePercent": "Senior Blockchain Engineer — plataforma de tokenización de deudas agro (CAPEX). Backend TypeScript, seguridad e integraciones BaaS con clientes CNH y Corteva",
        "blockchain-eng.Extracto DAO": "Lideró squad de 4 ingenieros. Smart contracts para mercado de commodities descentralizado, indexer GraphQL y 30% de ganancia en performance",
        "education.FloripaWeb3": "Fundador de la comunidad Web3 de Florianópolis — eventos presenciales, networking y onboarding de devs",
        "education.YouTube": "Canal de 0 a 20k suscriptores. Desafío 30días/30blockchains construyendo un proyecto blockchain diferente por día. Bootcamps de Rust, Stellar, Optimism, StarkNet y Solidity/ENS",
        "education.NearX": "Head of Education. Creó el primer programa de posgrado en Blockchain de Brasil, 10+ hackathons, mentoreó 100+ devs Web2→Web3",
      },
    },
    hackathons: {
      sectionLabel: "03 / Hackathons",
    },
    testemunhos: {
      sectionLabel: "04 / Testimonios",
      quotes: [
        "Trabajar al lado de Lucas es **transformador**. Estructuró programas de Blockchain y Web3 que se convirtieron en **referencia en América Latina**. Lucas combina rigor técnico con *empatía pedagógica*, y su capacidad de conectar ecosistemas y talentos hace de cada proyecto una experiencia de aprendizaje.",
        "Lucas es uno de los profesionales **más inspiradores** con los que he trabajado. Como Head of Education, no solo lidera la transformación de devs Web2 en maestros de Blockchain, sino que creó el *Programa de Posgrado en Blockchain*. Tiene una capacidad única para **traducir conceptos complejos** en aprendizajes prácticos.",
        "Lucas es un profesional notable con **genuina pasión por el aprendizaje**. Su entusiasmo por el trabajo es *contagioso*, y constantemente busca nuevos conocimientos para mejorar sus habilidades. Es inspirador ver su dedicación a la superación personal y la **excelencia técnica**.",
        "Líder excepcional en Blockchain con **experiencia invaluable** en tecnología Blockchain. Sus contribuciones al *Lunes SDK*, *Documentación Blockchain* y *programación Rust* fueron sobresalientes. Sus cualidades de liderazgo fueron **fundamentales para asegurar el éxito** del proyecto.",
        "Lucas es un **excelente líder y mentor** que me ayudó a seguir en el mundo de la programación con consejos perfectos. Su parte técnica es *impecable*, así como su liderazgo. En cualquier empresa donde esté, **el primer nombre a recomendar siempre será el suyo**.",
        "Lucas posee **extrema capacidad técnica**, excelente didáctica y *creatividad fuera de lo común*. Destaco su proactividad, asertividad, empatía y **excelente capacidad de comunicación**.",
      ],
    },
    footer: {
      copyright: "olivmath \u00A9 2026",
    },
    menu: {
      hero: "HERO",
      proj: "PROY",
      hack: "HACK",
      test: "TEST",
      end: "FIN",
    },
  },
} as const;

export type Translations = typeof translations.pt;
