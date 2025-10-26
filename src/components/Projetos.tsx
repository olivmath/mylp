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
    }
  ];

  return (
    <section id="projetos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meus Projetos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes, demonstrando diferentes tecnologias e abordagens de desenvolvimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="p-8">
                <div className="text-6xl mb-4 text-center">{project.image}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Ver Projeto
                  </a>
                  <a
                    href="#"
                    className="flex-1 border-2 border-gray-300 text-gray-700 text-center py-3 px-6 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                  >
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projetos;