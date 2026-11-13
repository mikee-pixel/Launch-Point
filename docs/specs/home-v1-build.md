# Spec: Home page build (from mockup v1)

Status: DRAFT, awaiting approval
Source of truth for layout and copy: `docs/mockups/home-v1.html` (approved by Michael, 2026-11-13)

## Objective

Turn the approved static mockup into the production Next.js 16 home page, plus the site foundation
(tokens, fonts, SEO, layout, motion) that every future page reuses. Visual result must match the
mockup at 360px, 768px, 1280px and 1920px.

Success = Lighthouse 95+ (all four), LCP < 2.5s, CLS < 0.1, INP < 200ms, `npm run build` passes,
console clean, one `h1`, one `h2` per section, keyboard and reduced-motion safe.

## Out of scope

Contact form (mockup uses email + phone only), redirects from WordPress (needs `docs/old-urls.txt`),
analytics, extra pages, dark mode (mockup is deliberately single-look).

## Design decisions to carry over from the mockup

| Item | Mockup | MASTER.md today | Plan |
| --- | --- | --- | --- |
| Palette | Brand navy `#0d0e2b`, violet `#6559c9`, orchid accent `#c56ae4`, lavender paper `#f6f5fb` | Slate `#0f172a`, blue `#0369a1` | Needs decision (Q1) |
| Logo gradient | Blue→violet→orchid, used only as a 1px header rule and orbit core stroke | Anti-pattern: "AI purple/pink gradients" | It is the client's logo, used as a hairline, not a fill. Flag, keep. |
| Fonts | Montserrat 600–800 (display) + Plus Jakarta Sans 400–700 (body) | Plus Jakarta only | Follows Q1 |
| Spacing, radius, shadows | MASTER scale (+ `4xl` 6rem), radius 8/12 | Same | Tokens in `@theme` |

## Structure

Move the scaffold's root `app/` to `src/app/` (CLAUDE.md layout), `@/*` → `./src/*`.

```
src/app/            layout.tsx, page.tsx, sitemap.ts, robots.ts, not-found.tsx, opengraph-image.tsx, icon
src/config/         site.ts (name, url, contact, socials), routes.ts (nav + sitemap)
src/content/        types.ts, home.ts (hero, about, stats, partnering, cta), services.ts, leaders.ts
src/lib/            seo.ts (buildMetadata), schema.ts (Organization, WebSite), utils.ts (cn)
src/components/
  layout/           Header, MobileNav (client), Footer, Logo, SkipLink
  motion/           MotionProvider, Reveal, Stagger/StaggerItem (client, LazyMotion + m)
  ui/               Container, Button (link variants), Eyebrow, SectionHeading, Disclosure
  sections/         HeroSection, OrbitGraphic, AboutSection, ServicesSection, ServiceCard,
                    LeadershipSection, LeaderCard, PartneringSection, ContactSection
public/images/brand optimised logo + rocket (already present)
```

Sections take `data` props from `src/content`; services carry a `slug` so they can become
`/services/[slug]` later with `generateStaticParams`. Nav anchors live in `routes.ts` only.

## Behaviour and accessibility

- Header: sticky, translucent navy. Desktop nav ≥960px. Below that, a left slide-out drawer
  (client `MobileNav`): `aria-expanded`, focus moves in, Tab trapped, Esc/backdrop closes,
  focus returns to the trigger, `inert` on the rest of the page, auto-close on resize to desktop.
- "Read more" / "Full profile" use native `<details>` (no JS), summary text gets an sr-only
  suffix with the service/person name so it is descriptive.
- Skip link to `#main`. Focus ring: 3px orchid outline (mockup) on all interactive elements.
- Leader portraits: initials placeholder card until real photos arrive (then `next/image`, 4:5, `sizes`).
  LinkedIn buttons only render when a URL exists (no `href="#"`).

## Motion

- Hero: domains line, lead, buttons, orbit and pedigree rise in (y 12→0, opacity). The `h1` animates
  transform only, never from opacity 0 (LCP rule).
- Below the fold: `Reveal` on section heads, `Stagger` on service cards, leader cards, pillars, stats.
  y 16–20px, 0.6s, ease `[0.22, 1, 0.36, 1]`, `once: true, amount: 0.2`.
- Orbit ring: 120s CSS rotation (transform). All motion off under `prefers-reduced-motion`.
- Hover: CSS transitions 150–200ms (button lift 1px, card shadow, arrow nudge).

## SEO

- Root metadata via `buildMetadata()`: title "Launch:Point | Business Origination & Partner Advisory",
  140–160 char description, canonical, OG + Twitter `summary_large_image`, generated 1200×630 OG image.
- JSON-LD: Organization (name, url, logo, description, contactPoint email + phone) + WebSite.
- `sitemap.ts` from `routes.ts` (real pages only: `/`), `robots.ts` allows all, disallows `/api/`.
- `siteConfig.url` = `https://launchpoint.ph` (TODO confirm canonical host: www or apex).

## Tasks (build order, typecheck + lint after each)

1. **Tooling**: install deps (Q2), add `typecheck` and `format` scripts, Prettier config, move `app/` → `src/app/`, fix `@/*` alias. Verify: `npm run build`.
2. **Design tokens + fonts**: `@theme` tokens per Q1 outcome, `next/font` (Montserrat + Plus Jakarta Sans, `display: swap`, latin subset). Write `design-system/launchpoint/pages/home.md` or update MASTER (Q1).
3. **Config + lib**: `site.ts`, `routes.ts`, `seo.ts`, `schema.ts`, `utils.ts`; `sitemap.ts`, `robots.ts`, `not-found.tsx`, `opengraph-image.tsx`, icon.
4. **Primitives + motion**: Container, Button, Eyebrow, SectionHeading, Disclosure; MotionProvider, Reveal, Stagger.
5. **Layout**: Logo, Header, MobileNav, Footer, SkipLink in root layout. Browser check 360/1280.
6. **Content**: `types.ts`, `home.ts`, `services.ts`, `leaders.ts` (copy verbatim from mockup).
7. **Hero** (LCP section) + OrbitGraphic.
8. **About + stats**.
9. **Services** (cards + disclosures).
10. **Leadership** (cards + timelines).
11. **Partnering** pillars.
12. **Contact** CTA.
13. **Verify**: build, browser at 360/768/1280/1920, reduced motion, console, Lighthouse;
    run `seo-auditor` and `perf-a11y-reviewer`; fix Critical items.

## Open items for the client (not blocking)

Leader photos and LinkedIn URLs, canonical domain, social profiles, old WordPress URL list for redirects.
