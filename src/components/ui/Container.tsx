import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Max 1200px, 16px gutters on mobile, 32px from 768px, safe-area aware. */
export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1200px]",
        "pr-[max(1rem,env(safe-area-inset-right))] pl-[max(1rem,env(safe-area-inset-left))]",
        "md:pr-[max(2rem,env(safe-area-inset-right))] md:pl-[max(2rem,env(safe-area-inset-left))]",
        className,
      )}
    >
      {children}
    </div>
  );
}
