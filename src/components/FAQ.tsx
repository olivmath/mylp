"use client";

import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Qual é sua experiência com Smart Contracts?",
      answer:
        "6+ anos desenvolvendo Smart Contracts em Solidity (Ethereum, Polygon, Arbitrum) e Rust (Stellar Soroban). Experiência inclui DeFi protocols, tokenomics, NFTs, e mecanismos de segurança avançados com ZKP. Atuei como Principal Engineer no DREX (CBDC do Brasil) desenvolvendo contratos para o Banco Central.",
    },
    {
      question: "Você trabalha com Zero-Knowledge Proofs?",
      answer:
        "Sim, implemento ZKPs usando Noir, circom e snarkjs. No projeto DREX, desenvolvi infraestrutura de privacidade usando Parfim e Anonymous Zether para compliance com sigilo bancário e LGPD. Também criei merklez, biblioteca ZKP usando Noir-lang e Rust.",
    },
    {
      question: "Qual sua contribuição ao ecossistema Stellar?",
      answer:
        "Sou Official Brazil Ambassador da Stellar Network. Contribuo com implementações em Soroban (Rust smart contracts), organizo hackathons (500+ participantes), e produzo conteúdo educacional. Venci hackathon Stellar 2024 com protocolo de pagamentos em stream.",
    },
    {
      question: "Como é seu processo de auditoria de contratos?",
      answer:
        "Auditoria em 3 fases: 1) Análise estática com ferramentas (Slither, Mythril), 2) Testes de unidade/integração com Foundry/Hardhat, 3) Simulação de cenários adversariais e threat modeling. Sigo SDLC (Security Development Lifecycle) com documentação completa de vulnerabilidades.",
    },
    {
      question: "Qual seu papel como Head of Education na NearX?",
      answer:
        "Lidero equipe de 3 profissionais criando programas educacionais em blockchain. Desenvolvi o primeiro programa de pós-graduação lato sensu em Blockchain Engineering do Brasil, organizei 10+ bootcamps (8000+ alunos), e cresci canal YouTube de 0 a 20k inscritos.",
    },
    {
      question: "Qual sua experiência com DREX?",
      answer:
        "Atuo como Principal Blockchain Engineer no DREX (Real Digital), CBDC do Banco Central do Brasil. Desenvolvi infraestrutura de privacidade com ZKP, arquitetura de smart contracts para transações interbancárias, e integração com Visa Tokenized Asset Platform (VTAP).",
    },
    {
      question: "Quais tecnologias você domina?",
      answer:
        "Blockchain: Ethereum (Solidity), Stellar (Soroban/Rust), Bitcoin, L1/L2. Linguagens: Rust, Python, TypeScript, Solidity. Infraestrutura: Docker, Kubernetes, CI/CD, Hyperledger Besu. Especialidades: ZKP, DeFi, Tokenização RWA, Security Auditing.",
    },
    {
      question: "Como você se mantém atualizado?",
      answer:
        "Participação ativa em comunidades (Stellar, Ethereum, OpenSense), leitura de EIPs/RFCs, contribuições open-source (Merkly com 55k+ downloads), organização de hackathons, e networking em conferências. Também ensino 2500+ estudantes, o que me força a estar sempre atualizado.",
    },
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
          <p className="text-xl text-gray-600">
            Esclareça suas dúvidas sobre meus serviços, processos e metodologias
            de trabalho.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <span
                  className={`transform transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-6 h-6 text-gray-600"
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
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
