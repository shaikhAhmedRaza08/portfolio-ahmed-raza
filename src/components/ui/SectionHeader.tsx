interface SectionHeaderProps {
  /** e.g. "01 — About" */
  label: string;
  /** e.g. "Who I Am" */
  title: string;
}

export function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <header className="reveal">
      <p className="text-[12px] font-semibold uppercase tracking-[3px] text-accent-violet mb-2.5">
        {label}
      </p>
      <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight text-white">
        {title}
      </h2>
    </header>
  );
}
