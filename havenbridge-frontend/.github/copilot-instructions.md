# Copilot / AI Agent Instructions — HavenBridge Frontend

Purpose: Make small, precise code changes that follow existing patterns. Prefer minimal, local edits that preserve the project's styling and runtime assumptions.

Big picture
- This is a Next.js (app router, v16) + TypeScript project using Tailwind v4. Root app lives in `src/app` and shared UI lives in `src/components`.
- Server components are the default; interactive UI components are marked with `"use client"` (see `src/components/Navbar.tsx`).
- Fonts are loaded via `next/font` in `src/app/layout.tsx` and exposed as CSS variables (e.g. `--font-geist-sans`).

Quick commands
- Dev: `npm run dev` (also works with `yarn`, `pnpm`, `bun` per README).
- Build: `npm run build` then `npm run start` for production.
- Lint: `npm run lint` (project uses `eslint`).

Key files and patterns to inspect before editing
- Layout & global CSS: `src/app/layout.tsx`, `src/app/globals.css` — global fonts and base styles.
- Pages/routes: `src/app/*` (each folder under `app` is a route). Edit these for content changes.
- Shared UI: `src/components/*` (stateless server components by default; add `"use client"` for browser-only code).
- Images & assets: `public/` (static assets like `logo2.png`). `next.config.ts` whitelists some remote image hosts.
- Build config: `package.json`, `next.config.ts`.

Project-specific conventions
- Use `"use client"` at the top of a file for any component that uses browser APIs, `useState`, `useEffect`, or window scrolling (Navbar demonstrates this).
- Components often use Next `Image` with `fill` and `unoptimized` props — preserve existing usage unless you intentionally change image optimization behavior.
- UI uses Tailwind utility classes heavily; prefer adding/adjusting classes over rewriting CSS modules.
- Icons: the project uses `lucide-react` (import icon components directly, e.g. `import { Phone } from 'lucide-react'`).
- Links: existing components use plain `<a href="...">` anchors rather than `next/link` in several places; follow existing patterns unless standardizing across the codebase.

Integration notes
- Remote image hosts allowed by `next.config.ts`: `media.istockphoto.com`, `images.unsplash.com`.
- Deployment target is Vercel (recommended in README) — avoid changes that require non-Vercel platform config unless requested.

Editing guidance & examples
- Small content change: edit the route file under `src/app/<route>/page.tsx`.
- Add an interactive component: create `src/components/MyWidget.tsx`, include `"use client"` and export default. Import into a page via a server component.
- Preserve patterns: when modifying `Navbar.tsx` or `Footer.tsx`, keep the mapping-from-array pattern for links and the Tailwind utility-driven structure.

What I couldn't infer automatically
- There are no tests or CI steps in the repo; if you add tests, describe the test runner and commands.

If anything in this file is unclear, tell me which area (routing, images, client/server components, styling) and I will expand examples.
