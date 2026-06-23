# SuperSummary Affiliate Program

A production-ready Next.js 14 (App Router) application for the SuperSummary
Affiliate Program — public landing page, a 4-step application wizard, a partner
login, and a protected dashboard. Built to match the Figma designs, hand-styled
with a tokenized Tailwind theme, and deployable to Vercel with zero manual
configuration.

## Tech stack

- **Next.js 14** (App Router, RSC) + **TypeScript** (strict)
- **Tailwind CSS v3** with a custom design-token theme (no UI library)
- **React Hook Form + Zod** for the multi-step form
- **Zustand** (persisted) for cross-route form state
- **NextAuth v5 (beta)** Credentials provider (mock user)
- **Framer Motion** for landing-page section entrances
- **Vitest + React Testing Library** for unit tests

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build (0 TS / 0 ESLint errors)
npm run lint       # next lint
npm test           # vitest run
npm start          # serve the production build
```

## Mock partner login

The dashboard is protected by middleware. Sign in at `/affiliate/login` with:

- **Email:** `partner@example.com`
- **Password:** `affiliate2024`

## Routes

| Route | Description |
| --- | --- |
| `/affiliate` | Public landing page (8 sections) |
| `/affiliate/apply` → `step-2` → `step-3` → `step-4` → `success` | Application wizard |
| `/affiliate/login` | Partner login |
| `/dashboard` (+ `earnings`, `links`, `settings`) | Protected partner dashboard |

## Deployment (Vercel)

`vercel.json` is included for zero-config deploys. A mock `AUTH_SECRET` is
committed in `.env` so the build runs anywhere; **replace it with a generated
secret** (`openssl rand -base64 32`) for any real deployment.

## Notes on design fidelity

Where the written brief and the Figma designs differed, the Figma designs were
treated as the source of truth (per the project mission):

- **Dashboard** uses the Figma top-nav-only layout (no left sidebar, no period
  selector). Navigation, the avatar/name, and Sign out live in the top bar,
  with a hamburger drawer on mobile. The active link is highlighted.
- **Login** matches Figma: email + password (with show/hide) + Sign in. No
  "Continue with Google" button.
- **Metric card labels** use the Figma copy ("Monthly Clicks",
  "Monthly Conversions").

All other architecture follows the brief: the 4-step wizard, Zustand store,
Zod validation per step, the `submitApplication` server action, and middleware
route protection.

`next.config.mjs` is used instead of `next.config.ts` because Next.js 14 does
not support a TypeScript config file.
