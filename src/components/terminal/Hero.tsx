"use client";

import { useState, useEffect } from "react";
import { profile } from "@/data/content";

const lines = [
  { prompt: "$ whoami", delay: 0 },
  { output: `> ${profile.name}`, delay: 800 },
  { output: `> ${profile.headline}`, delay: 1200 },
  { prompt: "$ stats --format=table", delay: 2000 },
];

export function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [showBio, setShowBio] = useState(false);
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    if (visibleLines >= lines.length) {
      const t1 = setTimeout(() => setShowTable(true), 400);
      const t2 = setTimeout(() => setShowBio(true), 1200);
      const t3 = setTimeout(() => setShowCta(true), 1800);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }

    const line = lines[visibleLines];
    const text = line.prompt || line.output || "";

    if (line.prompt && typingIndex < text.length) {
      const timer = setTimeout(() => {
        setCurrentText(text.slice(0, typingIndex + 1));
        setTypingIndex(typingIndex + 1);
      }, 40);
      return () => clearTimeout(timer);
    }

    const nextDelay =
      visibleLines < lines.length - 1
        ? (lines[visibleLines + 1].delay || 0) -
          (lines[visibleLines].delay || 0)
        : 400;

    const timer = setTimeout(() => {
      setVisibleLines(visibleLines + 1);
      setTypingIndex(0);
      setCurrentText("");
    }, line.prompt ? 200 : nextDelay);

    return () => clearTimeout(timer);
  }, [visibleLines, typingIndex]);

  const renderLine = (line: (typeof lines)[number], index: number) => {
    if (index >= visibleLines) return null;
    const text = line.prompt || line.output || "";
    return (
      <div key={index} className="leading-relaxed">
        {line.prompt ? (
          <span className="text-[#888]">{text}</span>
        ) : (
          <span className="text-[#00FF41]">{text}</span>
        )}
      </div>
    );
  };

  return (
    <section id="hero" className="px-4 sm:px-6 py-8 sm:py-12 font-mono">
      <div className="space-y-0.5 text-sm sm:text-base">
        {lines.map((line, i) => renderLine(line, i))}

        {/* Currently typing line */}
        {visibleLines < lines.length && lines[visibleLines].prompt && (
          <div className="leading-relaxed">
            <span className="text-[#888]">{currentText}</span>
            <span className="animate-pulse text-[#00FF41]">_</span>
          </div>
        )}

        {/* Stats table */}
        {showTable && (
          <div className="mt-2 text-[#00FF41] animate-fade-in">
            <div>
              {"┌──────────────────┬──────────┐"}
            </div>
            {profile.metrics.map((m) => (
              <div key={m.label}>
                {"│ "}
                <span className="text-[#FFB000]">
                  {m.label.padEnd(16)}
                </span>
                {" │ "}
                <span className="text-white">
                  {m.value.padEnd(8)}
                </span>
                {" │"}
              </div>
            ))}
            <div>
              {"└──────────────────┴──────────┘"}
            </div>
          </div>
        )}

        {/* Bio */}
        {showBio && (
          <div className="mt-4 animate-fade-in">
            <div className="text-[#888]">$ cat bio.txt</div>
            <div className="text-[#00FF41] mt-1 max-w-[80ch] leading-relaxed">
              {">"} {profile.bio}
            </div>
          </div>
        )}

        {/* CTAs */}
        {showCta && (
          <div className="mt-6 flex flex-wrap gap-4 animate-fade-in">
            <a
              href={profile.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#00FF41] text-[#00FF41] px-4 py-2 hover:bg-[#00FF41] hover:text-[#0C0C0C] transition-colors text-sm"
            >
              [Agendar Call]
            </a>
            <a
              href={profile.cvPath}
              download
              className="border border-[#FFB000] text-[#FFB000] px-4 py-2 hover:bg-[#FFB000] hover:text-[#0C0C0C] transition-colors text-sm"
            >
              [Download CV]
            </a>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
