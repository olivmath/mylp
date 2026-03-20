"use client";

import { useEffect, useRef } from "react";
import { hackathons } from "@/data/content";

export default function Hackathons() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-x-0");
            entry.target.classList.remove("opacity-0", "-translate-x-12", "translate-x-12");
          }
        });
      },
      { threshold: 0.2 }
    );
    const elements = sectionRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hackathons"
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Section header */}
      <div className="mx-auto mb-20 max-w-3xl px-8 text-center lg:px-16">
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-[#38bdf8]">
          Competitions
        </p>
        <h2 className="mb-4 font-serif text-4xl font-bold leading-tight text-[#0f172a] lg:text-5xl">
          4x Champion,{" "}
          <span className="italic text-[#2563eb]">0 defeats</span>
        </h2>
        <p className="font-body text-lg text-[#64748b]">
          Quatro hackathons. Quatro primeiros lugares. Da NASA ao Stellar
          Network, resultados que falam por si.
        </p>
      </div>

      {/* Timeline - vertical center line with zigzag cards */}
      <div className="relative mx-auto max-w-4xl px-8 lg:px-0">
        {/* Center vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#2563eb]/20 to-transparent lg:block" />

        <div className="space-y-12 lg:space-y-0">
          {hackathons.map((hack, i) => {
            const isLeft = i % 2 === 0;
            const isFeatured = hack.featured;

            return (
              <div
                key={hack.name}
                className="relative lg:flex lg:items-center lg:min-h-[200px]"
              >
                {/* Timeline dot - center */}
                <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:flex flex-col items-center gap-1">
                  <div
                    className={`rounded-full border-2 ${
                      isFeatured
                        ? "h-5 w-5 border-[#38bdf8] bg-[#38bdf8] shadow-[0_0_12px_rgba(56,189,248,0.4)]"
                        : "h-4 w-4 border-[#2563eb]/30 bg-white"
                    }`}
                  />
                  <span className="font-mono text-xs font-bold text-[#2563eb]/60">
                    {hack.year}
                  </span>
                </div>

                {/* Card - alternating sides */}
                <div
                  data-animate
                  className={`w-full transition-all duration-700 opacity-0 lg:w-[45%] ${
                    isLeft
                      ? "-translate-x-12 lg:mr-auto lg:pr-8"
                      : "translate-x-12 lg:ml-auto lg:pl-8"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div
                    className={`group rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:p-8 ${
                      isFeatured
                        ? "border-[#38bdf8]/20 shadow-md shadow-[#38bdf8]/5"
                        : "border-black/[0.04] shadow-sm"
                    }`}
                  >
                    {/* Mobile year badge */}
                    <div className="mb-3 flex items-center gap-3 lg:hidden">
                      <span className="font-mono text-sm font-bold text-[#2563eb]">
                        {hack.year}
                      </span>
                      <span className="h-px flex-1 bg-[#2563eb]/10" />
                    </div>

                    <div className="flex items-start justify-between gap-3">
                      <h3
                        className={`font-display font-bold text-[#0f172a] ${
                          isFeatured ? "text-xl lg:text-2xl" : "text-lg lg:text-xl"
                        }`}
                      >
                        {hack.name}
                      </h3>
                      <span
                        className={`shrink-0 rounded-full px-3 py-1 font-body text-sm font-semibold ${
                          isFeatured
                            ? "bg-[#38bdf8]/10 text-[#38bdf8]"
                            : "bg-[#2563eb]/10 text-[#2563eb]"
                        }`}
                      >
                        {hack.position}
                      </span>
                    </div>

                    <p
                      className={`mt-3 font-body leading-relaxed text-[#64748b] ${
                        isFeatured ? "text-base" : "text-sm"
                      }`}
                    >
                      {hack.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {hack.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-[#f8fafc] px-2.5 py-0.5 font-mono text-xs text-[#64748b] ring-1 ring-black/[0.04]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {isFeatured && (
                      <div className="mt-4 flex items-center gap-2">
                        <svg className="h-4 w-4 text-[#38bdf8]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="font-mono text-xs text-[#38bdf8]">
                          Highlight
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Connecting line from card to center dot (desktop) */}
                <div
                  className={`absolute top-1/2 hidden h-px bg-[#2563eb]/10 lg:block ${
                    isLeft
                      ? "left-[45%] right-1/2"
                      : "left-1/2 right-[45%]"
                  }`}
                  style={{ transform: "translateY(-50%)" }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom transition to dark section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0f1729]" />
    </section>
  );
}
