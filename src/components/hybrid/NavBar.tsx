"use client";

import { useState, useEffect } from "react";
import { profile, quickLinks } from "@/data/content";

const navItems = [
  { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", label: "Inicio", href: "#hero" },
  { icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", label: "Projetos", href: "#projetos" },
  { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "Hackathons", href: "#hackathons" },
  { icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z", label: "Testemunhos", href: "#testemunhos" },
];

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("#hero");
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const sections = ["hero", "projetos", "hackathons", "testemunhos"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop: vertical left sidebar */}
      <nav
        className="fixed left-0 top-0 z-50 hidden h-full flex-col items-center justify-between border-r border-white/[0.06] bg-[#0f1729]/95 backdrop-blur-xl py-8 transition-all duration-300 md:flex"
        style={{ width: hovered ? "180px" : "72px" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3 px-5 font-display text-lg font-bold text-white overflow-hidden whitespace-nowrap"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#38bdf8]/15 font-mono text-sm font-bold text-[#38bdf8]">
            LO
          </span>
          <span
            className="transition-opacity duration-200"
            style={{ opacity: hovered ? 1 : 0, width: hovered ? "auto" : 0 }}
          >
            {profile.brand}
          </span>
        </a>

        {/* Nav links */}
        <div className="flex flex-col gap-2 w-full px-3">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`group relative flex items-center gap-3 rounded-xl px-3 py-3 transition-all duration-200 overflow-hidden whitespace-nowrap ${
                  isActive
                    ? "bg-[#38bdf8]/10 text-[#38bdf8]"
                    : "text-white/40 hover:bg-white/[0.04] hover:text-white/70"
                }`}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-[3px] rounded-r-full bg-[#38bdf8]" />
                )}
                <svg
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                <span
                  className="font-body text-sm font-medium transition-opacity duration-200"
                  style={{ opacity: hovered ? 1 : 0 }}
                >
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>

        {/* Social icons at bottom */}
        <div className="flex flex-col items-center gap-3 px-3">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/25 transition-colors hover:text-white/60"
            aria-label="GitHub"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/25 transition-colors hover:text-white/60"
            aria-label="LinkedIn"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href={profile.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/25 transition-colors hover:text-white/60"
            aria-label="Twitter"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Mobile: bottom tab bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-white/[0.06] bg-[#0f1729]/95 backdrop-blur-xl px-2 py-2 md:hidden">
        {navItems.map((item) => {
          const isActive = activeSection === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 rounded-lg px-3 py-2 transition-colors ${
                isActive ? "text-[#38bdf8]" : "text-white/40"
              }`}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
              </svg>
              <span className="font-body text-[10px] font-medium">{item.label}</span>
            </a>
          );
        })}
      </nav>
    </>
  );
}
