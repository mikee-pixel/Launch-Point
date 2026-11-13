import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow, type Tone } from "./Eyebrow";

type SectionHeadingProps = {
  /** id of the h2; the section uses it in aria-labelledby. */
  id: string;
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  tone?: Tone;
  className?: string;
};

/** Eyebrow + the section's single h2, with an optional lead to the right on desktop. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  lead,
  tone = "light",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "relative grid gap-4",
        lead && "lg:grid-cols-[5fr_7fr] lg:items-end lg:gap-16",
        className,
      )}
    >
      <div>
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        <h2
          id={id}
          className="mt-4 text-[clamp(1.75rem,1.2rem+2vw,2.75rem)] font-bold"
        >
          {title}
        </h2>
      </div>
      {lead && (
        <p
          className={cn(
            "max-w-[62ch] text-lg",
            tone === "dark" ? "text-on-dark-muted" : "text-ink-muted",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
