# torinova-web

Next.js 16 · Tailwind v4 · shadcn/ui · motion · next-intl (en/zh). Scaffolded by the `mooc-website` skill.

```bash
cp .env.example .env.local
npm install
npm run dev      # http://localhost:3000  (zh: /zh)
npm run build
```

- Content: `messages/en.json`, `messages/zh.json`
- Brand colours: `app/globals.css` → `@theme { --color-brand-* }`
- CMS: `lib/strapi.ts` (reads `STRAPI_URL`, `STRAPI_API_TOKEN`)
- Deploy: Vercel (import repo, set env vars from `.env.example`)
