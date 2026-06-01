import { useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";

const TOOLS = [
  {
    name: "Flutter",    color: "#54C5F8",
    desc: "Membangun UI destinasi wisata, peta interaktif, dan layar AI Guide",
    tags: ["Dart", "Widget", "Provider"],
  },
  {
    name: "Node.js",    color: "#68A063",
    desc: "Server backend untuk data destinasi, user, dan bookmark wisata",
    tags: ["Express.js", "JWT"],
  },
  {
    name: "Express.js", color: "#94A3B8",
    desc: "REST API routing untuk fitur wisata dan autentikasi pengguna",
    tags: ["Routing", "REST"],
  },
  {
    name: "REST API",   color: "#00AEEF",
    desc: "Komunikasi mobile-backend untuk konten wisata real-time",
    tags: ["HTTP", "JSON"],
  },
  {
    name: "MySQL",      color: "#0077C2",
    desc: "Database destinasi, profil pengguna, dan bookmark wisata",
    tags: ["SQL", "Relational"],
  },
  {
    name: "Figma",      color: "#F24E1E",
    desc: "Desain UI/UX alur wisatawan dan prototype interaktif",
    tags: ["Wireframe", "Prototype"],
  },
  {
    name: "GitHub",     color: "#6E40C9",
    desc: "Version control dan kolaborasi tim Svarnatech Labs",
    tags: ["Git", "PR"],
  },
];

const FLOW = [
  { label: "Flutter App",        color: "#54C5F8" },
  { label: "REST API",           color: "var(--text-muted)" },
  { label: "Node / Express",     color: "#68A063" },
  { label: "MySQL + Gemini AI",  color: "#00AEEF" },
  { label: "Tanjung Pinang Guide", color: "#4FC3F7" },
];

export function SkillsSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" style={{ padding: "96px 0", position: "relative", background: "var(--bg-page)" }} ref={ref}>
      <div style={{
        position: "absolute", left: 0, top: "33%", width: 320, height: 320, borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle,rgba(0,174,239,0.04) 0%,transparent 70%)",
      }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} style={{ marginBottom: 48 }}>
          <p style={{ color: "var(--clr-primary)", fontSize: "0.75rem", fontFamily: "'JetBrains Mono',monospace", letterSpacing: "0.1em", marginBottom: 8 }}>
            02 — SKILLS & TOOLS
          </p>
          <h2 style={{ color: "var(--text-primary)", fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "clamp(1.9rem,4vw,2.9rem)", letterSpacing: "-0.035em" }}>
            Stack yang Membangun{" "}
            <span style={{ background: "linear-gradient(135deg,var(--clr-primary),var(--clr-light))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Aplikasi Ini
            </span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginTop: 8, maxWidth: 500 }}>
            Teknologi yang saya kuasai untuk membangun panduan wisata Tanjung Pinang Guide dari Figma hingga production.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 16 }}>
          {TOOLS.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.06 + i * 0.06 }}
              style={{
                padding: 20, borderRadius: 16,
                background: "var(--bg-card)", border: "1px solid var(--border-subtle)",
                transition: "border-color 0.25s, transform 0.25s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = `${tool.color}50`;
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)";
                (e.currentTarget as HTMLElement).style.transform = "";
              }}
            >
              {/* Name bar */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div style={{ width: 6, height: 32, borderRadius: 3, background: tool.color, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--text-primary)", fontFamily: "'Outfit',sans-serif" }}>{tool.name}</div>
                </div>
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", lineHeight: 1.5, marginBottom: 12 }}>{tool.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {tool.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: "0.625rem", padding: "2px 8px", borderRadius: 4,
                    color: tool.color, background: `${tool.color}0A`, border: `1px solid ${tool.color}25`,
                    fontFamily: "'JetBrains Mono',monospace",
                  }}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* App architecture card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.06 + TOOLS.length * 0.06 }}
            style={{
              padding: 20, borderRadius: 16, display: "flex", flexDirection: "column", justifyContent: "center",
              background: "var(--bg-card2)", border: "1px solid var(--border-subtle)",
            }}
          >
            <p style={{ fontSize: "0.7rem", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--clr-primary)", fontFamily: "'JetBrains Mono',monospace" }}>
              App Architecture
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {FLOW.map((item, i) => (
                <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {i > 0 && i < FLOW.length && (
                    <div style={{ width: 1, height: 8, background: "var(--border-subtle)", marginLeft: 4, marginRight: 4, alignSelf: "flex-start", marginBottom: -4 }} />
                  )}
                  <span style={{ fontSize: "0.75rem", color: item.color, fontFamily: "'JetBrains Mono',monospace" }}>
                    {i > 0 ? "— " : ""}{item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
