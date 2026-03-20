import { testimonials } from "@/data/content";

function fakeTimestamp(index: number): string {
  const base = new Date(2024, 0, 15, 9, 32, 1);
  base.setDate(base.getDate() - index * 3);
  base.setHours(base.getHours() + index * 5);
  base.setMinutes(base.getMinutes() + index * 17);
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${base.getFullYear()}-${pad(base.getMonth() + 1)}-${pad(base.getDate())} ${pad(base.getHours() % 24)}:${pad(base.getMinutes() % 60)}:${pad(base.getSeconds())}`;
}

export function Testemunhos() {
  return (
    <section
      id="testemunhos"
      className="px-4 sm:px-6 py-8 sm:py-12 font-mono"
    >
      <div className="text-[#888] text-sm mb-1">
        {"═".repeat(60)}
      </div>
      <div className="text-[#888] text-sm mb-4">
        $ cat reviews.log | head
      </div>

      <div className="space-y-3 text-sm">
        {testimonials.map((t, i) => {
          const level = i === 0 ? "WARN" : "INFO";
          const levelColor = i === 0 ? "text-[#FFB000]" : "text-[#00FF41]";

          return (
            <div
              key={i}
              className={`leading-relaxed ${i === 0 ? "border-l-2 border-[#FFB000] pl-3" : ""}`}
            >
              <div className="flex flex-wrap gap-x-1 text-xs sm:text-sm">
                <span className="text-[#555]">[{fakeTimestamp(i)}]</span>
                <span className={levelColor}>{level}</span>
                <span className="text-[#00D4FF]">
                  [{t.company}/{t.name}]:
                </span>
              </div>
              <div className="text-[#ccc] mt-1 ml-0 sm:ml-4 text-xs sm:text-sm leading-relaxed">
                &quot;{t.content}&quot;
              </div>
              <div className="text-[#555] text-xs mt-0.5 ml-0 sm:ml-4">
                -- {t.role}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
