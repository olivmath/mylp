import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer id="footer" className="bg-[#FAF9F6] pt-0 pb-8">
      {/* Thin gold separator */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-[1px] bg-[#B8860B]/30" />
      </div>

      {/* Top row: brand, contact, CTA */}
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <span className="font-serif text-xl text-[#2D2D2D]">
              {profile.brand}
            </span>
            <span className="hidden sm:block w-[1px] h-4 bg-[#2D2D2D]/15" />
            <a
              href={`mailto:${profile.email}`}
              className="font-body text-sm text-[#2D2D2D]/50 hover:text-[#B8860B] transition-colors"
            >
              {profile.email}
            </a>
            <span className="hidden md:block w-[1px] h-4 bg-[#2D2D2D]/15" />
            <span className="font-body text-sm text-[#2D2D2D]/50">
              {profile.location}
            </span>
          </div>

          <a
            href={profile.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#B8860B] px-6 py-2.5 font-body text-sm text-[#B8860B] tracking-wide uppercase transition-colors hover:bg-[#B8860B] hover:text-[#FAF9F6]"
          >
            Agendar Call
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom row: copyright + social */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="border-t border-[#2D2D2D]/8 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-body text-xs text-[#2D2D2D]/30">
            &copy; {new Date().getFullYear()} {profile.name}. All rights
            reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-[#2D2D2D]/40 hover:text-[#B8860B] transition-colors uppercase tracking-wider"
            >
              GitHub
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-[#2D2D2D]/40 hover:text-[#B8860B] transition-colors uppercase tracking-wider"
            >
              LinkedIn
            </a>
            <a
              href={profile.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-[#2D2D2D]/40 hover:text-[#B8860B] transition-colors uppercase tracking-wider"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
