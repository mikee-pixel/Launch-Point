# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/launchpoint/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** LaunchPoint
**Generated:** 2026-11-10 21:01:52
**Revised:** 2026-11-13: palette and fonts replaced with the client brand (logo colours), per the
approved home mockup `docs/mockups/home-v1.html`. Layout, spacing, style and checklist unchanged.
**Category:** B2B Service

---

## Global Rules

### Color Palette

Brand colours are sampled from the Launch:Point logo (royal blue → violet → orchid) and the existing
site's navy. One accent only: **orchid on dark**, **violet ink on light**. Layout alternates dark
(navy) and light (paper/white) bands. Single look: no light/dark theme swap.

| Role | Hex | CSS Variable | Notes |
|------|-----|--------------|-------|
| Navy 950 (dark band, page base) | `#0D0E2B` | `--color-navy-950` | |
| Navy 900 (dark cards, drawer) | `#15153D` | `--color-navy-900` | |
| Navy 800 (icon tiles on dark) | `#201D52` | `--color-navy-800` | |
| Primary / CTA fill | `#6559C9` | `--color-primary` | white text 5.49:1 |
| Primary hover / accent text on light | `#5546B8` | `--color-violet-ink` | 7.11:1 on white, 6.56:1 on paper |
| Accent on dark | `#C56AE4` | `--color-orchid` | 5.88:1 on navy 950, 5.43:1 on navy 900 |
| Brand blue (gradient start only) | `#054AAE` | `--color-brand-blue` | |
| Background (light band) | `#F6F5FB` | `--color-paper` | |
| Card / white band | `#FFFFFF` | `--color-card` | |
| Foreground (ink) | `#15143A` | `--color-ink` | 16.2:1 on paper |
| Muted foreground | `#54547A` | `--color-ink-muted` | 7.18:1 on white, 6.62:1 on paper |
| Border (light) | `#E3E1EF` | `--color-line` | |
| On dark | `#FFFFFF` | `--color-on-dark` | |
| On dark muted | `#B9B8D9` | `--color-on-dark-muted` | 9.8:1 on navy 950 |
| Border (dark) | `rgba(255,255,255,.12)` | `--color-line-dark` | |
| Focus ring (light bands) | `#5546B8` | `--color-ring` | 3px outline, 3px offset. 6.56:1 on paper (orchid is only 2.95:1 there, fails 1.4.11) |
| Focus ring (dark bands) | `#C56AE4` | `--color-ring-dark` | applied via `tone-dark` on every dark band |

**Brand gradient:** `linear-gradient(90deg, #054AAE, #6559C9 50%, #C56AE4)`. It is the logo's own
gradient. Use it **only as a hairline** (1px header rule, orbit core stroke). Never as a background,
button or text fill.

**Glow:** a single soft radial `rgba(44,64,180,.45–.6)` behind dark bands (hero, leadership, CTA). Decorative, `pointer-events: none`.

### Typography

- **Display / headings:** Montserrat 600, 700, 800. Line height 1.15, letter spacing -0.01em (h1 -0.02em), `text-wrap: balance`.
- **Body / UI:** Plus Jakarta Sans 400, 500, 600, 700. 16px base, line height 1.65.
- **Eyebrow:** Plus Jakarta Sans 600, 12px, uppercase, tracking 0.14em, preceded by a 24×2px rule in the accent colour.
- **Scale:** h1 `clamp(2.375rem, 1.4rem + 4.2vw, 4.25rem)` 800 · h2 `clamp(1.75rem, 1.2rem + 2vw, 2.75rem)` 700 · CTA h2 `clamp(2.5rem, 1.5rem + 4vw, 4.5rem)` 800 · h3 1.25–1.5rem 700 · lead 1.125rem.
- Load with `next/font/google` (self-hosted, `display: swap`, latin subset).

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding, section padding (mobile) |
| `--space-4xl` | `96px` / `6rem` | Section padding (≥1024px) |

Container: max 1200px, side padding 16px (mobile) / 32px (≥768px), respecting safe-area insets.

### Radius

`--radius-sm` 8px (buttons, icon tiles) · `--radius-md` 12px (cards) · pill 999px (tags).

### Shadow Depths

