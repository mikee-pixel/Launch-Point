import type { Variants } from "motion/react";

/** Shared motion values (.claude/rules/animation.md). */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;
export const DURATION = 0.6;
export const DISTANCE = 20;
export const STAGGER = 0.08;
export const VIEWPORT = { once: true, amount: 0.2 } as const;

/**
 * Elements with this attribute start hidden in the server HTML (Motion's initial state).
 * The <noscript> style in the root layout reveals them when JavaScript is off.
 */
export const REVEAL_ATTR = { "data-reveal": "" } as const;

/** Fade + lift. `delay` lives inside the variant: a `transition` prop would be overridden by it. */
export function fadeUp(delay = 0): Variants {
  return {
    hidden: { opacity: 0, y: DISTANCE },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION, ease: EASE_OUT, delay },
    },
  };
}
