import React from "react";

const Hackathons = () => {
  const hackathons = [
    {
      name: "NASA Space Apps Challenge",
      year: "2024",
      position: "1º Lugar",
      description:
        "Desenvolvemos uma solução inovadora para monitoramento de detritos espaciais usando machine learning e análise de dados em tempo real. O projeto incluiu visualização 3D e predição de trajetórias.",
      award: "🥇",
      tech: ["Python", "TensorFlow", "React", "NASA APIs"],
      featured: true,
    },
    {
      name: "Hackathon SBGames",
      year: "2023",
      position: "2º Lugar",
      description:
        "Jogo educativo sobre sustentabilidade com mecânicas inovadoras",
      award: "🥈",
      tech: ["Unity", "C#", "Blender"],
    },
    {
      name: "Mega Hack Women",
      year: "2023",
      position: "Top 10",
      description: "Plataforma para conectar mulheres empreendedoras",
      award: "🏆",
      tech: ["Next.js", "Node.js", "MongoDB"],
    },
    {
      name: "Hackathon CCR",
      year: "2022",
      position: "Finalista",
      description: "Sistema de otimização de rotas sustentáveis",
      award: "🎯",
      tech: ["Vue.js", "Python", "Google Maps API"],
    },
  ];

  const featuredHackathon = hackathons.find((h) => h.featured);
  const otherHackathons = hackathons.filter((h) => !h.featured);

  return (
    <section id="hackathons" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hackathons & Competições
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Participações em hackathons e competições de programação, onde a
            criatividade e velocidade de desenvolvimento são essenciais.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* Card Grande - Esquerda */}
          <div className="lg:row-span-2">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white h-[600px] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-6xl">{featuredHackathon?.award}</div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {featuredHackathon?.year}
                    </span>
                    <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {featuredHackathon?.position}
                    </span>
                  </div>
                </div>

                <h3 className="text-3xl font-bold mb-4">
                  {featuredHackathon?.name}
                </h3>

                <p className="text-lg leading-relaxed mb-6 text-white/90">
                  {featuredHackathon?.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {featuredHackathon?.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Cards Menores - Direita */}
          <div className="flex flex-col gap-6 h-[600px]">
            {/* Card Superior */}
            <div className="h-[297px]">
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                <div className="flex items-start gap-4 h-full">
                  <div className="text-4xl">{otherHackathons[0]?.award}</div>
                  <div className="flex-1 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-xl font-bold text-gray-900">
                          {otherHackathons[0]?.name}
                        </h4>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                          {otherHackathons[0]?.year}
                        </span>
                      </div>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold mb-3 inline-block">
                        {otherHackathons[0]?.position}
                      </span>
                      <p className="text-gray-600 text-sm mb-3">
                        {otherHackathons[0]?.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {otherHackathons[0]?.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cards Inferiores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-[297px]">
              {otherHackathons.slice(1, 3).map((hackathon, index) => (
                <div key={index} className="h-full">
                  <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-3xl mb-2">{hackathon.award}</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {hackathon.name}
                      </h4>
                      <div className="flex justify-center gap-2 mb-3">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                          {hackathon.year}
                        </span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                          {hackathon.position}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3 text-center">
                        {hackathon.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1 justify-center">
                      {hackathon.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
