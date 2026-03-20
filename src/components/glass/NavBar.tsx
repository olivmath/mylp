"use client";

import { useState, useEffect } from "react";
import { profile, quickLinks } from "@/data/content";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-[0_1px_20px_rgba(56,189,248,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="font-display text-xl font-bold tracking-tight text-sky-400 transition-colors hover:text-sky-300"
          >
            {profile.brand}
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-sans text-white/70 transition-colors duration-200 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <a
              href={profile.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 rounded-lg border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-400 transition-all duration-300 hover:border-sky-400/60 hover:bg-sky-400/15 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]"
            >
              Agendar Call
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-5 bg-white/70 transition-all duration-300 ${
                mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-white/70 transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-white/70 transition-all duration-300 ${
                mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="border-t border-white/5 bg-white/5 backdrop-blur-xl px-6 py-4 space-y-3">
          {quickLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-white/70 transition-colors hover:text-white py-1"
            >
              {link.name}
            </a>
          ))}
          <a
            href={profile.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-lg border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-400"
          >
            Agendar Call
          </a>
        </div>
      </div>
    </nav>
  );
}
