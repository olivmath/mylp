"use client";

import { useTranslations, SUPPORTED_LOCALES, type Locale } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { SocialIcons } from "@/components/brutalist/SocialIcons";
import { theme } from "@/lib/design-system";

export function HeaderBar() {
  const { locale, setLocale } = useTranslations();
  const { mode, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)] border-b border-neutral-800 transition-colors duration-300">
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-16 py-3">
        {/* Logo + Socials */}
        <div className="flex items-center gap-6">
          <a
            href="#hero"
            className="text-xl md:text-2xl font-black uppercase tracking-wider text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
          >
            olivmath
          </a>
          <div className="w-px h-6 bg-neutral-800" />
          <div className="flex items-center gap-4">
            <SocialIcons size="w-5 h-5" />
          </div>
        </div>

        {/* Theme toggle + Language switcher */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="px-3 py-1.5 text-base font-bold transition-colors duration-150 cursor-pointer text-neutral-400 hover:text-[var(--foreground)]"
            aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={mode === "dark" ? "Light mode" : "Dark mode"}
          >
            {mode === "dark" ? "\u2600" : "\u25CF"}
          </button>
          <div className="w-px h-6 bg-neutral-800" />
          <div className="flex items-center gap-0">
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
        </div>
      </div>
    </header>
  );
}
