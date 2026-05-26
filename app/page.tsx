"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useInView,
  animate as motionAnimate,
} from "framer-motion";
import {
  Play, X, Instagram, Mail, MessageCircle, ArrowRight,
  Search, Layers, RotateCcw, Send,
} from "lucide-react";
import { FaDiscord } from "react-icons/fa";

// ─── TYPES ────────────────────────────────────────────────────────────────────

interface Video {
  id: string;
  title: string;
  category: string;
  youtubeId: string;
  description: string;
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const FEATURED_VIDEOS: Video[] = [
  { id: "hero-1",   title: "Visuals — Brand",                   category: "Brand",     youtubeId: "JeLV_HljZas", description: "Direção visual construída com foco em ritmo, presença e identidade estética." },
  { id: "hero-1-1", title: "Motion — Currency (Dollar Visual)", category: "Motion",    youtubeId: "iOSwIbBcSE0", description: "Motion design explorando narrativa financeira, ritmo e impacto visual." },
  { id: "hero-2",   title: "Edit — Narrative",                  category: "Cinematic", youtubeId: "O4nTVAfoxKI", description: "Narrativa visual cinematográfica guiada por atmosfera e composição." },
  { id: "hero-3",   title: "Edit — Competitive",                category: "Gaming",    youtubeId: "LO9EnykVlBg", description: "Edição competitiva construída para intensidade, impacto e retenção." },
];

const GRID_VIDEOS: Video[] = [
  { id: "v1", title: "Visuals — Atmosphere",  category: "Motion",    youtubeId: "oK1p72YO2pw", description: "" },
  { id: "v2", title: "Motion — Typography",   category: "Motion",    youtubeId: "M0OcyKCJhYs", description: "" },
  { id: "v3", title: "Edit — Narrative",      category: "Cinematic", youtubeId: "xpYasagUJAs", description: "" },
  { id: "v4", title: "Motion — Minimal",      category: "Motion",    youtubeId: "q7jkRt0XXPY", description: "" },
  { id: "v5", title: "Visuals — Competitive", category: "Gaming",    youtubeId: "u98UHtQWVNA", description: "" },
  { id: "v6", title: "Edit — Competitive",    category: "Gaming",    youtubeId: "n2OiJBRhzOU", description: "" },
  { id: "v7", title: "Motion — Competitive",  category: "Gaming",    youtubeId: "LK1cKH6xJvY", description: "" },
  { id: "v8", title: "Visuals — Gaming",      category: "Gaming",    youtubeId: "AKuQB0DLdoY", description: "" },
  { id: "v9", title: "Intro — Performance",   category: "Gaming",    youtubeId: "3KPQzNRwH9Q", description: "" },
];

const CONTACTS = [
  { icon: Instagram,     label: "@andremograph",                href: "https://www.instagram.com/andremograph/" },
  { icon: FaDiscord,     label: "Discord Server",               href: "https://discord.gg/zu6bWjCXb" },
  { icon: Mail,          label: "andre.pr.official23@gmail.com", href: "mailto:andre.pr.official23@gmail.com" },
  { icon: MessageCircle, label: "+55 82 99174-8333",            href: "https://wa.me/558299174833" },
];

const PROCESS_STEPS = [
  { number: "01", title: "Briefing",        description: "Entendo o projeto, os objetivos, o tom e as referências estéticas para alinhar a visão antes de qualquer frame.", icon: Search },
  { number: "02", title: "Desenvolvimento", description: "Criação do motion, edição e composição visual. Cada frame construído com intenção, ritmo e impacto.", icon: Layers },
  { number: "03", title: "Revisão",         description: "Ajustes colaborativos e iterativos até que o resultado esteja exatamente alinhado com a visão do cliente.", icon: RotateCcw },
  { number: "04", title: "Entrega",         description: "Arquivo final otimizado e exportado no formato ideal para cada plataforma e uso.", icon: Send },
];

const STATS = [
  { value: 200, suffix: "+",  label: "Projetos Entregues" },
  { value: 5,   suffix: "+",  label: "Anos de Experiência" },
  { value: 2,   suffix: "M+", label: "Visualizações" },
];

const CATEGORIES = ["Todos", "Motion", "Cinematic", "Gaming", "Brand"];

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

function AnimatedCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const ctrl = motionAnimate(0, value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return () => ctrl.stop();
  }, [inView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <span
        className="font-bold tabular-nums"
        style={{
          fontFamily: "Syne, sans-serif",
          fontSize: "clamp(38px, 5vw, 62px)",
          background: "linear-gradient(135deg, #fff 40%, rgba(139,92,246,0.75))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {count}{suffix}
      </span>
      <span className="text-[10px] uppercase tracking-[0.3em] text-white/28">{label}</span>
    </div>
  );
}

// ─── THUMBNAIL (OPTIMIZED) ────────────────────────────────────────────────────

function Thumbnail({ video }: { video: Video }) {
  const [loaded, setLoaded] = useState(false);
  const [src, setSrc] = useState(
    `https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`
  );

  return (
    <div className="relative w-full h-full bg-[#0c0d10]">
      {!loaded && (
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, rgba(255,255,255,0.03) 25%, rgba(255,255,255,0.07) 50%, rgba(255,255,255,0.03) 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.6s infinite",
          }}
        />
      )}
      <img
        src={src}
        onError={() => setSrc(`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`)}
        onLoad={() => setLoaded(true)}
        alt={video.title}
        loading="lazy"
        decoding="async"
        width={480}
        height={360}
        className="w-full h-full object-cover transition-all duration-700"
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function PortfolioPage() {
  const [splash, setSplash]                 = useState(true);
  const [selectedVideo, setSelectedVideo]   = useState<Video | null>(null);
  const [iframeLoaded, setIframeLoaded]     = useState(false);
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [isTouch, setIsTouch]               = useState(false);
  const [cursorHover, setCursorHover]       = useState(false);

  const cursorX       = useMotionValue(-100);
  const cursorY       = useMotionValue(-100);
  const cursorXSpring = useSpring(cursorX, { damping: 28, stiffness: 700 });
  const cursorYSpring = useSpring(cursorY, { damping: 28, stiffness: 700 });

  const { scrollY } = useScroll();
  const orb1Y = useTransform(scrollY, [0, 2000], [0, -200]);
  const orb2Y = useTransform(scrollY, [0, 2000], [0, -110]);
  const orb3Y = useTransform(scrollY, [0, 2000], [0,  -65]);

  const touchStartY = useRef(0);

  useEffect(() => {
    const t = setTimeout(() => setSplash(false), 2300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => { setIsTouch("ontouchstart" in window); }, []);

  useEffect(() => {
    if (isTouch) return;
    const move = (e: MouseEvent) => { cursorX.set(e.clientX - 16); cursorY.set(e.clientY - 16); };
    const over  = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setCursorHover(["A", "BUTTON"].includes(t.tagName) || !!t.closest("[data-hover]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); };
  }, [isTouch]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSelectedVideo(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => { setIframeLoaded(false); }, [selectedVideo]);

  const handleTouchStart = (e: React.TouchEvent) => { touchStartY.current = e.touches[0].clientY; };
  const handleTouchEnd   = (e: React.TouchEvent) => { if (e.changedTouches[0].clientY - touchStartY.current > 80) setSelectedVideo(null); };

  const filteredGrid = activeCategory === "Todos" ? GRID_VIDEOS : GRID_VIDEOS.filter((v) => v.category === activeCategory);

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Manrope:wght@300;400;500;600&display=swap");

        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          background: #090a0c;
          color: #fff;
          font-family: "Manrope", sans-serif;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          cursor: none;
        }

        @keyframes shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position:  200% 0; }
        }

        .dot-grid {
          background-image: radial-gradient(circle, rgba(255,255,255,0.048) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .glass {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .card-hover {
          transition: border-color 0.4s ease, box-shadow 0.4s ease, transform 0.5s cubic-bezier(.25,.46,.45,.94);
        }
        .card-hover:hover {
          border-color: rgba(139,92,246,0.42) !important;
          box-shadow: 0 0 40px rgba(109,40,217,0.22) !important;
          transform: translateY(-4px);
        }
        .badge {
          background: rgba(139,92,246,0.12);
          border: 1px solid rgba(139,92,246,0.28);
          color: #c4b5fd;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          padding: 4px 14px;
          border-radius: 100px;
          font-family: "Manrope", sans-serif;
          font-weight: 500;
        }
        .nav-glass {
          background: rgba(9,10,12,0.78);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #090a0c; }
        ::-webkit-scrollbar-thumb { background: rgba(139,92,246,0.3); border-radius: 2px; }
      `}</style>

      {/* ── CUSTOM CURSOR ─────────────────────────────────────────────────────── */}
      {!isTouch && (
        <>
          <motion.div
            className="fixed z-[200] pointer-events-none rounded-full"
            style={{
              x: cursorXSpring, y: cursorYSpring,
              width:  cursorHover ? 44 : 32,
              height: cursorHover ? 44 : 32,
              background: cursorHover ? "rgba(139,92,246,0.18)" : "transparent",
              border: `1px solid rgba(139,92,246,${cursorHover ? 0.75 : 0.45})`,
              boxShadow: `0 0 ${cursorHover ? 22 : 12}px rgba(109,40,217,${cursorHover ? 0.55 : 0.28})`,
              transition: "width 0.18s ease, height 0.18s ease, background 0.18s ease",
            }}
          />
          <motion.div
            className="fixed z-[200] pointer-events-none rounded-full"
            style={{
              x: cursorX, y: cursorY,
              width: 4, height: 4,
              marginLeft: 14, marginTop: 14,
              background: "rgba(139,92,246,0.9)",
            }}
          />
        </>
      )}

      {/* ── SPLASH ────────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {splash && (
          <motion.div
            className="fixed inset-0 z-[150] flex items-center justify-center"
            style={{ background: "#090a0c" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1,    y: 0 }}
              transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col items-center gap-5"
            >
              <motion.div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold"
                style={{ background: "linear-gradient(135deg, #7C3AED, #3B82F6)", fontFamily: "Syne, sans-serif", boxShadow: "0 0 70px rgba(109,40,217,0.6)" }}
                animate={{ boxShadow: ["0 0 70px rgba(109,40,217,0.6)", "0 0 100px rgba(109,40,217,0.9)", "0 0 70px rgba(109,40,217,0.6)"] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              >A</motion.div>
              <motion.span
                className="text-[12px] uppercase tracking-[0.45em] text-white/45"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                style={{ fontFamily: "Syne, sans-serif" }}
              >ANDREMOGRAPH</motion.span>
              <div className="w-32 h-[1px] rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #7C3AED, #3B82F6)" }}
                  initial={{ width: "0%" }} animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 1.4, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-[#090a0c] text-white relative" style={{ overflowX: "hidden" }}>

        {/* ── BACKGROUND ────────────────────────────────────────────────────── */}
        <div className="fixed inset-0 z-0 pointer-events-none dot-grid" style={{ overflow: "hidden" }}>
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-[0.1]">
            <source src="/background/BG.mp4" type="video/mp4" />
          </video>
          <motion.div className="absolute top-[-200px] left-[-150px] w-[780px] h-[780px] rounded-full"
            style={{ y: orb1Y, background: "radial-gradient(circle, rgba(109,40,217,0.32) 0%, transparent 70%)" }} />
          <motion.div className="absolute top-[15%] right-[-250px] w-[660px] h-[660px] rounded-full"
            style={{ y: orb2Y, background: "radial-gradient(circle, rgba(37,99,235,0.23) 0%, transparent 70%)" }} />
          <motion.div className="absolute bottom-[5%] left-[25%] w-[560px] h-[560px] rounded-full"
            style={{ y: orb3Y, background: "radial-gradient(circle, rgba(8,145,178,0.16) 0%, transparent 70%)" }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,#090a0c_85%)]" />
          <div className="absolute inset-0 bg-[#090a0c]/30" />
          <div className="absolute inset-0 mix-blend-overlay"
            style={{
              opacity: 0.04,
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* ── CONTENT ───────────────────────────────────────────────────────── */}
        <div className="relative z-10">

          {/* ── NAV ─────────────────────────────────────────────────────────── */}
          <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-5 flex items-center justify-between nav-glass">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold"
                style={{ background: "linear-gradient(135deg,#7C3AED,#3B82F6)", fontFamily: "Syne,sans-serif" }}>A</div>
              <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-white/75" style={{ fontFamily: "Syne,sans-serif" }}>
                ANDREMOGRAPH
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {[["#work","Work"],["#process","Processo"],["#grid","Projetos"],["#contact","Contato"]].map(([href, label]) => (
                <a key={href} href={href} data-hover
                  className="text-[11px] uppercase tracking-[0.25em] text-white/32 hover:text-white/70 transition-colors duration-300">
                  {label}
                </a>
              ))}
            </div>
          </nav>

          <main className="w-full flex flex-col items-center">

            {/* ── HERO ──────────────────────────────────────────────────────── */}
            <section className="w-full max-w-[1280px] px-6 md:px-10 min-h-screen flex items-center pt-20 relative" style={{ overflow: "hidden" }}>
              <motion.div
                className="absolute left-0 right-0 h-px pointer-events-none z-20"
                style={{ background: "linear-gradient(90deg,transparent 0%,rgba(139,92,246,0.65) 30%,rgba(59,130,246,0.45) 70%,transparent 100%)" }}
                initial={{ top: "8%", opacity: 0 }}
                animate={{ top: "96%", opacity: [0, 0.9, 0.9, 0] }}
                transition={{ duration: 2.6, delay: 2.6, ease: "linear" }}
              />

              <div className="w-full grid lg:grid-cols-[1fr_400px] items-center gap-16">
                <motion.div
                  initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.25,0.46,0.45,0.94] }}
                  className="max-w-[720px]"
                >
                  <div className="badge inline-block mb-8">Motion Designer — Brazil</div>
                  <h1 className="leading-[0.88] tracking-[-0.05em] font-bold"
                    style={{ fontFamily: "Syne,sans-serif", fontSize: "clamp(50px,8vw,90px)" }}>
                    Motion Design<br />
                    <span style={{
                      background: "linear-gradient(135deg,rgba(139,92,246,0.95) 0%,rgba(59,130,246,0.72) 50%,rgba(255,255,255,0.22) 100%)",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    }}>&amp; Direção Visual</span>
                  </h1>
                  <p className="mt-8 max-w-[480px] text-white/38 text-[15px] leading-relaxed font-light">
                    Motion design e edição cinematográfica com foco em atmosfera, ritmo e presença visual.
                  </p>
                  <div className="mt-10 flex items-center gap-4">
                    <div className="h-px w-12 bg-gradient-to-r from-violet-500/60 to-transparent" />
                    <span className="text-[11px] uppercase tracking-[0.3em] text-white/22">Portfolio</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5, ease: [0.25,0.46,0.45,0.94] }}
                  className="w-full flex flex-col items-center"
                >
                  <div className="w-full max-w-[370px] aspect-[4/5] rounded-[28px] overflow-hidden relative"
                    style={{ border: "1px solid rgba(139,92,246,0.2)", boxShadow: "0 0 65px rgba(109,40,217,0.22),0 0 130px rgba(37,99,235,0.1)" }}>
                    <img src="/about/perfil.jpg" alt="Andre" className="w-full h-full object-cover"
                      style={{ filter: "grayscale(10%) brightness(0.9)" }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090a0c]/65 via-transparent to-transparent" />
                  </div>

                  <div id="contact" className="mt-7 w-full max-w-[370px]">
                    <div className="rounded-2xl p-5"
                      style={{ background:"rgba(255,255,255,0.025)", border:"1px solid rgba(255,255,255,0.07)", backdropFilter:"blur(16px)" }}>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/28">Contato</span>
                        <motion.div animate={{ x:[0,5,0], opacity:[0.4,1,0.4] }} transition={{ duration:2, repeat:Infinity }}>
                          <ArrowRight size={13} className="text-violet-400" />
                        </motion.div>
                      </div>
                      <div className="flex items-center gap-3">
                        {CONTACTS.map((c, i) => {
                          const Icon = c.icon;
                          return (
                            <a key={i} href={c.href} title={c.label} data-hover>
                              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white/45 hover:text-violet-300 transition-all duration-300 glass card-hover">
                                <Icon size={18} />
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* ── STATS ─────────────────────────────────────────────────────── */}
            <section className="w-full max-w-[1280px] px-6 md:px-10 py-10">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/8 to-transparent mb-20" />
              <motion.div
                initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:0.8 }}
                className="grid grid-cols-3 gap-8"
              >
                {STATS.map((s, i) => (
                  <AnimatedCounter key={i} value={s.value} suffix={s.suffix} label={s.label} />
                ))}
              </motion.div>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/8 to-transparent mt-20" />
            </section>

            {/* ── FEATURED ──────────────────────────────────────────────────── */}
            <section id="work" className="w-full max-w-[1280px] px-6 md:px-10 pb-36 space-y-24">
              <div className="flex items-center gap-4">
                <div className="h-px w-14 bg-gradient-to-r from-violet-500/30 to-transparent" />
                <span className="badge">Trabalhos em Destaque</span>
              </div>

              {FEATURED_VIDEOS.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity:0, y:50 }} whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true, margin:"-100px" }}
                  transition={{ duration:0.9, ease:[0.25,0.46,0.45,0.94] }}
                  className={`grid lg:grid-cols-[1fr_380px] gap-12 items-center ${index%2!==0 ? "lg:[&>*:first-child]:order-2" : ""}`}
                >
                  <div
                    onClick={() => setSelectedVideo(video)} data-hover
                    className="group relative w-full aspect-video rounded-[24px] overflow-hidden cursor-pointer card-hover"
                    style={{ background:"#0c0d10", border:"1px solid rgba(255,255,255,0.06)", boxShadow:"0 4px 40px rgba(0,0,0,0.5)" }}
                  >
                    <Thumbnail video={video} />
                    <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors duration-500 flex items-center justify-center">
                      <div
                        className="w-[70px] h-[70px] rounded-full flex items-center justify-center border opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100 duration-400"
                        style={{ background:"rgba(109,40,217,0.25)", backdropFilter:"blur(12px)", borderColor:"rgba(139,92,246,0.5)", boxShadow:"0 0 32px rgba(109,40,217,0.45)" }}
                      >
                        <Play size={24} fill="white" className="ml-1" />
                      </div>
                    </div>
                  </div>

                  <div className="max-w-[380px]">
                    <span className="badge inline-block mb-5">{video.category}</span>
                    <h2 className="font-bold leading-[1.0] tracking-[-0.04em]"
                      style={{ fontFamily:"Syne,sans-serif", fontSize:"clamp(30px,4vw,50px)" }}>
                      {video.title}
                    </h2>
                    <div className="mt-4 h-px w-10 bg-gradient-to-r from-violet-500/60 to-transparent" />
                    <p className="mt-5 text-white/36 text-[14px] leading-relaxed">{video.description}</p>
                  </div>
                </motion.div>
              ))}
            </section>

            {/* ── PROCESS ───────────────────────────────────────────────────── */}
            <section id="process" className="w-full max-w-[1280px] px-6 md:px-10 pb-36">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/8 to-transparent mb-20" />
              <div className="flex items-center gap-4 mb-14">
                <div className="h-px w-14 bg-gradient-to-r from-violet-500/30 to-transparent" />
                <span className="badge">Processo de Criação</span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {PROCESS_STEPS.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.number}
                      initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }}
                      viewport={{ once:true }} transition={{ duration:0.7, delay:i*0.1 }}
                      className="rounded-[20px] p-6 card-hover relative overflow-hidden"
                      style={{ background:"rgba(255,255,255,0.025)", border:"1px solid rgba(255,255,255,0.06)" }}
                    >
                      <span className="absolute top-4 right-5 font-bold select-none"
                        style={{ fontFamily:"Syne,sans-serif", fontSize:"52px", color:"rgba(255,255,255,0.025)", lineHeight:1 }}>
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                        style={{ background:"rgba(139,92,246,0.12)", border:"1px solid rgba(139,92,246,0.25)" }}>
                        <Icon size={17} className="text-violet-400" />
                      </div>
                      <h3 className="text-[17px] font-semibold mb-3 relative z-10" style={{ fontFamily:"Syne,sans-serif" }}>
                        {step.title}
                      </h3>
                      <p className="text-white/36 text-[13px] leading-relaxed relative z-10">{step.description}</p>
                      {i < PROCESS_STEPS.length - 1 && (
                        <div className="mt-5 flex items-center">
                          <div className="h-px flex-1 bg-gradient-to-r from-violet-500/20 to-transparent" />
                          <ArrowRight size={11} className="text-violet-500/30 ml-1.5" />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </section>

            {/* ── GRID + FILTER ─────────────────────────────────────────────── */}
            <section id="grid" className="w-full max-w-[1280px] px-6 md:px-10 pb-40">
              <div className="flex items-center justify-between mb-12 flex-wrap gap-6">
                <div className="flex items-center gap-4">
                  <div className="h-px w-14 bg-gradient-to-r from-violet-500/30 to-transparent" />
                  <span className="badge">Mais Projetos</span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {CATEGORIES.map((cat) => (
                    <button key={cat} onClick={() => setActiveCategory(cat)} data-hover
                      className="text-[10px] uppercase tracking-[0.25em] px-4 py-2 rounded-xl transition-all duration-300"
                      style={{
                        background: activeCategory === cat ? "rgba(139,92,246,0.2)" : "rgba(255,255,255,0.03)",
                        border:     `1px solid ${activeCategory === cat ? "rgba(139,92,246,0.5)" : "rgba(255,255,255,0.07)"}`,
                        color:      activeCategory === cat ? "#c4b5fd" : "rgba(255,255,255,0.33)",
                        boxShadow:  activeCategory === cat ? "0 0 20px rgba(109,40,217,0.2)" : "none",
                      }}
                    >{cat}</button>
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}
                  exit={{ opacity:0, y:-10 }} transition={{ duration:0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                  {filteredGrid.map((video, i) => (
                    <motion.div
                      key={video.id}
                      initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }}
                      transition={{ duration:0.5, delay:(i%3)*0.07 }}
                      onClick={() => setSelectedVideo(video)} data-hover
                      className="group cursor-pointer"
                    >
                      <div className="relative aspect-[16/10] rounded-[20px] overflow-hidden card-hover"
                        style={{ background:"#0c0d10", border:"1px solid rgba(255,255,255,0.06)" }}>
                        <Thumbnail video={video} />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0c]/88 via-[#090a0c]/18 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center border transform scale-75 group-hover:scale-100 transition-all duration-400"
                            style={{ background:"rgba(109,40,217,0.3)", backdropFilter:"blur(10px)", borderColor:"rgba(139,92,246,0.5)" }}>
                            <Play size={17} fill="white" className="ml-0.5" />
                          </div>
                        </div>
                        <div className="absolute bottom-5 left-5 right-5">
                          <span className="text-[9px] uppercase tracking-[0.3em] text-white/28 block mb-1.5">{video.category}</span>
                          <h3 className="text-[17px] tracking-[-0.03em] font-semibold leading-tight" style={{ fontFamily:"Syne,sans-serif" }}>
                            {video.title}
                          </h3>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </section>

          </main>

          {/* ── FOOTER ────────────────────────────────────────────────────────── */}
          <footer className="relative z-10 py-12 px-6 md:px-10" style={{ borderTop:"1px solid rgba(255,255,255,0.05)" }}>
            <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold"
                  style={{ background:"linear-gradient(135deg,#7C3AED,#3B82F6)", fontFamily:"Syne,sans-serif" }}>A</div>
                <span className="text-[11px] uppercase tracking-[0.3em] text-white/36" style={{ fontFamily:"Syne,sans-serif" }}>
                  ANDREMOGRAPH
                </span>
              </div>
              <div className="flex items-center gap-5">
                {CONTACTS.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <a key={i} href={c.href} title={c.label} data-hover
                      className="text-white/24 hover:text-violet-400 transition-colors duration-300">
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
              <span className="text-[11px] text-white/18">
                © {new Date().getFullYear()} André Rodrigues. Todos os direitos reservados.
              </span>
            </div>
          </footer>
        </div>

        {/* ── MODAL ─────────────────────────────────────────────────────────── */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
              transition={{ duration:0.25 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
              onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}
            >
              <div className="absolute inset-0"
                style={{ background:"rgba(4,5,8,0.94)", backdropFilter:"blur(26px)" }}
                onClick={() => setSelectedVideo(null)} />
              <button onClick={() => setSelectedVideo(null)} data-hover
                className="absolute top-6 right-6 z-20 w-10 h-10 rounded-xl flex items-center justify-center text-white/38 hover:text-white transition-all glass"
                style={{ border:"1px solid rgba(255,255,255,0.07)" }}>
                <X size={18} />
              </button>
              <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.25em] text-white/18 md:hidden select-none">
                Arraste para baixo para fechar
              </div>
              <motion.div
                initial={{ scale:0.94, opacity:0, y:22 }}
                animate={{ scale:1,    opacity:1, y:0 }}
                exit={{   scale:0.94, opacity:0, y:22 }}
                transition={{ duration:0.38, ease:[0.25,0.46,0.45,0.94] }}
                className="relative w-full max-w-5xl aspect-video rounded-[24px] overflow-hidden"
                style={{ border:"1px solid rgba(139,92,246,0.28)", boxShadow:"0 0 90px rgba(109,40,217,0.32),0 40px 120px rgba(0,0,0,0.85)" }}
              >
                {!iframeLoaded && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4" style={{ background:"#0c0d10" }}>
                    <motion.div animate={{ rotate:360 }} transition={{ duration:1, repeat:Infinity, ease:"linear" }}
                      className="w-9 h-9 rounded-full"
                      style={{ border:"2px solid rgba(139,92,246,0.18)", borderTopColor:"rgba(139,92,246,0.9)" }} />
                    <span className="text-[11px] uppercase tracking-[0.3em] text-white/24">Carregando</span>
                  </div>
                )}
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  className="w-full h-full absolute inset-0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  onLoad={() => setIframeLoaded(true)}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </>
  );
}