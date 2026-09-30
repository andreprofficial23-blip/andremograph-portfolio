"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Instagram, Play, X } from "lucide-react";

type Project = {
  id: string;
  title: string;
  category: string;
  description?: string;
  video: string;
  poster: string;
  format?: "portrait" | "vertical";
};

const featured: Project[] = [
  { id: "jose-otavio", title: "José Otávio", category: "Edição audiovisual", description: "Uma história conduzida por voz, presença e ritmo. Cada corte existe para manter você dentro da cena.", video: "/videos-web/jose-otavio.mp4", poster: "/thumbnails/jose-otavio.jpg" },
  { id: "adapta", title: "Adapta", category: "Edição e narrativa", description: "Imagem, palavra e movimento em uma peça de ritmo próprio, feita para prender a atenção até o último segundo.", video: "/videos-web/adapta.mp4", poster: "/thumbnails/adapta.jpg", format: "portrait" },
];

const moreProjects: Project[] = [
  { id: "2d-typography", title: "Tipografia em movimento", category: "Motion design", video: "/videos-web/2d-typography.mp4", poster: "/thumbnails/2d-typography.jpg" },
  { id: "2d-motion-logo", title: "Logo em movimento", category: "Motion design", video: "/videos-web/2d-motion-logo.mp4", poster: "/thumbnails/2d-motion-logo.jpg" },
  { id: "ui-spotify", title: "Spotify Interface", category: "Interface", video: "/videos-web/ui-spotify.mp4", poster: "/thumbnails/ui-spotify.jpg" },
  { id: "ui-system-update", title: "System Update", category: "Interface", video: "/videos-web/ui-system-update.mp4", poster: "/thumbnails/ui-system-update.jpg" },
  { id: "brawl-mundial-p2", title: "Brawl Stars — Mundial", category: "Gaming", video: "/videos-web/brawl-mundial-p2.mp4", poster: "/thumbnails/brawl-mundial-p2.jpg" },
  { id: "brawl-guia", title: "Brawl Stars — Guia", category: "Gaming", video: "/videos-web/brawl-guia.mp4", poster: "/thumbnails/brawl-guia.jpg", format: "vertical" },
];

const instagram = "https://www.instagram.com/andremograph/";

function ProjectImage({ project, priority = false }: { project: Project; priority?: boolean }) {
  return <Image src={project.poster} alt="" fill sizes="(max-width: 900px) 100vw, 65vw" priority={priority} />;
}

