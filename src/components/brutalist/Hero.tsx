"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useTranslations } from "@/lib/i18n";

export function Hero() {
  const { t } = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const metricsInView = useInView(metricsRef, { once: true, margin: "-50px" });

  const metrics = [
    { value: "55.000+", label: t.hero.metricDownloads },
    { value: "8000+", label: t.hero.metricStudents },
    { value: "6+", label: t.hero.metricExperience },
  ];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: name moves slower than scroll
  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Portrait scale-down: additional scale multiplier on top of base 1.3
  // Goes from 1.3 (start) to 1.0 (scrolled past)
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1.3, 1.0]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen bg-black text-white flex flex-col justify-between overflow-hidden font-display"
    >
      {/* Portrait - desktop: right side behind text, mobile: top background */}
      <motion.div
        className="absolute top-0 right-0 w-full h-[60%] md:w-[55%] md:h-full pointer-events-none"
        style={{
          translateY: "-16%",
          scale: portraitScale,
        }}
      >
        <Image
          src="/lucas-portrait.png"
          alt="Lucas Bispo de Oliveira"
          fill
          className="object-contain opacity-40 md:opacity-60 grayscale contrast-125"
          priority
          sizes="(max-width: 768px) 100vw, 55vw"
          style={{ objectPosition: "center 20%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </motion.div>

      {/* Name - parallax */}
      <motion.div
        className="flex-1 flex items-center relative z-10 px-2 md:px-0"
        style={{ y: nameY }}
      >
        <h1
          className="text-[18vw] sm:text-[16vw] md:text-[14vw] font-black leading-[0.82] tracking-tighter uppercase select-none"
          style={{ marginLeft: "-0.04em", marginRight: "-0.04em" }}
        >
          Lucas
          <br />
          <span className="text-[15vw] sm:text-[16vw] md:text-[14vw]">Bispo de</span>
          <br />
          <span className="text-[#FF5722]">Oliveira</span>
        </h1>
      </motion.div>

      {/* Headline */}
      <div className="relative z-10 px-4 md:px-8 flex-1 flex items-center max-h-[100px] md:max-h-[120px]">
        <p className="text-[10px] sm:text-xs md:text-lg uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-neutral-400">
          {t.hero.headline}
        </p>
      </div>

      {/* Metrics - fade in and slide up */}
      <motion.div
        ref={metricsRef}
        className="relative z-10 w-full border-t border-neutral-800 bg-black/80"
        initial={{ opacity: 0, y: 40 }}
        animate={metricsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="grid grid-cols-3 divide-x divide-neutral-800">
          {metrics.map((m) => (
            <div key={m.label} className="px-2 sm:px-4 md:px-8 py-3 sm:py-5">
              <span className="text-[#FF5722] text-xl sm:text-3xl md:text-5xl font-black block">
                {m.value}
              </span>
              <span className="text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.1em] sm:tracking-[0.2em] text-neutral-500 mt-1 block">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
