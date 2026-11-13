"use client";

import * as m from "motion/react-m";
import type { ReactNode } from "react";
import { REVEAL_ATTR, VIEWPORT, fadeUp } from "./variants";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds. Use small values (0.05 to 0.2) to sequence siblings. */
  delay?: number;
  as?: "div" | "li" | "article" | "header";
};

/** Fades and lifts one element in the first time it enters the viewport. Below the fold only. */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const Component = m[as];
  return (
    <Component
      {...REVEAL_ATTR}
      className={className}
      variants={fadeUp(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </Component>
  );
}
