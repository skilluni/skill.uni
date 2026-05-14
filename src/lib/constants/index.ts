export const APP_NAME = "SkillUni";
export const APP_TAGLINE = "Learn Java. Build the Future.";

export const METRICS = [
  { label: "Students Enrolled", value: 2400,  suffix: "+", icon: "users" },
  { label: "Video Lectures",    value: 240,   suffix: "+", icon: "video" },
  { label: "Practice Questions",value: 1800,  suffix: "+", icon: "code-2" },
  { label: "Success Rate",      value: 94,    suffix: "%", icon: "trophy" },
] as const;

export const COURSES = [
  {
    grade: "9", board: "ICSE",
    title: "Java Foundations",
    subtitle: "Class 9 — ICSE",
    description: "Master variables, control flow, methods, and your first taste of Object-Oriented Programming.",
    color: "blue" as const,
    chapters: 12, lectures: 48,
    topics: ["Variables & Data Types", "Control Flow", "Methods", "Intro to OOP"],
  },
  {
    grade: "10", board: "ICSE",
    title: "Java Core",
    subtitle: "Class 10 — ICSE",
    description: "Deep dive into arrays, strings, inheritance, and full ICSE board exam preparation.",
    color: "coral" as const,
    chapters: 14, lectures: 56,
    topics: ["Arrays & Strings", "Inheritance", "Polymorphism", "Board Prep"],
  },
  {
    grade: "11", board: "ISC",
    title: "Java Intermediate",
    subtitle: "Class 11 — ISC",
    description: "Advanced OOP, exception handling, file I/O, recursion, and real data structures.",
    color: "green" as const,
    chapters: 16, lectures: 64,
    topics: ["Advanced OOP", "Exception Handling", "File I/O", "Recursion"],
  },
  {
    grade: "12", board: "ISC",
    title: "Java Advanced",
    subtitle: "Class 12 — ISC",
    description: "Conquer sorting algorithms, linked lists, stacks, queues, trees, and ISC mastery.",
    color: "purple" as const,
    chapters: 18, lectures: 72,
    topics: ["Sorting Algorithms", "Linked Lists", "Stacks & Queues", "Trees"],
  },
] as const;

export const CURRICULUM_TOPICS = [
  { icon: "layers",       label: "Variables, Data Types & Operators" },
  { icon: "git-branch",   label: "Control Flow — if/else, switch, loops" },
  { icon: "repeat",       label: "Methods & Recursion" },
  { icon: "brackets",     label: "Arrays & Strings" },
  { icon: "box",          label: "Object-Oriented Programming" },
  { icon: "share-2",      label: "Inheritance & Polymorphism" },
  { icon: "shield",       label: "Exception Handling" },
  { icon: "database",     label: "Data Structures — Stack, Queue, LinkedList" },
  { icon: "bar-chart-2",  label: "Sorting & Searching Algorithms" },
  { icon: "file-code",    label: "File I/O & Streams" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    grade: "Class 10, ICSE",
    school: "St. Xavier's School, Mumbai",
    text: "SkillUni helped me go from zero Java knowledge to scoring 95 in my ICSE boards. The structured roadmap made studying so clear and achievable!",
    rating: 5,
    initials: "PS",
    color: "blue" as const,
  },
  {
    name: "Arjun Mehta",
    grade: "Class 12, ISC",
    school: "Cathedral & John Connon, Mumbai",
    text: "The coding challenges and timed exams were exactly what I needed to prepare for ISC. Genuinely the best free Java resource out there.",
    rating: 5,
    initials: "AM",
    color: "coral" as const,
  },
  {
    name: "Sneha Patel",
    grade: "Class 11, ISC",
    school: "La Martiniere Girls', Kolkata",
    text: "The leaderboard made me competitive in the best way. I ended up finishing the entire syllabus two months ahead of my classmates!",
    rating: 5,
    initials: "SP",
    color: "green" as const,
  },
] as const;

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/skilluni",
  youtube:   "https://youtube.com/@skilluni",
  github:    "https://github.com/skilluni",
} as const;