"use client";

import Image from "next/image";
import { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "@/lib/i18n";
import { theme, layout } from "@/lib/design-system";

export function Hero() {
  const { t } = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const metricsInView = useInView(metricsRef, { once: true, margin: "-50px" });

  const metrics = useMemo(() => [
    {
      value: "59K+",
      label: t.hero.metricDownloads,
      link: "https://pepy.tech/projects/merkly",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
          <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16" />
        </svg>
      ),
    },
    {
      value: "8K+",
      label: t.hero.metricStudents,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
        </svg>
      ),
    },
    {
      value: "6+",
      label: t.hero.metricExperience,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7" />
          <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
        </svg>
      ),
    },
  ], [t]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col overflow-hidden transition-colors duration-300"
    >
      {/* Portrait */}
      <div className="absolute top-0 right-0 w-full h-[60%] md:w-[50%] md:h-full pointer-events-none">
        <Image
          src="/lucas-4.png"
          alt="Lucas Bispo de Oliveira"
          fill
          className="object-contain"
          priority
          quality={100}
          unoptimized
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectPosition: "right top" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-[var(--background)]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--background)] md:hidden" />
      </div>

      {/* Name — overlaps photo on mobile */}
      <div className={`flex-1 flex items-end relative z-10 ${layout.sidePad} pb-6 md:pb-10 pt-[45vh] md:pt-32`}>
        <h1 className="text-[13vw] sm:text-[11vw] md:text-[9vw] font-black leading-[0.88] tracking-tight uppercase select-none">
          <span style={{ color: theme.accentText }}>Lucas</span>
          <br />
          Bispo de
          <br />
          Oliveira
        </h1>
      </div>

      {/* Headline */}
      <div className={`relative z-10 ${layout.sidePad} py-4 md:py-6`}>
        <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-neutral-400">
          {t.hero.headline}
        </p>
      </div>

      {/* Metrics */}
      <motion.div
        ref={metricsRef}
        className={`relative z-10 w-full border-t border-neutral-800 ${layout.sidePad}`}
        style={{ backgroundColor: "var(--background)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={metricsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="grid grid-cols-3 divide-x divide-neutral-800">
          {metrics.map((m) => (
            <div key={m.label} className="py-5 md:py-8 px-3 sm:px-4 md:px-6">
              <div className="flex items-center justify-between gap-2">
                <div>
                  {m.link ? (
                    <a
                      href={m.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl sm:text-4xl md:text-5xl font-black block hover:opacity-70 transition-opacity"
                      style={{ color: theme.accentText }}
                    >
                      {m.value}
                    </a>
                  ) : (
                    <span className="text-2xl sm:text-4xl md:text-5xl font-black block" style={{ color: theme.accentText }}>
                      {m.value}
                    </span>
                  )}
                </div>
                <div className="text-neutral-600 hidden sm:block">
                  {m.icon}
                </div>
              </div>
              <span className="text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.15em] text-neutral-400 mt-2 block">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
