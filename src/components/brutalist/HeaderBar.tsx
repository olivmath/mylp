"use client";

import { useTranslations, SUPPORTED_LOCALES, type Locale } from "@/lib/i18n";
import { SocialIcons } from "@/components/brutalist/SocialIcons";
import { theme, layout } from "@/lib/design-system";

export function HeaderBar() {
  const { locale, setLocale } = useTranslations();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)] border-b border-neutral-800">
      <div className={`flex items-center justify-between ${layout.sidePad} py-3`}>
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

        {/* Language switcher */}
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
    </header>
  );
}
