import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  /** Trailing arrow that nudges right on hover. */
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
};

const base =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border-[1.5px] px-6 py-3 " +
  "text-[0.9375rem] leading-none font-semibold no-underline " +
  "transition-[transform,background-color,border-color,color] duration-200 ease-brand hover:-translate-y-px";

const variants = {
  primary: "border-transparent bg-primary text-white hover:bg-violet-ink",
  ghost: "border-white/35 text-on-dark hover:border-on-dark",
} as const;

/** Link styled as a button. Internal paths use next/link; mailto:/tel: use a plain anchor. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  arrow = false,
  className,
  onClick,
}: ButtonLinkProps) {
  const classes = cn(base, variants[variant], className);
  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-200 ease-brand group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }
  return (
    <a href={href} className={classes} onClick={onClick}>
      {content}
    </a>
  );
}
