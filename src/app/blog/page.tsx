import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos sobre blockchain, criptografia, engenharia de software e estratégias de conteúdo.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — olivmath",
    description: "Artigos sobre blockchain, criptografia e estratégias de conteúdo.",
    url: "/blog",
  },
};

const POSTS = [
  {
    slug: "linkedin-playbook",
    title: "The LinkedIn Playbook",
    sub: "Manual operacional do LinkedIn em 2026: arquitetura de perfil, mecânica algorítmica, modelo de média móvel, sinais de compra, conversão e engajamento.",
    tag: "PLAYBOOK · 2026",
    minutes: 22,
    chapters: 8,
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F2F2F2]">
      <header className="border-b border-neutral-800 px-6 md:px-12 lg:px-16 py-5 flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-black uppercase tracking-wider hover:text-[#6B7FFF] transition-colors">
          olivmath
        </Link>
        <Link href="/" className="text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-[#6B7FFF] transition-colors">
          ← back
        </Link>
      </header>

      <div className="px-6 md:px-12 lg:px-16 pt-16 md:pt-24 pb-12 max-w-6xl">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-[#6B7FFF] mb-6">
          Blog
        </p>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight leading-[0.9] mb-6">
          Posts
        </h1>
        <p className="text-neutral-400 text-base md:text-lg max-w-2xl leading-relaxed">
          Artigos sobre blockchain, criptografia, engenharia de software e estratégias de conteúdo.
        </p>
      </div>

      <div className="border-t border-neutral-800">
        {POSTS.map((p, i) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group relative border-b border-neutral-800 block hover:bg-neutral-900 transition-colors"
          >
            <div className="px-6 md:px-12 lg:px-16 py-10 md:py-16 grid md:grid-cols-12 gap-6 md:gap-12">
              <div className="md:col-span-2">
                <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="block mt-2 text-[10px] uppercase tracking-[0.3em] text-[#6B7FFF] font-bold">
                  {p.tag}
                </span>
              </div>
              <div className="md:col-span-8">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none mb-4">
                  {p.title}
                </h2>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
                  {p.sub}
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#6B7FFF]">
                    Ler post
                  </span>
                  <span className="text-[#6B7FFF] text-lg group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
              <div className="md:col-span-2 flex md:flex-col md:items-end gap-4 md:gap-2 text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                <span>{p.chapters} caps.</span>
                <span>~{p.minutes} min</span>
              </div>
            </div>

            <span className="absolute top-0 left-0 w-1 h-0 bg-[#6B7FFF] group-hover:h-full transition-all duration-300"/>
          </Link>
        ))}
      </div>

      <footer className="border-t border-neutral-800 px-6 md:px-12 lg:px-16 py-8 flex justify-between items-center text-[10px] uppercase tracking-[0.3em] text-neutral-500">
        <span>olivmath © 2026</span>
        <Link href="/" className="hover:text-[#6B7FFF] transition-colors">↗ home</Link>
      </footer>
    </div>
  );
}
