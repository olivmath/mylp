"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { testimonials } from "@/data/content";
import { useTranslations } from "@/lib/i18n";

function WordByWordReveal({ text, inView }: { text: string; inView: boolean }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em]"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{
            duration: 0.3,
            delay: Math.min(i * 0.04, 2.5),
            ease: "easeOut",
          }}
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}

export function Testemunhos() {
  const { t } = useTranslations();
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(advance, 6000);
    return () => clearInterval(interval);
  }, [advance]);

  const testimonial = testimonials[current];
  const isEven = current % 2 === 0;

  return (
    <section
      ref={sectionRef}
      id="testemunhos"
      className="font-display transition-colors duration-500 cursor-pointer"
      style={{
        backgroundColor: isEven ? "#000" : "#fff",
        color: isEven ? "#fff" : "#000",
      }}
      onClick={advance}
    >
      {/* Section label */}
      <div
        className="border-t border-b px-4 md:px-8 py-3 transition-colors duration-500"
        style={{
          borderColor: isEven ? "#262626" : "#e5e5e5",
        }}
      >
        <span
          className="text-[10px] uppercase tracking-[0.4em] transition-colors duration-500"
          style={{ color: isEven ? "#737373" : "#a3a3a3" }}
        >
          {t.testemunhos.sectionLabel}
        </span>
      </div>

      {/* Full-screen quote */}
      <div className="min-h-[80vh] flex flex-col justify-between px-4 md:px-8 lg:px-16 py-12 md:py-20">
        <div className="flex-1 flex items-center">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current}
              className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight max-w-[90vw]"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              &ldquo;
              <WordByWordReveal text={testimonial.content} inView={sectionInView} />
              &rdquo;
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="flex items-end justify-between mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Progress indicators */}
            <div className="flex gap-2">
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
                      i === current
                        ? "#FF5722"
                        : isEven
                          ? "#404040"
                          : "#d4d4d4",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Attribution */}
            <div className="text-right">
              <p className="text-sm md:text-base font-bold uppercase tracking-wider">
                {testimonial.name}
              </p>
              <p
                className="text-[10px] md:text-xs uppercase tracking-[0.2em] mt-1"
                style={{ color: isEven ? "#737373" : "#a3a3a3" }}
              >
                {testimonial.role} / {testimonial.company}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
