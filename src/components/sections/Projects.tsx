import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/data/projects";

export function Projects() {
  return (
    <Section id="projects" alt>
      <SectionHeader label="04 — Projects" title="Things I've Built" />

      <div className="mt-12 grid gap-7 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
