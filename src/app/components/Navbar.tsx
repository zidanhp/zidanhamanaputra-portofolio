import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../ThemeContext";
import logoBlue from "../../imports/logo_blue.png";

const NAV = [
  { label: "About",         href: "#about" },
  { label: "Skills",        href: "#skills" },
  { label: "Contributions", href: "#contributions" },
  { label: "Case Study",    href: "#casestudy" },
  { label: "Showcase",      href: "#showcase" },
  { label: "Contact",       href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const [active,   setActive]   = useState("");
  const { theme, toggle }       = useTheme();
  const isLight = theme === "light";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setActive(href);
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -56, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50"
        style={scrolled ? {
          background: "var(--bg-page)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--border-subtle)",
          boxShadow: "0 4px 32px rgba(0,0,0,0.12)",
        } : { background: "transparent" }}
      >
        <div
          className="max-w-6xl mx-auto px-5 sm:px-8 h-16"
          style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", alignItems: "center", gap: "16px" }}
        >
          {/* ── Left: Wordmark ── */}
          <button onClick={() => go("#hero")} style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer" }}>
            <img src={logoBlue} alt="Tanjung Pinang Guide" style={{ width: 28, height: 28, borderRadius: 8, objectFit: "contain" }} />
            <span style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              fontFamily: "'Outfit',sans-serif",
              letterSpacing: "-0.01em",
              color: "var(--text-primary)",
            }}>
              Zidan<span style={{ color: "var(--clr-primary)" }}>·IL</span>
            </span>
          </button>

          {/* ── Center: Desktop nav ── */}
          <nav className="hidden md:flex items-center justify-center gap-0.5">
            {NAV.map(l => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                style={{
                  position: "relative",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: "0.875rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: active === l.href ? "var(--clr-light)" : "var(--text-muted)",
                  transition: "color 0.15s",
                }}
              >
                {active === l.href && (
                  <motion.span
                    layoutId="nav-pill"
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: 8,
                      background: "var(--bg-pill)",
                    }}
                  />
                )}
                <span style={{ position: "relative" }}>{l.label}</span>
              </button>
            ))}
          </nav>

          {/* ── Right: Theme toggle + burger ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "flex-end" }}>
            {/* Theme toggle pill */}
            <motion.button
              onClick={toggle}
              whileTap={{ scale: 0.92 }}
              title={isLight ? "Switch to dark mode" : "Switch to light mode"}
              style={{
                position: "relative",
                width: 56,
                height: 28,
                borderRadius: 14,
                border: "1px solid var(--border-medium)",
                background: isLight
                  ? "linear-gradient(135deg,#E1F3FC,#C5E8FA)"
                  : "linear-gradient(135deg,#061524,#0A2A40)",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              <motion.div
                animate={{ x: isLight ? 28 : 2 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                style={{
                  position: "absolute",
                  top: 2,
                  width: 22,
                  height: 22,
                  borderRadius: 11,
                  background: "linear-gradient(135deg,var(--clr-primary),var(--clr-dark))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
                }}
              >
                {isLight ? <Sun size={11} color="white" /> : <Moon size={11} color="white" />}
              </motion.div>
            </motion.button>

            {/* Mobile burger */}
            <button
              className="md:hidden"
              style={{ padding: 6, background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)" }}
              onClick={() => setOpen(v => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden"
            style={{
              background: "var(--bg-page)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--border-subtle)",
            }}
          >
            {NAV.map(l => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "14px 24px",
                  fontSize: "0.875rem",
                  background: "none",
                  border: "none",
                  borderBottom: "1px solid var(--border-subtle)",
                  cursor: "pointer",
                  color: "var(--text-muted)",
                }}
              >
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
