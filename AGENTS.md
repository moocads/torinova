<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# torinova-web - MOOC frontend

This project follows the **MOOC AI Frontend Standard v2.2** (full text: `../../AGENTS.md`
and the `mooc-website` skill → `references/frontend-standard.md`). Key rules:

- Stack is fixed: Next.js 16 (App Router), TypeScript strict, Tailwind CSS v4, shadcn/ui (base-nova), motion (`motion/react`), and lucide-react. npm only, Node 22.
- No CSS Modules, no styled-components, no inline `style={}`, no `tailwind.config.ts` (brand tokens live in `app/globals.css` `@theme`).
- This project is English-only. Routes live directly under `app/`; do not add next-intl or locale-prefixed routes.
- Pages only compose sections from `components/sections/`. Repeated UI → `components/shared/` with typed props.
- This project is frontend-only. Do not add a CMS, database, authentication, checkout, or payment logic.
- Images use `next/image` and the approved TORINOVA product assets in `/public/images`.
- Avoid unnecessary secondary labels and descriptions. Let the layout do the explaining.
- Spacing scale only: 1 2 3 4 6 8 12 16 (= 4 8 12 16 24 32 48 64px).
- Before finishing: `npm run lint && npm run build` must pass.
