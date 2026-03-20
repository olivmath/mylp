"use client";

import { useEffect } from "react";
import { profile } from "@/data/content";

const menuItems = [
  { label: "Projetos", href: "#projetos", description: "Open-source & enterprise blockchain work" },
  { label: "Hackathons", href: "#hackathons", description: "4x Web3 hackathon winner, including NASA" },
  { label: "Testemunhos", href: "#testemunhos", description: "What colleagues and clients say" },
  { label: "Contato", href: "#footer", description: "Schedule a call or connect" },
];

interface FullScreenMenuProps {
  open: boolean;
  onClose: () => void;
}

export function FullScreenMenu({ open, onClose }: FullScreenMenuProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[60] flex flex-col transition-all duration-500 ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      style={{ backgroundColor: "#FAF9F6" }}
    >
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#2D2D2D]/10">
        <span className="font-serif text-2xl tracking-tight text-[#2D2D2D]">
          {profile.brand}
        </span>
        <button
          onClick={onClose}
          className="p-2 text-[#2D2D2D]"
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 md:px-24 lg:px-32">
        <nav className="space-y-8 sm:space-y-12">
          {menuItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="group flex items-baseline gap-6 sm:gap-10"
              style={{
                transform: open ? "translateY(0)" : "translateY(2rem)",
                opacity: open ? 1 : 0,
                transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${150 + i * 80}ms`,
              }}
            >
              <span className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#2D2D2D] group-hover:text-[#B8860B] transition-colors">
                {item.label}
              </span>
              <span className="hidden sm:inline font-body text-sm text-[#2D2D2D]/50 max-w-[200px]">
                {item.description}
              </span>
            </a>
          ))}
        </nav>
      </div>

      <div className="px-8 sm:px-16 md:px-24 lg:px-32 pb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 border-t border-[#2D2D2D]/10 pt-6">
        <a
          href={profile.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-sm text-[#2D2D2D]/60 hover:text-[#B8860B] transition-colors"
        >
          GitHub
        </a>
        <a
          href={profile.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-sm text-[#2D2D2D]/60 hover:text-[#B8860B] transition-colors"
        >
          LinkedIn
        </a>
        <a
          href={profile.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-sm text-[#2D2D2D]/60 hover:text-[#B8860B] transition-colors"
        >
          X / Twitter
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="font-body text-sm text-[#2D2D2D]/60 hover:text-[#B8860B] transition-colors"
        >
          {profile.email}
        </a>
      </div>
    </div>
  );
}
