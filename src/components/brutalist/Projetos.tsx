"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "@/data/content";
import { useTranslations } from "@/lib/i18n";
import { SectionLabel } from "@/components/brutalist/SectionLabel";

function StackedCard({
  project,
  index,
  total,
  viewProjectLabel,
}: {
  project: (typeof projects)[number];
  index: number;
  total: number;
  viewProjectLabel: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"],
  });

  // Each card scales down slightly as it scrolls away, revealing the next card beneath
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.4]);

  return (
    <div ref={cardRef} className="h-screen" style={{ zIndex: total - index }}>
      <motion.div
        className="sticky top-0 h-screen flex items-center border-b border-neutral-800 bg-black"
        style={{
          scale,
          opacity,
          transformOrigin: "top center",
        }}
      >
        <div className="px-4 md:px-8 lg:px-16 w-full">
          <div className="max-w-5xl">
            {/* Index */}
            <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-600 mb-4 block">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>

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
      </motion.div>
    </div>
  );
}

export function Projetos() {
  const { t } = useTranslations();
  return (
    <section id="projetos" className="bg-black text-white">
      <SectionLabel label={t.projetos.sectionLabel} />

      {projects.map((project, i) => (
        <StackedCard
          key={project.id}
          project={project}
          index={i}
          total={projects.length}
          viewProjectLabel={t.projetos.viewProject}
        />
      ))}
    </section>
  );
}
