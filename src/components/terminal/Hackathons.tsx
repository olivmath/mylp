"use client";

import { useState } from "react";
import { hackathons } from "@/data/content";

function fakeHash(): string {
  const chars = "0123456789abcdef";
  let hash = "";
  for (let i = 0; i < 7; i++) {
    hash += chars[Math.floor(Math.random() * chars.length)];
  }
  return hash;
}

const hashes = hackathons.map(() => fakeHash());

export function Hackathons() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="hackathons" className="px-4 sm:px-6 py-8 sm:py-12 font-mono">
      <div className="text-[#888] text-sm mb-1">
        {"═".repeat(60)}
      </div>
      <div className="text-[#888] text-sm mb-4">
        $ git log --oneline --decorate
      </div>

      <div className="space-y-1 text-sm">
        {hackathons.map((h, i) => {
          const isFirst = i === 0;
          const isExpanded = expanded === i;

          return (
            <div key={i}>
              <button
                onClick={() => setExpanded(isExpanded ? null : i)}
                className="w-full text-left hover:bg-[#1a1a1a] transition-colors py-1 px-1 cursor-pointer"
              >
                <span className="text-[#FFB000]">{hashes[i]}</span>
                <span className="text-[#888]"> (</span>
                {isFirst && (
                  <>
                    <span className="text-[#00D4FF]">HEAD -{">"} main</span>
                    <span className="text-[#888]">, </span>
                  </>
                )}
                <span className="text-[#00D4FF]">
                  tag: {h.position}
                </span>
                <span className="text-[#888]">)</span>
                <span className="text-[#00FF41]">
                  {" "}
                  {h.name} ({h.year})
                </span>
              </button>

              {isExpanded && (
                <div className="ml-4 sm:ml-8 py-2 text-xs border-l border-[#333] pl-4 mb-2">
                  <div className="text-[#ccc] leading-relaxed">
                    {h.description}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {h.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[#FFB000] border border-[#FFB000]/30 px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
