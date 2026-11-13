import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { Tone } from "./Eyebrow";

type DisclosureProps = {
  /** Visible summary text, e.g. "Read more". */
  label: string;
  /** Screen-reader suffix so the summary is descriptive, e.g. "about Business Development". */
  srLabel?: string;
  tone?: Tone;
  children: ReactNode;
  className?: string;
};

/** Native <details> disclosure: no JS, content stays in the server HTML. */
export function Disclosure({
  label,
  srLabel,
  tone = "light",
  children,
  className,
}: DisclosureProps) {
  return (
    <details
      className={cn(
        "group/more mt-auto border-t pt-2",
        tone === "dark" ? "border-line-dark" : "border-line",
        className,
      )}
    >
      <summary
        className={cn(
          "inline-flex min-h-11 list-none items-center gap-1.5 text-[0.9375rem] font-semibold",
          "[&::-webkit-details-marker]:hidden",
          tone === "dark" ? "text-orchid" : "text-violet-ink",
        )}
      >
        {label}
        {srLabel && <span className="sr-only"> {srLabel}</span>}
        <ChevronDown
          aria-hidden="true"
          className="size-4 transition-transform duration-200 ease-brand group-open/more:rotate-180"
        />
      </summary>
      <div className="grid gap-4 pt-2">{children}</div>
    </details>
  );
}
