import { hackathons } from "@/data/content";

export function Hackathons() {
  const nasa = hackathons.find((h) => h.featured);
  const others = hackathons.filter((h) => !h.featured);

  return (
    <section id="hackathons" className="bg-[#2D2D2D] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="flex items-baseline justify-between mb-16 border-b border-white/10 pb-6">
          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-[#B8860B] mb-2">
              02
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF9F6]">
              Hackathons
            </h2>
          </div>
          <p className="font-body text-xs text-[#FAF9F6]/30 tracking-wider uppercase hidden sm:block">
            4x Champion
          </p>
        </div>

        {/* NASA featured - full width */}
        {nasa && (
          <article className="relative mb-12 md:mb-16 p-8 sm:p-12 md:p-16 border border-white/10 overflow-hidden">
            {/* Year watermark */}
            <span className="absolute -right-4 -top-8 font-serif text-[200px] sm:text-[280px] text-white/[0.03] leading-none select-none pointer-events-none">
              {nasa.year}
            </span>

            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#B8860B]/15 border border-[#B8860B]/40 font-body text-xs text-[#B8860B] tracking-wider uppercase">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                  {nasa.position}
                </span>
                <span className="font-body text-xs text-[#FAF9F6]/40">
                  {nasa.year}
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF9F6] mb-4 leading-tight">
                {nasa.name}
              </h3>

              <p className="font-body text-base text-[#FAF9F6]/50 leading-relaxed mb-8">
                {nasa.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {nasa.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] px-2 py-1 border border-white/15 text-[#FAF9F6]/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        )}

        {/* Other hackathons - 2 column masonry */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {others.map((hack) => (
            <article
              key={hack.name}
              className="relative p-8 sm:p-10 border border-white/8 overflow-hidden group hover:border-[#B8860B]/20 transition-colors"
            >
              {/* Year watermark */}
              <span className="absolute -right-2 -bottom-6 font-serif text-[120px] sm:text-[160px] text-white/[0.03] leading-none select-none pointer-events-none">
                {hack.year}
              </span>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#B8860B]/10 border border-[#B8860B]/30 font-body text-[10px] text-[#B8860B] tracking-wider uppercase">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
                    {hack.position}
                  </span>
                  <span className="font-body text-xs text-[#FAF9F6]/30">
                    {hack.year}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#FAF9F6] mb-3 leading-tight">
                  {hack.name}
                </h3>

                <p className="font-body text-sm text-[#FAF9F6]/40 leading-relaxed mb-6">
                  {hack.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {hack.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] px-2 py-0.5 border border-white/10 text-[#FAF9F6]/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
