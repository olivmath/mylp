"use client";

import React, { useState } from "react";
import Image from "next/image";

const COLORS = [
  "bg-blue-600",
  "bg-purple-600",
  "bg-emerald-600",
  "bg-amber-600",
  "bg-rose-600",
  "bg-cyan-600",
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Avatar({
  src,
  name,
  colorClass,
}: {
  src: string;
  name: string;
  colorClass: string;
}) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div
        className={`w-14 h-14 rounded-full ${colorClass} flex items-center justify-center flex-shrink-0`}
      >
        <span className="text-white font-bold text-lg">
          {getInitials(name)}
        </span>
      </div>
    );
  }

  return (
    <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
      <Image
        src={src}
        alt={name}
        width={56}
        height={56}
        className="w-full h-full object-cover"
        onError={() => setImgError(true)}
      />
    </div>
  );
}

const Testemunhos = () => {
  const testimonials = [
    {
      name: "André Novaes",
      role: "Produtor de Conteúdo & Branding",
      company: "NearX",
      linkedin: "https://www.linkedin.com/in/andhnovaes/",
      content:
        "Trabalhar ao lado do Lucas Oliveira é uma experiência transformadora para qualquer profissional que atue em tecnologia e educação. Lucas une visão estratégica, domínio técnico e propósito educacional, exatamente o tipo de profissional capaz de mover toda uma comunidade. Na NearX, ele estruturou e liderou programas educacionais de Blockchain e Web3 que se tornaram referência na América Latina, impactando milhares de desenvolvedores e educadores. A clareza com que ele traduz temas complexos em metodologias práticas é algo raro, e sua capacidade de conectar ecossistemas, empresas e talentos torna cada projeto uma verdadeira experiência de aprendizagem. Lucas combina rigor técnico com empatia pedagógica, e é evidente o quanto ele acredita que ensinar é o caminho mais poderoso para transformar o mercado. Recomendo o Lucas não apenas como Head de Educação em Blockchain, mas como um mentor e inovador que eleva o padrão de tudo o que toca.",
      avatar: "/avatars/andre-novaes.jpg",
    },
    {
      name: "Suely Brusko",
      role: "Tech Career & Life Mentor",
      company: "NearX",
      linkedin: "https://www.linkedin.com/in/suelybrusko/",
      content:
        "Conhecer e trabalhar com Lucas Oliveira foi um divisor de águas para mim, e não exagero ao dizer que ele é um dos profissionais mais inspiradores com quem já cruzei. Como Head of Education na Nearx, Lucas não só lidera a transformação de devs Web2 em mestres de Blockchain e Web3 Security, mas também me mostrou, na prática, o poder de uma educação tech bem executada. Tive a sorte de testemunhar de perto sua genialidade ao criar o Postgraduate Program em Blockchain da Nearx. Ele tem uma capacidade única de traduzir conceitos complexos em aprendizados práticos, sempre com um brilho no olho que contagia qualquer equipe ou aluno. Ele é mais que um líder: é um visionário que deixa marca por onde passa. Recomendo Lucas com todo entusiasmo a quem quer elevar o nível em educação tech!",
      avatar: "/avatars/suely-brusko.jpg",
    },
    {
      name: "Luis Malheiro",
      role: "Senior Software Engineer",
      company: "",
      linkedin: "https://www.linkedin.com/in/luis-malheiro/",
      content:
        "I had the pleasure of working alongside Lucas Bispo and I can confidently say that he is a remarkable professional. Lucas is a young and vibrant individual whose enthusiasm for his work is truly infectious. He has a genuine passion for learning and is constantly seeking out new knowledge and skills to enhance his abilities. It is rare to encounter someone as eager to learn and grow as Lucas, and it is truly inspiring to see his dedication to self-improvement.",
      avatar: "/avatars/luis-malheiro.jpg",
    },
    {
      name: "Ronilton Nunes",
      role: "Software Engineer | Blockchain & Web3",
      company: "Lunes Platform",
      linkedin: "https://www.linkedin.com/in/nunesinc/",
      content:
        "I am writing to recommend you as an exceptional Lead Blockchain with whom I had the pleasure of working on the Lunes Platform. Your expertise in Blockchain technology, attention to detail, analytical skills, and problem-solving abilities were invaluable to the team. Your contributions to the Lunes SDK, Blockchain Documentation, and Rust programming were outstanding, and your leadership qualities were instrumental in ensuring the project's success. I wholeheartedly recommend you for any future projects that require Blockchain expertise, leadership skills, and a strong work ethic. You are a valuable asset to any team.",
      avatar: "/avatars/ronilton-nunes.jpg",
    },
    {
      name: "Isaque Coelho",
      role: "AI Engineer",
      company: "Lunes",
      linkedin: "https://www.linkedin.com/in/coelhoxyz/",
      content:
        "I worked with Lucas for almost 1 year, he is an excellent leader, he is a mentor to me and helped me to follow in this programming world, always with perfect advice, his technical part is impeccable, as well as his leadership. In any company where I am, the first name to be recommended will always be his, I dedicate my best to solving problems and doing them with excellence!",
      avatar: "/avatars/isaque-coelho.jpg",
    },
    {
      name: "André Viotto",
      role: "Senior Backend Engineer",
      company: "",
      linkedin: "https://www.linkedin.com/in/viottto/",
      content:
        "O Lucas possui extrema capacidade técnica, uma excelente didática e criatividade fora de comum. Destaco sua proatividade, assertividade, empatia e excelente capacidade de comunicação.",
      avatar: "/avatars/andre-viotto.jpg",
    },
  ];

  return (
    <section id="testemunhos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O Que Dizem Sobre Meu Trabalho
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Feedback de clientes e parceiros que confiaram em meu trabalho para
            transformar suas ideias em realidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8"
            >
              <div className="flex items-center mb-6">
                <Avatar
                  src={testimonial.avatar}
                  name={testimonial.name}
                  colorClass={COLORS[index % COLORS.length]}
                />
                <div className="ml-4">
                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    {testimonial.name}
                  </a>
                  <p className="text-gray-600">{testimonial.role}</p>
                  {testimonial.company && (
                    <p className="text-sm text-blue-600 font-semibold">
                      {testimonial.company}
                    </p>
                  )}
                </div>
              </div>

              <blockquote className="text-gray-700 leading-relaxed italic">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testemunhos;
