"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/content";
import { useTranslations } from "@/lib/i18n";
import { SectionLabel } from "@/components/brutalist/SectionLabel";
import { theme, layout } from "@/lib/design-system";

function ProjectCard({
  project,
  index,
  isOpen,
  onToggle,
  viewProjectLabel,
}: {
  project: (typeof projects)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  viewProjectLabel: string;
}) {
  return (
    <div
      className="border-b border-neutral-300 cursor-pointer group"
      onClick={onToggle}
    >
      {/* Collapsed header - always visible */}
      <div className={`flex items-center justify-between ${layout.sidePad} py-4 md:py-6 hover:opacity-80 transition-all duration-150`}>
        <div className="flex items-center gap-4 md:gap-8">
          <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-600 w-12">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-lg sm:text-2xl md:text-4xl font-black uppercase tracking-tight leading-none">
            {project.title}
          </h3>
        </div>
        <motion.span
          className="text-neutral-600 text-2xl select-none"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          +
        </motion.span>
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className={`${layout.sidePad} pb-6 md:pb-10 pl-16 md:pl-24 lg:pl-32`}>
              <p className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mb-6">
                {project.description}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] md:text-xs uppercase tracking-wider border border-neutral-400 px-2 md:px-3 py-1 text-neutral-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-xs md:text-sm uppercase tracking-[0.3em] hover:text-black transition-colors duration-150"
                  style={{ color: theme.accentTextLight }}
                >
                  {viewProjectLabel} &rarr;
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Projetos() {
  const { t } = useTranslations();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="projetos" className="bg-[#F2F2F2] text-[#0D0D0D] transition-colors duration-300">
      <SectionLabel label={t.projetos.sectionLabel} />

      {projects.map((project, i) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={i}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          viewProjectLabel={t.projetos.viewProject}
        />
      ))}
    </section>
  );
}
