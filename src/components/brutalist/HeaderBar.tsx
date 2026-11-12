"use client";

import { useState } from "react";
import { useTranslations, SUPPORTED_LOCALES, type Locale } from "@/lib/i18n";
import { SocialIcons } from "@/components/brutalist/SocialIcons";
import { theme, layout } from "@/lib/design-system";

export function HeaderBar() {
  const { locale, setLocale } = useTranslations();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)] border-b border-neutral-800">
      <div className={`flex items-center justify-between ${layout.sidePad} py-3`}>
        {/* Logo + desktop navigation */}
        <div className="flex items-center gap-6">
          <a
            href="#hero"
            className="text-xl md:text-2xl font-black uppercase tracking-wider text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
          >
            olivmath
          </a>
          <div className="hidden md:block w-px h-6 bg-neutral-800" />
          <div className="hidden md:flex items-center gap-4">
            <SocialIcons size="w-5 h-5" />
          </div>
        </div>

        {/* Desktop language switcher */}
        <div className="hidden md:flex items-center gap-0">
          {SUPPORTED_LOCALES.map((loc: Locale) => (
            <button
              key={loc}
              onClick={() => setLocale(loc)}
              className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors duration-150 cursor-pointer"
              style={{
                backgroundColor: locale === loc ? theme.accent : "transparent",
                color: locale === loc ? "#fff" : "#a1a1a1",
              }}
            >
              {loc.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center border border-neutral-700 text-[var(--foreground)]"
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className={`md:hidden border-t border-neutral-800 bg-[var(--background)] ${layout.sidePad} py-5`}
          onClick={() => setMenuOpen(false)}
        >
          <nav aria-label="Mobile navigation" className="flex flex-wrap items-center gap-5">
            <SocialIcons size="w-6 h-6" />
          </nav>

          <div className="mt-5 flex items-center border-t border-neutral-800 pt-5">
            {SUPPORTED_LOCALES.map((loc: Locale) => (
              <button
                key={loc}
                onClick={() => setLocale(loc)}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider cursor-pointer"
                style={{
                  backgroundColor: locale === loc ? theme.accent : "transparent",
                  color: locale === loc ? "#fff" : "#a1a1a1",
                }}
              >
                {loc.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
