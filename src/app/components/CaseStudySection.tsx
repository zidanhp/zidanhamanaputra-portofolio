import { useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { AlertTriangle, Compass, CheckCircle, TrendingUp } from "lucide-react";

const STORY = [
  {
    id: "problem",
    Icon: AlertTriangle,
    iconColor: "#f87171",
    label: "Problem",
    borderColor: "rgba(248,113,113,0.18)",
    bgAlpha: "rgba(248,113,113,0.05)",
    content:
      "Wisatawan Tanjung Pinang kesulitan menemukan informasi destinasi yang terpercaya, terpusat, dan bisa diakses offline. Tidak ada panduan digital lokal yang komprehensif untuk kota ini.",
  },
  {
    id: "approach",
    Icon: Compass,
    iconColor: "#4FC3F7",
    label: "Approach",
    borderColor: "rgba(0,174,239,0.18)",
    bgAlpha: "rgba(0,174,239,0.05)",
    content:
      "Saya mengambil peran Hacker — membangun arsitektur Flutter + REST API, mengimplementasikan layar destinasi wisata satu per satu, dan mengintegrasikan AI Guide untuk rekomendasi personal.",
  },
  {
    id: "solution",
    Icon: CheckCircle,
    iconColor: "#00AEEF",
    label: "Solution",
    borderColor: "rgba(0,174,239,0.18)",
    bgAlpha: "rgba(0,174,239,0.04)",
    content:
      "Aplikasi Flutter 10+ screen: homepage destinasi, detail wisata (info, sekitar, tips), AI Guide chat, bookmark offline, Google Auth, dan profil pengguna. Terhubung ke Node.js/MySQL via REST API.",
  },
  {
    id: "result",
    Icon: TrendingUp,
    iconColor: "#93DEFF",
    label: "Result",
    borderColor: "rgba(79,195,247,0.18)",
    bgAlpha: "rgba(79,195,247,0.04)",
    content:
      "Aplikasi stabil di Android, zero crash saat demo final. Wisatawan dapat menjelajahi Tanjung Pinang lewat panduan digital yang responsif, dengan AI Guide yang menjawab pertanyaan wisata secara real-time.",
  },
];

export function CaseStudySection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="casestudy" style={{ padding: "96px 0", position: "relative", background: "var(--bg-page)" }} ref={ref}>
      <div style={{
        position: "absolute", right: 0, bottom: 0, width: 320, height: 320, borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle,rgba(79,195,247,0.04) 0%,transparent 70%)",
      }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} style={{ marginBottom: 40 }}>
          <p style={{ color: "var(--clr-primary)", fontSize: "0.75rem", fontFamily: "'JetBrains Mono',monospace", letterSpacing: "0.1em", marginBottom: 8 }}>
            04 — CASE STUDY
          </p>
          <h2 style={{ color: "var(--text-primary)", fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "clamp(1.9rem,4vw,2.9rem)", letterSpacing: "-0.035em" }}>
            Perjalanan{" "}
            <span style={{ background: "linear-gradient(135deg,var(--clr-primary),var(--clr-light))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Membangunnya
            </span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: 8, maxWidth: 480 }}>
            Dari masalah wisatawan Tanjung Pinang hingga aplikasi Flutter yang siap demo — ini ceritanya.
          </p>
        </motion.div>

        {/* 4-block story */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
          {STORY.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45, delay: 0.08 + i * 0.08 }}
              style={{ padding: 20, borderRadius: 16, background: s.bgAlpha, border: `1px solid ${s.borderColor}` }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <s.Icon size={15} style={{ color: s.iconColor }} />
                <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-primary)", fontFamily: "'Outfit',sans-serif" }}>
                  {s.label}
                </span>
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>{s.content}</p>
            </motion.div>
          ))}
        </div>

        {/* App context banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.42 }}
          style={{
            marginTop: 24, padding: "14px 20px", borderRadius: 12,
            background: "var(--bg-card2)", border: "1px solid var(--border-subtle)",
            display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap",
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: 4, background: "var(--clr-primary)", flexShrink: 0 }} />
          <div>
            <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", fontFamily: "'JetBrains Mono',monospace" }}>
              Tanjung Pinang Guide
            </span>
            <span style={{ color: "var(--border-medium)", margin: "0 8px" }}>·</span>
            <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
              Panduan wisata digital untuk Kota Tanjung Pinang, Kepulauan Riau
            </span>
          </div>
          <div style={{ display: "flex", gap: 8, marginLeft: "auto", flexWrap: "wrap" }}>
            {["Flutter", "Node.js", "Gemini AI", "MySQL"].map(t => (
              <span key={t} style={{
                fontSize: "0.65rem", padding: "2px 10px", borderRadius: 6,
                color: "var(--clr-primary)", background: "rgba(0,174,239,0.07)",
                border: "1px solid var(--border-subtle)", fontFamily: "'JetBrains Mono',monospace",
              }}>{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
