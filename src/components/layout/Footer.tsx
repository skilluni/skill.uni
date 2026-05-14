import { Link } from "react-router-dom";
import { Code2, Youtube, Instagram, Github, Heart } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

const LINKS = {
  Learn:   [
    { label: "Java Class 9",  href: "/#courses" },
    { label: "Java Class 10", href: "/#courses" },
    { label: "Java Class 11", href: "/#courses" },
    { label: "Java Class 12", href: "/#courses" },
  ],
  Platform: [
    { label: "Roadmap",     href: "/roadmap" },
    { label: "Quizzes",     href: "/quizzes" },
    { label: "Leaderboard", href: "/leaderboard" },
    { label: "Exams",       href: "/exams" },
  ],
  Company: [
    { label: "About",   href: "/about" },
    { label: "Sign Up", href: "/signup" },
    { label: "Log In",  href: "/login" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white/70 border-t border-white/10">
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Code2 size={18} className="text-white" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                Skill<span className="text-brand-coral">Uni</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Free Java education for ICSE & ISC students. Learn, practice, and ace your boards.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              <a href={SOCIAL_LINKS.youtube}   target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 rounded-lg bg-white/10 hover:bg-red-500 flex items-center justify-center transition-colors" aria-label="YouTube">
                <Youtube size={16} className="text-white" />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 rounded-lg bg-white/10 hover:bg-pink-500 flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram size={16} className="text-white" />
              </a>
              <a href={SOCIAL_LINKS.github}    target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="GitHub">
                <Github size={16} className="text-white" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-display font-semibold text-white text-sm mb-4">{heading}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs flex items-center gap-1.5">
            Made with <Heart size={12} className="text-brand-coral" fill="currentColor" /> for students across India
          </p>
          <p className="text-xs">
            © {new Date().getFullYear()} SkillUni. Free & open for all.
          </p>
        </div>
      </div>
    </footer>
  );
}