Tinted toward navy, not pure black.

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(13,14,43,0.06)` | Card resting |
| `--shadow-md` | `0 4px 6px rgba(13,14,43,0.08)` | Buttons |
| `--shadow-lg` | `0 10px 15px rgba(13,14,43,0.10)` | Card hover, dropdowns |
| `--shadow-xl` | `0 12px 32px rgba(0,0,0,0.35)` | Mobile drawer |

### Motion

Ease `cubic-bezier(.2,.7,.2,1)` for hovers (200ms); entrances per `.claude/rules/animation.md`.

---

## Component Specs

### Buttons

```css
/* Primary */
.btn-primary {
  background: var(--color-primary); color: #FFFFFF;
  min-height: 48px; padding: 12px 24px; border-radius: 8px;
  font: 600 15px/1 "Plus Jakarta Sans"; cursor: pointer;
  transition: transform 200ms, background-color 200ms;
}
.btn-primary:hover { background: var(--color-violet-ink); transform: translateY(-1px); }

/* Ghost (on dark bands) */
.btn-ghost {
  background: transparent; color: #FFFFFF;
  border: 1.5px solid rgba(255,255,255,.35);
}
.btn-ghost:hover { border-color: #FFFFFF; transform: translateY(-1px); }
```

Trailing arrow icon (16px) nudges 2px right on hover.

### Cards

```css
/* Light band card (services) */
.card {
  background: #FFFFFF; border: 1px solid var(--color-line); border-radius: 12px;
  padding: 32px; box-shadow: var(--shadow-sm);
  transition: box-shadow 200ms, transform 200ms, border-color 200ms;
}
.card:hover { box-shadow: var(--shadow-lg); transform: translateY(-2px); }

/* Dark band card (leadership, contact) */
.card-dark { background: var(--color-navy-900); border: 1px solid var(--color-line-dark); border-radius: 12px; }
```

Icon tile: 48×48, radius 8, navy 900 fill, orchid stroke icon.

### Inputs

```css
.input {
  padding: 12px 16px; border: 1px solid var(--color-line); border-radius: 8px;
  font-size: 16px; transition: border-color 200ms ease;
}
.input:focus { border-color: var(--color-primary); outline: none; box-shadow: 0 0 0 3px rgba(101,89,201,.25); }
```

### Mobile navigation

Left slide-out drawer below 960px, width `clamp(50vw, 320px, 80vw)`, navy 900, backdrop `rgba(6,7,24,.6)`.
Enter 380ms `cubic-bezier(.22,1,.36,1)`, exit 240ms; items stagger 40ms. Reduced motion: fade only.

### Modals

```css
.modal-overlay { background: rgba(6,7,24,.6); backdrop-filter: blur(4px); }
.modal { background: white; border-radius: 16px; padding: 32px; box-shadow: var(--shadow-xl); max-width: 500px; width: 90%; }
```

---

## Style Guidelines

**Style:** Accessible & Ethical, editorial corporate

**Keywords:** Accessible, inclusive interface, high contrast, large text (16px+), keyboard navigation, screen reader friendly, accessibility standards aware, focus state, semantic

**Layout:** alternating dark/light bands, left-aligned editorial headings (eyebrow + h2 left, lead right on desktop), orbit motif taken from the rocket mark.

**Key Effects:** Clear focus rings (3px), ARIA labels, skip links, responsive design, reduced motion, 44x44px touch targets

### Page Pattern

**Pattern Name:** Trust & Authority + Conversion

- **Conversion Strategy:** Credentials up front (former employers of the partner advisors), named leaders with full experience, direct contact (email + phone). Provide pause/stop for any logo carousel; render a static logo set under reduced motion.
- **CTA Placement:** "Launch with us" (primary) in nav, hero and closing CTA
- **Section Order:** Hero (mission + credibility strip) > About + stats > Services > Leadership > Partnering > CTA/Contact

---

## Anti-Patterns (Do NOT Use)

- ❌ Playful design
- ❌ Hidden credentials
- ❌ Purple/pink gradient **fills** (backgrounds, buttons, gradient text). The logo gradient is allowed only as a hairline accent.
- ❌ More than one accent hue per band

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Lucide)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Text contrast 4.5:1 minimum on both dark and light bands
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
