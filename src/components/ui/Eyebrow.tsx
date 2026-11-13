import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type Tone = "light" | "dark";

type EyebrowProps = {
  children: ReactNode;
  tone?: Tone;
  className?: string;
};

/** Small uppercase label with a leading rule. Accent colour follows the band tone. */
export function Eyebrow({ children, tone = "light", className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 text-xs leading-none font-semibold tracking-[0.14em] uppercase",
        "before:h-0.5 before:w-6 before:bg-current before:content-['']",
        tone === "dark" ? "text-orchid" : "text-violet-ink",
        className,
      )}
    >
      {children}
    </p>
  );
}
