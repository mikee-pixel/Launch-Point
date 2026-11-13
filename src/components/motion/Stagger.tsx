"use client";

import * as m from "motion/react-m";
import type { ReactNode } from "react";
import { REVEAL_ATTR, STAGGER, VIEWPORT, fadeUp } from "./variants";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol";
};

const itemVariants = fadeUp();

/** Reveals its StaggerItem children one after another when the group enters the viewport. */
export function Stagger({ children, className, as = "div" }: StaggerProps) {
  const Component = m[as];
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: STAGGER } },
      }}
    >
      {children}
    </Component>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
};

export function StaggerItem({
  children,
  className,
  as = "div",
}: StaggerItemProps) {
  const Component = m[as];
  return (
    <Component {...REVEAL_ATTR} className={className} variants={itemVariants}>
      {children}
    </Component>
  );
}
