"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  X,
  Instagram,
  Mail,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { FaDiscord } from "react-icons/fa";

interface Video {
  id: string;
  title: string;
  category: string;
  youtubeId: string;
  description: string;
}

const FEATURED_VIDEOS: Video[] = [
  {
    id: "hero-1",
    title: "Visuals — Brand",
    category: "Brand",
    youtubeId: "JeLV_HljZas",
    description:
      "Direção visual construída com foco em ritmo, presença e identidade estética.",
  },
  {
    id: "hero-1-1",
    title: "Motion — Currency (Dollar Visual)",
    category: "Motion",
    youtubeId: "iOSwIbBcSE0",
    description:
      "Motion design explorando narrativa financeira, ritmo e impacto visual.",
  },
  {
    id: "hero-2",
    title: "Edit — Narrative",
    category: "Cinematic",
    youtubeId: "O4nTVAfoxKI",
    description:
      "Narrativa visual cinematográfica guiada por atmosfera e composição.",
  },
  {
    id: "hero-3",
    title: "Edit — Competitive",
    category: "Gaming",
    youtubeId: "LO9EnykVlBg",
    description:
      "Edição competitiva construída para intensidade, impacto e retenção.",
  },
];

const GRID_VIDEOS: Video[] = [
  {
    id: "v1",
    title: "Visuals — Atmosphere",
    category: "Motion",
    youtubeId: "oK1p72YO2pw",
    description: "",
  },
  {
    id: "v2",
    title: "Motion — Typography",
    category: "Motion",
    youtubeId: "M0OcyKCJhYs",
    description: "",
  },
  {
    id: "v3",
    title: "Edit — Narrative",
    category: "Cinematic",
    youtubeId: "xpYasagUJAs",
    description: "",
  },
  {
    id: "v4",
    title: "Motion — Minimal",
    category: "Motion",
    youtubeId: "q7jkRt0XXPY",
    description: "",
  },
  {
    id: "v5",
    title: "Visuals — Competitive",
    category: "Gaming",
    youtubeId: "u98UHtQWVNA",
    description: "",
  },
  {
    id: "v6",
    title: "Edit — Competitive",
    category: "Gaming",
    youtubeId: "n2OiJBRhzOU",
    description: "",
  },
  {
    id: "v7",
    title: "Motion — Competitive",
    category: "Gaming",
    youtubeId: "LK1cKH6xJvY",
    description: "",
  },
  {
    id: "v8",
    title: "Visuals — Gaming",
    category: "Gaming",
    youtubeId: "AKuQB0DLdoY",
    description: "",
  },
  {
    id: "v9",
    title: "Intro — Performance",
    category: "Gaming",
    youtubeId: "3KPQzNRwH9Q",
    description: "",
  },
];

const CONTACTS = [
  {
    icon: Instagram,
    label: "@andremograph",
    href: "https://www.instagram.com/andremograph/",
  },
  {
    icon: FaDiscord,
    label: "Discord Server",
    href: "https://discord.gg/zu6bWjCXb",
  },
  {
    icon: Mail,
    label: "andre.pr.official23@gmail.com",
    href: "mailto:andre.pr.official23@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "+55 82 99174-8333",
    href: "https://wa.me/558299174833",
  },
];

