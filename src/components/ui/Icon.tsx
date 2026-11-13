import {
  CircleCheck,
  Clock,
  GitMerge,
  Layers,
  Mail,
  Network,
  Smartphone,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/content/types";
import { cn } from "@/lib/utils";

const icons: Record<IconName, LucideIcon> = {
  "trending-up": TrendingUp,
  "git-merge": GitMerge,
  layers: Layers,
  "circle-check": CircleCheck,
  users: Users,
  network: Network,
  clock: Clock,
  mail: Mail,
  smartphone: Smartphone,
};

type IconProps = {
  name: IconName;
  className?: string;
  strokeWidth?: number;
};

/** Decorative icon from a content key. Always aria-hidden. */
export function Icon({ name, className, strokeWidth = 1.75 }: IconProps) {
  const Component = icons[name];
  return (
    <Component
      aria-hidden="true"
      strokeWidth={strokeWidth}
      className={cn("size-5", className)}
    />
  );
}

type IconTileProps = {
  name: IconName;
  className?: string;
};

/** 48px navy tile with an orchid icon (MASTER.md "icon tile"). */
export function IconTile({ name, className }: IconTileProps) {
  return (
    <div
      className={cn(
        "grid size-12 flex-none place-items-center rounded-sm bg-navy-900 text-orchid",
        className,
      )}
    >
      <Icon name={name} className="size-[1.4rem]" />
    </div>
  );
}

/** LinkedIn mark (lucide v1 dropped brand icons). Same stroke style as the rest of the set. */
export function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-[1.1rem]", className)}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
