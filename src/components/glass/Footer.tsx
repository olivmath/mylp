import { profile, services, quickLinks } from "@/data/content";

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

export function Footer() {
  return (
    <footer style={{ background: "#080e1a" }}>
      {/* Glass divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand column */}
          <div className="space-y-5">
            <span className="font-display text-xl font-bold text-sky-400">
              {profile.brand}
            </span>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              {profile.headline}. {profile.location}.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] text-white/40 transition-all duration-300 hover:border-sky-400/20 hover:text-sky-400 hover:bg-sky-400/5"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-5">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-white/30">
              Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 transition-colors duration-200 hover:text-white/70"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services + CTA */}
          <div className="space-y-5">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-white/30">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm text-white/40"
                >
                  {service}
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <a
                href={profile.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-sky-400/25 bg-sky-400/10 px-5 py-2.5 text-sm font-medium text-sky-400 transition-all duration-300 hover:border-sky-400/50 hover:bg-sky-400/15 hover:shadow-[0_0_25px_rgba(56,189,248,0.12)]"
              >
                Agendar Call
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="text-xs text-white/25 transition-colors hover:text-white/40"
          >
            {profile.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
