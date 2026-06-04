import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface PillProps {
  children: string;
  /**
   * "skill"  — violet themed, used in the Skills section.
   * "stack"  — accent-tinted (per project), used on project cards.
   */
  variant?: "skill" | "stack";
  /** Hex accent (only used by the "stack" variant). */
  accent?: string;
}

export function Pill({ children, variant = "skill", accent }: PillProps) {
  if (variant === "stack") {
    const style: CSSProperties = {
      backgroundColor: `${accent}14`, // ~0.08 alpha
      borderColor: `${accent}35`, // ~0.21 alpha
      color: accent,
    };
    return (
      <span
        style={style}
        className="inline-flex items-center rounded border px-[9px] py-[3px] text-[11px] font-semibold"
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-3 py-1 text-[13px] font-medium",
        "bg-accent-violet/10 border-accent-violet/20 text-accent-violet-pale",
      )}
    >
      {children}
    </span>
  );
}
