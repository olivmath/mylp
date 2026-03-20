import Link from "next/link";

const approaches = [
  {
    route: "/editorial",
    name: "Editorial Premium",
    description: "Clean editorial, tipografia serifada, whitespace generoso, grid assimétrico",
    palette: ["#0f1729", "#2563eb", "#38bdf8", "#f8fafc", "#ffffff"],
    tags: ["Serif", "Light mode", "Asymmetric grid"],
  },
  {
    route: "/glass",
    name: "Glassmorphism",
    description: "Dark mode total, cards com backdrop-blur, glow effects, profundidade visual",
    palette: ["#0a1628", "#0f1729", "#38bdf8", "#00d4ff", "#ffffff10"],
    tags: ["Dark mode", "Blur", "Glow"],
  },
  {
    route: "/hybrid",
    name: "Hybrid",
    description: "Nav lateral, carrossel horizontal, timeline zigzag, spotlight testimonials",
    palette: ["#0f1729", "#38bdf8", "#2563eb", "#f8fafc", "#ffffff"],
    tags: ["Side nav", "Carousel", "Timeline"],
  },
  {
    route: "/brutalist",
    name: "Brutalist Bold",
    description: "Tipografia gigante edge-to-edge, barras accordion, preto/branco/laranja puro",
    palette: ["#000000", "#ffffff", "#FF5722", "#1a1a1a", "#333333"],
    tags: ["Typography", "High contrast", "Raw"],
  },
  {
    route: "/magazine",
    name: "Magazine Luxury",
    description: "Layout de revista, spreads alternados, paleta quente com ouro e creme",
    palette: ["#FAF9F6", "#2D2D2D", "#B8860B", "#7C9082", "#ffffff"],
    tags: ["Serif", "Warm tones", "Editorial spreads"],
  },
  {
    route: "/terminal",
    name: "Terminal CLI",
    description: "Interface de terminal, git log, ls -la, status bar, tudo em monospace",
    palette: ["#0C0C0C", "#00FF41", "#FFB000", "#00D4FF", "#333333"],
    tags: ["Monospace", "CLI", "Hacker"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="border-b border-white/10 px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">olivmath</h1>
            <p className="text-sm text-white/50 mt-1">Portfolio Design Showcase</p>
          </div>
          <p className="text-xs text-white/30 font-mono">6 approaches — pick your favorite</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approaches.map((approach, i) => (
            <Link
              key={approach.route}
              href={approach.route}
              className="group block border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden"
            >
              {/* Color palette strip */}
              <div className="flex h-2">
                {approach.palette.map((color, j) => (
                  <div
                    key={j}
                    className="flex-1"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              <div className="p-6">
                {/* Number + Name */}
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-xs font-mono text-white/30">0{i + 1}</span>
                  <h2 className="text-xl font-semibold group-hover:text-[#38bdf8] transition-colors">
                    {approach.name}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  {approach.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {approach.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 border border-white/10 text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sm text-white/40 group-hover:text-white/80 transition-colors">
                  <span>View approach</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="border-t border-white/10 px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-white/30 font-mono">
          <span>Lucas Oliveira — Portfolio Redesign 2026</span>
          <span>Next.js 16 + Tailwind CSS v4</span>
        </div>
      </footer>
    </div>
  );
}
