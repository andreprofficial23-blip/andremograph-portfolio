"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Instagram, Play, X } from "lucide-react";

type Category = "Brand" | "Motion" | "Cinematic" | "Gaming" | "UI";
type Project = {
  id: string;
  title: string;
  category: Category;
  description?: string;
  youtubeId?: string;
  localVideo?: string;
  poster?: string;
};

const featured: Project[] = [
  { id: "visuals-brand", title: "Visuals — Brand", category: "Brand", youtubeId: "JeLV_HljZas", description: "Direção visual com foco em ritmo, presença e identidade estética." },
  { id: "dollar-visual", title: "Dollar Visual", category: "Motion", youtubeId: "iOSwIbBcSE0", description: "Motion design com narrativa financeira e tipografia em movimento." },
  { id: "edit-narrative", title: "Edit — Narrative", category: "Cinematic", youtubeId: "O4nTVAfoxKI", description: "Edição cinematográfica guiada por atmosfera e composição." },
  { id: "edit-competitive", title: "Edit — Competitive", category: "Gaming", youtubeId: "LO9EnykVlBg", description: "Edição competitiva construída para intensidade e impacto." },
];

const moreProjects: Project[] = [
  { id: "2d-typography", title: "Typography in Motion", category: "Motion", localVideo: "/videos-web/2d-typography.mp4", poster: "/thumbnails/2d-typography.jpg" },
  { id: "2d-motion-logo", title: "Logo in Motion", category: "Motion", localVideo: "/videos-web/2d-motion-logo.mp4", poster: "/thumbnails/2d-motion-logo.jpg" },
  { id: "2d-jornada-ceo", title: "Jornada CEO", category: "Motion", localVideo: "/videos-web/2d-jornada-ceo.mp4", poster: "/thumbnails/2d-jornada-ceo.jpg" },
  { id: "2d-ai-doping", title: "AI Doping", category: "Motion", localVideo: "/videos-web/2d-ai-doping.mp4", poster: "/thumbnails/2d-ai-doping.jpg" },
  { id: "ui-spotify", title: "Spotify Interface", category: "UI", localVideo: "/videos-web/ui-spotify.mp4", poster: "/thumbnails/ui-spotify.jpg" },
  { id: "ui-system-update", title: "System Update", category: "UI", localVideo: "/videos-web/ui-system-update.mp4", poster: "/thumbnails/ui-system-update.jpg" },
  { id: "brawl-guia", title: "Brawl Stars — Guia", category: "Gaming", localVideo: "/videos-web/brawl-guia.mp4", poster: "/thumbnails/brawl-guia.jpg" },
  { id: "brawl-mundial-p2", title: "Brawl Stars — Mundial", category: "Gaming", localVideo: "/videos-web/brawl-mundial-p2.mp4", poster: "/thumbnails/brawl-mundial-p2.jpg" },
  { id: "visuals-atmosphere", title: "Visuals — Atmosphere", category: "Motion", youtubeId: "oK1p72YO2pw" },
  { id: "motion-typography", title: "Motion — Typography", category: "Motion", youtubeId: "M0OcyKCJhYs" },
  { id: "narrative-study", title: "Edit — Narrative Study", category: "Cinematic", youtubeId: "xpYasagUJAs" },
  { id: "motion-minimal", title: "Motion — Minimal", category: "Motion", youtubeId: "q7jkRt0XXPY" },
  { id: "visuals-competitive", title: "Visuals — Competitive", category: "Gaming", youtubeId: "u98UHtQWVNA" },
  { id: "competitive-study", title: "Edit — Competitive Study", category: "Gaming", youtubeId: "n2OiJBRhzOU" },
  { id: "motion-competitive", title: "Motion — Competitive", category: "Gaming", youtubeId: "LK1cKH6xJvY" },
  { id: "visuals-gaming", title: "Visuals — Gaming", category: "Gaming", youtubeId: "AKuQB0DLdoY" },
  { id: "intro-performance", title: "Intro — Performance", category: "Gaming", youtubeId: "3KPQzNRwH9Q" },
];

