import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

const bgMap = {
  blue:  "bg-brand-blue-muted border-brand-blue/20",
  coral: "bg-brand-coral-muted border-brand-coral/20",
  green: "bg-green-50 border-green-200",
};

const avatarMap = {
  blue:  "bg-brand-blue",
  coral: "bg-brand-coral",
  green: "bg-green-600",
};

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="badge badge-blue mb-4">Testimonials</span>
          <h2 className="font-display font-bold text-ink mb-4"
              style={{ fontSize: "clamp(1.6rem, 1rem + 2vw, 2.8rem)" }}>
            What students say
          </h2>
          <p className="text-ink-muted text-base max-w-lg mx-auto">
            Don't take our word for it — hear directly from students who've aced their boards with SkillUni.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-2xl border p-6 flex flex-col gap-4 ${bgMap[t.color]} hover:shadow-md transition-all duration-300`}
            >
              <Quote size={28} className="text-ink-faint" />

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} className="text-yellow-400" fill="currentColor" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-ink text-sm leading-relaxed flex-1">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-black/5">
                <div className={`w-10 h-10 rounded-full ${avatarMap[t.color]} flex items-center justify-center text-white font-display font-bold text-sm flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-display font-semibold text-ink text-sm">{t.name}</p>
                  <p className="text-ink-muted text-xs">{t.grade} · {t.school}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}