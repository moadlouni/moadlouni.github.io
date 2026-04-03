# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mo Adlouni's personal portfolio — a Next.js 14 App Router site with a 3D hero scene, hosted on GitHub Pages via static export. The old HTML files in the repo root (`index.html`, `about.html`, etc.) are from a previous Bootstrap version and can be ignored or deleted.

## Commands

```bash
npm run dev           # dev server at localhost:3000
npm run build         # static export → out/
npm run test          # run all tests
npm run test:watch    # watch mode
npm run test:coverage # coverage report
npx serve out         # preview the exact static export locally
```

## Architecture

**Next.js 14 App Router**, `output: 'export'` → GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml` triggers on `master` push).

| Page | File | Purpose |
|------|------|---------|
| Home | `src/app/page.tsx` | 3D hero + horizontal interest gallery |
| About | `src/app/about/page.tsx` | Bio, skills, education |
| Work | `src/app/work/page.tsx` | Experience + resume download |
| Contact | `src/app/contact/page.tsx` | Formspree contact form |

**Key dependencies:**
- React Three Fiber + drei (`src/components/three/`) — 3D torus knot scene
- Framer Motion — page entry animations, nav pill, card hover
- Formspree — AJAX contact form (endpoint in `src/lib/constants.ts`)
- next/font — Playfair Display (headings) + Inter (body)

## Key Patterns

- **All site-wide data** (nav links, interest cards, URLs, Formspree endpoint) lives in `src/lib/constants.ts`.
- **3D components must be dynamically imported with `ssr: false`** — WebGL doesn't exist in Node.js. `HeroScene` is loaded via `dynamic(() => import(...), { ssr: false })` in `HeroSection.tsx`.
- **Formspree contact form is blocked on localhost** by Formspree's free plan. It only works on the deployed domain. Test form behavior via mocked fetch in unit tests instead.
- **Resume download** links directly to `public/Mo_Adlouni_Resume_2025.pdf` via `<a download>`.
- **Images** live in `public/images/` and are referenced as `/images/filename.jpg`. `images: { unoptimized: true }` is set in `next.config.mjs` because static export has no image optimization server.
- **`public/.nojekyll`** must exist — without it, GitHub Pages' Jekyll processor ignores `_next/` and breaks the app.

## Testing

Tests use Jest + React Testing Library. Three.js components (`src/components/three/`) are excluded from coverage since WebGL can't run in jsdom.

Test files sit next to the code they test (`*.test.ts` / `*.test.tsx`). Mocks for `next/navigation`, `next/image`, `next/link`, and `framer-motion` are in `__mocks__/`.

To run a single test file:
```bash
npx jest src/components/ui/ContactForm.test.tsx
```

## Deployment

Push to `master` → GitHub Actions builds (`npm run build`) → uploads `out/` → GitHub Pages. The Pages source must be set to **"GitHub Actions"** in repo Settings → Pages (not "Deploy from a branch").
