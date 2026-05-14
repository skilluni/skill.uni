import { useRef, useEffect } from "react";
import { Users, Video, Code2, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { METRICS } from "@/lib/constants";

const ICONS = { users: Users, video: Video, "code-2": Code2, trophy: Trophy } as const;
const COLORS = ["brand-blue", "brand-coral", "green-500", "purple-600"] as const;
const BG    = ["brand-blue-muted", "brand-coral-muted", "green-50", "purple-50"] as const;

function MetricCard({
  label, value, suffix, icon, index, shouldCount,
}: {
  label: string; value: number; suffix: string;
  icon: string;  index: number; shouldCount: boolean;
}) {
  const Icon = ICONS[icon as keyof typeof ICONS] ?? Code2;
  const { count, start } = useCountUp(value, 2000);

  useEffect(() => { if (shouldCount) start(); }, [shouldCount]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="bg-surface rounded-2xl p-6 md:p-8 shadow flex flex-col items-start gap-4 border border-surface-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className={`w-12 h-12 rounded-xl bg-${BG[index]} flex items-center justify-center`}>
        <Icon size={22} className={`text-${COLORS[index]}`} />
      </div>
      <div>
        <p className="font-display font-extrabold text-ink leading-none mb-1"
           style={{ fontSize: "clamp(1.8rem, 1rem + 2vw, 2.8rem)" }}>
          {count.toLocaleString()}{suffix}
        </p>
        <p className="text-ink-muted text-sm font-medium">{label}</p>
      </div>
    </motion.div>
  );
}

export function MetricsSection() {
  const { ref, inView } = useInView(0.2);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="section-padding bg-surface-bg">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="badge badge-blue mb-4">By the numbers</span>
          <h2 className="font-display font-bold text-ink"
              style={{ fontSize: "clamp(1.6rem, 1rem + 2vw, 2.8rem)" }}>
            Trusted by students across India
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {METRICS.map((m, i) => (
            <MetricCard key={m.label} {...m} index={i} shouldCount={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}