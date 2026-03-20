import { hackathons } from "@/data/content";

const nasa = hackathons.find((h) => h.featured);
const others = hackathons.filter((h) => !h.featured);

export function Hackathons() {
  return (
    <section
      id="hackathons"
      className="relative py-24 lg:py-32"
      style={{ background: "#0a1628" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-sky-400/70">
            Competitions
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            4x Hackathon Winner
          </h2>
          <p className="max-w-2xl text-white/50 font-sans">
            Quatro primeiros lugares em hackathons internacionais de blockchain e tecnologia.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* NASA - featured large card */}
          {nasa && (
            <div className="md:col-span-2 group relative rounded-2xl border border-amber-400/15 bg-white/[0.04] p-8 backdrop-blur-lg transition-all duration-500 hover:border-amber-400/25 hover:shadow-[0_0_40px_rgba(251,191,36,0.06)]">
              {/* Subtle gold glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400/[0.03] to-transparent opacity-60" />

              <div className="relative space-y-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                      <span className="text-xs font-mono font-medium text-amber-400">
                        {nasa.position}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white pt-2">
                      {nasa.name}
                    </h3>
                  </div>
                  <span className="text-sm font-mono text-white/30">
                    {nasa.year}
                  </span>
                </div>

                <p className="text-sm text-white/60 leading-relaxed max-w-xl">
                  {nasa.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {nasa.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-amber-400/10 bg-amber-400/5 px-3 py-1 text-[10px] font-mono text-amber-400/70 tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Other hackathons in right column, stacked */}
          <div className="flex flex-col gap-4">
            {others.slice(0, 2).map((hackathon) => (
              <div
                key={hackathon.name}
                className="group rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur transition-all duration-400 hover:border-sky-400/15 hover:bg-white/[0.06]"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-sky-400/60 uppercase tracking-wider">
                        {hackathon.position}
                      </span>
                      <h3 className="font-display text-sm font-semibold text-white/90 mt-0.5">
                        {hackathon.name}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-white/25">
                      {hackathon.year}
                    </span>
                  </div>

                  <p className="text-xs text-white/40 leading-relaxed line-clamp-2">
                    {hackathon.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {hackathon.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 text-[10px] font-mono text-white/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row for remaining hackathon */}
        {others.length > 2 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {others.slice(2).map((hackathon) => (
              <div
                key={hackathon.name}
                className="group rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur transition-all duration-400 hover:border-sky-400/15 hover:bg-white/[0.06]"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-sky-400/60 uppercase tracking-wider">
                        {hackathon.position}
                      </span>
                      <h3 className="font-display text-sm font-semibold text-white/90 mt-0.5">
                        {hackathon.name}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-white/25">
                      {hackathon.year}
                    </span>
                  </div>

                  <p className="text-xs text-white/40 leading-relaxed line-clamp-2">
                    {hackathon.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {hackathon.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 text-[10px] font-mono text-white/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
