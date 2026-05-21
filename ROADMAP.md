# Roadmap – SkillUni WebApp (v1)

## Milestone 1 – Static marketing site
- Implement homepage with hero, static metrics placeholders, courses section, about, testimonials, CTA, footer.
- Hook up navigation between `/` and `/courses`.

## Milestone 2 – Dynamic courses
- Define `courses` and `lessons` tables in Supabase.
- Implement API for `/api/courses` and `/api/courses/:id`.
- Render real course and lesson data on the frontend.

## Milestone 3 – Live YouTube metrics
- Implement backend function to fetch metrics from YouTube Data API.
- Cache results in `metric_snapshots`.
- Connect homepage Metrics section to `/api/metrics`.

## Milestone 4 – Basic continuity of learning
- Implement a simple "continue where you left off" feature using localStorage or basic auth.
- Add a small banner on the homepage or courses page to direct returning students.
