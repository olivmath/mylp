"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { hackathons } from "@/data/content";
import { useTranslations } from "@/lib/i18n";
import { SectionLabel } from "@/components/brutalist/SectionLabel";
import { theme } from "@/lib/design-system";

const marqueeItems = [...hackathons, ...hackathons];

export function Hackathons() {
  const { t } = useTranslations();
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });

  return (
    <section id="hackathons" className="bg-[var(--background)] text-[var(--foreground)] overflow-hidden">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0 }}
        animate={headerInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <SectionLabel label={t.hackathons.sectionLabel} />
      </motion.div>

      {/* Horizontal marquee ribbon */}
      <div className="relative py-8 md:py-12 group">
        <div
          className="flex gap-0 w-max group-hover:[animation-play-state:paused]"
          style={{
            animation: "brutalist-scroll 20s linear infinite",
            willChange: "transform",
          }}
        >
          {marqueeItems.map((hack, i) => (
            <div
              key={`${hack.name}-${i}`}
              className="relative flex-shrink-0 w-[85vw] md:w-[50vw] lg:w-[35vw] border-r border-neutral-800 px-6 md:px-10 py-6 flex flex-col justify-between overflow-hidden"
            >
              {/* Watermark logo */}
              {hack.logo && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Image
                    src={hack.logo}
                    alt=""
                    width={hack.logo.includes("chiliz") ? 170 : hack.logo.includes("stellar") ? 176 : 220}
                    height={hack.logo.includes("chiliz") ? 170 : hack.logo.includes("stellar") ? 176 : 220}
                    className={`object-contain ${hack.logo.includes("chiliz") ? "rounded-full opacity-[0.15]" : "opacity-[0.08]"}`}
                    unoptimized={hack.logo.endsWith(".svg")}
                  />
                </div>
              )}

              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight">
                  {hack.name}
                </h3>

                <span
                  className="text-lg md:text-xl font-bold uppercase tracking-wide mt-3 block"
                  style={{ color: theme.accentText }}
                >
                  {hack.position}
                </span>

                <div className="flex items-center gap-2 mt-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                    {hack.location}
                  </span>
                  <span className="text-neutral-700">·</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                    {hack.year}
                  </span>
                </div>

                <div className="flex gap-2 flex-wrap mt-4">
                  {hack.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-[9px] uppercase tracking-wider border border-neutral-800 px-2 py-1 text-neutral-400"
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
