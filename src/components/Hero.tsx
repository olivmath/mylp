"use client";

import React from "react";

const Hero = () => {
  const companies = [
    "Google",
    "Microsoft",
    "Apple",
    "Amazon",
    "Meta",
    "Netflix",
    "Tesla",
    "Spotify",
    "Uber",
    "Airbnb",
  ];

  return (
    <>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>

      <section className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        </div>

        {/* Header */}
        <header className="relative z-20 p-6">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                olivmath
              </span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-between px-6 lg:px-12 h-full min-h-[calc(100vh-200px)]">
          {/* Left Side - Text Content */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transformando
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ideias em Realidade
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Desenvolvedor apaixonado por criar soluções inovadoras através de
              código limpo e design intuitivo. Especialista em React, Next.js,
              Node.js e tecnologias modernas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Ver Projetos
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Entre em Contato
              </button>
            </div>
          </div>

          {/* Right Side - Image Space */}
          <div className="hidden lg:flex flex-1 justify-center items-center ml-12">
            <div className="w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center border-2 border-white/20 backdrop-blur-sm">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full flex items-center justify-center">
                <div className="text-white/60 text-6xl">
                  {/* Placeholder for image */}
                  <svg
                    className="w-32 h-32"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Companies Marquee */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-black/30 backdrop-blur-sm py-4 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...companies, ...companies, ...companies].map(
              (company, index) => (
                <div
                  key={index}
                  className="mx-8 text-white/70 font-semibold text-lg flex-shrink-0"
                >
                  {company}
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
