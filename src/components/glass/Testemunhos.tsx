import { testimonials } from "@/data/content";

export function Testemunhos() {
  return (
    <section
      id="testemunhos"
      className="relative py-24 lg:py-32"
      style={{ background: "#0d1b2e" }}
    >
      {/* Subtle gradient transitions */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0a1628] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a1628] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-sky-400/70">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            O que dizem sobre mim
          </h2>
          <p className="max-w-2xl text-white/50 font-sans">
            Recomendacoes de colegas, liderados e parceiros de projetos.
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur transition-all duration-400 hover:border-white/12 hover:bg-white/[0.05]"
            >
              <div className="space-y-5">
                {/* Quote */}
                <div className="relative">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="absolute -top-1 -left-1 w-6 h-6 text-sky-400/10"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                  </svg>
                  <p className="text-sm text-white/60 leading-relaxed italic pl-4">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-white/[0.04]">
                  {/* Avatar placeholder */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <span className="text-xs font-display font-semibold text-white/60">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white/80">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-white/40">
                      {testimonial.role}
                      <span className="text-sky-400/70">
                        {" "}
                        / {testimonial.company}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
