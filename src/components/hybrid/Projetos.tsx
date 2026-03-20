"use client";

import { useState, useRef, useCallback } from "react";
import { projects } from "@/data/content";
import ProjectDrawer from "./ProjectDrawer";

type Project = (typeof projects)[number];

const accentColors = [
  "from-[#2563eb] to-[#38bdf8]",
  "from-[#38bdf8] to-[#7dd3fc]",
  "from-[#1a2744] to-[#2563eb]",
  "from-[#0f1729] to-[#38bdf8]",
  "from-[#2563eb] to-[#1a2744]",
  "from-[#38bdf8] to-[#2563eb]",
  "from-[#1e3a5f] to-[#38bdf8]",
  "from-[#0f1729] to-[#2563eb]",
];

export default function Projetos() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selected, setSelected] = useState<Project | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, projects.length - 1));
    setCurrentSlide(clamped);
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({ left: slideWidth * clamped, behavior: "smooth" });
    }
  }, []);

  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.offsetWidth;
      const newIndex = Math.round(scrollRef.current.scrollLeft / slideWidth);
      setCurrentSlide(newIndex);
    }
  }, []);

  return (
    <>
      <section id="projetos" className="relative bg-[#f8fafc] py-20 lg:py-28">
        {/* Section header */}
        <div className="mb-12 px-8 lg:px-16">
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-[#38bdf8]">
            Portfolio
          </p>
          <h2 className="mb-4 font-serif text-4xl font-bold leading-tight text-[#0f172a] lg:text-5xl">
            Projetos que{" "}
            <span className="italic text-[#2563eb]">definem carreiras</span>
          </h2>
          <p className="max-w-xl font-body text-lg text-[#64748b]">
            De protocolos L1 ao Real Digital do Banco Central, cada projeto
            resolveu problemas reais em escala.
          </p>
        </div>

        {/* Horizontal scroll carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="w-full flex-shrink-0 snap-center px-8 lg:px-16"
            >
              <button
                onClick={() => setSelected(project)}
                className="group flex w-full flex-col overflow-hidden rounded-3xl border border-black/[0.04] bg-white shadow-sm transition-all duration-300 hover:shadow-xl lg:flex-row lg:min-h-[420px]"
              >
                {/* Left: number + text */}
                <div className="flex flex-1 flex-col justify-between p-8 text-left lg:p-12">
                  <div>
                    <div className="mb-4 flex items-center gap-4">
                      <span className="font-serif text-6xl font-bold text-[#0f172a]/[0.07] lg:text-8xl">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {project.featured && (
                        <span className="rounded-full bg-[#38bdf8]/10 px-3 py-1 font-mono text-xs font-medium text-[#38bdf8]">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="mb-3 font-display text-2xl font-bold text-[#0f172a] lg:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mb-6 max-w-md font-body text-base leading-relaxed text-[#64748b]">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-[#f8fafc] px-3 py-1 font-mono text-xs text-[#64748b] ring-1 ring-black/[0.06]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 font-body text-sm font-semibold text-[#2563eb] transition-colors group-hover:text-[#38bdf8]">
                      Ver detalhes
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Right: colored accent block */}
                <div className={`hidden w-[280px] shrink-0 bg-gradient-to-br ${accentColors[i % accentColors.length]} lg:block xl:w-[340px]`}>
                  <div className="flex h-full items-center justify-center p-8">
                    <span className="font-display text-[120px] font-bold leading-none text-white/10 xl:text-[160px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Navigation dots + arrows */}
        <div className="mt-10 flex items-center justify-center gap-6 px-8">
          <button
            onClick={() => scrollToSlide(currentSlide - 1)}
            disabled={currentSlide === 0}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.08] bg-white text-[#0f172a] transition-all hover:bg-[#f8fafc] disabled:opacity-30"
            aria-label="Previous project"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToSlide(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentSlide
                    ? "w-8 bg-[#2563eb]"
                    : "w-2 bg-[#0f172a]/10 hover:bg-[#0f172a]/20"
                }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => scrollToSlide(currentSlide + 1)}
            disabled={currentSlide === projects.length - 1}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.08] bg-white text-[#0f172a] transition-all hover:bg-[#f8fafc] disabled:opacity-30"
            aria-label="Next project"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide counter */}
        <div className="mt-4 text-center font-mono text-xs text-[#64748b]/60">
          {String(currentSlide + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </div>
      </section>

      <ProjectDrawer project={selected} onClose={() => setSelected(null)} />

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}
