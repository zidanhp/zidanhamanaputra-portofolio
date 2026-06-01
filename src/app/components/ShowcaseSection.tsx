import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ─── Image imports — Mobile screens ─────────────────────── */
import imgLogin          from "../../imports/Design/masuk.png";
import imgDaftar         from "../../imports/Design/Daftar.png";
import imgHomeBefore     from "../../imports/Design/homepage sebelum masuk.png";
import imgHomeAfter      from "../../imports/Design/Homepage sesudah login.png";
import imgJelajahi       from "../../imports/Design/Jelajahi semua.png";
import imgDetail         from "../../imports/Design/Detail destinasi - info.png";
import imgDetailSekitar  from "../../imports/Design/Detail Destinasi - sekitar.png";
import imgDetailTips     from "../../imports/Design/detail destinasi -Tips.png";
import imgProfile        from "../../imports/Design/User Profile Design.png";

/* ─── Splash ──────────────────────────────────────────────── */
import imgSplashJelajahi   from "../../imports/Design/Splash Jelajahi.png";
import imgSplashKenangan   from "../../imports/Design/Splash Kenangan.png";
import imgSplashPerjalanan from "../../imports/Design/Splash Perjalanan.png";

/* ─── AI Guide ────────────────────────────────────────────── */
import imgAI1 from "../../imports/Design/AI Guide Page 1.png";
import imgAI2 from "../../imports/Design/AI Guide Page 2 V2.png";
import imgAI3 from "../../imports/Design/AI Guide Page 3.png";

/* ─── API Integration (shown as-is, no phone frame) ─────── */
import imgBaseURL from "../../imports/Integration/Base URL.png";
import imgBEtoAI  from "../../imports/Integration/BE to AI.png";
import imgJWT     from "../../imports/Integration/JWT.png";

/* ═══════════════════════════════════════════════════════════
   ANDROID PHONE MOCKUP FRAME
   ═══════════════════════════════════════════════════════════ */
