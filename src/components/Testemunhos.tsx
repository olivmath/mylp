import React from "react";

const Testemunhos = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "CEO, TechStart",
      company: "TechStart",
      content:
        "Trabalhar com este desenvolvedor foi uma experiência excepcional. Entregou o projeto antes do prazo e superou todas as expectativas de qualidade.",
      avatar: "👩‍💼",
      rating: 5,
    },
    {
      name: "João Santos",
      role: "CTO, InnovaCorp",
      company: "InnovaCorp",
      content:
        "Código limpo, documentação impecável e comunicação excelente. Definitivamente um profissional que recomendo para projetos complexos.",
      avatar: "👨‍💻",
      rating: 5,
    },
    {
      name: "Ana Costa",
      role: "Product Manager, DigitalFlow",
      company: "DigitalFlow",
      content:
        "Impressionante capacidade de transformar ideias complexas em soluções elegantes e funcionais. Um verdadeiro parceiro de negócios.",
      avatar: "👩‍🚀",
      rating: 5,
    },
    {
      name: "Carlos Oliveira",
      role: "Founder, StartupX",
      company: "StartupX",
      content:
        "Além das habilidades técnicas excepcionais, demonstrou grande compreensão do negócio e contribuiu com insights valiosos para o produto.",
      avatar: "👨‍🎯",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-xl ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ⭐
      </span>
    ));
  };

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
                <div className="text-4xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-blue-600 font-semibold">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">{renderStars(testimonial.rating)}</div>

              <blockquote className="text-gray-700 leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testemunhos;
