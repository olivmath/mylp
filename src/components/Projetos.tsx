'use client';

import React from 'react';

const Projetos = () => {
  const projects = [
    {
      title: "Merkly",
      description: "Biblioteca Python mais usada para Merkle Trees em blockchain, com 79 stars e 55.000+ downloads no PyPI",
      tech: ["Python", "Cryptography", "Merkle Trees"],
      image: "🌳",
      link: "https://github.com/olivmath/merkly"
    },
    {
      title: "DREX - Real Digital",
      description: "Principal Blockchain Engineer no projeto CBDC do Banco Central do Brasil. Arquitetura de smart contracts e privacy infrastructure com ZKP",
      tech: ["Solidity", "ZKP", "CBDC", "Hyperledger Besu"],
      image: "🏦",
      link: "https://www.bcb.gov.br/estabilidadefinanceira/drex"
    },
    {
      title: "NearX Education Platform",
      description: "Head of Education criando programa de pós-graduação em Blockchain, bootcamps e conteúdo educacional para 8000+ alunos na LATAM",
      tech: ["Education", "Web3", "Rust", "Solidity"],
      image: "🎓",
      link: "https://nearx.com.br"
    },
    {
      title: "ed25519-axolotl",
      description: "Implementação segura de criptografia de chave pública com Ed25519 e X25519 em Rust",
      tech: ["Rust", "Cryptography", "Ed25519"],
      image: "🔐",
      link: "https://github.com/olivmath/ed25519-axolotl"
    },
    {
      title: "brbitcoin",
      description: "SDK Bitcoin para Python, TypeScript e Rust com suporte a múltiplas plataformas e operações de carteira",
      tech: ["Rust", "Python", "TypeScript", "Bitcoin"],
      image: "₿",
      link: "https://github.com/olivmath/brbitcoin"
    },
    {
      title: "Lunes L1 Protocol",
      description: "Tech Lead Blockchain desenvolvendo protocolo L1 token-centric. Redução de 83% no tempo de sync e gestão de validadores",
      tech: ["Scala", "Rust", "L1 Protocol", "LevelDB"],
      image: "⛓️",
      link: "https://lunes.io"
    },
    {
      title: "Extracto DAO",
      description: "Senior Blockchain Engineer liderando squad de 4 pessoas em DeFi protocol para mercado de commodities descentralizado",
      tech: ["Solidity", "DeFi", "ERC2535", "GraphQL"],
      image: "📈",
      link: "https://github.com/olivmath"
    },
    {
      title: "Stellar Network Contributions",
      description: "Official Brazil Ambassador contribuindo com protocolo Stellar, smart contracts Soroban e educação para desenvolvedores",
      tech: ["Stellar", "Soroban", "Rust"],
      image: "⭐",
      link: "https://stellar.org"
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