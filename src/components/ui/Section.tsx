import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  /** Adds the alternating surface background + border band. */
  alt?: boolean;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
}

/**
 * Standard section shell: full-width band (optionally tinted) with a
 * centered max-width content column. Keeps spacing consistent everywhere.
 */
export function Section({ id, alt = false, className, innerClassName, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(alt && "bg-white/[0.015] border-y border-white/[0.05]", className)}
    >
      <div className={cn("max-w-content mx-auto px-6 sm:px-8 py-20 sm:py-[100px]", innerClassName)}>
        {children}
      </div>
    </section>
  );
}
