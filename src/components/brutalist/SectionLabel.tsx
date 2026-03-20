import { layout } from "@/lib/design-system";

export function SectionLabel({ label }: { label: string }) {
  return (
    <div className={`border-t border-b border-neutral-800 ${layout.sidePad} py-3`}>
      <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400">
        {label}
      </span>
    </div>
  );
}
