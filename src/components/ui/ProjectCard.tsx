import Image from "next/image";
import type { CSSProperties } from "react";
import { ExternalLink, Github, ImageIcon } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, stack, accent, screenshot, liveUrl, githubUrl, desc } = project;

  const cardStyle: CSSProperties = { borderColor: `${accent}29` }; // ~0.16 alpha
  const screenshotBorder: CSSProperties = { borderColor: `${accent}1f` }; // ~0.12 alpha

  return (
    <article
      style={cardStyle}
      className="reveal flex flex-col overflow-hidden rounded-[20px] border bg-white/[0.03] transition-transform duration-300 hover:-translate-y-1"
    >
      {/* Screenshot zone */}
      <div
        style={screenshotBorder}
        className="relative h-[200px] shrink-0 border-b"
      >
        {screenshot ? (
          <Image
            src={screenshot}
            alt={`${title} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, 520px"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div
            style={{ background: `linear-gradient(135deg, ${accent}17 0%, rgba(10,10,15,0.6) 100%)` }}
            className="flex h-full w-full flex-col items-center justify-center"
          >
            <ImageIcon className="mb-2 h-8 w-8 opacity-40" style={{ color: accent }} aria-hidden />
            <span className="text-[12px] uppercase tracking-[1px] text-[#e2e8f0]/30">
              Screenshot coming soon
            </span>
          </div>
        )}
        {/* Bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60px] bg-gradient-to-t from-base/80 to-transparent" />
      </div>

      {/* Body */}
      <div className="flex grow flex-col px-7 py-6">
        <ul className="mb-4 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <li key={tech}>
              <span
                style={{
                  backgroundColor: `${accent}14`,
                  borderColor: `${accent}35`,
                  color: accent,
                }}
                className="inline-flex items-center rounded border px-[9px] py-[3px] text-[11px] font-semibold"
              >
                {tech}
              </span>
            </li>
          ))}
        </ul>

        <h3 className="text-[17px] font-bold leading-snug text-white">{title}</h3>
        <p className="mt-2 grow text-[13.5px] leading-[1.7] text-[#e2e8f0]/55">{desc}</p>

        {/* Actions */}
        <div className="mt-6 flex gap-2.5 border-t border-white/[0.06] pt-5">
          <ActionButton
            href={liveUrl}
            accent={accent}
            kind="live"
            icon={<ExternalLink className="h-4 w-4" aria-hidden />}
            label="Live Demo"
          />
          <ActionButton
            href={githubUrl}
            accent={accent}
            kind="github"
            icon={<Github className="h-4 w-4" aria-hidden />}
            label="GitHub"
          />
        </div>
      </div>
    </article>
  );
}

interface ActionButtonProps {
  href: string | null;
  accent: string;
  kind: "live" | "github";
  icon: React.ReactNode;
  label: string;
}

function ActionButton({ href, accent, kind, icon, label }: ActionButtonProps) {
  const baseClass =
    "flex flex-1 items-center justify-center gap-1.5 rounded-lg py-[9px] text-[13px] font-semibold transition-all duration-200";

  if (!href) {
    return (
      <span
        aria-disabled
        className={cn(
          baseClass,
          "cursor-not-allowed border border-white/[0.08] bg-white/[0.04] text-[#e2e8f0]/25",
        )}
      >
        {icon}
        {label}
      </span>
    );
  }

  const activeStyle: CSSProperties =
    kind === "live" ? { backgroundColor: accent, color: "#fff" } : {};

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={activeStyle}
      className={cn(
        baseClass,
        "hover:brightness-110",
        kind === "github" && "border border-white/10 bg-white/[0.06] text-[#e2e8f0] hover:bg-white/[0.1]",
      )}
    >
      {icon}
      {label}
    </a>
  );
}
