import { profile } from "@/data/content";

export function StatusBar() {
  return (
    <footer className="px-4 sm:px-6 py-2 border-t border-[#333] bg-[#1a1a1a] font-mono text-xs flex flex-wrap items-center justify-between gap-2">
      <div className="flex items-center gap-3 text-[#888]">
        <span className="text-[#00FF41]">{profile.brand}</span>
        <span className="text-[#555]">|</span>
        <span>master</span>
        <span className="text-[#555]">|</span>
        <span>utf-8</span>
        <span className="text-[#555]">|</span>
        <span>ln 42</span>
        <span className="text-[#555]">|</span>
        <span>col 80</span>
      </div>
      <div className="flex items-center gap-2">
        <a
          href={profile.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00D4FF] hover:text-[#00FF41] transition-colors"
        >
          [GH]
        </a>
        <a
          href={profile.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00D4FF] hover:text-[#00FF41] transition-colors"
        >
          [LI]
        </a>
        <a
          href={profile.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00D4FF] hover:text-[#00FF41] transition-colors"
        >
          [TW]
        </a>
      </div>
    </footer>
  );
}
