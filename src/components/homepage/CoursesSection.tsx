import { motion } from "framer-motion";
import { BookOpen, Play, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { COURSES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const colorMap = {
  blue:   { badge: "badge-blue",  accent: "brand-blue",  border: "border-brand-blue/30",  bg: "from-brand-blue/5",   btn: "primary" as const },
  coral:  { badge: "badge-coral", accent: "brand-coral", border: "border-brand-coral/30", bg: "from-brand-coral/5",  btn: "coral" as const },
  green:  { badge: "badge-green", accent: "green-600",   border: "border-green-300",      bg: "from-green-50",       btn: "secondary" as const },
  purple: { badge: "badge badge-blue bg-purple-100 text-purple-600", accent: "purple-600", border: "border-purple-200", bg: "from-purple-50", btn: "secondary" as const },
};

export function CoursesSection() {
  return (
    <section id="courses" className="section-padding bg-surface-bg">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="badge badge-coral mb-4">Courses</span>
          <h2 className="font-display font-bold text-ink mb-4"
              style={{ fontSize: "clamp(1.6rem, 1rem + 2vw, 2.8rem)" }}>
            Pick your class. Start learning.
          </h2>
          <p className="text-ink-muted text-base max-w-xl mx-auto">
            Every course is crafted specifically for the ICSE & ISC syllabus — no fluff, just what you need for your board exam.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSES.map((course, i) => {
            const c = colorMap[course.color];
            return (
              <motion.div
                key={course.grade}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`bg-gradient-to-b ${c.bg} to-surface rounded-2xl border ${c.border} p-6 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}
              >
                {/* Grade badge */}
                <div className="flex items-center justify-between">
                  <span className={`badge ${c.badge} text-xs`}>Class {course.grade}</span>
                  <span className="text-xs text-ink-faint font-medium">{course.board}</span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-display font-bold text-ink text-lg leading-tight mb-1">
                    {course.title}
                  </h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{course.description}</p>
                </div>

                {/* Topics */}
                <ul className="flex flex-col gap-1.5">
                  {course.topics.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-xs text-ink-muted">
                      <ChevronRight size={12} className={`text-${c.accent} flex-shrink-0`} />
                      {t}
                    </li>
                  ))}
                </ul>

                {/* Stats */}
                <div className="flex items-center gap-4 pt-2 border-t border-surface-border">
                  <span className="flex items-center gap-1.5 text-xs text-ink-muted">
                    <BookOpen size={13} /> {course.chapters} chapters
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-ink-muted">
                    <Play size={13} /> {course.lectures} lectures
                  </span>
                </div>

                {/* CTA */}
                <Link to="/signup" className="mt-auto">
                  <Button
                    variant={c.btn}
                    size="sm"
                    className="w-full group-hover:shadow-md transition-shadow"
                  >
                    Start Course
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}