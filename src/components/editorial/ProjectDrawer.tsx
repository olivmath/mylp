"use client";

import { useEffect, useCallback } from "react";

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
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, handleKeyDown]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-[fadeIn_300ms_ease-out]"
        onClick={onClose}
      />

      <div className="absolute top-0 right-0 bottom-0 w-full max-w-lg bg-white shadow-2xl animate-[slideIn_350ms_ease-out]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100">
            <span className="font-mono text-xs tracking-widest text-slate-400 uppercase">
              Project Details
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-900"
              aria-label="Close drawer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-8 py-8">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">
              {project.title}
            </h2>

            <p className="font-sans text-base text-slate-600 leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="mb-8">
              <h3 className="font-mono text-xs tracking-widest text-slate-400 uppercase mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {project.featured && (
              <div className="mb-8">
                <span className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 bg-royal-600/10 text-royal-600 rounded-full">
                  <span className="w-1.5 h-1.5 bg-royal-600 rounded-full" />
                  Featured Project
                </span>
              </div>
            )}
          </div>

          <div className="px-8 py-6 border-t border-slate-100">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full font-sans text-sm font-semibold bg-slate-900 text-white px-6 py-3.5 rounded-full transition-colors hover:bg-slate-800"
            >
              View Project
              <svg
                width="16"
                height="16"
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
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
