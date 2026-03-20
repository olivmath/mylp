"use client";

import { useEffect, useRef } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  featured?: boolean;
}

interface ProjectDrawerProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDrawer({ project, onClose }: ProjectDrawerProps) {
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        ref={backdropRef}
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          project ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-lg transform transition-transform duration-500 ease-out ${
          project ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full border-l border-white/10 bg-white/[0.06] backdrop-blur-2xl overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 flex items-center justify-between border-b border-white/10 bg-white/[0.04] backdrop-blur-xl px-6 py-4">
            <h2 className="font-display text-lg font-semibold text-white truncate pr-4">
              {project?.title}
            </h2>
            <button
              onClick={onClose}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition-all duration-200 hover:border-sky-400/30 hover:text-sky-400 hover:shadow-[0_0_12px_rgba(56,189,248,0.15)]"
              aria-label="Close drawer"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          </div>

          {project && (
            <div className="px-6 py-8 space-y-8">
              {/* Description */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-widest text-sky-400/70">
                  Sobre o projeto
                </h3>
                <p className="text-sm leading-relaxed text-white/70 font-sans">
                  {project.description}
                </p>
              </div>

              {/* Tech stack */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-widest text-sky-400/70">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-white/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-widest text-sky-400/70">
                  Link
                </h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-sky-400 transition-colors hover:text-sky-300"
                >
                  {project.link}
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>

              {/* Featured badge */}
              {project.featured && (
                <div className="rounded-xl border border-sky-400/15 bg-sky-400/5 p-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-400" />
                    <span className="text-xs font-mono text-sky-400">
                      Featured Project
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-white/50">
                    This is one of the highlighted projects in the portfolio.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
