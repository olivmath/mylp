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

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 p-4 font-mono"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div className="w-full max-w-[700px] border border-[#333] bg-[#0C0C0C] rounded-lg overflow-hidden">
        {/* Modal title bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#1a1a1a] border-b border-[#333]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <button
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-110 cursor-pointer"
              />
              <span className="w-3 h-3 rounded-full bg-[#febc2e] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#28c840] inline-block" />
            </div>
            <span className="ml-2 text-[#888] text-xs">
              cat {project.id}/README.md
            </span>
          </div>
        </div>

        {/* Modal content */}
        <div className="p-4 sm:p-6 text-sm leading-relaxed max-h-[70vh] overflow-y-auto">
          <div className="text-[#888]">$ cat {project.id}/README.md</div>
          <div className="mt-4 text-[#00FF41]">
            # {project.title}
          </div>
          <div className="mt-3 text-[#ccc]">{project.description}</div>

          <div className="mt-4 text-[#888]">## Tech Stack</div>
          <div className="mt-1 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[#FFB000] border border-[#FFB000]/30 px-2 py-0.5 text-xs"
              >
                {t}
              </span>
            ))}
          </div>

          {project.featured && (
            <div className="mt-3 text-[#00D4FF] text-xs">[featured]</div>
          )}

          <div className="mt-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00D4FF] hover:underline text-sm"
            >
              {">"} {project.link}
            </a>
          </div>

          <div className="mt-6 text-[#555] text-xs">
            Press ESC or click outside to close
          </div>
        </div>
      </div>
    </div>
  );
}
