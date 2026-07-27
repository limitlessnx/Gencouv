# Gencouv Ecosystem Website

High-end Next.js website inspired by the supplied dark fintech reference, rebuilt specifically for Gencouv.

## Included

- Premium responsive public website
- Copy trading, EA, indicator and trading-tools sections
- Telegram onboarding CTAs
- Animated trading dashboard hero
- Mixed-profile testimonial cards using local SVG portraits
- Backend-style sales dashboard at `/dashboard`
- Mock lead API at `/api/leads`
- Supabase starter schema in `supabase/schema.sql`
- Environment variable template
- GitHub and Vercel-ready project structure

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to GitHub

```bash
git init
git add .
git commit -m "Initial Gencouv ecosystem website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

Then import the repository into Vercel. Framework preset: **Next.js**. Root directory: repository root.

## Supabase

1. Create a Supabase project.
2. Run `supabase/schema.sql` in the SQL editor.
3. Copy `.env.example` to `.env.local`.
4. Add the project URL and keys.
5. Replace mock dashboard arrays and `/api/leads` with Supabase queries.

## Important production edits

- Replace sample testimonials with approved client images and verified statements.
- Replace placeholder performance figures with validated database records.
- Add authentication and row-level security before exposing real sales data.
- Add privacy, terms and complete risk disclosures.
- Keep funds-custody messaging accurate to the actual service structure.
