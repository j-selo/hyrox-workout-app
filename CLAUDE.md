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
- `src/lib/mongodb.tsx` — MongoDB singleton client promise (connection pooling via module-scoped `clientPromise`)

**Data flow:**
1. `src/app/page.tsx` (client component) — UI with a "Workout" button
2. On click, fetches `GET /api/workout`
3. `src/app/api/workout/route.tsx` — queries the `hyrox-workouts.workout` MongoDB collection using `$sample` aggregation to return one random workout
4. Result rendered in the page

**Environment:** Requires `MONGODB_URI` in `.env.local` pointing to a MongoDB Atlas cluster.

**Path alias:** `@/*` resolves to `./src/*`
