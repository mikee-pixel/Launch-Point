import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/brand/launchpoint-logo-white.png";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** Tailwind height classes; width follows the 494:142 aspect ratio. */
  className?: string;
  /** Optical nudge: the rocket mark extends above the wordmark, so lift it ~10% in the nav. */
  nudge?: boolean;
  /** Above the fold on first paint (header): load eagerly instead of lazily. Not a preload. */
  eager?: boolean;
  onClick?: () => void;
};

export function Logo({
  className = "h-12",
  nudge = true,
  eager = false,
  onClick,
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Launch:Point home"
      className="inline-flex flex-none items-center rounded-sm"
      onClick={onClick}
    >
      <Image
        src={logo}
        alt=""
        width={196}
        height={56}
        loading={eager ? "eager" : "lazy"}
        className={cn(
          "block w-auto max-w-full",
          nudge && "-translate-y-[10%]",
          className,
        )}
      />
    </Link>
  );
}
