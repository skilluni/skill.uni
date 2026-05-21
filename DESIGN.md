# DESIGN – SkillUni WebApp

## 1. System overview

- Frontend: React + Vite (TypeScript), styled using a minimal design system (e.g., Tailwind CSS utility classes).
- Backend / Auth / DB: Supabase providing authentication and Postgres database.
- Integrations: YouTube Data API for metrics and course video metadata.

High-level flow:
- Browser → React SPA → Supabase (auth + Postgres) / YouTube Data API.

## 2. Domain model (v1)

### Entities

- **User**
  - id, name, email, role (student/parent/teacher/admin), created_at.
- **Program / Course**
  - id, title, description, board (ICSE), class (9 or 10), youtube_playlist_id.
- **Lesson / Module**
  - id, course_id, title, order_index, youtube_video_id, estimated_duration.
- **MetricSnapshot** (optional for caching YouTube data)
  - id, fetched_at, subscribers, total_video_count, total_video_duration_seconds, total_watch_minutes.

Future entities (not required for v1 but anticipated):
- **Enrollment**: user_id, course_id, status.
- **Progress**: user_id, lesson_id, last_watched_at, completion_status.

## 3. Key flows mapped to screens and APIs

### Homepage
- Route: `/`
- Components:
  - HeroSection
  - MetricsSection
  - CoursesSection
  - AboutSection
  - TestimonialsSection
  - CallToActionSection
- Data:
  - MetricsSection pulls from a backend endpoint that wraps YouTube Data API + cache.
  - CoursesSection pulls from a `courses` table in Postgres.

### Course page
- Route: `/courses/:courseId`
- Components:
  - CourseHeader (title, board, class, short description)
  - CourseRoadmap (ordered list of lessons)
  - LessonCard (per lesson)
- Data:
  - `GET /api/courses/:id` returns course and its lessons.

### Optional: Continue learning (local-only for v1)
- Store last visited courseId + lessonId in localStorage.
- On homepage or a small banner: "Continue Class 9 Java – Lesson X".

## 4. Architecture decisions

- **State management**: React state + React Query (or similar) for server data.
- **Styling**: Design system built on Tailwind with tokens for colors, spacing, typography.
- **Error handling**:
  - Network/API errors → toast + inline message.
  - 404 routes → simple "Page not found" screen.
- **Caching metrics**: Backend cron or on-demand function that hits YouTube API and stores a snapshot to avoid rate limits and latency.

## 5. Data, privacy, and security

- Minimal PII in v1; if auth is included, collect only name and email.
- No public student profiles.
- All student-related data remains scoped to SkillUni admins.
- Use Supabase's row-level security (RLS) to ensure users can only access their own data when auth is introduced.

## 6. Accessibility and localization

- Mobile-first, responsive layouts.
- Semantic HTML for headings, landmarks, and form elements.
- Minimum color contrast for text and primary UI components.
- All key copy strings to go through a simple translation function to enable future multi-language support.

## 7. Known shortcuts / technical debt (explicit)

- v1 may rely heavily on YouTube for video hosting and progression (no custom video player).
- v1 may not have full login/progress tracking; a simpler local "continue" experience is acceptable.
- Testimonials may be manually seeded in code or from a simple JSON store initially.