function AndroidMockup({ src, label }: { src: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-3 shrink-0" style={{ width: 160 }}>
      {/* Outer shell */}
      <div
        style={{
          width: 160,
          height: 320,
          borderRadius: 28,
          background: "var(--bg-card)",
          border: "2.5px solid var(--border-medium)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.35), 0 0 0 1px var(--border-subtle), inset 0 1px 0 rgba(255,255,255,0.06)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Top notch bar */}
        <div
          style={{
            height: 22,
            background: "var(--bg-card2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            borderBottom: "1px solid var(--border-subtle)",
          }}
        >
          {/* Notch pill */}
          <div style={{ width: 48, height: 8, borderRadius: 4, background: "var(--bg-page)" }} />
        </div>

        {/* Screen area */}
        <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
          <img
            src={src}
            alt={label}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
              display: "block",
            }}
            loading="lazy"
          />
        </div>

        {/* Bottom nav bar */}
        <div
          style={{
            height: 20,
            background: "var(--bg-card2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
            flexShrink: 0,
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          {/* Android gesture bar */}
          <div style={{ width: 40, height: 3, borderRadius: 2, background: "var(--border-medium)" }} />
        </div>
      </div>

      <span style={{
        color: "var(--text-muted)",
        fontSize: "0.68rem",
        fontFamily: "'JetBrains Mono',monospace",
        textAlign: "center",
        lineHeight: 1.3,
      }}>
        {label}
      </span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   HORIZONTAL CAROUSEL
   ═══════════════════════════════════════════════════════════ */
function PhoneCarousel({ images }: { images: { src: string; label: string }[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft,  setCanLeft]  = useState(false);
  const [canRight, setCanRight] = useState(true);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -200 : 200, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 10);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Left arrow */}
      <AnimatePresence>
        {canLeft && (
          <motion.button
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-4 w-8 h-8 rounded-full flex items-center justify-center"
            style={{
              background: "var(--clr-primary)",
              boxShadow: "0 4px 16px rgba(0,174,239,0.35)",
              border: "none",
              cursor: "pointer",
            }}
          >
            <ChevronLeft size={16} color="white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Right arrow */}
      <AnimatePresence>
        {canRight && (
          <motion.button
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 w-8 h-8 rounded-full flex items-center justify-center"
            style={{
              background: "var(--clr-primary)",
              boxShadow: "0 4px 16px rgba(0,174,239,0.35)",
              border: "none",
              cursor: "pointer",
            }}
          >
            <ChevronRight size={16} color="white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Scrollable strip */}
      <div
        ref={scrollRef}
        onScroll={onScroll}
        style={{
          display: "flex",
          gap: 20,
          overflowX: "auto",
          overflowY: "visible",
          paddingBottom: 12,
          paddingTop: 4,
          paddingLeft: 4,
          paddingRight: 4,
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {images.map((img) => (
          <AndroidMockup key={img.label} src={img.src} label={img.label} />
        ))}
      </div>

      {/* Fade gradients on edges */}
      {canLeft && (
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 12, width: 40,
          background: "linear-gradient(to right, var(--bg-card), transparent)",
          pointerEvents: "none",
        }} />
      )}
      {canRight && (
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 12, width: 40,
          background: "linear-gradient(to left, var(--bg-card), transparent)",
          pointerEvents: "none",
        }} />
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   API INTEGRATION PANEL (no phone frame)
   ═══════════════════════════════════════════════════════════ */
const API_ENDPOINTS = [
  { method: "POST",   path: "/auth/google",           desc: "Login via Google OAuth" },
  { method: "GET",    path: "/destinations",           desc: "Semua destinasi wisata TPI" },
  { method: "GET",    path: "/destinations/:id",       desc: "Detail wisata + tips lokal" },
  { method: "GET",    path: "/destinations/:id/nearby",desc: "Tempat wisata terdekat" },
  { method: "POST",   path: "/bookmark",               desc: "Simpan destinasi favorit" },
  { method: "DELETE", path: "/bookmark/:id",           desc: "Hapus dari bookmark" },
  { method: "POST",   path: "/ai/chat",               desc: "AI Guide Gemini — tanya wisata" },
  { method: "GET",    path: "/profile",               desc: "Profil & riwayat pengguna" },
  { method: "POST",   path: "/auth/refresh",          desc: "Refresh JWT token" },
];

const METHOD_COLORS: Record<string, string> = {
  GET: "#4FC3F7",
  POST: "#93DEFF",
  DELETE: "#f87171",
  PUT: "#fbbf24",
};

function APIPanel() {
  const integrations = [
    { src: imgBaseURL, label: "Base URL & Env Setup" },
    { src: imgJWT,     label: "JWT Authentication" },
    { src: imgBEtoAI,  label: "Backend → AI Guide" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Screenshot row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
        {integrations.map(img => (
          <div key={img.label} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{
              borderRadius: 12,
              overflow: "hidden",
              border: "1px solid var(--border-subtle)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
            }}>
              <img src={img.src} alt={img.label} style={{ width: "100%", height: "auto", display: "block" }} loading="lazy" />
            </div>
            <span style={{ color: "var(--text-muted)", fontSize: "0.72rem", fontFamily: "'JetBrains Mono',monospace", textAlign: "center" }}>
              {img.label}
            </span>
          </div>
        ))}
      </div>

      {/* Endpoint list */}
      <div style={{
        padding: "16px 20px",
        borderRadius: 16,
        background: "var(--bg-card2)",
        border: "1px solid var(--border-subtle)",
      }}>
        <div style={{ color: "var(--text-muted)", fontSize: "0.7rem", fontFamily: "'JetBrains Mono',monospace", letterSpacing: "0.1em", marginBottom: 12 }}>
          REST API — TANJUNG PINANG GUIDE
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 8 }}>
          {API_ENDPOINTS.map(ep => (
            <div key={ep.path} style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "7px 12px",
              borderRadius: 8,
              background: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
            }}>
              <span style={{
                minWidth: 48,
                fontSize: "0.68rem",
                fontFamily: "'JetBrains Mono',monospace",
                fontWeight: 700,
                color: METHOD_COLORS[ep.method] ?? "#fff",
              }}>
                {ep.method}
              </span>
              <code style={{ flex: 1, fontSize: "0.75rem", color: "var(--text-accent1)", fontFamily: "'JetBrains Mono',monospace" }}>
                {ep.path}
              </code>
              <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>{ep.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   TAB DEFINITIONS
   ═══════════════════════════════════════════════════════════ */
const TABS = [
  { id: "mobile",  label: "Layar Wisata",     count: 9 },
  { id: "splash",  label: "Splash & Onboard", count: 3 },
  { id: "ai",      label: "AI Guide",          count: 3 },
  { id: "api",     label: "API Backend",        count: null },
];

const MOBILE_SCREENS  = [
  { src: imgLogin,         label: "Login" },
  { src: imgDaftar,        label: "Register" },
  { src: imgHomeBefore,    label: "Home (Guest)" },
  { src: imgHomeAfter,     label: "Home (Auth)" },
  { src: imgJelajahi,      label: "Jelajahi" },
  { src: imgDetail,        label: "Detail — Info" },
  { src: imgDetailSekitar, label: "Detail — Sekitar" },
  { src: imgDetailTips,    label: "Detail — Tips" },
  { src: imgProfile,       label: "Profil" },
];
const SPLASH_SCREENS  = [
  { src: imgSplashJelajahi,   label: "Splash — Jelajahi" },
  { src: imgSplashPerjalanan, label: "Splash — Perjalanan" },
  { src: imgSplashKenangan,   label: "Splash — Kenangan" },
];
const AI_SCREENS      = [
  { src: imgAI1, label: "AI Guide — Halaman 1" },
  { src: imgAI2, label: "AI Guide — Halaman 2" },
  { src: imgAI3, label: "AI Guide — Halaman 3" },
];

/* ═══════════════════════════════════════════════════════════
   MAIN SECTION
   ═══════════════════════════════════════════════════════════ */
export function ShowcaseSection() {
  const [tab, setTab] = useState("mobile");
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="showcase" className="py-24 relative" ref={ref} style={{ background: "var(--bg-page)" }}>
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(0,174,239,0.04) 0%,transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-xs mb-2" style={{ color: "var(--clr-primary)", fontFamily: "'JetBrains Mono',monospace", letterSpacing: "0.1em" }}>
            05 — SHOWCASE
          </p>
          <h2 style={{ color: "var(--text-primary)", fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "clamp(1.9rem,4vw,2.9rem)", letterSpacing: "-0.035em" }}>
            Jelajahi Tanjung Pinang{" "}
            <span style={{ background: "linear-gradient(135deg,var(--clr-primary),var(--clr-light))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Guide
            </span>
          </h2>
          <p className="mt-2" style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
            Tampilan layar nyata aplikasi wisata Tanjung Pinang Guide — dari desain Figma hingga Flutter yang berjalan di Android.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={tab === t.id ? {
                background: "linear-gradient(135deg,var(--clr-primary),var(--clr-dark))",
                color: "white",
                fontFamily: "'Outfit',sans-serif",
                fontWeight: 600,
                border: "none",
                padding: "10px 18px",
                borderRadius: 12,
                cursor: "pointer",
                fontSize: "0.875rem",
                display: "flex",
                alignItems: "center",
                gap: 8,
              } : {
                background: "var(--bg-card)",
                color: "var(--text-muted)",
                border: "1px solid var(--border-subtle)",
                padding: "10px 18px",
                borderRadius: 12,
                cursor: "pointer",
                fontSize: "0.875rem",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              {t.label}
              {t.count && (
                <span style={{
                  fontSize: "0.65rem",
                  padding: "1px 6px",
                  borderRadius: 4,
                  background: tab === t.id ? "rgba(255,255,255,0.2)" : "var(--border-subtle)",
                  color: tab === t.id ? "white" : "var(--text-muted)",
                  fontFamily: "'JetBrains Mono',monospace",
                }}>
                  {t.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Panel */}
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          style={{
            padding: "28px 32px",
            borderRadius: 20,
            border: "1px solid var(--border-subtle)",
            background: "var(--bg-card)",
            overflow: "hidden",
          }}
        >
          {tab === "mobile" && <PhoneCarousel images={MOBILE_SCREENS} />}
          {tab === "splash" && <PhoneCarousel images={SPLASH_SCREENS} />}
          {tab === "ai"     && <PhoneCarousel images={AI_SCREENS} />}
          {tab === "api"    && <APIPanel />}
        </motion.div>
      </div>
    </section>
  );
}
