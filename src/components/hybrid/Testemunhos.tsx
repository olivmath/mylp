"use client";

import { useState, useEffect, useCallback } from "react";
import { testimonials } from "@/data/content";

export default function Testemunhos() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setIsTransitioning(false);
      }, 300);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length);
  }, [current, goTo]);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section
      id="testemunhos"
      className="relative overflow-hidden bg-[#0f1729] py-24 lg:py-32"
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[#2563eb]/8 blur-[120px]" />
        <div className="absolute -right-40 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[#38bdf8]/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-8 lg:px-16">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-[#38bdf8]">
            Testimonials
          </p>
          <h2 className="font-display text-3xl font-bold text-white lg:text-4xl">
            O que dizem sobre{" "}
            <span className="text-[#38bdf8]">trabalhar comigo</span>
          </h2>
        </div>

        {/* Single testimonial spotlight */}
        <div className="relative min-h-[320px]">
          <div
            className={`transition-all duration-300 ${
              isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            {/* Large quote icon */}
            <div className="mb-8 flex justify-center">
              <svg
                className="h-12 w-12 text-[#38bdf8]/20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
              </svg>
            </div>

            {/* Quote text - large and centered */}
            <blockquote className="mb-10 text-center font-serif text-xl italic leading-relaxed text-white/80 lg:text-2xl lg:leading-relaxed">
              &ldquo;{t.content}&rdquo;
            </blockquote>

            {/* Author info - centered below */}
            <div className="flex flex-col items-center gap-4">
              {/* Avatar circle */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#38bdf8]/20 bg-[#38bdf8]/10 font-display text-xl font-bold text-[#38bdf8]">
                {t.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </div>

              <div className="text-center">
                <p className="font-display text-lg font-semibold text-white">
                  {t.name}
                </p>
                <p className="mt-1 font-body text-sm text-white/40">
                  {t.role}{" "}
                  <span className="text-white/20">at</span>{" "}
                  <span className="text-[#38bdf8]">{t.company}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all hover:border-white/20 hover:text-white"
            aria-label="Previous testimonial"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-[#38bdf8]"
                    : "w-2 bg-white/15 hover:bg-white/25"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all hover:border-white/20 hover:text-white"
            aria-label="Next testimonial"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
