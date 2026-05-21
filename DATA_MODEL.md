# Data Model – SkillUni WebApp

## Tables (initial Postgres sketch)

### `courses`
- `id` (text, primary key)
- `title` (text)
- `description` (text)
- `board` (text, e.g., 'ICSE')
- `class` (integer, 9 or 10)
- `youtube_playlist_id` (text, nullable)
- `created_at` (timestamptz)

### `lessons`
- `id` (text, primary key)
- `course_id` (text, fk → courses.id)
- `title` (text)
- `order_index` (integer)
- `youtube_video_id` (text)
- `estimated_duration_minutes` (integer, nullable)

### `metric_snapshots`
- `id` (uuid, primary key)
- `fetched_at` (timestamptz)
- `subscribers` (integer)
- `total_video_count` (integer)
- `total_video_duration_seconds` (bigint)
- `total_watch_minutes` (bigint)

### Future tables

- `users` – if/when auth is enabled.
- `enrollments` – which users are enrolled in which courses.
- `progress` – per-user, per-lesson status.
