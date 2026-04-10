# Hyrox Workout Generator

A web app that generates Hyrox training workouts, backed by MongoDB.

## Tech Stack

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS 4
- MongoDB Atlas

## Features

- Browse workouts by category: Engine, Strength, and full Workout routines
- Fetches workout data (type, duration, description) from MongoDB
- Responsive UI with dark mode support

## Getting Started

### Prerequisites

- Node.js
- A MongoDB instance with a `hyrox-workouts` database and `workout` collection

### Setup

1. Clone the repo and install dependencies:

```bash
npm install
```

2. Create a `.env.local` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── workout/
│   │       └── route.tsx   # GET /api/workout — returns a random workout from MongoDB
│   ├── layout.tsx           # Root layout (fonts, metadata)
│   ├── page.tsx             # Home page — workout generator UI
│   └── globals.css          # Global styles and Tailwind imports
└── lib/
    └── mongodb.tsx          # MongoDB client singleton (connection pooling)
```

## Deployment

The app is designed to deploy on [Vercel](https://vercel.com). Push to your connected repository and Vercel will build and deploy automatically.

Set the following environment variable in your Vercel project settings:

| Variable | Description |
|----------|-------------|
| `MONGODB_URI` | MongoDB Atlas connection string |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
