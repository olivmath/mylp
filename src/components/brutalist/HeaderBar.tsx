"use client";

import { useTranslations, SUPPORTED_LOCALES, type Locale } from "@/lib/i18n";
import { SocialIcons } from "@/components/brutalist/SocialIcons";

export function HeaderBar() {
  const { locale, setLocale } = useTranslations();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-neutral-800">
      <div className="flex items-center justify-between px-4 md:px-8 py-2">
        {/* Socials + Logo */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <SocialIcons />
          </div>
          <div className="w-px h-4 bg-neutral-800" />
          <a
            href="#hero"
            className="text-sm font-black uppercase tracking-wider text-white hover:text-[#FF5722] transition-colors"
          >
            olivmath
          </a>
        </div>

        {/* Language switcher */}
        <div className="flex items-center gap-0">
          {SUPPORTED_LOCALES.map((loc: Locale) => (
            <button
              key={loc}
              onClick={() => setLocale(loc)}
              className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider transition-colors duration-150 cursor-pointer"
              style={{
                backgroundColor: locale === loc ? "#FF5722" : "transparent",
                color: locale === loc ? "#000" : "#737373",
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
