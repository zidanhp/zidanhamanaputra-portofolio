import { useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { MapPin, Compass, Anchor } from "lucide-react";

const STATS = [
  { val: "3",   label: "Fase Program",       color: "#00AEEF" },
  { val: "10+", label: "Screen Flutter",     color: "#4FC3F7" },
  { val: "AI",  label: "Gemini Integrated",  color: "#93DEFF" },
  { val: "∞",   label: "Learning Journey",   color: "#00AEEF" },
];

const FEATURED_PLACES = [
  { name: "Istana Penyengat",      cat: "Sejarah & Budaya" },
  { name: "Pantai Trikora",        cat: "Wisata Bahari" },
  { name: "Vihara Avalokitesvara", cat: "Religi" },
  { name: "Pelabuhan Sri Bintan",  cat: "Transportasi" },
];

const TIMELINE = [
  {
    phase: "Micro Challenge",
    tag: "Research",
    desc: "Riset kebutuhan wisatawan Tanjung Pinang, menyusun FigJam dan Competitor Audit Synthesis untuk memetakan aplikasi panduan wisata sejenis.",
    color: "#4FC3F7",
    Icon: Compass,
  },
  {
    phase: "Macro Challenge",
    tag: "Design",
    desc: "Merancang UI/UX pengalaman menjelajahi destinasi wisata, membuat Prototype interaktif, dan menyusun Component Design System di Figma.",
    color: "#00AEEF",
    Icon: MapPin,
  },
  {
    phase: "Massive Challenge",
    tag: "Development",
    desc: "Membangun aplikasi Flutter dengan fitur peta destinasi, AI Guide berbasis Gemini, bookmark wisata offline, dan integrasi REST API backend.",
    color: "#93DEFF",
    Icon: Anchor,
  },
];

export function AboutSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" style={{ padding: "96px 0", position: "relative", background: "var(--bg-page)" }} ref={ref}>
      <div style={{
        position: "absolute", right: 0, top: "20%", width: 380, height: 380, borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle,rgba(0,174,239,0.05) 0%,transparent 70%)",
      }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} style={{ marginBottom: 48 }}>
          <p style={{ color: "var(--clr-primary)", fontSize: "0.75rem", fontFamily: "'JetBrains Mono',monospace", letterSpacing: "0.1em", marginBottom: 8 }}>
            01 — ABOUT ME
          </p>
          <h2 style={{ color: "var(--text-primary)", fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "clamp(1.9rem,4vw,2.9rem)", letterSpacing: "-0.035em" }}>
            Traveler of{" "}
            <span style={{ background: "linear-gradient(135deg,var(--clr-primary),var(--clr-light))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Code
            </span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: 8, maxWidth: 520 }}>
            Dari riset wisatawan hingga baris kode Flutter — saya mendokumentasikan perjalanan belajar saya di setiap fase program.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "start" }}>
          {/* Left — bio + timeline */}
          <div>
            {/* Bio card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.08 }}
              style={{ padding: 24, borderRadius: 16, marginBottom: 20, background: "var(--bg-card)", border: "1px solid var(--border-subtle)" }}
            >
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: 12 }}>
                Saya <span style={{ color: "var(--text-accent2)", fontWeight: 600 }}>Zidan Hamana Putra</span>, mengikuti program{" "}
                <span style={{ color: "var(--text-accent1)" }}>Infinite Learning — Massive Challenge</span> bersama tim{" "}
                <span style={{ color: "var(--text-accent1)" }}>Svarnatech Labs</span>.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Kami membangun <strong style={{ color: "var(--text-primary)" }}>Tanjung Pinang Guide</strong> — aplikasi wisata Flutter yang menggabungkan{" "}
                <strong style={{ color: "var(--text-primary)" }}>AI Guide Gemini</strong> dengan panduan destinasi ikonik Kepulauan Riau seperti{" "}
                <span style={{ color: "var(--text-accent1)" }}>Istana Penyengat</span>,{" "}
                <span style={{ color: "var(--text-accent1)" }}>Pantai Trikora</span>, dan masih banyak lagi.
              </p>
            </motion.div>

            {/* Featured places */}
            <motion.div
              initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45, delay: 0.12 }}
              style={{ marginBottom: 20 }}
            >
              <p style={{ color: "var(--text-muted)", fontSize: "0.7rem", fontFamily: "'JetBrains Mono',monospace", letterSpacing: "0.1em", marginBottom: 10 }}>
                DESTINASI DALAM APLIKASI
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {FEATURED_PLACES.map(p => (
                  <div key={p.name} style={{
                    display: "flex", alignItems: "center", gap: 6,
                    padding: "5px 12px", borderRadius: 8,
                    background: "var(--bg-card2)", border: "1px solid var(--border-subtle)",
                    fontSize: "0.75rem",
                  }}>
                    <MapPin size={10} style={{ color: "var(--clr-primary)", flexShrink: 0 }} />
                    <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>{p.name}</span>
                    <span style={{ fontSize: "0.65rem", color: "var(--clr-primary)", fontFamily: "'JetBrains Mono',monospace" }}>{p.cat}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Journey timeline */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {TIMELINE.map((t, i) => (
                <motion.div
                  key={t.phase}
                  initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: 0.18 + i * 0.08 }}
                  style={{ display: "flex", gap: 16, padding: 16, borderRadius: 12, background: "var(--bg-card2)", border: `1px solid ${t.color}18` }}
                >
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, paddingTop: 2, flexShrink: 0 }}>
                    <div style={{ width: 8, height: 8, borderRadius: 4, background: t.color, boxShadow: `0 0 8px ${t.color}60` }} />
                    {i < TIMELINE.length - 1 && <div style={{ width: 1, flex: 1, minHeight: 24, background: `${t.color}20` }} />}
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-primary)", fontFamily: "'Outfit',sans-serif" }}>{t.phase}</span>
                      <span style={{
                        fontSize: "0.625rem", padding: "2px 8px", borderRadius: 4,
                        color: t.color, background: `${t.color}0C`, border: `1px solid ${t.color}28`,
                        fontFamily: "'JetBrains Mono',monospace",
                      }}>{t.tag}</span>
                    </div>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", lineHeight: 1.6, margin: 0 }}>{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.12 }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, width: 216 }}
          >
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.35, delay: 0.2 + i * 0.07 }}
                style={{
                  padding: 16, borderRadius: 16, textAlign: "center",
                  background: `${s.color}08`, border: `1px solid ${s.color}20`,
                }}
              >
                <div style={{ color: s.color, fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: "1.5rem", letterSpacing: "-0.03em" }}>{s.val}</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.62rem", lineHeight: 1.4, marginTop: 4 }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
