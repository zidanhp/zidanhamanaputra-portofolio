import { useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const LINKS = [
  {
    label: "GitHub",
    handle: "github.com/zidanhp",
    href: "https://github.com/zidanhp",
    icon: <Github size={20} />,
    color: "#6E40C9",
    note: "Source code & project repositories",
  },
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/zidan-hamana-putra",
    href: "https://www.linkedin.com/in/zidan-hamana-putra-9375312b0/?skipRedirect=true",
    icon: <Linkedin size={20} />,
    color: "#0077B5",
    note: "Professional network",
  },
  {
    label: "Email",
    handle: "pzidan050@gmail.com",
    href: "mailto:pzidan050@gmail.com",
    icon: <Mail size={20} />,
    color: "#00AEEF",
    note: "Langsung bisa dihubungi",
  },
];

export function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" style={{ padding: "96px 0 80px", position: "relative", background: "var(--bg-page)" }} ref={ref}>
      <div style={{ position: "absolute", inset: "0 0 auto 0", height: 1, background: "linear-gradient(90deg,transparent,var(--border-subtle),transparent)" }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          style={{ marginBottom: 40 }}
        >
          <p style={{ color: "var(--clr-primary)", fontSize: "0.75rem", fontFamily: "'JetBrains Mono',monospace", letterSpacing: "0.1em", marginBottom: 8 }}>
            06 — CONTACT
          </p>
          <h2 style={{ color: "var(--text-primary)", fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "clamp(1.9rem,4vw,2.9rem)", letterSpacing: "-0.035em" }}>
            Let's{" "}
            <span style={{ background: "linear-gradient(135deg,var(--clr-primary),var(--clr-light))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Connect
            </span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginTop: 8 }}>
            Pengembang mobile yang tertarik kolaborasi di bidang <span style={{ color: "var(--text-accent1)" }}>wisata digital</span>, aplikasi Flutter, atau integrasi AI — mari terhubung!
          </p>
        </motion.div>

        {/* Link cards */}
        <div style={{ maxWidth: 560, display: "flex", flexDirection: "column", gap: 12 }}>
          {LINKS.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              style={{
                display: "flex", alignItems: "center", gap: 16,
                padding: "16px 20px", borderRadius: 16, textDecoration: "none",
                background: "var(--bg-card)", border: "1px solid var(--border-subtle)",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = `${l.color}50`;
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)";
                (e.currentTarget as HTMLElement).style.transform = "";
              }}
            >
              <div style={{ width: 44, height: 44, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: `${l.color}14`, color: l.color, flexShrink: 0 }}>
                {l.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-primary)", fontFamily: "'Outfit',sans-serif", marginBottom: 2 }}>{l.label}</div>
                <div style={{ fontSize: "0.75rem", color: l.color, fontFamily: "'JetBrains Mono',monospace", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{l.handle}</div>
                <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>{l.note}</div>
              </div>
              <ExternalLink size={14} style={{ color: "var(--border-medium)", flexShrink: 0 }} />
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.4 }}
          style={{ marginTop: 80, paddingTop: 32, borderTop: "1px solid var(--border-subtle)" }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 24, height: 24, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.625rem", fontWeight: 700, background: "linear-gradient(135deg,var(--clr-primary),var(--clr-dark))",
                color: "white", fontFamily: "'Outfit',sans-serif",
              }}>ZH</div>
              <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", fontFamily: "'Outfit',sans-serif" }}>
                Zidan Hamana Putra · <span style={{ color: "var(--clr-primary)" }}>Svarnatech Labs</span>
              </span>
            </div>
            <span style={{ color: "var(--border-medium)", fontSize: "0.75rem", fontFamily: "'JetBrains Mono',monospace" }}>
              Tanjung Pinang Guide · Massive Challenge 2026
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
