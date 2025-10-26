'use client';

import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Quais tecnologias você domina?",
      answer: "Trabalho principalmente com React, Next.js, Node.js, TypeScript, Python, e bancos de dados como PostgreSQL e MongoDB. Também tenho experiência com AWS, Docker, e diversas APIs e integrações."
    },
    {
      question: "Qual é o prazo médio para desenvolvimento de um projeto?",
      answer: "O prazo varia conforme a complexidade do projeto. Um site simples pode levar 1-2 semanas, enquanto aplicações mais complexas podem levar de 1-3 meses. Sempre forneço estimativas detalhadas após análise dos requisitos."
    },
    {
      question: "Como funciona o processo de desenvolvimento?",
      answer: "Sigo uma metodologia ágil: 1) Análise de requisitos e planejamento, 2) Design e prototipagem, 3) Desenvolvimento iterativo com entregas parciais, 4) Testes e refinamentos, 5) Deploy e treinamento."
    },
    {
      question: "Você oferece suporte pós-entrega?",
      answer: "Sim! Ofereço 30 dias de suporte gratuito após a entrega para correções de bugs. Também disponibilizo planos de manutenção mensal para atualizações e melhorias contínuas."
    },
    {
      question: "Trabalha com projetos de qualquer tamanho?",
      answer: "Aceito projetos desde landing pages simples até aplicações enterprise complexas. Cada projeto é avaliado individualmente para garantir que posso entregar a qualidade esperada."
    },
    {
      question: "Como é definido o orçamento do projeto?",
      answer: "O orçamento é baseado na complexidade, tempo estimado, tecnologias envolvidas e urgência. Forneço propostas detalhadas com escopo claro e possibilidade de pagamento parcelado."
    },
    {
      question: "Você trabalha em equipe ou apenas sozinho?",
      answer: "Trabalho tanto individualmente quanto em equipe, dependendo do projeto. Para projetos maiores, posso colaborar com designers, outros desenvolvedores e especialistas conforme necessário."
    },
    {
      question: "Oferece consultoria técnica?",
      answer: "Sim, ofereço consultoria para arquitetura de software, escolha de tecnologias, code review, otimização de performance e estratégias de desenvolvimento."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Esclareça suas dúvidas sobre meus serviços, processos e metodologias de trabalho.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <div
                    className={`w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-6">
              Entre em contato comigo para uma conversa personalizada sobre seu projeto.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Falar Comigo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;