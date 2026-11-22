<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# torinova-web — MOOC frontend

This project follows the **MOOC AI Frontend Standard v2.2** (full text: `../../AGENTS.md`
and the `mooc-website` skill → `references/frontend-standard.md`). Key rules:

- Stack is fixed: Next.js 16 (App Router) · TypeScript strict · Tailwind CSS v4 · shadcn/ui (base-nova) · motion (`motion/react`) · lucide-react · next-intl (en + zh). npm only, Node 22.
- No CSS Modules, no styled-components, no inline `style={}`, no `tailwind.config.ts` (brand tokens live in `app/globals.css` `@theme`).
- Every route lives under `app/[locale]/`. Use `Link`/`useRouter` from `@/i18n/navigation`, never `next/link`. All copy goes in `messages/en.json` + `messages/zh.json`.
- Pages only compose sections from `components/sections/`. Repeated UI → `components/shared/` with typed props.
- CMS data only through `lib/strapi.ts` (server-only, `"use cache"`). Env vars: `STRAPI_URL`, `STRAPI_API_TOKEN`.
- Images: `next/image`, placeholders from `/public/placeholders/` until production.
- Spacing scale only: 1 2 3 4 6 8 12 16 (= 4 8 12 16 24 32 48 64px).
- Before finishing: `npm run lint && npm run build` must pass.
