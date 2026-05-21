# Product Requirements Document (PRD) – SkillUni WebApp

## 1. Product summary
SkillUni WebApp is a free, web-based learning platform for ICSE students in Classes 9 and 10 studying Java. It organizes SkillUni's existing YouTube content into structured courses and roadmaps, with clear progression and basic progress tracking.

## 2. Problem and context
- Students rely on scattered YouTube videos and coaching notes without a clear, guided path.
- Parents and teachers struggle to judge the seriousness and structure of free online resources.
- SkillUni already publishes high-quality Java content on YouTube but lacks a second home where learning is organized as a course rather than a playlist.

The WebApp addresses this by turning the YouTube-first content into a course-first experience while remaining free-forever.

## 3. Users and personas

### Student (ICSE Class 9 or 10)
- Goals: Understand Java concepts, score well in exams, and build strong fundamentals.
- Constraints: Often mobile-only, limited data, varying English proficiency.

### Parent / Guardian
- Goals: Find trustworthy, structured, free preparation resources for their child.
- Constraints: Limited time, low technical expertise, concerned about distractions.

### Teacher / Program Coordinator
- Goals: Recommend SkillUni as a structured supplementary resource; optionally monitor student usage in the future.
- Constraints: Limited time, wants simple dashboards and credible metrics.

## 4. Key user journeys (v1)

### Journey A – New student discovers SkillUni and starts learning
1. Lands on the homepage.
2. Reads a short description of SkillUni and sees key metrics.
3. Scrolls to the Courses section.
4. Opens "Class 9 Java" or "Class 10 Java" course page.
5. Starts the first lesson, which links to a YouTube video and supporting notes.

### Journey B – Returning student continues learning
1. Opens the WebApp.
2. Navigates to "My course" or the relevant class.
3. Sees which lesson they last watched.
4. Continues from where they left off.

### Journey C – Parent/teacher evaluates SkillUni
1. Lands on the homepage.
2. Reads the About and Vision sections.
3. Reviews Metrics and Testimonials.
4. Visits the YouTube channel if desired.
5. Recommends the platform to a student if satisfied.

## 5. v1 feature list

| Priority | Feature                      | Description                                                               | Primary user |
|----------|------------------------------|---------------------------------------------------------------------------|--------------|
| Must     | Homepage hero                | Clear explanation, primary CTA, link to courses and YouTube channel.      | All          |
| Must     | Metrics section              | Live metrics from YouTube (subscribers, hours taught, minutes watched).   | All          |
| Must     | Courses listing              | List of available courses (Class 9 & 10 Java).                            | Student      |
| Must     | Course detail page           | Shows syllabus/roadmap and links to lessons and playlists.                | Student      |
| Must     | About section                | Story, mission, non-profit and free-forever positioning.                  | Parent       |
| Must     | Testimonials section         | Fading carousel with student/parent quotes (can be seeded manually).      | All          |
| Nice     | Basic "continue where left" | Remember last visited lesson per device/user (local or auth-based).       | Student      |
| Future   | Auth & profile               | Full account system with progress tracking and reports.                   | Student      |
| Future   | Teacher dashboard            | Aggregated view of student usage and progress.                            | Teacher      |

## 6. Success metrics (initial)
- Weekly active students (unique visitors engaging with a course).
- Number of students who start a course.
- Number of students who reach at least lesson N in a course.
- Percentage of traffic converting from homepage to course start.
- Qualitative feedback via a simple feedback form or email.

## 7. Constraints and assumptions
- Timeframe: initial v1 within ~6–8 weeks.
- Tech stack: React + Vite frontend, Supabase for auth and database.
- Cost: all infrastructure must run on free tiers or self-hostable solutions.
- Connectivity: mobile-first, low bandwidth; avoid heavy assets and mega libraries.
- Data: collect minimal PII; focus primarily on learning interaction data.
