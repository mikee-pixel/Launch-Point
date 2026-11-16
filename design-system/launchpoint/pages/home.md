# Home page overrides

Rules here override `../MASTER.md` for the home page only. Everything not listed follows MASTER.

> Written by hand on 2026-11-16: the UI UX Pro Max `--page` script could not run (no Python on
> this machine). Regenerate with `--page "home"` when Python is available and keep this rule.

## Leadership portraits

Approved by the client in the Leadership mockup review (2026-11-16).

| Role | Hex | CSS variable | Notes |
| --- | --- | --- | --- |
| Portrait backdrop | `#DEE4F6` | `--color-portrait` | Studio backdrop sampled from John Gonzales's headshot. Used only behind leader photos. |

- Every leader photo has the `#DEE4F6` backdrop **baked into the image file**. No CSS blend
  modes: they depend on what is painted underneath and broke in the browser (violet cast on
  the navy card). The portrait tile also uses `--color-portrait` as a loading placeholder.
- A photo shot on pure white is converted once, before it goes into `public/images/team/`:
  brightness ×1.06, then multiplied onto a solid `#DEE4F6` canvas (sharp `blend: "multiply"`).
  This is how `louie-castaneda.jpg` was made.
- New photos must be shot on white or `#DEE4F6`. Any other backdrop will not match.
- Aspect ratio: 4:5 below 1024px, 1:1 at 1024px and up (two wide cards per row).
- Leader grid: `repeat(auto-fit, minmax(min(100%, 300px), 1fr))`. Cards fill the row for any
  number of leaders: 1 column on mobile, 2+ where they fit.
- This is a photo backdrop, not an accent. It does not count toward MASTER's one-accent-per-band rule.
