"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/content";
import { useTranslations } from "@/lib/i18n";
import { SectionLabel } from "@/components/brutalist/SectionLabel";

const RECOMMENDATIONS_URL =
  "https://www.linkedin.com/in/olivmath/details/recommendations/?detailScreenTabIndex=0";

export function Testemunhos() {
  const { t } = useTranslations();
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
  }, []);

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startInterval]);

  const goTo = (index: number) => {
    setCurrent(index);
    startInterval();
  };

  const advance = () => goTo((current + 1) % testimonials.length);

  const person = testimonials[current];
  const quote = t.testemunhos.quotes[current] ?? person.content;

  return (
    <section
      id="testemunhos"
      className="cursor-pointer overflow-hidden bg-black text-white"
      onClick={advance}
    >
      <SectionLabel label={t.testemunhos.sectionLabel} />

      <div className="flex flex-col md:flex-row min-h-[80vh]">
        {/* Photo side */}
        <div className="relative w-full md:w-2/5 min-h-[250px] md:min-h-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={`photo-${current}`}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={person.image ?? "/lucas-portrait.png"}
                alt={person.name}
                fill
                className={`object-cover ${person.image ? "opacity-60" : "opacity-25"} grayscale contrast-125`}
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:hidden" />
          <div className="absolute inset-0 hidden md:block" style={{ background: "linear-gradient(to right, transparent, #000)" }} />
        </div>

        {/* Quote side */}
        <div className="relative w-full md:w-3/5 flex flex-col justify-between px-4 md:px-12 lg:px-16 py-10 md:py-16">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={`quote-${current}`}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.2] tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              &ldquo;{quote}&rdquo;
            </motion.blockquote>
          </AnimatePresence>

          <div>
            <div className="flex gap-2 mb-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    goTo(i);
                  }}
                  className="w-8 h-1 transition-colors duration-300 cursor-pointer"
                  style={{
                    backgroundColor: i === current ? "#0000FF" : "#404040",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-end justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`attr-${current}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm font-bold uppercase tracking-wider">
                    {person.name}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.2em] mt-1 text-neutral-500">
                    {person.role} / {person.company}
                  </p>
                </motion.div>
              </AnimatePresence>

              <a
                href={RECOMMENDATIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-sm uppercase tracking-[0.2em] font-bold border border-[#0000FF] px-6 py-3 hover:bg-[#0000FF] hover:text-white transition-colors duration-200"
                style={{ color: "#0000FF" }}
              >
                LinkedIn &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
