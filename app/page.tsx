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

  // NOVO HERO ADICIONADO
  {
    id: "hero-2",
    title: "Motion — Currency (Dollar Visual)",
    category: "Motion",
    youtubeId: "iOSwIbBcSE0",
    description:
      "Motion design explorando narrativa financeira, ritmo e impacto visual.",
  },

  {
    id: "hero-3",
    title: "Edit — Narrative",
    category: "Cinematic",
    youtubeId: "O4nTVAfoxKI",
    description:
      "Narrativa visual cinematográfica guiada por atmosfera e composição.",
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
    title: "Visuals — Gaming",
    category: "Gaming",
    youtubeId: "AKuQB0DLdoY",
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
                    Motion design e edição cinematográfica com foco em atmosfera, ritmo e presença visual.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="w-full flex flex-col items-center"
                >
                  <div className="w-full max-w-[400px] aspect-[4/5] rounded-[36px] overflow-hidden border border-white/10 bg-black/30 backdrop-blur-sm">
                    <img
                      src="/about/perfil.jpg"
                      alt="Andre"
                      className="w-full h-full object-cover grayscale-[5%]"
                    />
                  </div>

                  <div id="contact" className="flex items-center justify-center gap-6 mt-8">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] uppercase tracking-[0.35em] text-white/40">
                        Contact
                      </span>

                      <motion.div
                        animate={{ x: [0, 6, 0], opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.8, repeat: Infinity }}
                      >
                        <ArrowRight size={16} className="text-[#f3dfb0]" />
                      </motion.div>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                      {CONTACTS.map((contact, index) => {
                        const Icon = contact.icon;
                        return (
                          <a key={index} href={contact.href}>
                            <div className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center">
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

              {FEATURED_VIDEOS.map((video) => (
                <motion.div
                  key={video.id}
                  className="grid lg:grid-cols-[1fr_420px] gap-14 items-center"
                >

                  <div
                    onClick={() => setSelectedVideo(video)}
                    className="group relative w-full aspect-video rounded-[34px] overflow-hidden cursor-pointer bg-[#0B0B0B]"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="max-w-[420px]">
                    <span className="text-[11px] uppercase tracking-[0.35em] text-white/35 block mb-5">
                      {video.category}
                    </span>

                    <h2 className="text-4xl md:text-6xl font-medium">
                      {video.title}
                    </h2>

                    <p className="mt-7 text-white/45">
                      {video.description}
                    </p>
                  </div>

                </motion.div>
              ))}

            </section>

          </main>
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
              <div
                className="absolute inset-0 bg-black/90"
                onClick={() => setSelectedVideo(null)}
              />

              <motion.div className="relative w-full max-w-6xl aspect-video">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                  className="w-full h-full"
                  allow="autoplay; fullscreen"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </>
  );
}