import { motion } from "framer-motion";
import { Youtube, Instagram, Github, GraduationCap } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export function InstructorSection() {
  return (
    <section className="section-padding bg-surface-bg">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Placeholder image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-brand-blue/20 to-brand-coral/20 border-2 border-surface-border flex items-center justify-center">
                {/* Replace this div's content with an <img> tag when you have the photo */}
                <div className="w-full h-full rounded-3xl bg-surface-offset flex flex-col items-center justify-center gap-3 text-ink-faint">
                  <GraduationCap size={48} />
                  <p className="text-sm font-medium">Abbas's photo here</p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-surface rounded-2xl shadow-lg border border-surface-border px-4 py-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-coral rounded-full flex items-center justify-center">
                  <Youtube size={16} className="text-white" />
                </div>
                <div>
                  <p className="font-display font-bold text-ink text-sm">YouTube</p>
                  <p className="text-ink-muted text-xs">10K+ subscribers</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="badge badge-blue mb-4">Meet the instructor</span>
            <h2 className="font-display font-bold text-ink mb-4"
                style={{ fontSize: "clamp(1.6rem, 1rem + 2vw, 2.8rem)" }}>
              Hi, I'm{" "}
              <span className="gradient-text-brand">Abbas</span> 👋
            </h2>
            <p className="text-ink-muted text-base leading-relaxed mb-4">
              I'm a passionate educator and developer who's been teaching Java to ICSE & ISC students
              for years. I started SkillUni because I believe every student deserves access to
              high-quality programming education — regardless of where they live or what they can afford.
            </p>
            <p className="text-ink-muted text-base leading-relaxed mb-8">
              Every lecture, quiz, and roadmap on this platform is designed by me, with one goal:
              to make you genuinely understand Java — not just memorize it for exams.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 font-display font-semibold text-sm transition-colors border border-red-200"
              >
                <Youtube size={18} /> YouTube
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-pink-50 text-pink-600 hover:bg-pink-100 font-display font-semibold text-sm transition-colors border border-pink-200"
              >
                <Instagram size={18} /> Instagram
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-offset text-ink hover:bg-surface-dynamic font-display font-semibold text-sm transition-colors border border-surface-border"
              >
                <Github size={18} /> GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}