"use client";

import { useEffect, useRef } from "react";
import { hackathons } from "@/data/content";

export function Hackathons() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.05 }
    );

    const elements = sectionRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const nasa = hackathons[0];
  const remaining = hackathons.slice(1);

  return (
    <section
      ref={sectionRef}
      id="hackathons"
      className="bg-slate-50 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          data-animate
          className="mb-16 opacity-0 translate-y-8 transition-all duration-700"
        >
          <span className="font-mono text-xs tracking-widest text-slate-400 uppercase">
            Competitions
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mt-3">
            Hackathon Wins
          </h2>
        </div>

        <div
          data-animate
          className="mb-12 opacity-0 translate-y-8 transition-all duration-700 delay-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white rounded-2xl p-8 lg:p-12">
            <div className="lg:col-span-2">
              <span className="font-serif text-7xl lg:text-8xl font-bold text-slate-100 leading-none select-none">
                01
              </span>
            </div>
            <div className="lg:col-span-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="font-mono text-xs tracking-wider text-slate-400">
                  {nasa.year}
                </span>
                <span className="font-mono text-xs px-3 py-1 bg-royal-600 text-white rounded-full">
                  {nasa.position}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                {nasa.name}
              </h3>
              <p className="font-sans text-base text-slate-500 leading-relaxed mb-6 max-w-2xl">
                {nasa.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {nasa.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-3 py-1 bg-slate-50 text-slate-600 rounded-full border border-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {remaining.map((hackathon, index) => (
            <div
              key={hackathon.name}
              data-animate
              className={`bg-white rounded-2xl p-8 opacity-0 translate-y-8 transition-all duration-700`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <span className="font-serif text-5xl font-bold text-slate-100 leading-none select-none">
                {String(index + 2).padStart(2, "0")}
              </span>

              <div className="mt-4">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="font-mono text-xs tracking-wider text-slate-400">
                    {hackathon.year}
                  </span>
                  <span className="font-mono text-xs px-3 py-1 bg-royal-600 text-white rounded-full">
                    {hackathon.position}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                  {hackathon.name}
                </h3>
                <p className="font-sans text-sm text-slate-500 leading-relaxed mb-4">
                  {hackathon.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {hackathon.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2.5 py-0.5 bg-slate-50 text-slate-600 rounded-full border border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
