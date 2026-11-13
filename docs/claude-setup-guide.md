# Launch:Point: Claude Code Setup Guide (Windows)

## What each file does

| File | Purpose | Loaded when |
| --- | --- | --- |
| `CLAUDE.md` | Project brain: goals, stack, structure, core rules | Every session |
| `.claude/rules/*.md` | Detailed rules (design system, SEO, images, animation, components, migration) | Only when Claude touches matching files (`paths:`), so context stays small |
| `.claude/agents/seo-auditor.md` | Read-only SEO reviewer | When you ask, or Claude delegates |
| `.claude/agents/perf-a11y-reviewer.md` | Read-only Core Web Vitals + accessibility reviewer | Same |
| `.claude/skills/new-section` | `/new-section` repeatable recipe for homepage sections | When you type it or ask for a section |
| `.claude/skills/new-page` | `/new-page` recipe for growing beyond one page | When you type it or ask for a page |
| `.claude/skills/pre-launch` | `/pre-launch` full release check (manual only) | Only when you type it |
| `.claude/settings.json` | Team permissions + auto-format hook | Every session (commit it) |
| `.claude/hooks/format.mjs` | Runs Prettier after every edit (Node, Windows-safe) | After Edit/Write |

Add to `.gitignore`: `.claude/settings.local.json` and `CLAUDE.local.md` (your personal overrides).

## Step 1: Create the project

```powershell
npx create-next-app@latest launchpoint --ts --tailwind --eslint --app --src-dir --import-alias "@/*"
cd launchpoint
npm install motion lucide-react
npm install -D prettier prettier-plugin-tailwindcss
npx shadcn@latest init
```

Add to `package.json` scripts: `"typecheck": "tsc --noEmit"` and `"format": "prettier --write ."`.
Then copy `CLAUDE.md`, `.claude/` and `docs/` from this pack into the project root and make your first commit.

## Step 2: Install the two required plugins

Run these in the Claude Code panel in VS Code (from your Skills Reference):

```
/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill

/plugin marketplace add addyosmani/agent-skills
/plugin install agent-skills@addy-agent-skills
```

SSH error on Windows? Use `/plugin marketplace add https://github.com/addyosmani/agent-skills.git`.
UI UX Pro Max needs Python 3 on PATH (`python --version`).

Check everything loaded:
- `/skills` lists `ui-ux-pro-max` and the agent-skills set (`spec-driven-development`, `incremental-implementation`, ...)
- `/agents` lists `seo-auditor` and `perf-a11y-reviewer`
- `/memory` shows CLAUDE.md

Taste Skill and Ponytail stay off for this project. UI UX Pro Max owns design and Addy's
`code-simplification` already covers lean code.

### Who does what

| Job | Handled by |
| --- | --- |
| Style, palette, fonts, UX patterns, anti-patterns | UI UX Pro Max → `design-system/launchpoint/MASTER.md` |
| Spec, task breakdown | `/spec`, `/plan` (agent-skills) |
| Building components | `/build` → `incremental-implementation` + `frontend-ui-engineering` |
| Browser checks, debugging | `/test` → `browser-testing-with-devtools` |
| Code quality, performance, security | `/review` (agent-skills) |
| SEO, LCP-safe animation, WCAG specifics | project agents `seo-auditor`, `perf-a11y-reviewer` |
| Release | `/pre-launch` (project) → `/ship` (agent-skills) |

## Step 3: Kickoff prompts (run in order; `/clear` between steps)

1. **Design system (UI UX Pro Max)**
   > Use UI UX Pro Max. Generate and persist a design system with project name "LaunchPoint" for:
   > B2B partner advisory firm for enterprise tech deals (AI, Cloud, Cybersecurity, IoT, Managed Services),
   > corporate, modern minimalist, premium, subtle motion. Stack: Next.js, Tailwind v4, shadcn.
   > Show me the style, palette, fonts and anti-patterns before anything else.

   Review MASTER.md yourself. Adjust brand colours to the client's logo, then commit it.

   (Use "LaunchPoint", not "Launch:Point", as the project name. Windows folder names can't contain a colon.)

2. **Content inventory**
   > Here is the current site's copy: [paste from WordPress]. Turn it into typed content in `src/content`
   > (home.ts, services.ts, types.ts). Don't build components yet. Flag copy that is weak for SEO.

3. **Foundation (agent-skills flow)**
   > /spec The site foundation: design tokens in globals.css from MASTER.md, next/font, site.ts, routes.ts,
   > lib/seo.ts (buildMetadata), lib/schema.ts (Organization + WebSite), root layout, sitemap.ts,
   > robots.ts, not-found.tsx, Header with accessible mobile nav, Footer, motion wrappers
   > (Reveal, Stagger, MotionProvider).

   Approve the spec, then `/plan`, approve, then `/build` and let it go task by task.

4. **Sections** (one per session)
   > /new-section Hero: headline, subline, two CTAs, hero visual. This is the LCP section.

   Then Services (AI, Cloud, Cybersecurity, IoT, Managed Services), Approach, Why Launch:Point, CTA, Contact.
   `/new-section` already runs the UI UX Pro Max lookup and the spec → build → test steps.

5. **Review**
   > /review the homepage, then run the seo-auditor and perf-a11y-reviewer agents. Fix Critical items only.

6. **Migration + launch**
   > Here are the old URLs: [paste]. Save to `docs/old-urls.txt` and create the redirects.

   Then `/pre-launch`, fix what it finds, then `/ship`.

## Habits that make you faster

- **Plan mode** (Shift+Tab twice) for anything bigger than one component.
- **`/clear`** between unrelated tasks; **`/compact`** when a long task gets slow.
- **Esc** to stop Claude mid-way, **Esc Esc** to rewind to an earlier message.
- When Claude makes the same mistake twice, add one line to `CLAUDE.md` (or ask Claude to: "add this to CLAUDE.md").
- Keep `CLAUDE.md` short. Detailed rules go in `.claude/rules/`.
- Commit after each working section so you can roll back cheaply.

## Future expansion path

Today: `/#services` anchor → later: `/services` + `/services/[slug]` from the same `services.ts`
(`/new-page services/[slug]`). Same pattern for `/insights` (add MDX or a headless CMS then),
`/case-studies`, `/about`, `/contact`. Routes, sitemap and nav all update from `src/config/routes.ts`.
