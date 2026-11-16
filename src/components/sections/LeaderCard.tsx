import Image from "next/image";
import { Disclosure } from "@/components/ui/Disclosure";
import { LinkedInIcon } from "@/components/ui/Icon";
import type { Leader } from "@/content/types";
import { cn } from "@/lib/utils";

type LeaderCardProps = {
  leader: Leader;
};

function Portrait({ leader }: LeaderCardProps) {
  return (
    <div
      className={cn(
        "relative aspect-[4/5] overflow-hidden rounded-sm",
        leader.photo
          ? "bg-portrait lg:aspect-square"
          : "bg-gradient-to-b from-navy-800 to-navy-900",
      )}
    >
      {leader.photo ? (
        <Image
          src={leader.photo}
          alt={`Portrait of ${leader.name}`}
          fill
          sizes="(min-width: 1200px) 530px, (min-width: 660px) 50vw, 100vw"
          className="object-cover object-top"
        />
      ) : (
        <span
          aria-hidden="true"
          className="grid size-full place-items-center font-display text-[3.5rem] leading-none font-extrabold tracking-[0.04em] text-white/22"
        >
          {leader.initials}
        </span>
      )}
    </div>
  );
}

export function LeaderCard({ leader }: LeaderCardProps) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-md border border-line-dark bg-navy-900 px-4 pt-4 pb-6">
      <Portrait leader={leader} />
      <div className="flex flex-1 flex-col gap-4 px-2">
        <p className="text-xs leading-[1.4] font-semibold tracking-[0.12em] text-orchid uppercase">
          {leader.tagline}
        </p>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold">{leader.name}</h3>
            <p className="mt-1 text-sm text-on-dark-muted">{leader.role}</p>
          </div>
          {leader.linkedin && (
            <a
              href={leader.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${leader.name} on LinkedIn (opens in a new tab)`}
              className="inline-grid size-11 flex-none place-items-center rounded-sm border border-line-dark text-on-dark transition-colors duration-200 ease-brand hover:border-white/30 hover:bg-white/6"
            >
              <LinkedInIcon />
            </a>
          )}
        </div>
        <p className="text-[0.9375rem] text-on-dark-muted">{leader.summary}</p>

        <Disclosure
          label="Full profile & experience"
          srLabel={`of ${leader.name}`}
          tone="dark"
        >
          <p className="text-[0.9375rem] text-on-dark-muted">{leader.bio}</p>
          <p className="mt-2 text-xs leading-none font-semibold tracking-[0.12em] text-on-dark-muted uppercase">
            Experience
          </p>
          <ul className="grid gap-2 border-l border-line-dark">
            {leader.experience.map((item) => (
              <li
                key={`${item.title}-${item.period}`}
                className="relative pl-4 text-sm leading-normal text-on-dark before:absolute before:top-[0.5em] before:-left-1 before:size-[7px] before:rounded-full before:bg-orchid before:content-['']"
              >
                {item.title}
                <span className="block text-[0.8125rem] text-on-dark-muted tabular-nums">
                  {item.period}
                </span>
              </li>
            ))}
          </ul>
        </Disclosure>
      </div>
    </article>
  );
}
