import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ExperienceItem } from "@/components/ui/ExperienceItem";
import { EXPERIENCE } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader label="03 — Experience" title="Where I've Worked" />

      <div className="mt-12">
        {EXPERIENCE.map((entry, i) => (
          <ExperienceItem
            key={`${entry.company}-${entry.period}`}
            entry={entry}
            last={i === EXPERIENCE.length - 1}
          />
        ))}
      </div>
    </Section>
  );
}
