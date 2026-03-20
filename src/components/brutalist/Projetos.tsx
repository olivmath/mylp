"use client";

import { projects } from "@/data/content";
import { useTranslations } from "@/lib/i18n";

function ProjectCard({ project, viewProjectLabel }: { project: (typeof projects)[number]; viewProjectLabel: string }) {
  return (
    <div className="border-b border-neutral-800 px-4 md:px-8 lg:px-16 py-12 md:py-16">
      <div className="max-w-5xl">
        <h3 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight mb-3 md:mb-6 leading-[0.85]">
          {project.title}
        </h3>
        <p className="text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mb-6 md:mb-8">
          {project.description}
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <div className="flex gap-2 flex-wrap">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] md:text-xs uppercase tracking-wider border border-neutral-700 px-2 md:px-3 py-1 text-neutral-400"
              >
                {t}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#FF5722] hover:text-white transition-colors duration-150"
          >
            {viewProjectLabel} &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export function Projetos() {
  const { t } = useTranslations();
  return (
    <section id="projetos" className="bg-black text-white font-display">
      <div className="border-t border-b border-neutral-800 px-4 md:px-8 py-3">
        <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">
          {t.projetos.sectionLabel}
        </span>
      </div>

      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} viewProjectLabel={t.projetos.viewProject} />
      ))}
    </section>
  );
}
