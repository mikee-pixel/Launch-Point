import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-title"
      className="relative overflow-hidden bg-navy-950 py-24 text-on-dark tone-dark lg:py-32"
    >
      <Container>
        <Eyebrow tone="dark">Error 404</Eyebrow>
        <h1
          id="not-found-title"
          className="mt-6 text-[clamp(2.375rem,1.4rem+4.2vw,4.25rem)] font-extrabold tracking-[-0.02em]"
        >
          This page has <span className="text-orchid">drifted</span> off course
        </h1>
        <p className="mt-6 mb-8 max-w-[62ch] text-lg text-on-dark-muted">
          The page you are looking for doesn&rsquo;t exist or has moved. Head
          back to the home page to find what you need.
        </p>
        <ButtonLink href="/" arrow>
          Back to home
        </ButtonLink>
      </Container>
    </section>
  );
}
