"use client";

import { profile } from "@/data/content";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialLinks = [
  { href: profile.social.github, icon: GithubIcon, label: "GitHub" },
  { href: profile.social.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  { href: profile.social.twitter, icon: TwitterIcon, label: "Twitter" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(56,189,248,0.08), transparent), radial-gradient(ellipse 60% 50% at 80% 50%, rgba(56,189,248,0.04), transparent), #0a1628",
      }}
    >
      {/* Floating decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-[10%] h-72 w-72 rounded-full bg-sky-400/[0.03] blur-3xl" />
        <div className="absolute bottom-1/4 right-[15%] h-96 w-96 rounded-full bg-sky-400/[0.02] blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-sky-400/[0.015] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column: text content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/5 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-xs font-mono text-sky-400 tracking-wide">
                Available for consulting
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                {profile.headline.split("&")[0]}
                <span className="text-sky-400">&amp;</span>
                <br />
                {profile.headline.split("&")[1]}
              </h1>
              <p className="text-lg text-white/60 font-sans max-w-lg leading-relaxed">
                {profile.bio}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href={profile.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-sky-400 px-6 py-3 text-sm font-semibold text-navy-900 transition-all duration-300 hover:bg-sky-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)]"
              >
                Agendar Call
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href={profile.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                Download CV
              </a>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/50 transition-all duration-300 hover:border-sky-400/30 hover:bg-sky-400/10 hover:text-sky-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.1)]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Right column: metrics + photo */}
          <div className="space-y-8">
            {/* Photo placeholder with glass frame */}
            <div className="relative mx-auto w-fit">
              <div className="relative h-64 w-64 lg:h-80 lg:w-80 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-[0_0_40px_rgba(56,189,248,0.06)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-20 w-20 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-sky-400">
                      {profile.brand.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                </div>
                {/* Corner accent */}
                <div className="absolute top-0 right-0 h-16 w-16 border-t border-r border-sky-400/20 rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 h-16 w-16 border-b border-l border-sky-400/20 rounded-bl-2xl" />
              </div>
            </div>

            {/* Metrics cards */}
            <div className="grid grid-cols-3 gap-3">
              {profile.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="group rounded-xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-lg text-center transition-all duration-300 hover:border-sky-400/20 hover:bg-white/[0.07] hover:shadow-[0_0_20px_rgba(56,189,248,0.08)]"
                >
                  <div className="font-display text-2xl font-bold text-white tracking-tight">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-xs text-white/50 font-sans">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
