import { Pill } from "@/components/ui/Pill";

interface SkillCardProps {
  category: string;
  items: string[];
}

export function SkillCard({ category, items }: SkillCardProps) {
  return (
    <div className="reveal rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7 transition-colors duration-300 hover:border-accent-violet/30">
      <h3 className="mb-5 text-[13px] font-semibold uppercase tracking-[2px] text-accent-violet">
        {category}
      </h3>
      <ul className="flex flex-wrap gap-2.5">
        {items.map((item) => (
          <li key={item}>
            <Pill variant="skill">{item}</Pill>
          </li>
        ))}
      </ul>
    </div>
  );
}
