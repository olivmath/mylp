'use client';

import React from 'react';

const Projetos = () => {
  const projects = [
    {
      title: "brbitcoin",
      description: "SDK Bitcoin simples, seguro e flexível para Python, TypeScript e Rust com suporte a múltiplas plataformas",
      tech: ["Rust", "Python", "TypeScript", "Bitcoin"],
      image: "₿",
      link: "https://github.com/olivmath/brbitcoin"
    },
    {
      title: "merkly",
      description: "Implementação simples e eficiente de Merkle Tree em Python com validação criptográfica",
      tech: ["Python", "Criptografia", "Estruturas de Dados"],
      image: "🌳",
      link: "https://github.com/olivmath/merkly"
    },
    {
      title: "keccaky",
      description: "Biblioteca segura e fácil de usar para hash Keccak, essencial em cadeias de blocos EVM",
      tech: ["Python", "Keccak", "Hash"],
      image: "🔐",
      link: "https://github.com/olivmath/keccaky"
    },
    {
      title: "ed25519-axolotl",
      description: "Implementação de criptografia de chave pública usando assinaturas estilo Ed25519 com chaves X25519",
      tech: ["Rust", "Ed25519", "Criptografia"],
      image: "🔑",
      link: "https://github.com/olivmath/ed25519-axolotl"
    },
    {
      title: "Lunes Node",
      description: "Full Node da Lunes Network - aplicação que conecta à rede blockchain para validar e propagar blocos",
      tech: ["Scala", "Blockchain", "Network"],
      image: "⛓️",
      link: "https://github.com/lunes-platform/lunes-node"
    },
    {
      title: "Pós-Graduação em Blockchain",
      description: "Programa educacional em blockchain na Nearx Innovation School impactando milhares de desenvolvedores na América Latina",
      tech: ["Educação", "Blockchain", "Web3"],
      image: "🎓",
      link: "https://nearx.com.br"
    },
    {
      title: "Smart Contract Architecture",
      description: "Artigo publicado sobre 7-Layer Architecture para Smart Contracts - framework de design seguro e escalável",
      tech: ["Smart Contracts", "Arquitetura", "Solidity"],
      image: "🏗️",
      link: "https://linkedin.com/in/olivmath"
    },
    {
      title: "DREX Education Series",
      description: "Série educacional sobre DREX (moeda digital do Brasil) explicando conceitos, implementação e impacto do sistema",
      tech: ["Educação", "DREX", "Finance"],
      image: "🪙",
      link: "https://linkedin.com/in/olivmath"
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