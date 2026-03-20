"use client";

import { useEffect } from "react";

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

export default function ProjectDrawer({ project, onClose }: ProjectDrawerProps) {
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
      {/* Full-screen overlay with blur */}
      <div
        className={`fixed inset-0 z-[60] bg-[#0f1729]/70 backdrop-blur-md transition-opacity duration-300 ${
          project ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Centered modal (not side drawer) */}
      <div
        className={`fixed inset-0 z-[70] flex items-center justify-center p-4 transition-all duration-500 ${
          project ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-95"
        }`}
      >
        <div
          className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0f1729]/90 backdrop-blur-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {project && (
            <>
              {/* Top accent gradient bar */}
              <div className="h-1 w-full bg-gradient-to-r from-[#2563eb] via-[#38bdf8] to-[#2563eb]" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-5 rounded-full border border-white/10 p-2 text-white/50 transition-colors hover:bg-white/5 hover:text-white"
                aria-label="Close modal"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Content */}
              <div className="p-8 lg:p-10">
                <p className="mb-2 font-mono text-xs text-[#38bdf8]">
                  /{project.id}
                </p>
                <h2 className="mb-6 font-display text-3xl font-bold text-white lg:text-4xl">
                  {project.title}
                </h2>

                <div className="mb-8">
                  <h3 className="mb-2 font-body text-xs font-semibold uppercase tracking-widest text-white/30">
                    About
                  </h3>
                  <p className="font-body text-base leading-relaxed text-white/70">
                    {project.description}
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="mb-3 font-body text-xs font-semibold uppercase tracking-widest text-white/30">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[#38bdf8]/20 bg-[#38bdf8]/10 px-3 py-1.5 font-mono text-xs text-[#38bdf8]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#38bdf8] px-6 py-3.5 font-body text-sm font-semibold text-[#0f1729] transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.3)]"
                >
                  View Project
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
