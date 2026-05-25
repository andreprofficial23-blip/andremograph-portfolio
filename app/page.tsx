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
    title: "Adapta",
    category: "Brand Motion",
    youtubeId: "JeLV_HljZas",
    description:
      "Motion system focused on pacing, clarity and modern visual storytelling."
  },
  {
    id: "hero-2",
    title: "Jornada CEO",
    category: "Narrative Editing",
    youtubeId: "O4nTVAfoxKI",
    description:
      "Cinematic edit built around emotional rhythm and premium composition."
  }
];

const GRID_VIDEOS: Video[] = [
  {
    id: "v1",
    title: "Ranked Guide — July",
    category: "Gaming Edit",
    youtubeId: "LO9EnykVlBg",
    description: ""
  },
  {
    id: "v2",
    title: "OS Interface",
    category: "UI Motion",
    youtubeId: "oK1p72YO2pw",
    description: ""
  },
  {
    id: "v3",
    title: "World Finals",
    category: "Broadcast",
    youtubeId: "M0OcyKCJhYs",
    description: ""
  },
  {
    id: "v4",
    title: "Gameplay Motion",
    category: "Shortform",
    youtubeId: "xpYasagUJAs",
    description: ""
  },
  {
    id: "v5",
    title: "Currency Dynamics",
    category: "Explainer",
    youtubeId: "q7jkRt0XXPY",
    description: ""
  },
  {
    id: "v6",
    title: "Project Two",
    category: "Shortform",
    youtubeId: "u98UHtQWVNA",
    description: ""
  },
  {
    id: "v7",
    title: "Project Three",
    category: "Gaming",
    youtubeId: "n2OiJBRhzOU",
    description: ""
  },
  {
    id: "v8",
    title: "Project Four",
    category: "Motion",
    youtubeId: "LK1cKH6xJvY",
    description: ""
  },
  {
    id: "v9",
    title: "Project Five",
    category: "Social Edit",
    youtubeId: "AKuQB0DLdoY",
    description: ""
  },
  {
    id: "v10",
    title: "Ad Campaign",
    category: "Commercial",
    youtubeId: "3KPQzNRwH9Q",
    description: ""
  }
];

const CONTACTS = [
  {
    icon: Instagram,
    label: "@andremograph",
    href: "https://www.instagram.com/andremograph/"
  },
  {
    icon: FaDiscord,
    label: "Discord Server",
    href: "https://discord.gg/zu6bWjCXb"
  },
  {
    icon: Mail,
    label: "andre.pr.official23@gmail.com",
    href: "mailto:andre.pr.official23@gmail.com"
  },
  {
    icon: MessageCircle,
    label: "+55 82 99174-8333",
    href: "https://wa.me/558299174833"
  }
];

