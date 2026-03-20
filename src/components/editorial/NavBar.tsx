"use client";

import { useState } from "react";
import { profile, quickLinks } from "@/data/content";

const languages = ["PT", "EN", "ES"] as const;

export function NavBar() {
  const [activeLang, setActiveLang] = useState<(typeof languages)[number]>("PT");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#hero"
            className="font-serif text-2xl font-bold tracking-tight text-slate-900"
          >
            {profile.brand}
          </a>

          <div className="hidden md:flex items-center gap-8">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-1 border border-slate-200 rounded-full px-1 py-0.5">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveLang(lang)}
                  className={`font-mono text-xs px-2.5 py-1 rounded-full transition-colors ${
                    activeLang === lang
                      ? "bg-slate-900 text-white"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <a
              href={profile.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm font-medium bg-royal-600 text-white px-5 py-2 rounded-full transition-colors hover:bg-royal-500"
            >
              Agendar Call
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-900"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="px-6 py-4 space-y-3">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block font-sans text-sm font-medium text-slate-600 py-2"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-1 pt-2">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveLang(lang)}
                  className={`font-mono text-xs px-2.5 py-1 rounded-full transition-colors ${
                    activeLang === lang
                      ? "bg-slate-900 text-white"
                      : "text-slate-400"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
            <a
              href={profile.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center font-sans text-sm font-medium bg-royal-600 text-white px-5 py-2.5 rounded-full mt-3"
            >
              Agendar Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
