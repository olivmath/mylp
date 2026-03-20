"use client";

import { ReactNode } from "react";

export function TerminalFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0C0C0C] font-mono text-[#00FF41] p-2 sm:p-4">
      <div className="max-w-[1200px] mx-auto border border-[#333] rounded-lg overflow-hidden relative">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1a1a1a] border-b border-[#333]">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#28c840] inline-block" />
          </div>
          <span className="ml-3 text-[#888] text-sm tracking-wide">
            olivmath@portfolio: ~/
          </span>
        </div>

        {/* Terminal content */}
        <div className="relative">
          {children}

          {/* CRT scanline overlay */}
          <div
            className="pointer-events-none fixed inset-0 z-50"
            style={{
              background:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
