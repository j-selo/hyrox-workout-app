# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

No test framework is configured.

## Architecture

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · MongoDB 7

**App structure:**
- `src/app/` — Next.js App Router pages and API routes
- `src/app/login/page.tsx` — Login page (client component with email/password form)
- `src/app/workout-gen/page.tsx` — Workout generator UI (Engine, Strength, Workout buttons)
- `src/app/api/auth/route.tsx` — Authentication API route
- `src/app/api/engine/route.tsx` — Engine workout API route
- `src/app/api/strength/route.tsx` — Strength workout API route
- `src/app/api/workout/route.tsx` — Full workout API route
- `src/lib/mongodb.tsx` — MongoDB singleton client promise (connection pooling via module-scoped `clientPromise`)

**Data flow:**
1. User authenticates via `src/app/login/page.tsx` → `POST /api/auth`
2. `src/app/workout-gen/page.tsx` (client component) — UI with Engine, Strength, and Workout buttons
3. On button click, fetches the corresponding API route (`/api/engine`, `/api/strength`, or `/api/workout`)
4. Each API route queries the `hyrox-workouts.workout` MongoDB collection using `$sample` aggregation to return one random workout
5. Result rendered in the page

**Environment:** Requires `MONGODB_URI` in `.env.local` pointing to a MongoDB Atlas cluster.

**Path alias:** `@/*` resolves to `./src/*`
