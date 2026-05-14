import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/hooks/useAuth";

const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "Courses",  href: "/#courses" },
  { label: "Roadmap",  href: "/#curriculum" },
  { label: "About",    href: "/about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0a1628]/90 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center shadow-brand-blue group-hover:scale-110 transition-transform duration-200">
              <Code2 size={18} className="text-white" />
            </div>
            <span className="font-display font-bold text-lg text-white tracking-tight">
              Skill<span className="text-brand-coral">Uni</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-4 py-2 text-sm font-display font-medium text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-180"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <Link to="/dashboard">
                <Button size="sm" variant="primary">Dashboard</Button>
              </Link>
            ) : (
              <>
                <Link to="/login">
                  <Button size="sm" variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
                    Log In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm" variant="coral">Get Started Free</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-[#0a1628]/95 backdrop-blur-md border-b border-white/10",
          open ? "max-h-80 py-4" : "max-h-0"
        )}
      >
        <div className="container-wide flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-3 text-sm font-display font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-white/10">
            {user ? (
              <Link to="/dashboard">
                <Button size="sm" variant="primary" className="w-full">Dashboard</Button>
              </Link>
            ) : (
              <>
                <Link to="/login">
                  <Button size="sm" variant="ghost" className="w-full text-white/80 hover:bg-white/10">Log In</Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm" variant="coral" className="w-full">Get Started Free</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}