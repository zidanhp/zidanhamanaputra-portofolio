import { useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { CheckCircle } from "lucide-react";

const PHASES = [
  {
    phase: "Micro Challenge",
    tag: "Research",
    color: "#4FC3F7",
    items: [
      "Membantu penyusunan FigJam untuk ideasi awal produk",
      "Competitor Audit Synthesis — analisis produk sejenis di pasar",
    ],
  },
  {
    phase: "Macro Challenge",
    tag: "Design",
    color: "#93DEFF",
    items: [
      "Membantu pembuatan UI/UX Design di Figma",
      "Membuat Prototype interaktif untuk user testing",
      "Membuat Component Design System — button, card, form, typography",
    ],
  },
];

const CONTRIBS = [
  {
    title: "Mobile Application Development", tag: "Flutter",   color: "#00AEEF",
    items: [
      "Membangun 10+ screen UI Flutter dari desain Figma",
      "Navigasi multi-screen, state management dengan Provider",
      "Custom widget, reusable component, responsive layout Android",
      "Integrasi FCM untuk push notification",
    ],
  },
  {
    title: "Backend API Integration",        tag: "REST API",  color: "#4FC3F7",
    items: [
      "Mengonsumsi endpoint Node.js/Express dari mobile",
      "Dio HTTP client dengan interceptor, retry logic, error handler",
      "JWT token management & auto-refresh mechanism",
      "Upload file (foto profil, attachment)",
    ],
  },
  {
    title: "AI Feature Integration",         tag: "Gemini",    color: "#93DEFF",
    items: [
      "Integrasi AI Guide API ke dalam mobile chat screen",
      "UI conversation thread dengan streaming response real-time",
      "Prompt engineering untuk konteks wisata Tanjung Pinang",
    ],
  },
  {
    title: "UI/UX & Debugging",              tag: "Hipster",   color: "#00AEEF",
    items: [
      "Implementasi design system Figma ke Flutter secara konsisten",
      "Debugging crash & memory leak pada mobile",
      "Testing fitur end-to-end sebelum demo final",
    ],
  },
];

export function ContributionsSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const divider = (label: string) => (
    <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "20px 0 16px" }}>
      <div style={{ flex: 1, height: 1, background: "var(--divider)" }} />
      <span style={{ color: "var(--text-muted)", fontSize: "0.65rem", fontFamily: "'JetBrains Mono',monospace", letterSpacing: "0.1em" }}>{label}</span>
      <div style={{ flex: 1, height: 1, background: "var(--divider)" }} />
    </div>
  );

  return (
    <section id="contributions" style={{ padding: "96px 0", position: "relative", background: "var(--bg-page)" }} ref={ref}>
      <div style={{
        position: "absolute", left: 0, top: 0, width: 320, height: 320, borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle,rgba(0,174,239,0.04) 0%,transparent 70%)",
      }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} style={{ marginBottom: 48 }}>
          <p style={{ color: "var(--clr-primary)", fontSize: "0.75rem", fontFamily: "'JetBrains Mono',monospace", letterSpacing: "0.1em", marginBottom: 8 }}>
            03 — MY CONTRIBUTIONS
          </p>
          <h2 style={{ color: "var(--text-primary)", fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "clamp(1.9rem,4vw,2.9rem)", letterSpacing: "-0.035em" }}>
            What I{" "}
            <span style={{ background: "linear-gradient(135deg,var(--clr-primary),var(--clr-light))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Built
            </span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginTop: 8, maxWidth: 520 }}>
            Kontribusi personal saya selama mengikuti program Infinite Learning — mulai dari research, design, hingga development.
          </p>
        </motion.div>

        {/* Early phases */}
        {divider("EARLY PHASES")}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16, marginBottom: 8 }}>
          {PHASES.map((ph, i) => (
            <motion.div
              key={ph.phase}
              initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.38, delay: 0.1 + i * 0.08 }}
              style={{ padding: 16, borderRadius: 16, background: "var(--bg-card)", border: `1px solid ${ph.color}18` }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <div style={{ width: 4, height: 20, borderRadius: 2, background: ph.color, flexShrink: 0 }} />
                <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-primary)", fontFamily: "'Outfit',sans-serif" }}>{ph.phase}</span>
                <span style={{
                  fontSize: "0.625rem", padding: "2px 8px", borderRadius: 4, marginLeft: "auto",
                  color: ph.color, background: `${ph.color}0C`, border: `1px solid ${ph.color}28`,
                  fontFamily: "'JetBrains Mono',monospace",
                }}>{ph.tag}</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {ph.items.map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <CheckCircle size={11} style={{ color: ph.color, marginTop: 2, flexShrink: 0 }} />
                    <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", lineHeight: 1.55 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Massive challenge */}
        {divider("MASSIVE CHALLENGE — HACKER ROLE")}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
          {CONTRIBS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.18 + i * 0.08 }}
              style={{
                padding: 20, borderRadius: 16,
                background: "var(--bg-card)", border: "1px solid var(--border-subtle)",
                transition: "border-color 0.25s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-medium)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)"; }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16, gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 4, height: 28, borderRadius: 2, background: c.color, flexShrink: 0 }} />
                  <span style={{ fontSize: "0.875rem", fontWeight: 600, color: c.color, fontFamily: "'Outfit',sans-serif" }}>{c.title}</span>
                </div>
                <span style={{
                  fontSize: "0.625rem", padding: "2px 8px", borderRadius: 4, flexShrink: 0,
                  color: c.color, background: `${c.color}0C`, border: `1px solid ${c.color}28`,
                  fontFamily: "'JetBrains Mono',monospace",
                }}>{c.tag}</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {c.items.map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <CheckCircle size={11} style={{ color: c.color, marginTop: 2, flexShrink: 0 }} />
                    <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", lineHeight: 1.55 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
