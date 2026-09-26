# Licence Wallah

Next.js + TypeScript driving-learning application with Supabase-ready authentication, persistence, row-level security, simulator event scoring, and a Vercel-safe API surface.

## Run locally

1. Copy `.env.example` to `.env.local` and add Supabase URL and anonymous key.
2. Run the migration in `supabase/migrations/202609260001_initial_schema.sql` in Supabase SQL Editor.
3. Enable Email Auth in Supabase and add `http://localhost:3000` as a redirect URL.
4. Run `npm install` then `npm run dev`.

## Vercel deployment

Import this directory in Vercel, then add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to Vercel Environment Variables. Add your Vercel deployment URL to Supabase Auth redirect URLs. Do not put `SUPABASE_SERVICE_ROLE_KEY` or any AI provider key in public variables.

The simulator and Coach fallback work without configured Supabase, but signed-in users get persistent records when it is configured.
