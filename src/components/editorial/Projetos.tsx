"use client";

import { useState, useEffect, useRef } from "react";
import { projects } from "@/data/content";
import { ProjectDrawer } from "./ProjectDrawer";

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export function Projetos() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.05 }
    );

    const elements = sectionRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const drex = featured.find((p) => p.id === "drex");
  const sideProjects = featured.filter((p) => p.id !== "drex");

  return (
    <section ref={sectionRef} id="projetos" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          data-animate
          className="mb-16 opacity-0 translate-y-8 transition-all duration-700"
        >
          <span className="font-mono text-xs tracking-widest text-slate-400 uppercase">
            Portfolio
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mt-3">
            Selected Work
          </h2>
        </div>

        <div
          data-animate
          className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6 opacity-0 translate-y-8 transition-all duration-700 delay-100"
        >
          {drex && (
            <button
              onClick={() => setSelectedProject(drex)}
              className="lg:col-span-3 group text-left bg-slate-50 rounded-2xl p-8 lg:p-10 transition-all hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 bg-royal-600 rounded-full" />
                <span className="font-mono text-xs text-royal-600 tracking-wider uppercase">
                  Featured
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-3 group-hover:text-royal-600 transition-colors">
                {drex.title}
              </h3>
              <p className="font-sans text-sm text-slate-500 leading-relaxed mb-6 line-clamp-2">
                {drex.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {drex.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-3 py-1 bg-white text-slate-600 rounded-full border border-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-royal-600 group-hover:gap-2.5 transition-all">
                View Details <ArrowIcon />
              </span>
            </button>
          )}

          <div className="lg:col-span-2 flex flex-col gap-6">
            {sideProjects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group text-left flex-1 bg-slate-50 rounded-2xl p-8 transition-all hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1"
              >
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-2 group-hover:text-royal-600 transition-colors">
                  {project.title}
                </h3>
                <p className="font-sans text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2.5 py-0.5 bg-white text-slate-600 rounded-full border border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-royal-600 group-hover:gap-2.5 transition-all">
                  View Details <ArrowIcon />
                </span>
              </button>
            ))}
          </div>
        </div>

        <div
          data-animate
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0 translate-y-8 transition-all duration-700 delay-200"
        >
          {rest.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group text-left bg-slate-50 rounded-2xl p-8 transition-all hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1"
            >
              <h3 className="font-serif text-lg font-bold text-slate-900 mb-2 group-hover:text-royal-600 transition-colors">
                {project.title}
              </h3>
              <p className="font-sans text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2.5 py-0.5 bg-white text-slate-600 rounded-full border border-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-royal-600 group-hover:gap-2.5 transition-all">
                View Details <ArrowIcon />
              </span>
            </button>
          ))}
        </div>
      </div>

      <ProjectDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
