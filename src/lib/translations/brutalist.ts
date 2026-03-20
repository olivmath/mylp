export type Locale = "pt" | "en" | "es";

export const translations = {
  pt: {
    hero: {
      headline:
        "Matemático\u00A0\u00A0|\u00A0\u00A0Engenheiro Criptógrafo\u00A0\u00A0|\u00A0\u00A0Embaixador Oficial Stellar Brasil",
      metricDownloads: "downloads em libs de criptografia",
      metricStudents: "alunos",
      metricExperience: "anos de experiência em blockchain",
    },
    projetos: {
      sectionLabel: "02 / Projetos",
      viewProject: "Ver Projeto",
    },
    hackathons: {
      sectionLabel: "03 / Hackathons",
    },
    testemunhos: {
      sectionLabel: "04 / Depoimentos",
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
        "Mathematician\u00A0\u00A0|\u00A0\u00A0Cryptographer Engineer\u00A0\u00A0|\u00A0\u00A0Official Stellar Ambassador Brazil",
      metricDownloads: "downloads cryptography libs",
      metricStudents: "students",
      metricExperience: "years blockchain experience",
    },
    projetos: {
      sectionLabel: "02 / Projects",
      viewProject: "View Project",
    },
    hackathons: {
      sectionLabel: "03 / Hackathons",
    },
    testemunhos: {
      sectionLabel: "04 / Testimonials",
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
        "Matemático\u00A0\u00A0|\u00A0\u00A0Ingeniero Criptógrafo\u00A0\u00A0|\u00A0\u00A0Embajador Oficial Stellar Brasil",
      metricDownloads: "descargas en libs de criptografía",
      metricStudents: "estudiantes",
      metricExperience: "años de experiencia en blockchain",
    },
    projetos: {
      sectionLabel: "02 / Proyectos",
      viewProject: "Ver Proyecto",
    },
    hackathons: {
      sectionLabel: "03 / Hackathons",
    },
    testemunhos: {
      sectionLabel: "04 / Testimonios",
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
