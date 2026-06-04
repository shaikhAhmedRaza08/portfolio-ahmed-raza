import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillCard } from "@/components/ui/SkillCard";
import { SKILLS } from "@/data/skills";

export function Skills() {
  return (
    <Section id="skills" alt>
      <SectionHeader label="02 — Skills" title="What I Work With" />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {Object.entries(SKILLS).map(([category, items]) => (
          <SkillCard key={category} category={category} items={items} />
        ))}
      </div>
    </Section>
  );
}
