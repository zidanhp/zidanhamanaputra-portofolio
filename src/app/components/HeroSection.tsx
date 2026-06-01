import { motion } from "motion/react";
import { ChevronDown, Layers, Cpu } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import profilePhoto   from "../../imports/IMG-20260519-WA0025.jpg.jpeg";
import onboarding1    from "../../imports/onboarding1.jpg";
import { useTheme }   from "../ThemeContext";

const ROLES = ["Mobile Developer", "Backend Integrator", "UI/UX Contributor"];

export function HeroSection() {
  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>

      {/* ── Background photo layer ── */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${onboarding1})`,
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
        backgroundRepeat: "no-repeat",
        /* Slight zoom animation */
        animation: "heroZoom 20s ease-in-out infinite alternate",
      }} />

      {/* ── Dark-mode overlay: deep navy with blue tint ── */}
      {/* ── Light-mode overlay: bright white-sky frosted ── */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: isLight
          ? "linear-gradient(135deg, rgba(240,248,255,0.88) 0%, rgba(200,232,250,0.80) 50%, rgba(225,243,252,0.85) 100%)"
          : "linear-gradient(135deg, rgba(2,11,20,0.90) 0%, rgba(4,15,26,0.85) 50%, rgba(0,40,70,0.88) 100%)",
        backdropFilter: isLight ? "blur(1px)" : "blur(0px)",
        transition: "background 0.4s ease",
      }} />

      {/* ── Subtle blue radial glows on top of overlay ── */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: [
          "radial-gradient(ellipse at 15% 40%, rgba(0,174,239,0.12) 0%, transparent 55%)",
          "radial-gradient(ellipse at 85% 65%, rgba(79,195,247,0.07) 0%, transparent 45%)",
        ].join(", "),
      }} />

      {/* ── Subtle grid overlay ── */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.4,
        backgroundImage: [
          "linear-gradient(rgba(0,174,239,0.04) 1px, transparent 1px)",
          "linear-gradient(90deg, rgba(0,174,239,0.04) 1px, transparent 1px)",
        ].join(", "),
        backgroundSize: "72px 72px",
      }} />

      {/* ── Decorative wave arc at bottom ── */}
      <svg
        style={{ position: "absolute", bottom: 0, left: 0, right: 0, pointerEvents: "none" }}
        viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" height={60}
      >
        <path
          d="M0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 L0 60Z"
          fill={isLight ? "rgba(240,248,255,0.6)" : "rgba(2,11,20,0.5)"}
        />
      </svg>

      {/* ── Main content ── */}
      <div style={{ position: "relative", maxWidth: 1152, margin: "0 auto", padding: "80px 32px", width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 80, alignItems: "center" }}>

          {/* Left */}
          <div>
            {/* Context pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 24,
                padding: "6px 14px", borderRadius: 999, fontSize: "0.75rem",
                background: "var(--bg-pill)", border: "1px solid var(--border-medium)",
                color: "var(--text-accent1)", fontFamily: "'JetBrains Mono',monospace",
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: 3, background: "var(--clr-light)", animation: "pulse 2s infinite" }} />
              Tanjung Pinang Guide · Massive Challenge 2026
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
              style={{
                color: "var(--text-primary)", fontFamily: "'Outfit',sans-serif", fontWeight: 900,
                fontSize: "clamp(2.6rem,6vw,4.2rem)", letterSpacing: "-0.04em",
                lineHeight: 1.05, marginBottom: 12,
              }}
            >
              Zidan Hamana
              <br />
              <span style={{
                background: "linear-gradient(135deg,#00AEEF 20%,#4FC3F7 60%,#93DEFF 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Putra
              </span>
            </motion.h1>

            {/* Role chips */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45, delay: 0.22 }}
              style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}
            >
              {ROLES.map((r, i) => (
                <motion.span
                  key={r}
                  initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.28 + i * 0.07 }}
                  style={{
                    padding: "4px 12px", borderRadius: 999, fontSize: "0.75rem",
                    background: "var(--bg-pill)", border: "1px solid var(--border-medium)",
                    color: "var(--text-accent2)", fontFamily: "'JetBrains Mono',monospace",
                  }}
                >
                  {r}
                </motion.span>
              ))}
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}
              style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 500, marginBottom: 32 }}
            >
              Mengikuti program{" "}
              <span style={{ color: "var(--text-accent1)" }}>Infinite Learning — Massive Challenge</span> sebagai{" "}
              <span style={{ color: "var(--text-accent2)" }}>Mobile Developer &amp; Backend Integrator</span> bersama tim Svarnatech Labs.{" "}
              Membangun aplikasi{" "}
              <span style={{ color: "var(--text-accent1)" }}>Tanjung Pinang Guide</span> — panduan wisata Flutter dengan AI Guide.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.44 }}
              style={{ display: "flex", alignItems: "center", gap: 12 }}
            >
              <button
                onClick={() => go("#casestudy")}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "10px 24px", borderRadius: 12, fontSize: "0.875rem", fontWeight: 600,
                  background: "linear-gradient(135deg,var(--clr-primary),var(--clr-dark))",
                  color: "white", border: "none", cursor: "pointer",
                  fontFamily: "'Outfit',sans-serif",
                  boxShadow: "0 4px 20px rgba(0,174,239,0.3)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,174,239,0.45)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,174,239,0.3)"; }}
              >
                <Layers size={15} />
                View Case Study
              </button>
              <button
                onClick={() => go("#showcase")}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "10px 20px", borderRadius: 12, fontSize: "0.875rem",
                  background: "var(--bg-pill)", border: "1px solid var(--border-medium)",
                  color: "var(--text-muted)", cursor: "pointer",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-strong)"; e.currentTarget.style.color = "var(--text-accent1)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-medium)"; e.currentTarget.style.color = "var(--text-muted)"; }}
              >
                <Cpu size={15} />
                See Showcase
              </button>
            </motion.div>
          </div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex", justifyContent: "center", flexShrink: 0 }}
          >
            <div style={{ position: "relative" }}>
              {/* Glow ring */}
              <div style={{
                position: "absolute", inset: -16, borderRadius: "50%",
                background: "conic-gradient(from 0deg, rgba(0,174,239,0.25), rgba(79,195,247,0.1), rgba(0,174,239,0.25))",
                filter: "blur(16px)",
                animation: "spin 10s linear infinite",
              }} />

              {/* Photo */}
              <div style={{
                position: "relative", width: 220, height: 220,
                borderRadius: "50%", overflow: "hidden",
                border: "2.5px solid rgba(0,174,239,0.45)",
                boxShadow: "0 0 56px rgba(0,174,239,0.2)",
              }}>
                <ImageWithFallback src={profilePhoto} alt="Zidan Hamana Putra" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
              </div>

              {/* Status badge */}
              <div style={{
                position: "absolute", bottom: -14, left: "50%", transform: "translateX(-50%)",
                display: "flex", alignItems: "center", gap: 6,
                padding: "6px 14px", borderRadius: 999,
                background: "var(--bg-card)", border: "1px solid var(--border-medium)",
                color: "var(--text-accent1)", fontSize: "0.7rem",
                fontFamily: "'JetBrains Mono',monospace", whiteSpace: "nowrap",
                boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
              }}>
                <span style={{ width: 6, height: 6, borderRadius: 3, background: "#4FC3F7", animation: "pulse 2s infinite" }} />
                Open to Opportunities
              </div>

              {/* Floating chip 1 — Flutter */}
              <motion.div
                animate={{ y: [-5, 6, -5] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute", left: -80, top: 40,
                  padding: "6px 12px", borderRadius: 12,
                  background: "var(--bg-card)", border: "1px solid var(--border-medium)",
                  color: "var(--text-accent2)", fontSize: "0.7rem",
                  fontFamily: "'JetBrains Mono',monospace",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                }}
              >
                Flutter
              </motion.div>

              {/* Floating chip 2 — AI Guide */}
              <motion.div
                animate={{ y: [6, -5, 6] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute", right: -72, top: 80,
                  padding: "6px 12px", borderRadius: 12,
                  background: "var(--bg-card)", border: "1px solid var(--border-medium)",
                  color: "var(--text-accent2)", fontSize: "0.7rem",
                  fontFamily: "'JetBrains Mono',monospace",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                }}
              >
                AI Guide
              </motion.div>

              {/* Floating chip 3 — Wisata */}
              <motion.div
                animate={{ y: [-3, 5, -3] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute", left: -72, bottom: 40,
                  padding: "6px 12px", borderRadius: 12,
                  background: "var(--bg-card)", border: "1px solid var(--border-medium)",
                  color: "var(--clr-primary)", fontSize: "0.7rem",
                  fontFamily: "'JetBrains Mono',monospace",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                }}
              >
                Tanjung Pinang
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll nudge */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
          style={{
            position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
            color: "var(--border-medium)",
          }}
        >
          <span style={{ fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "'JetBrains Mono',monospace" }}>scroll</span>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
            <ChevronDown size={14} />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes heroZoom { from { transform: scale(1); } to { transform: scale(1.06); } }
      `}</style>
    </section>
  );
}
