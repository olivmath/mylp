import React from "react";

const Testemunhos = () => {
  const testimonials = [
    {
      name: "André Novaes",
      role: "Produtor de Conteúdo & Branding",
      company: "NearX",
      content:
        "Trabalhar ao lado do Lucas é transformador. Ele estruturou programas de Blockchain e Web3 que se tornaram referência na América Latina. Lucas combina rigor técnico com empatia pedagógica, e sua capacidade de conectar ecossistemas e talentos torna cada projeto uma experiência de aprendizagem.",
      avatar: "👨‍💼",
      rating: 5,
    },
    {
      name: "Suely Brusko",
      role: "Tech Career Mentor",
      company: "NearX",
      content:
        "Lucas é um dos profissionais mais inspiradores com quem já trabalhei. Como Head of Education, ele não só lidera a transformação de devs Web2 em mestres de Blockchain, mas criou o Postgraduate Program em Blockchain. Ele tem capacidade única de traduzir conceitos complexos em aprendizados práticos.",
      avatar: "👩‍💼",
      rating: 5,
    },
    {
      name: "Luis Malheiro",
      role: "Senior Software Engineer",
      company: "Azion",
      content:
        "Lucas is a remarkable professional with genuine passion for learning. His enthusiasm for work is infectious, and he is constantly seeking new knowledge to enhance his abilities. It's inspiring to see his dedication to self-improvement and technical excellence.",
      avatar: "👨‍💻",
      rating: 5,
    },
    {
      name: "Ronilton Nunes",
      role: "Blockchain Engineer",
      company: "Lunes Platform",
      content:
        "Exceptional Lead Blockchain with invaluable expertise in Blockchain technology. Your contributions to Lunes SDK, Blockchain Documentation, and Rust programming were outstanding. Your leadership qualities were instrumental in ensuring the project's success.",
      avatar: "⚡",
      rating: 5,
    },
    {
      name: "Isaque Coelho",
      role: "AI Engineer",
      company: "Lunes",
      content:
        "Lucas is an excellent leader and mentor who helped me follow in the programming world with perfect advice. His technical part is impeccable, as well as his leadership. In any company where I am, the first name to be recommended will always be his.",
      avatar: "🤖",
      rating: 5,
    },
    {
      name: "André Viotto",
      role: "Senior Backend Engineer",
      company: "Lunes",
      content:
        "Lucas possui extrema capacidade técnica, excelente didática e criatividade fora do comum. Destaco sua proatividade, assertividade, empatia e excelente capacidade de comunicação.",
      avatar: "💻",
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
