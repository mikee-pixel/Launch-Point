import { Disclosure } from "@/components/ui/Disclosure";
import { IconTile } from "@/components/ui/Icon";
import type { Service } from "@/content/types";

type ServiceCardProps = {
  service: Service;
};

/** Reused later on /services. The `slug` becomes the card's link to /services/[slug]. */
export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article
      id={`service-${service.slug}`}
      className="flex h-full flex-col gap-4 rounded-md border border-line bg-card p-8 shadow-sm transition-[box-shadow,transform,border-color] duration-200 ease-brand hover:-translate-y-0.5 hover:border-line-strong hover:shadow-lg"
    >
      <IconTile name={service.icon} />
      <h3 className="text-[1.375rem] font-bold text-ink">{service.title}</h3>
      <p className="text-ink-muted">{service.summary}</p>
      <ul
        className="flex flex-wrap gap-2"
        aria-label={`${service.title} focus areas`}
      >
        {service.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-line bg-paper px-2.5 py-1 text-xs font-semibold text-ink"
          >
            {tag}
          </li>
        ))}
      </ul>
      <Disclosure label="Read more" srLabel={`about ${service.title}`}>
        <p className="text-ink-muted">{service.details}</p>
      </Disclosure>
    </article>
  );
}
