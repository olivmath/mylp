"use client";

import { useState } from "react";
import { profile } from "@/data/content";
import { FullScreenMenu } from "./FullScreenMenu";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F6]/95 backdrop-blur-sm border-b border-[#2D2D2D]/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a
            href="#hero"
            className="font-serif text-2xl tracking-tight text-[#2D2D2D]"
          >
            {profile.brand}
          </a>

          <div className="flex items-center gap-6">
            <a
              href={profile.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 border border-[#B8860B] px-5 py-2 text-sm font-body text-[#B8860B] tracking-wide uppercase transition-colors hover:bg-[#B8860B] hover:text-[#FAF9F6]"
            >
              Agendar Call
            </a>

            <button
              onClick={() => setMenuOpen(true)}
              className="flex flex-col gap-1.5 p-2 group"
              aria-label="Open menu"
            >
              <span className="block w-6 h-[1.5px] bg-[#2D2D2D] transition-transform group-hover:translate-x-1" />
              <span className="block w-4 h-[1.5px] bg-[#2D2D2D] transition-transform group-hover:translate-x-1" />
              <span className="block w-6 h-[1.5px] bg-[#2D2D2D] transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </nav>

      <FullScreenMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