export default function PortfolioPage() {
  const [selected, setSelected] = useState<Project | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!selected) return;
    const priorFocus = document.activeElement as HTMLElement | null;
    const priorOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "Tab") {
        const nodes = document.querySelectorAll<HTMLElement>("[data-project-modal] button, [data-project-modal] video[controls]");
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
        <nav aria-label="Navegação principal"><a href="#work">Trabalhos</a><a href="#about">Sobre</a><a href="#services">Serviços</a></nav>
        <a className="header-cta" href={instagram} target="_blank" rel="noopener noreferrer">Vamos conversar <ArrowUpRight size={16} aria-hidden="true" /></a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-inner page-width">
            <p className="eyebrow hero-kicker"><span className="status-dot" />André · Motion designer & editor</p>
            <h1 id="hero-title">HISTÓRIAS<br />FEITAS PARA <em>SENTIR.</em></h1>
            <div className="hero-bottom"><p>Motion design e edição com o olhar de quem sempre encontrou na arte uma forma de sentir mais. Para ideias que merecem ficar na memória.</p><div className="hero-actions"><a className="button button-gold" href="#work">Ver trabalhos <ArrowDownRight size={18} aria-hidden="true" /></a><a className="button button-outline" href={instagram} target="_blank" rel="noopener noreferrer">Falar sobre um projeto <ArrowUpRight size={18} aria-hidden="true" /></a></div></div>
            <div className="hero-tail" aria-hidden="true"><span>Imagem. Ritmo. Emoção.</span><span>Role para explorar ↓</span></div>
          </div>
        </section>

        <section className="section page-width" id="work" aria-labelledby="work-heading">
          <div className="section-heading"><div><p className="eyebrow">01 / Em destaque</p><h2 id="work-heading">Dois projetos,<br /><em>duas histórias.</em></h2></div><p>Comece por aqui. Os trabalhos que melhor traduzem o meu olhar.</p></div>
          <div className="featured-list">{featured.map((project, index) => <article className={`featured ${project.format === "portrait" ? "featured-portrait" : ""}`} key={project.id}><button type="button" className="featured-media project-button" onClick={() => setSelected(project)} aria-label={`Assistir ${project.title}`}><ProjectImage project={project} priority={index === 0} /><span className="play-icon"><Play fill="currentColor" size={22} aria-hidden="true" /></span><span className="media-label">ASSISTIR FILME <ArrowUpRight size={15} aria-hidden="true" /></span></button><div className="featured-copy"><span className="eyebrow">FILME {String(index + 1).padStart(2, "0")} / {project.category}</span><h3>{project.title}</h3><p>{project.description}</p><button className="text-button" type="button" onClick={() => setSelected(project)}>Assistir projeto <ArrowUpRight size={18} aria-hidden="true" /></button></div></article>)}</div>
        </section>

        <section className="section other-section page-width" id="projects" aria-labelledby="projects-heading"><div className="section-heading"><div><p className="eyebrow">02 / Arquivo visual</p><h2 id="projects-heading">Mais trabalhos<span className="brand-dot">.</span></h2></div><p>Pequenas histórias, identidades e experimentos em movimento.</p></div><div className="project-grid">{moreProjects.map((project) => <button type="button" className="project-tile project-button" key={project.id} onClick={() => setSelected(project)} aria-label={`Assistir ${project.title}`}><span className={`tile-media ${project.format === "vertical" ? "tile-vertical" : ""}`}><ProjectImage project={project} /><span className="tile-arrow"><ArrowUpRight size={22} aria-hidden="true" /></span></span><span className="tile-info"><span>{project.category}</span><strong>{project.title}</strong></span></button>)}</div></section>

        <section className="about-section" id="about" aria-labelledby="about-heading"><div className="about-inner page-width"><div className="portrait"><Image src="/about/perfil.jpg" alt="André, motion designer" fill sizes="(max-width: 600px) 100vw, 40vw" /></div><div className="about-copy"><p className="eyebrow">03 / Por trás da imagem</p><h2 id="about-heading">Sempre foi sobre<br /><em>sentir alguma coisa.</em></h2><p>Sempre amei animes, séries e filmes. Drama, romance, ação — cada gênero me mostrou uma maneira diferente de contar uma história. A arte virou minha forma de observar o mundo, e hoje levo esse olhar para a edição e o motion design.</p><p>Gosto de encontrar o ritmo certo, cuidar dos detalhes e criar imagens que fazem as pessoas parar, assistir e lembrar.</p><a className="text-button" href="#contact">Vamos criar algo juntos <ArrowUpRight size={18} aria-hidden="true" /></a></div></div></section>

        <section className="section process-section page-width" id="services" aria-labelledby="services-heading"><div className="section-heading"><div><p className="eyebrow">04 / O que faço</p><h2 id="services-heading">Da ideia à imagem<span className="brand-dot">.</span></h2></div><p>Uma direção visual clara para comunicar e emocionar.</p></div><div className="process-grid"><article><span>01 /</span><h3>Edição de vídeo</h3><p>Narrativa, ritmo e acabamento para vídeos que sustentam a atenção.</p></article><article><span>02 /</span><h3>Motion design</h3><p>Tipografia, animação e identidades que ganham vida na tela.</p></article><article><span>03 /</span><h3>Direção visual</h3><p>Escolhas de imagem e movimento que dão personalidade a cada projeto.</p></article></div></section>

        <section className="contact-section page-width" id="contact" aria-labelledby="contact-heading"><p className="eyebrow">05 / Seu próximo capítulo</p><h2 id="contact-heading">VAMOS FAZER<br /><em>ACONTECER.</em></h2><p>Tem uma ideia, uma marca ou uma história para contar? Me chama e vamos conversar sobre o projeto.</p><a className="button button-gold" href={instagram} target="_blank" rel="noopener noreferrer"><Instagram size={20} aria-hidden="true" /> Conversar pelo Instagram <ArrowUpRight size={18} aria-hidden="true" /></a></section>
      </main>

      <footer className="site-footer page-width"><a className="brand" href="#top">ANDRÉ<span>MO</span>GRAPH<span className="brand-dot">.</span></a><span>© {new Date().getFullYear()} André · Motion designer & editor</span><a href={instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a></footer>

      {selected && <div className="modal-backdrop" data-project-modal onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}><div className={`project-modal ${selected.format === "portrait" || selected.format === "vertical" ? "modal-portrait" : ""}`} role="dialog" aria-modal="true" aria-labelledby="modal-heading"><div className="modal-heading"><div><span className="eyebrow">{selected.category}</span><h2 id="modal-heading">{selected.title}</h2></div><button ref={closeRef} type="button" onClick={() => setSelected(null)} aria-label="Fechar vídeo"><X size={24} /></button></div><video key={selected.id} src={selected.video} poster={selected.poster} controls playsInline autoPlay preload="metadata" aria-label={`Vídeo: ${selected.title}`} /></div></div>}
    </div>
  );
}