const categories = ["Todos", "Motion", "Cinematic", "Gaming", "UI"] as const;
const instagram = "https://www.instagram.com/andremograph/";

function ProjectImage({ project, priority = false }: { project: Project; priority?: boolean }) {
  const src = project.poster ?? `https://i.ytimg.com/vi/${project.youtubeId}/hqdefault.jpg`;
  return <Image src={src} alt="" fill sizes="(max-width: 900px) 100vw, 65vw" priority={priority} unoptimized={!!project.youtubeId} />;
}

export default function PortfolioPage() {
  const [category, setCategory] = useState<(typeof categories)[number]>("Todos");
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const filtered = category === "Todos" ? moreProjects : moreProjects.filter((project) => project.category === category);
  const shown = showAll || category !== "Todos" ? filtered : filtered.slice(0, 6);

  useEffect(() => {
    if (!selected) return;
    const priorFocus = document.activeElement as HTMLElement | null;
    const priorOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "Tab") {
        const nodes = document.querySelectorAll<HTMLElement>("[data-project-modal] button, [data-project-modal] a, [data-project-modal] video[controls], [data-project-modal] iframe");
        if (!nodes.length) return;
        const first = nodes[0], last = nodes[nodes.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = priorOverflow; window.removeEventListener("keydown", onKey); priorFocus?.focus(); };
  }, [selected]);

  return (
    <div className="site">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Andremograph, voltar ao início">ANDRÉ<span>MO</span>GRAPH<span className="brand-dot">.</span></a>
        <nav aria-label="Navegação principal"><a href="#work">Trabalhos</a><a href="#services">Serviços</a><a href="#about">Sobre</a><a href="#contact">Contato</a></nav>
        <a className="header-cta" href={instagram} target="_blank" rel="noopener noreferrer">Iniciar projeto <ArrowUpRight size={16} aria-hidden="true" /></a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-media" aria-hidden="true"><video autoPlay muted loop playsInline preload="none" poster="/background/hero-poster.jpg"><source src="/background/hero-loop.mp4" type="video/mp4" /></video></div>
          <div className="hero-inner page-width">
            <p className="eyebrow"><span className="status-dot" />Motion designer e editor · Brasil</p>
            <h1 id="hero-title">MOTION PARA<br /><em>HISTÓRIAS QUE MARCAM.</em></h1>
            <div className="hero-bottom"><p>Motion design, direção visual e edição para marcas e criadores que querem comunicar com mais impacto.</p><div className="hero-actions"><a className="button button-gold" href="#work">Ver trabalhos <ArrowDownRight size={18} aria-hidden="true" /></a><a className="button button-outline" href={instagram} target="_blank" rel="noopener noreferrer">Solicitar orçamento <ArrowUpRight size={18} aria-hidden="true" /></a></div></div>
          </div>
        </section>

        <section className="section page-width" id="work" aria-labelledby="work-heading">
          <div className="section-heading"><div><p className="eyebrow">01 / Portfólio</p><h2 id="work-heading">Trabalhos selecionados<span className="brand-dot">.</span></h2></div><p>Projetos de direção visual, motion e edição. Clique para assistir.</p></div>
          <div className="featured-list">{featured.map((project, index) => <article className="featured" key={project.id}><button type="button" className="featured-media project-button" onClick={() => setSelected(project)} aria-label={`Assistir ${project.title}`}><ProjectImage project={project} priority={index === 0} /><span className="play-icon"><Play fill="currentColor" size={22} aria-hidden="true" /></span></button><div className="featured-copy"><span className="eyebrow">{String(index + 1).padStart(2, "0")} / {project.category}</span><h3>{project.title}</h3><p>{project.description}</p><button className="text-button" type="button" onClick={() => setSelected(project)}>Assistir projeto <ArrowUpRight size={18} aria-hidden="true" /></button></div></article>)}</div>
        </section>

        <section className="section other-section page-width" id="projects" aria-labelledby="projects-heading"><div className="section-heading"><div><p className="eyebrow">02 / Explorar</p><h2 id="projects-heading">Mais trabalhos<span className="brand-dot">.</span></h2></div><p>Uma seleção de experimentos, interfaces e edições.</p></div><div className="filters" role="group" aria-label="Filtrar projetos">{categories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div><div className="project-grid">{shown.map((project) => <button type="button" className="project-tile project-button" key={project.id} onClick={() => setSelected(project)} aria-label={`Assistir ${project.title}`}><span className="tile-media"><ProjectImage project={project} /><span className="tile-arrow"><ArrowUpRight size={22} aria-hidden="true" /></span></span><span className="tile-info"><span>{project.category}</span><strong>{project.title}</strong></span></button>)}</div>{category === "Todos" && !showAll && <button className="show-more" type="button" onClick={() => setShowAll(true)}>Ver todos os projetos <ArrowDownRight size={18} aria-hidden="true" /></button>}</section>

        <section className="about-section" id="about" aria-labelledby="about-heading"><div className="about-inner page-width"><div className="portrait"><Image src="/about/perfil.jpg" alt="André, motion designer" fill sizes="(max-width: 600px) 100vw, 40vw" /></div><div className="about-copy"><p className="eyebrow">03 / Sobre</p><h2 id="about-heading">Ideias em movimento<span className="brand-dot">.</span></h2><p>Sou André, motion designer e editor no Brasil. Trabalho com animação, narrativa visual e edição para dar ritmo e personalidade a cada projeto.</p><a className="text-button" href="#contact">Vamos conversar <ArrowUpRight size={18} aria-hidden="true" /></a></div></div></section>

        <section className="section process-section page-width" id="services" aria-labelledby="services-heading"><div className="section-heading"><div><p className="eyebrow">04 / Serviços</p><h2 id="services-heading">O que posso criar<span className="brand-dot">.</span></h2></div></div><div className="process-grid"><article><span>01 /</span><h3>Motion design</h3><p>Animações, tipografia e identidade em movimento para marcas e campanhas.</p></article><article><span>02 /</span><h3>Edição de vídeo</h3><p>Ritmo e narrativa para conteúdo social, vídeos institucionais e peças digitais.</p></article><article><span>03 /</span><h3>Direção visual</h3><p>Uma linguagem visual coerente da ideia ao acabamento final.</p></article></div></section>

        <section className="contact-section page-width" id="contact" aria-labelledby="contact-heading"><p className="eyebrow">05 / Contato</p><h2 id="contact-heading">VAMOS CRIAR<br /><em>JUNTOS.</em></h2><p>Tem um projeto em mente? Conte sua ideia pelo Instagram.</p><a className="button button-gold" href={instagram} target="_blank" rel="noopener noreferrer"><Instagram size={20} aria-hidden="true" /> Conversar pelo Instagram <ArrowUpRight size={18} aria-hidden="true" /></a></section>
      </main>

      <footer className="site-footer page-width"><a className="brand" href="#top">ANDRÉ<span>MO</span>GRAPH<span className="brand-dot">.</span></a><span>© {new Date().getFullYear()} André · Motion designer, Brasil</span><a href={instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a></footer>

      {selected && <div className="modal-backdrop" data-project-modal onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}><div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-heading"><div className="modal-heading"><div><span className="eyebrow">{selected.category}</span><h2 id="modal-heading">{selected.title}</h2></div><button ref={closeRef} type="button" onClick={() => setSelected(null)} aria-label="Fechar vídeo"><X size={24} /></button></div>{selected.youtubeId ? <iframe key={selected.id} title={selected.title} src={`https://www.youtube-nocookie.com/embed/${selected.youtubeId}?autoplay=1&rel=0`} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen /> : <video key={selected.id} src={selected.localVideo} poster={selected.poster} controls playsInline preload="metadata" aria-label={`Vídeo: ${selected.title}`} />}</div></div>}
    </div>
  );
}
