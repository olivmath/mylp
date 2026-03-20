"use client";

import { useState, useEffect } from "react";
import { testimonials } from "@/data/content";

export function Testemunhos() {
  const [featuredIndex, setFeaturedIndex] = useState(0);

  // Rotate featured testimonial
  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const featured = testimonials[featuredIndex];

  // Get 2 testimonials that aren't the featured one
  const sideTestimonials = testimonials
    .filter((_, i) => i !== featuredIndex)
    .slice(0, 2);

  return (
    <section id="testemunhos" className="bg-[#FAF9F6] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="flex items-baseline justify-between mb-16 border-b border-[#2D2D2D]/10 pb-6">
          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#B8860B] mb-2">
              03
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2D2D2D]">
              Testemunhos
            </h2>
          </div>
          <p className="font-body text-xs text-[#2D2D2D]/40 tracking-wider uppercase hidden sm:block">
            Peer Reviews
          </p>
        </div>

        {/* Featured testimonial - center pull quote */}
        <div className="relative max-w-4xl mx-auto text-center mb-16 md:mb-20">
          {/* Large gold quotation mark */}
          <span className="font-serif text-[120px] sm:text-[180px] leading-none text-[#B8860B]/20 select-none absolute -top-8 sm:-top-12 left-1/2 -translate-x-1/2 pointer-events-none">
            &ldquo;
          </span>

          {/* Thin gold accent lines */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <span className="w-12 h-[1px] bg-[#B8860B]/30" />
            <span className="w-2 h-2 border border-[#B8860B]/30 rotate-45" />
            <span className="w-12 h-[1px] bg-[#B8860B]/30" />
          </div>

          <blockquote className="relative z-10">
            <p
              className="font-serif text-xl sm:text-2xl md:text-3xl text-[#2D2D2D] italic leading-relaxed transition-opacity duration-500"
              key={featuredIndex}
            >
              {featured.content}
            </p>
          </blockquote>

          <div className="mt-8 flex flex-col items-center gap-1">
            <p className="font-body text-sm text-[#2D2D2D] font-medium">
              {featured.name}
            </p>
            <p className="font-body text-xs text-[#2D2D2D]/40">
              {featured.role}, {featured.company}
            </p>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setFeaturedIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === featuredIndex
                    ? "bg-[#B8860B] w-4"
                    : "bg-[#2D2D2D]/15 hover:bg-[#2D2D2D]/30"
                }`}
                aria-label={`Show testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Two smaller testimonials side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {sideTestimonials.map((t) => (
            <div
              key={t.name}
              className="border-t border-[#2D2D2D]/10 pt-6"
            >
              <p className="font-body text-sm text-[#2D2D2D]/60 leading-relaxed mb-4">
                &ldquo;{t.content}&rdquo;
              </p>
              <div>
                <p className="font-body text-sm text-[#2D2D2D] font-medium">
                  {t.name}
                </p>
                <p className="font-body text-xs text-[#2D2D2D]/40">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
