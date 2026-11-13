"use client";

import { LazyMotion, MotionConfig } from "motion/react";
import type { ReactNode } from "react";

const loadFeatures = () => import("./features").then((mod) => mod.default);

/**
 * Wraps the app once (root layout).
 * - Features load async: Motion's animation code is not in the critical bundle.
 * - `strict` makes sure only the lightweight `m` components are used.
 * - `reducedMotion="user"` drops transforms for users who ask for less motion.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
