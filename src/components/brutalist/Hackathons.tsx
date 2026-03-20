"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { hackathons } from "@/data/content";
import { useTranslations } from "@/lib/i18n";
import { SectionLabel } from "@/components/brutalist/SectionLabel";

const marqueeItems = [...hackathons, ...hackathons];

export function Hackathons() {
  const { t } = useTranslations();
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });

  return (
    <section id="hackathons" className="bg-black text-white overflow-hidden">
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
              className="flex-shrink-0 w-[85vw] md:w-[50vw] lg:w-[35vw] border-r border-neutral-800 px-6 md:px-10 py-6 flex flex-col justify-between relative"
            >
              <span className="text-[100px] md:text-[140px] font-black leading-none text-neutral-900 select-none">
                {hack.year}
              </span>

              <div className="mt-[-30px] md:mt-[-40px] relative z-10">
                <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight">
                  {hack.name}
                </h3>
              </div>

              <div
                className="absolute top-6 right-6 bg-[#FF5722] text-black px-3 py-1 font-black text-xs uppercase tracking-wider"
                style={{ transform: "rotate(-12deg)" }}
              >
                {hack.position}
              </div>

              <div className="flex gap-2 flex-wrap mt-4">
                {hack.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-[9px] uppercase tracking-wider border border-neutral-800 px-2 py-1 text-neutral-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes brutalist-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
