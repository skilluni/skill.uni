import { Suspense } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Star } from "lucide-react";
import { motion } from "framer-motion";
import { HeroScene } from "@/components/three/HeroScene";
import { Button } from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* 3D Canvas — full background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      {/* Gradient overlays for text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0a1628]/80 via-[#0a1628]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 z-[1] bg-gradient-to-t from-[#0a1628] to-transparent" />

      {/* Content */}
      <div className="relative z-10 container-wide w-full pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate="show"
            className="inline-flex items-center gap-2 badge badge-blue mb-6 border border-brand-blue/30 bg-brand-blue/10 text-brand-blue-light backdrop-blur-sm"
          >
            <Star size={12} fill="currentColor" />
            Free for all ICSE & ISC students
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1} variants={fadeUp} initial="hidden" animate="show"
            className="font-display font-extrabold text-white mb-6"
            style={{ fontSize: "clamp(2.4rem, 1rem + 4vw, 4.5rem)", lineHeight: 1.1 }}
          >
            Learn{" "}
            <span className="gradient-text-brand">Java</span>
            <br />
            Build the{" "}
            <span className="text-brand-coral">Future.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            custom={2} variants={fadeUp} initial="hidden" animate="show"
            className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg"
          >
            Structured roadmaps, video lectures, quizzes, and coding challenges —
            everything an ICSE & ISC Class 9–12 student needs to master Java.
            Completely free.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3} variants={fadeUp} initial="hidden" animate="show"
            className="flex flex-wrap gap-4 mb-12"
          >
            <Link to="/signup">
              <Button size="lg" variant="coral" className="group">
                Start Learning Free
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="#courses">
              <Button size="lg" variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 border border-white/20">
                <Play size={16} fill="currentColor" />
                See Courses
              </Button>
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            custom={4} variants={fadeUp} initial="hidden" animate="show"
            className="flex items-center gap-4"
          >
            {/* Avatar stack */}
            <div className="flex -space-x-2">
              {["PS", "AM", "SP", "RK"].map((init, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-[#0a1628] flex items-center justify-center text-xs font-display font-bold text-white"
                  style={{ background: ["#246BCE","#FE5A1D","#10b981","#7c3aed"][i] }}
                >
                  {init}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-white/60 text-xs">
                Loved by <span className="text-white font-semibold">2,400+</span> students
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs font-display tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}