export default function PortfolioPage() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Manrope:wght@300;400;500;600&display=swap");

        *, *::before, *::after {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #090a0c;
          color: #fff;
          font-family: "Manrope", sans-serif;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        /* Dot grid texture */
        .dot-grid {
          background-image: radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        /* Glass card */
        .glass {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .glass-hover {
          transition: border-color 0.4s ease, box-shadow 0.4s ease, background 0.4s ease;
        }

        .glass-hover:hover {
          border-color: rgba(139, 92, 246, 0.45);
          box-shadow: 0 0 28px rgba(109, 40, 217, 0.18), inset 0 0 20px rgba(109, 40, 217, 0.04);
          background: rgba(109, 40, 217, 0.06);
        }

        /* Purple glow pill / badge */
        .badge {
          background: rgba(139, 92, 246, 0.12);
          border: 1px solid rgba(139, 92, 246, 0.28);
          color: #c4b5fd;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          padding: 4px 14px;
          border-radius: 100px;
          font-family: "Manrope", sans-serif;
          font-weight: 500;
        }

        /* Nav frosted glass */
        .nav-glass {
          background: rgba(9, 10, 12, 0.7);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        /* Video thumb hover */
        .video-card {
          transition: transform 0.5s cubic-bezier(.25,.46,.45,.94);
        }
        .video-card:hover {
          transform: translateY(-4px);
        }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #090a0c; }
        ::-webkit-scrollbar-thumb { background: rgba(139,92,246,0.3); border-radius: 2px; }
      `}</style>

      <div className="min-h-screen bg-[#090a0c] text-white overflow-hidden relative">

        {/* ── BACKGROUND LAYER ── */}
        <div className="fixed inset-0 z-0 pointer-events-none dot-grid">

          {/* Background video */}
          <video
            autoPlay muted loop playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-[0.12]"
          >
            <source src="/background/BG.mp4" type="video/mp4" />
          </video>

          {/* Gradient orbs — Huly-style */}
          <div className="absolute top-[-180px] left-[-120px] w-[700px] h-[700px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(109,40,217,0.28) 0%, transparent 70%)" }} />

          <div className="absolute top-[20%] right-[-200px] w-[600px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 70%)" }} />

          <div className="absolute bottom-[10%] left-[30%] w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(8,145,178,0.15) 0%, transparent 70%)" }} />

          {/* Hard vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#090a0c_90%)]" />
          <div className="absolute inset-0 bg-[#090a0c]/40" />
        </div>

        {/* ── CONTENT ── */}
        <div className="relative z-10">

          {/* ── NAV ── */}
          <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-5 flex items-center justify-between nav-glass">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-md flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #7C3AED, #3B82F6)" }}>
                <span className="text-[9px] font-bold text-white">A</span>
              </div>
              <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-white/80"
                style={{ fontFamily: "Syne, sans-serif" }}>
                ANDREMOGRAPH
              </span>
            </div>

            <a
              href="#contact"
              className="text-[11px] uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors duration-300"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Contato
            </a>
          </nav>

          {/* ── MAIN ── */}
          <main className="w-full flex flex-col items-center">

            {/* ── HERO ── */}
            <section className="w-full max-w-[1280px] px-6 md:px-10 min-h-screen flex items-center pt-20">
              <div className="w-full grid lg:grid-cols-[1fr_400px] items-center gap-16">

                {/* LEFT */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="max-w-[720px]"
                >
                  <div className="badge inline-block mb-8">
                    Motion Designer — Brazil
                  </div>

                  <h1
                    className="leading-[0.88] tracking-[-0.05em] font-bold"
                    style={{
                      fontFamily: "Syne, sans-serif",
                      fontSize: "clamp(52px, 8vw, 92px)",
                    }}
                  >
                    Motion Design
                    <br />
                    <span
                      style={{
                        background: "linear-gradient(135deg, rgba(139,92,246,0.9) 0%, rgba(59,130,246,0.7) 50%, rgba(255,255,255,0.25) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      &amp; Direção Visual
                    </span>
                  </h1>

                  <p className="mt-8 max-w-[480px] text-white/40 text-[15px] leading-relaxed font-light">
                    Motion design e edição cinematográfica com foco em atmosfera,
                    ritmo e presença visual.
                  </p>

                  {/* Subtle divider line */}
                  <div className="mt-10 flex items-center gap-4">
                    <div className="h-px w-12 bg-gradient-to-r from-violet-500/60 to-transparent" />
                    <span className="text-[11px] uppercase tracking-[0.3em] text-white/25">
                      Portfolio
                    </span>
                  </div>
                </motion.div>

                {/* RIGHT — Profile card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="w-full flex flex-col items-center"
                >
                  {/* Photo */}
                  <div
                    className="w-full max-w-[370px] aspect-[4/5] rounded-[28px] overflow-hidden relative"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(139,92,246,0.2)",
                      boxShadow: "0 0 60px rgba(109,40,217,0.2), 0 0 120px rgba(37,99,235,0.1)",
                    }}
                  >
                    <img
                      src="/about/perfil.jpg"
                      alt="Andre"
                      className="w-full h-full object-cover"
                      style={{ filter: "grayscale(10%) brightness(0.92)" }}
                    />
                    {/* Subtle inner glow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090a0c]/60 via-transparent to-transparent" />
                  </div>

                  {/* CONTACTS */}
                  <div id="contact" className="mt-8 w-full max-w-[370px]">
                    <div
                      className="rounded-2xl p-5 flex flex-col gap-4"
                      style={{
                        background: "rgba(255,255,255,0.025)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        backdropFilter: "blur(16px)",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                          Contato
                        </span>
                        <motion.div
                          animate={{ x: [0, 5, 0], opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <ArrowRight size={13} className="text-violet-400" />
                        </motion.div>
                      </div>

                      <div className="flex items-center gap-3">
                        {CONTACTS.map((contact, index) => {
                          const Icon = contact.icon;
                          return (
                            <a key={index} href={contact.href} title={contact.label}>
                              <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center text-white/50 hover:text-violet-300 transition-all duration-300 glass glass-hover"
                              >
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

            {/* ── SECTION DIVIDER ── */}
            <div className="w-full max-w-[1280px] px-6 md:px-10 py-8">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/8 to-transparent" />
            </div>

            {/* ── FEATURED VIDEOS ── */}
            <section className="w-full max-w-[1280px] px-6 md:px-10 pb-36 space-y-24">

              {/* Section label */}
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-violet-500/30 to-transparent max-w-[60px]" />
                <span className="badge">Trabalhos em Destaque</span>
              </div>

              {FEATURED_VIDEOS.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={`grid lg:grid-cols-[1fr_380px] gap-12 items-center ${
                    index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Thumbnail */}
                  <div
                    onClick={() => setSelectedVideo(video)}
                    className="group relative w-full aspect-video rounded-[24px] overflow-hidden cursor-pointer video-card"
                    style={{
                      background: "#0c0d10",
                      border: "1px solid rgba(255,255,255,0.06)",
                      boxShadow: "0 4px 40px rgba(0,0,0,0.5)",
                      transition: "border-color 0.4s ease, box-shadow 0.4s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(139,92,246,0.35)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 60px rgba(109,40,217,0.25)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 40px rgba(0,0,0,0.5)";
                    }}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                      onError={(e) => {
                        e.currentTarget.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                      }}
                      alt={video.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.03] opacity-80 group-hover:opacity-100"
                    />

                    {/* Play overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                      <div
                        className="w-[72px] h-[72px] rounded-full flex items-center justify-center border opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100 duration-400"
                        style={{
                          background: "rgba(109,40,217,0.25)",
                          backdropFilter: "blur(12px)",
                          borderColor: "rgba(139,92,246,0.5)",
                          boxShadow: "0 0 30px rgba(109,40,217,0.4)",
                        }}
                      >
                        <Play size={24} fill="white" className="ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="max-w-[380px]">
                    <span className="badge inline-block mb-5">{video.category}</span>

                    <h2
                      className="font-bold leading-[1.0] tracking-[-0.04em]"
                      style={{
                        fontFamily: "Syne, sans-serif",
                        fontSize: "clamp(32px, 4vw, 52px)",
                      }}
                    >
                      {video.title}
                    </h2>

                    <div className="mt-4 h-px w-10 bg-gradient-to-r from-violet-500/60 to-transparent" />

                    <p className="mt-5 text-white/38 text-[14px] leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </section>

            {/* ── GRID ── */}
            <section className="w-full max-w-[1280px] px-6 md:px-10 pb-40">

              {/* Section label */}
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px flex-1 bg-gradient-to-r from-violet-500/30 to-transparent max-w-[60px]" />
                <span className="badge">Mais Projetos</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {GRID_VIDEOS.map((video, i) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: (i % 3) * 0.06 }}
                    onClick={() => setSelectedVideo(video)}
                    className="group cursor-pointer video-card"
                  >
                    <div
                      className="relative aspect-[16/10] rounded-[20px] overflow-hidden"
                      style={{
                        background: "#0c0d10",
                        border: "1px solid rgba(255,255,255,0.06)",
                        transition: "border-color 0.4s ease, box-shadow 0.4s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(139,92,246,0.35)";
                        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 40px rgba(109,40,217,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
                        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                      }}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                        onError={(e) => {
                          e.currentTarget.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                        }}
                        alt={video.title}
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-95 transition-all duration-600 group-hover:scale-[1.04]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#090a0c]/90 via-[#090a0c]/20 to-transparent" />

                      {/* Play button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center border transform scale-75 group-hover:scale-100 transition-all duration-400"
                          style={{
                            background: "rgba(109,40,217,0.3)",
                            backdropFilter: "blur(10px)",
                            borderColor: "rgba(139,92,246,0.5)",
                          }}
                        >
                          <Play size={17} fill="white" className="ml-0.5" />
                        </div>
                      </div>

                      {/* Bottom text */}
                      <div className="absolute bottom-5 left-5 right-5">
                        <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 block mb-1.5">
                          {video.category}
                        </span>
                        <h3
                          className="text-[18px] tracking-[-0.03em] font-semibold leading-tight"
                          style={{ fontFamily: "Syne, sans-serif" }}
                        >
                          {video.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

          </main>
        </div>

        {/* ── MODAL ── */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
            >
              <div
                className="absolute inset-0"
                style={{
                  background: "rgba(5,5,8,0.93)",
                  backdropFilter: "blur(24px)",
                }}
                onClick={() => setSelectedVideo(null)}
              />

              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-6 right-6 z-20 w-10 h-10 rounded-xl flex items-center justify-center text-white/40 hover:text-white transition-all duration-200 glass glass-hover"
              >
                <X size={20} />
              </button>

              <motion.div
                initial={{ scale: 0.94, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.94, opacity: 0, y: 20 }}
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative w-full max-w-5xl aspect-video rounded-[24px] overflow-hidden bg-black"
                style={{
                  border: "1px solid rgba(139,92,246,0.25)",
                  boxShadow: "0 0 80px rgba(109,40,217,0.3), 0 40px 120px rgba(0,0,0,0.8)",
                }}
              >
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  className="w-full h-full absolute inset-0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}