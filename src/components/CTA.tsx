import React from 'react';

const CTA = () => {
  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Pronto para Transformar
          <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Sua Ideia em Realidade?
          </span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Vamos conversar sobre seu projeto e descobrir como posso ajudar você a alcançar seus objetivos com soluções tecnológicas inovadoras.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-white mb-2">Desenvolvimento Rápido</h3>
            <p className="text-gray-300 text-sm">Entregas ágeis sem comprometer a qualidade</p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-white mb-2">Foco no Resultado</h3>
            <p className="text-gray-300 text-sm">Soluções alinhadas com seus objetivos de negócio</p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold text-white mb-2">Parceria Completa</h3>
            <p className="text-gray-300 text-sm">Suporte contínuo e comunicação transparente</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Iniciar Projeto
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Agendar Conversa
          </button>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
          <h3 className="text-2xl font-bold text-white mb-6">Entre em Contato</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">📧</div>
              <h4 className="text-white font-semibold mb-1">Email</h4>
              <p className="text-gray-300 text-sm">contato@exemplo.com</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">💬</div>
              <h4 className="text-white font-semibold mb-1">WhatsApp</h4>
              <p className="text-gray-300 text-sm">+55 (11) 99999-9999</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">💼</div>
              <h4 className="text-white font-semibold mb-1">LinkedIn</h4>
              <p className="text-gray-300 text-sm">/in/seu-perfil</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Resposta garantida em até 24 horas • Orçamento gratuito • Consultoria inicial sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;