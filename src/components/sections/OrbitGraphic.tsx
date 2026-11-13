import Image from "next/image";
import rocket from "../../../public/images/brand/launchpoint-rocket.png";
import { cn } from "@/lib/utils";

/**
 * Node positions in the 480-unit orbit, in the same order as `hero.orbitNodes`.
 * Layout data, not copy, so it lives here rather than in src/content.
 */
const POSITIONS = [
  { cx: 240, cy: 90, tx: 240, ty: 66, anchor: "middle" },
  { cx: 422, cy: 135, tx: 422, ty: 111, anchor: "middle" },
  { cx: 370, cy: 315, tx: 392, ty: 320, anchor: "start" },
  { cx: 345, cy: 422, tx: 345, ty: 452, anchor: "middle" },
  { cx: 135, cy: 422, tx: 135, ty: 452, anchor: "middle" },
  { cx: 110, cy: 315, tx: 88, ty: 320, anchor: "end" },
  { cx: 58, cy: 135, tx: 58, ty: 111, anchor: "middle" },
] as const;

type OrbitGraphicProps = {
  label: string;
  nodes: string[];
  className?: string;
};

/** Rings + domain nodes around the rocket mark. Inline SVG: no request, crisp at any size. */
export function OrbitGraphic({ label, nodes, className }: OrbitGraphicProps) {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-square w-full max-w-[480px]",
        className,
      )}
    >
      <svg
        viewBox="-20 -20 520 520"
        role="img"
        aria-label={label}
        className="block size-full"
      >
        <defs>
          <linearGradient id="orbit-core-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" className="[stop-color:var(--color-brand-blue)]" />
            <stop offset=".5" className="[stop-color:var(--color-primary)]" />
            <stop offset="1" className="[stop-color:var(--color-orchid)]" />
          </linearGradient>
        </defs>

        <g className="fill-none stroke-white/14">
          <circle cx="240" cy="240" r="90" />
          <circle cx="240" cy="240" r="150" />
          <circle cx="240" cy="240" r="210" strokeDasharray="2 6" />
        </g>

        <g className="[transform-origin:240px_240px] animate-spin-slow fill-orchid">
          <circle cx="330" cy="240" r="3" />
          <circle cx="150" cy="240" r="2" />
        </g>

        <g className="fill-on-dark font-sans text-[18px] font-semibold tracking-[0.02em] sm:text-[13px]">
          {nodes.map((node, i) => {
            const p = POSITIONS[i % POSITIONS.length];
            return (
              <g key={node}>
                <circle cx={p.cx} cy={p.cy} r="11" className="fill-orchid/18" />
                <circle cx={p.cx} cy={p.cy} r="5" className="fill-orchid" />
                <text x={p.tx} y={p.ty} textAnchor={p.anchor}>
                  {node}
                </text>
              </g>
            );
          })}
        </g>

        <circle
          cx="240"
          cy="240"
          r="50"
          strokeWidth="1.5"
          stroke="url(#orbit-core-gradient)"
          className="fill-navy-800"
        />
      </svg>

      {/* Rocket sits on the core: x 224–256, y 206–276 in the -20…500 viewBox. */}
      <Image
        src={rocket}
        alt=""
        sizes="32px"
        className="absolute top-[43.46%] left-[46.92%] h-[13.46%] w-[6.15%]"
      />
    </div>
  );
}
