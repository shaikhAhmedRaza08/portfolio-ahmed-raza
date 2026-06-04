import type { ExperienceEntry } from "@/data/experience";
import { cn } from "@/lib/utils";

interface ExperienceItemProps {
  entry: ExperienceEntry;
  /** Removes the divider/margin on the final entry. */
  last?: boolean;
}

export function ExperienceItem({ entry, last = false }: ExperienceItemProps) {
  return (
    <article
      className={cn(
        "reveal grid gap-6 sm:grid-cols-[220px_1fr] sm:gap-10",
        !last && "mb-12 border-b border-white/[0.06] pb-12",
      )}
    >
      <div>
        <p className="mb-1.5 text-[13px] text-[#e2e8f0]/35">{entry.period}</p>
        <p className="text-sm font-semibold text-accent-violet-light">{entry.company}</p>
      </div>

      <div>
        <h3 className="mb-4 text-xl font-bold text-white">{entry.title}</h3>
        <ul className="space-y-2.5">
          {entry.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 text-sm leading-[1.6] text-[#e2e8f0]/60"
            >
              <span aria-hidden className="mt-[3px] shrink-0 text-accent-violet">
                ▸
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
