import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { CURRICULUM_TOPICS } from "@/lib/constants";

export function CurriculumSection() {
  return (
    <section id="curriculum" className="section-padding bg-surface">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="badge badge-blue mb-4">What you'll learn</span>
            <h2 className="font-display font-bold text-ink mb-4"
                style={{ fontSize: "clamp(1.6rem, 1rem + 2vw, 2.8rem)" }}>
              The complete Java{" "}
              <span className="gradient-text-blue">curriculum</span>
            </h2>
            <p className="text-ink-muted text-base leading-relaxed mb-8 max-w-lg">
              From writing your first variable to implementing complex data structures —
              every topic mapped exactly to the ICSE & ISC syllabus.
            </p>

            {/* Code snippet preview */}
            <div className="code-block text-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-gray-500 text-xs">Hello.java</span>
              </div>
              <span className="text-purple-400">public class</span>
              {" "}<span className="text-yellow-300">Hello</span>
              {" "}{"{"}<br />
              {"  "}<span className="text-purple-400">public static void</span>
              {" "}<span className="text-blue-300">main</span>
              {"(String[] args) {"}<br />
              {"    "}<span className="text-gray-400">// Your journey starts here</span><br />
              {"    "}System.out.
              <span className="text-blue-300">println</span>
              {"("}
              <span className="text-green-300">"Hello, SkillUni!"</span>
              {");"}<br />
              {"  }"}
              <br />
              {"}"}
            </div>
          </motion.div>

          {/* Right — topic list */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {CURRICULUM_TOPICS.map((topic, i) => (
              <motion.div
                key={topic.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-surface-2 border border-surface-border hover:border-brand-blue/40 hover:bg-brand-blue-muted transition-all duration-200 group"
              >
                <CheckCircle2
                  size={18}
                  className="text-brand-blue flex-shrink-0 group-hover:scale-110 transition-transform"
                />
                <span className="text-sm font-medium text-ink">{topic.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}