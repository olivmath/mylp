"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations, SUPPORTED_LOCALES, type Locale } from "@/lib/i18n";

export function FloatingMenu() {
  const [open, setOpen] = useState(false);
  const { locale, setLocale, t } = useTranslations();

  const sections = [
    { label: t.menu.hero, href: "#hero", key: "1" },
    { label: t.menu.proj, href: "#projetos", key: "2" },
    { label: t.menu.hack, href: "#hackathons", key: "3" },
    { label: t.menu.test, href: "#testemunhos", key: "4" },
    { label: t.menu.end, href: "#footer", key: "5" },
  ];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;

      const section = sections.find((s) => s.key === e.key);
      if (section) {
        e.preventDefault();
        document.querySelector(section.href)?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="fixed bottom-6 right-6 z-50 font-display">
      {/* Language switcher */}
      <div
        className="absolute flex gap-0"
        style={{
          bottom: open ? "80px" : "8px",
          right: "8px",
          opacity: open ? 1 : 0,
          transition: "all 200ms ease 220ms",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        {SUPPORTED_LOCALES.map((loc: Locale) => (
          <button
            key={loc}
            onClick={() => setLocale(loc)}
            className="w-10 h-10 text-[10px] font-bold uppercase tracking-wider border border-neutral-700 transition-colors duration-150 cursor-pointer"
            style={{
              backgroundColor: locale === loc ? "#FF5722" : "#000",
              color: locale === loc ? "#000" : "#fff",
            }}
          >
            {loc.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Radial menu items */}
      {sections.map((section, i) => {
        const total = sections.length;
        const angleStart = -Math.PI;
        const angleEnd = -Math.PI / 2;
        const angle = angleStart + (i / (total - 1)) * (angleEnd - angleStart);
        const radius = 100;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <a
            key={section.key}
            href={section.href}
            onClick={() => setOpen(false)}
            className="absolute flex items-center justify-center w-12 h-12 bg-[#FF5722] text-black text-[10px] font-bold uppercase tracking-wider hover:bg-white"
            style={{
              bottom: open ? `${-y + 8}px` : "8px",
              right: open ? `${-x + 8}px` : "8px",
              opacity: open ? 1 : 0,
              transition: `all 200ms ease ${i * 40}ms`,
              pointerEvents: open ? "auto" : "none",
            }}
          >
            <span>{section.label}</span>
            <span className="absolute -top-1 -left-1 text-[8px] text-white bg-black w-4 h-4 flex items-center justify-center">
              {section.key}
            </span>
          </a>
        );
      })}

      {/* FAB trigger */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        className="relative z-10 w-14 h-14 bg-[#FF5722] text-black flex items-center justify-center hover:bg-white transition-colors duration-150 cursor-pointer"
      >
        <div className="flex flex-col gap-[5px]">
          <span
            className="block w-6 h-[2px] bg-current transition-transform duration-200"
            style={{
              transform: open ? "rotate(45deg) translate(2.5px, 2.5px)" : "none",
            }}
          />
          <span
            className="block w-6 h-[2px] bg-current transition-opacity duration-200"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-6 h-[2px] bg-current transition-transform duration-200"
            style={{
              transform: open ? "rotate(-45deg) translate(2.5px, -2.5px)" : "none",
            }}
          />
        </div>
      </button>
    </div>
  );
}
