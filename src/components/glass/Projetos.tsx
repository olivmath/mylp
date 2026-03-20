"use client";

import { useState } from "react";
import { projects } from "@/data/content";
import { ProjectDrawer } from "./ProjectDrawer";

const featured = projects.filter((p) => p.featured);
const others = projects.filter((p) => !p.featured);

export function Projetos() {
  const [activeProject, setActiveProject] = useState<
    (typeof projects)[number] | null
  >(null);

  return (
    <section
      id="projetos"
      className="relative py-24 lg:py-32"
      style={{ background: "#0f1729" }}
    >
      {/* Subtle top gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a1628] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-sky-400/70">
            Portfolio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Projetos em destaque
          </h2>
          <p className="max-w-2xl text-white/50 font-sans">
            Sistemas blockchain, protocolos criptograficos e ferramentas open-source
            que impactam milhares de desenvolvedores.
          </p>
        </div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {featured.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-lg text-left transition-all duration-500 hover:border-sky-400/25 hover:bg-white/[0.07] hover:shadow-[0_0_30px_rgba(56,189,248,0.08)] hover:-translate-y-0.5"
            >
              {/* Glow accent */}
              <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-sky-400/[0.03] to-transparent" />

              <div className="relative space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-lg font-semibold text-white group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 text-white/20 transition-all group-hover:text-sky-400/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <p className="text-sm text-white/50 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/8 bg-white/5 px-2.5 py-0.5 text-[10px] font-mono text-white/50 tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Other projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {others.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 backdrop-blur text-left transition-all duration-400 hover:border-white/15 hover:bg-white/[0.05] hover:-translate-y-0.5"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-sm font-semibold text-white/90 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-3.5 h-3.5 text-white/15 transition-all group-hover:text-white/40"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <p className="text-xs text-white/40 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 text-[10px] font-mono text-white/40"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-[10px] font-mono text-white/30 py-0.5">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <ProjectDrawer
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
