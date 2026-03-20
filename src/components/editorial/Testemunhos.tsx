"use client";

import { useEffect, useRef } from "react";
import { testimonials } from "@/data/content";

export function Testemunhos() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.05 }
    );

    const elements = sectionRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testemunhos"
      className="bg-slate-50 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          data-animate
          className="mb-16 opacity-0 translate-y-8 transition-all duration-700"
        >
          <span className="font-mono text-xs tracking-widest text-slate-400 uppercase">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mt-3">
            What People Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              data-animate
              className="bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50 opacity-0 translate-y-8"
              style={{
                transitionDelay: `${100 + index * 80}ms`,
                transitionProperty: "all",
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex-shrink-0" />
                <div>
                  <h3 className="font-sans text-sm font-semibold text-slate-900">
                    {testimonial.name}
                  </h3>
                  <p className="font-sans text-xs text-slate-500">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>

              <blockquote className="font-serif text-base italic text-slate-600 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
