import { profile, quickLinks } from "@/data/content";

const sections = [
  { num: "01", label: "Projetos", subtitle: "Enterprise & Open Source" },
  { num: "02", label: "Hackathons", subtitle: "4x Champion" },
  { num: "03", label: "Testemunhos", subtitle: "Peer Reviews" },
  { num: "04", label: "Contato", subtitle: "Agendar Call" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-[#FAF9F6] pt-20 flex items-center"
    >
      <div className="mx-auto max-w-7xl w-full px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Magazine cover photo area */}
          <div className="lg:col-span-7 relative">
            <div className="border border-[#2D2D2D]/20 p-3">
              <div className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] bg-[#7C9082]/15 rounded-sm flex items-end justify-start overflow-hidden relative">
                {/* Placeholder photo area */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 mx-auto border border-[#2D2D2D]/20 rounded-full flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D2D2D" strokeWidth="1" opacity="0.4">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="M21 15l-5-5L5 21" />
                      </svg>
                    </div>
                    <p className="font-body text-xs text-[#2D2D2D]/30 tracking-widest uppercase">
                      Photo
                    </p>
                  </div>
                </div>

                {/* Bottom overlay with name */}
                <div className="relative z-10 w-full p-6 sm:p-8 bg-gradient-to-t from-[#2D2D2D]/60 to-transparent">
                  <p className="font-body text-xs text-white/70 tracking-widest uppercase mb-1">
                    {profile.location}
                  </p>
                  <p className="font-serif text-xl sm:text-2xl text-white">
                    {profile.name}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Editorial content */}
          <div className="lg:col-span-5 flex flex-col justify-between lg:min-h-[600px]">
            <div>
              {/* Issue number */}
              <p className="font-body text-xs tracking-[0.3em] uppercase text-[#B8860B] mb-8">
                Issue No. 01 / Portfolio
              </p>

              {/* Title */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2D2D2D] leading-[1.1] mb-6">
                The Blockchain Architect
              </h1>

              <p className="font-body text-base text-[#2D2D2D]/60 leading-relaxed mb-10 max-w-md">
                {profile.subheadline}
              </p>

              {/* Table of contents */}
              <div className="border-t border-[#2D2D2D]/15 pt-6">
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#2D2D2D]/40 mb-4">
                  Contents
                </p>
                <div className="space-y-0">
                  {sections.map((s) => (
                    <a
                      key={s.num}
                      href={`#${s.label.toLowerCase()}`}
                      className="group flex items-center justify-between py-3 border-b border-[#2D2D2D]/8 hover:border-[#B8860B]/30 transition-colors"
                    >
                      <div className="flex items-baseline gap-3">
                        <span className="font-serif text-xs text-[#B8860B]">
                          {s.num}
                        </span>
                        <span className="font-body text-sm text-[#2D2D2D] group-hover:text-[#B8860B] transition-colors">
                          {s.label}
                        </span>
                      </div>
                      <span className="font-body text-xs text-[#2D2D2D]/30">
                        {s.subtitle}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Metrics as footnotes */}
            <div className="flex gap-8 mt-10 pt-6 border-t border-[#2D2D2D]/10">
              {profile.metrics.map((m) => (
                <div key={m.label}>
                  <p className="font-serif text-2xl text-[#2D2D2D]">
                    {m.value}
                  </p>
                  <p className="font-body text-[10px] tracking-[0.15em] uppercase text-[#2D2D2D]/40 mt-1">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
