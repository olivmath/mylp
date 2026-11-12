"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/content";
import { useTranslations } from "@/lib/i18n";
import { SectionLabel } from "@/components/brutalist/SectionLabel";
import { theme, layout } from "@/lib/design-system";

type Project = (typeof projects)[number];

function ProjectModal({
  project,
  description,
  milestoneDescriptions,
  onClose,
}: {
  project: Project;
  description: string;
  milestoneDescriptions: Record<string, string>;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80" onClick={onClose} />

      {/* Content */}
      <motion.div
        className="relative bg-[#F2F2F2] text-[#0D0D0D] w-[95vw] max-w-3xl max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-neutral-600 hover:text-black text-2xl font-bold cursor-pointer"
        >
          &times;
        </button>

        {/* Images */}
        {project.images.length > 0 && (
          <div className="flex gap-0 overflow-x-auto">
            {project.images.map((src) => (
              <div key={src} className="relative w-full min-w-full h-48 sm:h-64 md:h-80 shrink-0">
                <Image
                  src={src}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 95vw, 768px"
                />
              </div>
            ))}
          </div>
        )}

        <div className="p-6 sm:p-8 md:p-10">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
            {project.title}
          </h2>

          {/* Description */}
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
            {description}
          </p>

          {/* Tech */}
          <div className="flex gap-2 flex-wrap mb-8">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] md:text-xs uppercase tracking-wider border border-neutral-400 px-2 md:px-3 py-1 text-neutral-600"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative ml-1 mb-8">
            <div
              className="absolute left-[5px] top-2 bottom-2 w-px"
              style={{ backgroundColor: theme.accent }}
            />
            {project.milestones.map((m, mi) => {
              const key = `${project.id}.${m.name}`;
              const desc = milestoneDescriptions[key] ?? "";
              return (
                <div key={mi} className="relative pl-8 pb-6 last:pb-0">
                  <div
                    className="absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full border-2"
                    style={{
                      borderColor: theme.accent,
                      backgroundColor: mi === 0 ? theme.accent : "#F2F2F2",
                    }}
                  />
                  <a
                    href={m.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base font-black uppercase tracking-wider hover:opacity-70 transition-opacity"
                    style={{ color: theme.accentText }}
                  >
                    {m.name} &rarr;
                  </a>
                  {desc && (
                    <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mt-1">
                      {desc}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* External links */}
          {project.links.length > 0 && (
            <div className="border-t border-neutral-300 pt-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 block mb-3">
                Links
              </span>
              <div className="flex flex-col gap-2">
                {project.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm uppercase tracking-wider hover:opacity-70 transition-opacity"
                    style={{ color: theme.accentText }}
                  >
                    {l.label} &rarr;
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({
  project,
  index,
  isOpen,
  onToggle,
  onOpenModal,
  viewProjectLabel,
  description,
  milestoneDescriptions,
}: {
  project: Project;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  onOpenModal: () => void;
  viewProjectLabel: string;
  description: string;
  milestoneDescriptions: Record<string, string>;
}) {
  return (
    <div className="border-b border-neutral-300">
      {/* Header */}
      <div
        className={`flex items-center justify-between ${layout.sidePad} py-4 md:py-6 hover:opacity-80 transition-all duration-150 cursor-pointer`}
        onClick={onToggle}
      >
        <div className="flex items-center gap-4 md:gap-8">
          <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-600 w-12">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-lg sm:text-2xl md:text-4xl font-black uppercase tracking-tight leading-none">
            {project.title}
          </h3>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={(e) => { e.stopPropagation(); onOpenModal(); }}
            className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold border px-3 py-1.5 hover:bg-[var(--accent)] hover:text-white transition-colors hidden sm:block cursor-pointer"
            style={{ color: theme.accentText, borderColor: theme.accentText }}
          >
            {viewProjectLabel}
          </button>
          <motion.span
            className="text-neutral-600 text-2xl select-none"
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            +
          </motion.span>
        </div>
      </div>

      {/* Expanded */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className={`${layout.sidePad} pb-8 md:pb-12 pl-16 md:pl-24 lg:pl-32`}>
              <p className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mb-6">
                {description}
              </p>

              <div className="flex gap-2 flex-wrap mb-8">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] md:text-xs uppercase tracking-wider border border-neutral-400 px-2 md:px-3 py-1 text-neutral-600"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Timeline */}
              <div className="relative ml-1">
                <div
                  className="absolute left-[5px] top-2 bottom-2 w-px"
                  style={{ backgroundColor: theme.accent }}
                />
                {project.milestones.map((m, mi) => {
                  const key = `${project.id}.${m.name}`;
                  const desc = milestoneDescriptions[key] ?? "";
                  return (
                    <div key={mi} className="relative pl-8 pb-6 last:pb-0">
                      <div
                        className="absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full border-2"
                        style={{
                          borderColor: theme.accent,
                          backgroundColor: mi === 0 ? theme.accent : "#F2F2F2",
                        }}
                      />
                      <a
                        href={m.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm md:text-base font-black uppercase tracking-wider hover:opacity-70 transition-opacity"
                        style={{ color: theme.accentText }}
                      >
                        {m.name}
                      </a>
                      {desc && (
                        <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mt-1 max-w-2xl">
                          {desc}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Mobile view project */}
              <button
                onClick={onOpenModal}
                className="mt-6 text-xs uppercase tracking-[0.2em] font-bold border px-4 py-2 hover:bg-[var(--accent)] hover:text-white transition-colors sm:hidden cursor-pointer"
                style={{ color: theme.accentText, borderColor: theme.accentText }}
              >
                {viewProjectLabel} &rarr;
              </button>
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
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const descriptions = t.projetos.descriptions as Record<string, string>;
  const milestoneDescriptions = (t.projetos as Record<string, unknown>).milestoneDescriptions as Record<string, string> ?? {};

  return (
    <section id="projetos" className="bg-[#F2F2F2] text-[#0D0D0D]">
      <SectionLabel label={t.projetos.sectionLabel} />

      {projects.map((project, i) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={i}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          onOpenModal={() => setModalProject(project)}
          viewProjectLabel={t.projetos.viewProject}
          description={descriptions[project.id] ?? ""}
          milestoneDescriptions={milestoneDescriptions}
        />
      ))}

      {/* Modal */}
      <AnimatePresence>
        {modalProject && (
          <ProjectModal
            project={modalProject}
            description={descriptions[modalProject.id] ?? ""}
            milestoneDescriptions={milestoneDescriptions}
            onClose={() => setModalProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
