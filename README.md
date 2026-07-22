# Kesho Labs — Studio Website

Company website for Kesho Labs, showcasing Adeera, Adeera POS, and Fiesta House Attire.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS · lucide-react

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy (Vercel)

1. Push this folder to a new GitHub repo (e.g. `kesho-labs-website`)
2. Import the repo at vercel.com → deploy. Done.

## Customizing

**All project content lives in one file:** `src/data/projects.ts`

- **Add screenshots:** drop images into `public/screenshots/` and set `src` on each screenshot entry, e.g. `{ label: "Tenant dashboard", src: "/screenshots/adeera-dashboard.png" }`. Until then, styled placeholders are shown.
- **Add video tutorials:** upload to YouTube, then set `youtubeId` on each video entry, e.g. `{ title: "...", description: "...", youtubeId: "abc123XYZ" }`. Embeds render automatically.
- **Add a project:** append a new object to the `projects` array — the projects page, detail page, and footer nav are data-driven.
- **Company copy:** landing page (`src/app/page.tsx`), about (`src/app/about/page.tsx`), contact (`src/app/contact/page.tsx`).
- **Colors:** the amber "dawn" accent is defined in `tailwind.config.ts`.

## Recommended next steps

1. Take 4 screenshots per project (the labels in `projects.ts` tell you which screens)
2. Record 2 short screen-capture videos per project (Loom or OBS → YouTube, unlisted is fine)
3. Buy a domain (e.g. kesholabs.com / kesholabs.co.ke) and connect it in Vercel
