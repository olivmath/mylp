import React from 'react';

const Hackathons = () => {
  const hackathons = [
    {
      name: "NASA Space Apps Challenge",
      year: "2024",
      position: "1º Lugar",
      description: "Desenvolvemos uma solução para monitoramento de detritos espaciais usando machine learning",
      award: "🥇",
      tech: ["Python", "TensorFlow", "React", "NASA APIs"]
    },
    {
      name: "Hackathon SBGames",
      year: "2023",
      position: "2º Lugar",
      description: "Criamos um jogo educativo sobre sustentabilidade com mecânicas inovadoras",
      award: "🥈",
      tech: ["Unity", "C#", "Blender", "Firebase"]
    },
    {
      name: "Mega Hack Women",
      year: "2023",
      position: "Top 10",
      description: "Plataforma para conectar mulheres empreendedoras com mentoras experientes",
      award: "🏆",
      tech: ["Next.js", "Node.js", "MongoDB", "Socket.io"]
    },
    {
      name: "Hackathon CCR",
      year: "2022",
      position: "Finalista",
      description: "Sistema de otimização de rotas para redução de emissões de carbono",
      award: "🎯",
      tech: ["Vue.js", "Python", "Google Maps API", "Docker"]
    }
  ];

  return (
    <section id="hackathons" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hackathons & Competições
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Participações em hackathons e competições de programação, onde a criatividade e velocidade de desenvolvimento são essenciais.
          </p>
        </div>

        <div className="space-y-8">
          {hackathons.map((hackathon, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                <div className="text-6xl">{hackathon.award}</div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 sm:mb-0">
                      {hackathon.name}
                    </h3>
                    <div className="flex items-center gap-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {hackathon.year}
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {hackathon.position}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {hackathon.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {hackathon.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Próximos Desafios</h3>
            <p className="text-lg mb-6">
              Sempre em busca de novos desafios e oportunidades para inovar e aprender.
            </p>
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Ver Calendário de Eventos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;