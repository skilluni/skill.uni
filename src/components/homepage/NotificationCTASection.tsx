import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function NotificationCTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // TODO: wire to Supabase notifications table
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="section-padding bg-gradient-hero relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-blue/20 blur-[80px] rounded-full" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[200px] bg-brand-coral/15 blur-[60px] rounded-full" />
      </div>

      <div className="container-default relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-blue/20 border border-brand-blue/30 mb-6">
            <Bell size={24} className="text-brand-blue-light animate-float" />
          </div>

          <h2 className="font-display font-bold text-white mb-4"
              style={{ fontSize: "clamp(1.6rem, 1rem + 2vw, 2.8rem)" }}>
            Never miss a new lesson
          </h2>
          <p className="text-white/60 text-base max-w-md mx-auto mb-10">
            Get notified the moment a new lecture, quiz, or contest drops.
            No spam — only what matters.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-green-500/20 border border-green-500/30 text-green-300"
            >
              <CheckCircle2 size={22} />
              <span className="font-display font-semibold">You're on the list! We'll notify you soon.</span>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-blue focus:bg-white/15 transition-all text-sm font-body"
              />
              <Button type="submit" variant="coral" size="md" loading={loading} className="group whitespace-nowrap">
                Notify Me
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          )}

          <p className="text-white/30 text-xs mt-4">
            No spam. Unsubscribe anytime. Your data is safe.
          </p>
        </motion.div>
      </div>
    </section>
  );
}