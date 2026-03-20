"use client";

import { useEffect, useRef } from "react";
import { profile } from "@/data/content";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0", "translate-x-0");
            entry.target.classList.remove("opacity-0", "translate-y-8", "-translate-x-8", "translate-x-8");
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#0f1729]"
    >
      {/* Full-screen split layout */}
      <div className="flex min-h-screen flex-col lg:flex-row">
        {/* Left 40% - Dark navy with glass text area */}
        <div className="relative z-10 flex flex-col justify-center px-8 py-24 lg:w-[42%] lg:px-12 xl:px-16">
          {/* Glass panel behind content */}
          <div className="absolute inset-4 rounded-3xl border border-white/[0.04] bg-white/[0.02] backdrop-blur-sm lg:inset-6" />

          {/* Decorative gradient orbs */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full bg-[#2563eb]/15 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-[200px] w-[200px] rounded-full bg-[#38bdf8]/10 blur-[80px]" />

          <div className="relative">
            <div
              data-animate
              className="-translate-x-8 opacity-0 transition-all duration-700"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#38bdf8]/20 bg-[#38bdf8]/10 px-4 py-1.5 font-mono text-xs font-medium text-[#38bdf8]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#38bdf8]" />
                Available for consulting
              </span>
            </div>

            <h1
              data-animate
              className="mt-6 -translate-x-8 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white opacity-0 transition-all duration-700 delay-100 sm:text-5xl xl:text-6xl"
            >
              {profile.name}
            </h1>

            <p
              data-animate
              className="mt-3 -translate-x-8 font-serif text-lg italic text-[#38bdf8]/80 opacity-0 transition-all duration-700 delay-200 xl:text-xl"
            >
              {profile.headline}
            </p>

            <p
              data-animate
              className="mt-6 -translate-x-8 max-w-md font-body text-base leading-relaxed text-white/50 opacity-0 transition-all duration-700 delay-300"
            >
              {profile.subheadline}
            </p>

            {/* CTA Buttons */}
            <div
              data-animate
              className="mt-8 flex flex-wrap gap-3 -translate-x-8 opacity-0 transition-all duration-700 delay-[400ms]"
            >
              <a
                href={profile.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[#38bdf8] px-6 py-3 font-body text-sm font-semibold text-[#0f1729] transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.3)]"
              >
                Agendar Call
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href={profile.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-body text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Right 60% - Photo area with overlay */}
        <div className="relative flex-1 lg:w-[58%]">
          <img
            src={profile.images[0]}
            alt={profile.name}
            className="h-full min-h-[400px] w-full object-cover lg:min-h-screen"
          />

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1729] via-[#0f1729]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1729]/80 via-transparent to-[#0f1729]/30" />

          {/* Floating glass metric pills */}
          {profile.metrics.map((metric, i) => {
            const positions = [
              "top-[20%] right-[10%] lg:right-[15%]",
              "top-[45%] right-[5%] lg:right-[8%]",
              "bottom-[25%] right-[15%] lg:right-[20%]",
            ];
            return (
              <div
                key={metric.label}
                data-animate
                className={`absolute ${positions[i]} translate-x-8 opacity-0 transition-all duration-700 hidden lg:block`}
                style={{ transitionDelay: `${500 + i * 150}ms` }}
              >
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.06] px-5 py-3 backdrop-blur-xl">
                  <div className="font-display text-2xl font-bold text-white">
                    {metric.value}
                  </div>
                  <div className="font-body text-xs text-white/50">
                    {metric.label}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Mobile metrics row */}
          <div className="absolute bottom-4 left-4 right-4 flex gap-3 lg:hidden">
            {profile.metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex-1 rounded-xl border border-white/[0.08] bg-white/[0.06] px-3 py-2 text-center backdrop-blur-xl"
              >
                <div className="font-display text-lg font-bold text-white">
                  {metric.value}
                </div>
                <div className="font-body text-[10px] text-white/50">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company logos marquee at very bottom */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.04] bg-[#0f1729]/80 backdrop-blur-sm">
        <div className="overflow-hidden py-4">
          <div className="flex animate-marquee-hybrid items-center gap-12 whitespace-nowrap">
            {[...profile.companies, ...profile.companies].map((company, i) => (
              <span
                key={`${company}-${i}`}
                className="font-body text-sm text-white/20 transition-colors hover:text-white/40"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-hybrid {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-hybrid {
          animation: marquee-hybrid 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
