import { projects } from "@/data/content";

export function Projetos() {
  return (
    <section id="projetos" className="bg-[#FAF9F6] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="flex items-baseline justify-between mb-16 border-b border-[#2D2D2D]/10 pb-6">
          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#B8860B] mb-2">
              01
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2D2D2D]">
              Projetos
            </h2>
          </div>
          <p className="font-body text-xs text-[#2D2D2D]/40 tracking-wider uppercase hidden sm:block">
            Enterprise & Open Source
          </p>
        </div>

        {/* Magazine article spreads */}
        <div className="space-y-0">
          {projects.map((project, i) => {
            const isOdd = i % 2 === 0;
            return (
              <article
                key={project.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-12 md:py-16 border-b border-[#2D2D2D]/8 last:border-b-0"
              >
                {/* Accent block */}
                <div
                  className={`md:col-span-5 ${
                    isOdd ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <div
                    className={`aspect-[4/3] rounded-sm flex items-center justify-center relative overflow-hidden ${
                      project.featured
                        ? "bg-[#7C9082]/12"
                        : "bg-[#2D2D2D]/5"
                    }`}
                  >
                    {/* Decorative project number */}
                    <span className="font-serif text-[120px] sm:text-[160px] text-[#2D2D2D]/[0.04] leading-none select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Tech badges overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] px-2 py-1 bg-[#FAF9F6]/90 text-[#2D2D2D]/70 border border-[#2D2D2D]/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Text content */}
                <div
                  className={`md:col-span-7 flex flex-col justify-center ${
                    isOdd ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <sup className="font-serif text-xs text-[#B8860B] mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </sup>

                  <h3 className="font-serif text-2xl sm:text-3xl text-[#2D2D2D] mb-4 leading-tight">
                    {project.title}
                  </h3>

                  <p className="font-body text-base text-[#2D2D2D]/60 leading-relaxed mb-6 max-w-lg">
                    {project.description}
                  </p>

                  {project.featured && (
                    <span className="inline-flex items-center gap-2 font-body text-[10px] tracking-[0.2em] uppercase text-[#B8860B] mb-4">
                      <span className="w-4 h-[1px] bg-[#B8860B]" />
                      Featured
                    </span>
                  )}

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-body text-sm text-[#2D2D2D] hover:text-[#B8860B] transition-colors group mt-2"
                  >
                    <span className="border-b border-current pb-0.5">
                      View Project
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
