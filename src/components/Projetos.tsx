'use client';

import React from 'react';

const Projetos = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com React, Node.js e PostgreSQL",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "🛒",
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Aplicativo de gerenciamento de tarefas com funcionalidades avançadas",
      tech: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
      image: "📋",
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard interativo para visualização de dados meteorológicos",
      tech: ["Vue.js", "Chart.js", "API Integration"],
      image: "🌤️",
      link: "#"
    },
    {
      title: "Social Media Analytics",
      description: "Ferramenta de análise de métricas para redes sociais",
      tech: ["Python", "Django", "D3.js", "Redis"],
      image: "📊",
      link: "#"
    },
    {
      title: "Mobile Banking App",
      description: "Aplicativo bancário móvel com segurança avançada",
      tech: ["React Native", "Firebase", "Biometrics"],
      image: "💳",
      link: "#"
    },
    {
      title: "AI Chatbot Platform",
      description: "Plataforma de chatbot com inteligência artificial",
      tech: ["Python", "TensorFlow", "NLP", "FastAPI"],
      image: "🤖",
      link: "#"
    },
    {
      title: "Real Estate Portal",
      description: "Portal imobiliário com busca avançada e mapas",
      tech: ["Angular", "Spring Boot", "MongoDB"],
      image: "🏠",
      link: "#"
    },
    {
      title: "Fitness Tracker",
      description: "Aplicativo de acompanhamento fitness e saúde",
      tech: ["Flutter", "Dart", "HealthKit", "Charts"],
      image: "💪",
      link: "#"
    }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left {
          animation: marqueeLeft 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeRight 40s linear infinite;
        }
      `}</style>
      
      <section id="projetos" className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meus Projetos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Uma seleção dos meus trabalhos mais recentes, demonstrando diferentes tecnologias e abordagens de desenvolvimento.
            </p>
          </div>
        </div>

        {/* Primeira linha - Esquerda para Direita */}
        <div className="mb-8 overflow-hidden">
          <div className="flex animate-marquee-left whitespace-nowrap">
            {[...projects.slice(0, 4), ...projects.slice(0, 4), ...projects.slice(0, 4), ...projects.slice(0, 4)].map((project, index) => (
              <div
                key={`row1-${index}`}
                className="bg-white rounded-xl shadow-lg mx-4 p-6 min-w-[350px] flex-shrink-0"
              >
                <div className="text-4xl mb-3 text-center">{project.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <a
                    href={project.link}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 px-4 rounded-lg text-sm font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Ver Projeto
                  </a>
                  <a
                    href="#"
                    className="flex-1 border-2 border-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg text-sm font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                  >
                    Código
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Segunda linha - Direita para Esquerda */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee-right whitespace-nowrap">
            {[...projects.slice(4, 8), ...projects.slice(4, 8), ...projects.slice(4, 8), ...projects.slice(4, 8)].map((project, index) => (
              <div
                key={`row2-${index}`}
                className="bg-white rounded-xl shadow-lg mx-4 p-6 min-w-[350px] flex-shrink-0"
              >
                <div className="text-4xl mb-3 text-center">{project.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <a
                    href={project.link}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 px-4 rounded-lg text-sm font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Ver Projeto
                  </a>
                  <a
                    href="#"
                    className="flex-1 border-2 border-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg text-sm font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                  >
                    Código
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projetos;