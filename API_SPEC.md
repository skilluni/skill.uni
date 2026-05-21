# API Spec – SkillUni WebApp (v1)

> Note: For early vibe coding, some of these endpoints can be mocked or implemented as Supabase SQL views / RPC functions.

## 1. Metrics

### GET `/api/metrics`
Returns key public metrics for the homepage.

**Response (example):**
```json
{
  "subscribers": 2000,
  "total_video_count": 120,
  "total_video_duration_seconds": 360000,
  "total_watch_minutes": 650000
}
```

## 2. Courses

### GET `/api/courses`
Returns a list of publicly available courses.

### GET `/api/courses/:id`
Returns details for a single course, including lessons.

**Response (example):**
```json
{
  "id": "class-9-java",
  "title": "Class 9 Java (ICSE)",
  "description": "Full Java syllabus for ICSE Class 9.",
  "board": "ICSE",
  "class": 9,
  "lessons": [
    {
      "id": "l1",
      "title": "Introduction to Java",
      "order_index": 1,
      "youtube_video_id": "..."
    }
  ]
}
```

## 3. Auth (future)

### POST `/api/auth/register`
- body: `{ "name": string, "email": string, "password": string }`

### POST `/api/auth/login`
- body: `{ "email": string, "password": string }`

Both endpoints can be proxied to Supabase auth if desired.