export default function PortfolioPage() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap");

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #050505;
          color: white;
          font-family: "Manrope", sans-serif;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }
      `}</style>

      <div className="min-h-screen bg-[#050505] text-white overflow-hidden relative">

        {/* BACKGROUND VIDEO */}

        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          >
            <source src="/background/BG.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#050505_100%)]" />
        </div>

        {/* CONTENT */}

        <div className="relative z-10">

          {/* NAV */}

          <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-7 flex items-center justify-between mix-blend-difference">

            <span className="text-[11px] uppercase tracking-[0.35em] font-semibold">
              ANDREMOGRAPH
            </span>

            <a
              href="#contact"
              className="text-[11px] uppercase tracking-[0.35em] text-white/50 hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* MAIN */}

          <main className="w-full flex flex-col items-center">

            {/* HERO */}

            <section className="w-full max-w-[1280px] px-6 md:px-10 min-h-screen flex items-center">

              <div className="w-full grid lg:grid-cols-[1fr_420px] items-center gap-16">

                {/* LEFT */}

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="max-w-[720px]"
                >
                  <span className="text-[11px] uppercase tracking-[0.35em] text-white/35 block mb-8">
                    Motion Designer — Brazil
                  </span>

                  <h1 className="text-[54px] md:text-[82px] leading-[0.9] tracking-[-0.07em] font-medium">
                    Motion Design
                    <br />
                    <span className="text-white/30">
                      & Direção Visual
                    </span>
                  </h1>

                  <p className="mt-8 max-w-[520px] text-white/45 text-[15px] leading-relaxed">
                    Motion design e edição cinematográfica
                    com foco em atmosfera, ritmo e presença visual.
                  </p>
                </motion.div>

                {/* RIGHT */}

                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="w-full flex flex-col items-center"
                >

                  {/* PROFILE */}

                  <div className="w-full max-w-[400px] aspect-[4/5] rounded-[36px] overflow-hidden border border-white/10 bg-black/30 backdrop-blur-sm">

                    <img
                      src="/about/perfil.jpg"
                      alt="Andre"
                      className="w-full h-full object-cover grayscale-[5%]"
                    />
                  </div>

                  {/* CONTACT AREA */}

                  <div className="flex items-center justify-center gap-6 mt-8">

                    {/* TEXT + ARROW */}

                    <div className="flex items-center gap-3">

                      <span className="text-[11px] uppercase tracking-[0.35em] text-white/40">
                        Contact
                      </span>

                      <motion.div
                        animate={{
                          x: [0, 6, 0],
                          opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <ArrowRight
                          size={16}
                          className="text-[#f3dfb0]"
                        />
                      </motion.div>
                    </div>

                    {/* ICONS */}

                    <div className="flex items-center justify-center gap-4">

                      {CONTACTS.map((contact, index) => {
                        const Icon = contact.icon;

                        return (
                          <a
                            key={index}
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative"
                          >

                            {/* TOOLTIP */}

                            <div className="absolute left-1/2 -translate-x-1/2 bottom-[84px] opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-50">

                              <div className="px-6 py-4 rounded-[18px] border border-[#C5A059]/20 bg-[#C5A059]/10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.65)] whitespace-nowrap min-w-[190px] text-center">

                                <span className="text-[12px] text-[#f3dfb0] tracking-wide font-medium">
                                  {contact.label}
                                </span>
                              </div>
                            </div>

                            {/* ICON */}

                            <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl flex items-center justify-center text-white/70 group-hover:text-[#f3dfb0] group-hover:border-[#C5A059]/30 group-hover:bg-[#C5A059]/10 transition-all duration-300 group-hover:scale-105">

                              <Icon size={22} />
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* FEATURED */}

            <section className="w-full max-w-[1280px] px-6 md:px-10 pb-36 space-y-28">

              {FEATURED_VIDEOS.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 70 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
                  className={`
                    w-full
                    grid
                    lg:grid-cols-[1fr_420px]
                    gap-14
                    items-center
                    ${
                      index % 2 !== 0
                        ? "lg:[&>*:first-child]:order-2"
                        : ""
                    }
                  `}
                >

                  <div
                    onClick={() => setSelectedVideo(video)}
                    className="group relative w-full aspect-video rounded-[34px] overflow-hidden cursor-pointer bg-[#0B0B0B]"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                      alt={video.title}
                      onError={(e) => {
                        e.currentTarget.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                      }}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.02]"
                    />

                    <div className="absolute inset-0 bg-black/20" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                      <div className="w-20 h-20 rounded-full bg-black/50 backdrop-blur-xl border border-white/15 flex items-center justify-center">
                        <Play size={26} fill="white" className="ml-1" />
                      </div>
                    </div>
                  </div>

                  <div className="max-w-[420px]">
                    <span className="text-[11px] uppercase tracking-[0.35em] text-white/35 block mb-5">
                      {video.category}
                    </span>

                    <h2 className="text-4xl md:text-6xl leading-[0.95] tracking-[-0.05em] font-medium">
                      {video.title}
                    </h2>

                    <p className="mt-7 text-white/45 leading-relaxed text-[15px]">
                      {video.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </section>

            {/* GRID */}

            <section className="w-full max-w-[1280px] px-6 md:px-10 pb-40">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {GRID_VIDEOS.map((video) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    onClick={() => setSelectedVideo(video)}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-[16/10] rounded-[30px] overflow-hidden bg-[#0A0A0A]">

                      <img
                        src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover grayscale-[8%] opacity-85 transition-all duration-700 group-hover:scale-[1.02] group-hover:opacity-100"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                      <div className="absolute bottom-7 left-7">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/35 block mb-2">
                          {video.category}
                        </span>

                        <h3 className="text-[30px] tracking-[-0.04em] font-medium">
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

        {/* MODAL */}

        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
            >
              <div
                className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
                onClick={() => setSelectedVideo(null)}
              />

              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-6 right-6 z-20 text-white/50 hover:text-white transition"
              >
                <X size={34} />
              </button>

              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="relative w-full max-w-7xl aspect-video rounded-[32px] overflow-hidden bg-black border border-white/10"
              >
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={selectedVideo.title}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}