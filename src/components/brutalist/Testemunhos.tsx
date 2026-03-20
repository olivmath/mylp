"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/content";
import { useTranslations } from "@/lib/i18n";

const RECOMMENDATIONS_URL =
  "https://www.linkedin.com/in/olivmath/details/recommendations/?detailScreenTabIndex=0";

export function Testemunhos() {
  const { t } = useTranslations();
  const [current, setCurrent] = useState(0);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(advance, 6000);
    return () => clearInterval(interval);
  }, [advance]);

  const person = testimonials[current];
  const quote = t.testemunhos.quotes[current] ?? person.content;

  return (
    <section
      id="testemunhos"
      className="font-display cursor-pointer overflow-hidden bg-black text-white"
      onClick={advance}
    >
      {/* Section label */}
      <div className="border-t border-b border-neutral-800 px-4 md:px-8 py-3">
        <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">
          {t.testemunhos.sectionLabel}
        </span>
      </div>

      {/* Fullscreen testimonial */}
      <div className="min-h-[80vh] relative">
        <div className="flex flex-col md:flex-row min-h-[80vh]">
          {/* Photo side */}
          <div className="relative w-full md:w-2/5 min-h-[250px] md:min-h-0">
            <Image
              src="/lucas-portrait.png"
              alt={person.name}
              fill
              className="object-cover opacity-25 grayscale contrast-125"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:hidden" />
            <div className="absolute inset-0 hidden md:block" style={{ background: "linear-gradient(to right, transparent, #000)" }} />
          </div>

          {/* Quote side */}
          <div className="relative w-full md:w-3/5 flex flex-col justify-center px-4 md:px-12 lg:px-16 py-10 md:py-16">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={`quote-${current}`}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.2] tracking-tight mb-8 md:mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                &ldquo;{quote}&rdquo;
              </motion.blockquote>
            </AnimatePresence>

            <div className="flex items-end justify-between">
              {/* Progress + Attribution */}
              <div>
                <div className="flex gap-2 mb-4">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrent(i);
                      }}
                      className="w-8 h-1 transition-colors duration-300 cursor-pointer"
                      style={{
                        backgroundColor:
                          i === current ? "#FF5722" : "#404040",
                      }}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
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
              </div>

              {/* LinkedIn link */}
              <a
                href={RECOMMENDATIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[10px] uppercase tracking-[0.3em] hover:text-white transition-colors"
                style={{ color: "#FF5722" }}
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
