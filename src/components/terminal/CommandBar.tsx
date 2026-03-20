"use client";

const commands = [
  { label: "~/projects", href: "#projetos" },
  { label: "~/hackathons", href: "#hackathons" },
  { label: "~/testimonials", href: "#testemunhos" },
];

export function CommandBar() {
  return (
    <nav className="px-4 sm:px-6 py-3 border-b border-[#333] bg-[#111] font-mono text-sm">
      <div className="flex flex-wrap items-center gap-x-1 gap-y-1">
        <span className="text-[#888]">$</span>
        {commands.map((cmd, i) => (
          <span key={cmd.href} className="flex items-center gap-1">
            {i > 0 && <span className="text-[#555]">|</span>}
            <a
              href={cmd.href}
              className="text-[#00D4FF] hover:text-[#00FF41] transition-colors"
            >
              cd {cmd.label}
            </a>
          </span>
        ))}
      </div>
    </nav>
  );
}
