"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ColorComparison from "./color-comparison";
import { colorStudies } from "./color-studies";
import { testimonials } from "./testimonials";
import { ArrowDownRight, ArrowUpRight, Play, X } from "lucide-react";

import { featured, moreProjects, instagram, projectContact, type Project } from "./projects";

function ProjectImage({ project, priority = false, tile = false }: { project: Project; priority?: boolean; tile?: boolean }) {
  return <Image src={project.poster} alt="" fill sizes={tile ? "(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" : "(max-width: 900px) 100vw, 65vw"} priority={priority} />;
}

export default function PortfolioPage() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [filter, setFilter] = useState("Todos");
  const [expanded, setExpanded] = useState(false);
  const filtered = filter === "Todos" ? moreProjects : [...featured, ...moreProjects].filter(p => p.category === filter);
  const visible = expanded ? filtered : filtered.slice(0, 6);
  const [showContact, setShowContact] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const work = document.getElementById("work");
    const contact = document.getElementById("contact");
    const updateContact = () => setShowContact(!!work && !!contact && work.getBoundingClientRect().top < 120 && contact.getBoundingClientRect().top > window.innerHeight);
    updateContact();
    window.addEventListener("scroll", updateContact, { passive: true });
    window.addEventListener("resize", updateContact);
    return () => { window.removeEventListener("scroll", updateContact); window.removeEventListener("resize", updateContact); };
  }, []);

  useEffect(() => {
    if (!selected) return;
    const priorFocus = document.activeElement as HTMLElement | null;
    const priorOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "Tab") {
        const nodes = document.querySelectorAll<HTMLElement>("[data-project-modal] button, [data-project-modal] a, [data-project-modal] video[controls]");
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
        <nav aria-label="Navegação principal"><a href="#work">Trabalhos</a><a href="#projects" onClick={() => { setFilter("Casamentos"); setExpanded(false); }}>Casamentos</a><a href="#about">Sobre</a><a href="#services">Serviços</a>{colorStudies.length > 0 && <a href="#color">Color grading</a>}</nav>
        <a className="header-cta" href={projectContact()} target="_blank" rel="noopener noreferrer">Vamos conversar <ArrowUpRight size={16} aria-hidden="true" /></a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-inner page-width">
            <p className="eyebrow hero-kicker"><span className="status-dot" />André · Motion designer & editor</p>
            <h1 id="hero-title">VÍDEOS QUE DÃO<br /><em>VONTADE DE VER.</em></h1>
            <div className="hero-bottom"><p>Eu sou André. Dou ritmo às suas imagens e movimento às suas ideias. Edição e motion para apresentar sua marca com personalidade.</p><div className="hero-actions"><a className="button button-gold" href="#work">Ver trabalhos <ArrowDownRight size={18} aria-hidden="true" /></a><a className="button button-outline" href={projectContact()} target="_blank" rel="noopener noreferrer">Falar sobre um projeto <ArrowUpRight size={18} aria-hidden="true" /></a></div></div>
            <div className="hero-tail" aria-hidden="true"><span>Imagem. Ritmo. Emoção.</span><span>Role para explorar ↓</span></div>
          </div>
        </section>

        <section className="section page-width" id="work" aria-labelledby="work-heading">
          <div className="section-heading"><div><p className="eyebrow">01 / Em destaque</p><h2 id="work-heading">Seu próximo vídeo<br /><em>começa com uma ideia.</em></h2></div><p>Quatro projetos que mostram meu olhar. Assista e conheça o que podemos criar juntos.</p></div>
          <div className="featured-list">{featured.map((project, index) => <article className={`featured ${project.format ? "featured-portrait" : ""}`} key={project.id}><button type="button" className={"featured-media project-button " + (project.format === "vertical" ? "media-vertical" : "")} onClick={() => setSelected(project)} aria-label={`Assistir ${project.title}`}><ProjectImage project={project} priority={index === 0} /><span className="play-icon"><Play fill="currentColor" size={22} aria-hidden="true" /></span><span className="cover-copy"><small>{project.coverLabel}</small></span></button><div className="featured-copy"><span className="eyebrow">FILME {String(index + 1).padStart(2, "0")} / {project.category}</span><h3>{project.title}</h3><p>{project.subtitle}</p><button className="text-button" type="button" onClick={() => setSelected(project)}>Assistir projeto <ArrowUpRight size={18} aria-hidden="true" /></button></div></article>)}</div>
        </section>

        <section className="section other-section page-width" id="projects" aria-labelledby="projects-heading"><div className="section-heading"><div><p className="eyebrow">02 / Escolha seu estilo</p><h2 id="projects-heading">Mais trabalhos<span className="brand-dot">.</span></h2></div><p>Marcas, histórias reais e ideias que ganham movimento.</p></div><div className="project-filters" aria-label="Filtrar trabalhos">{["Todos", "Edição", "Motion", "Casamentos", "Gaming"].map(item => <button type="button" key={item} aria-pressed={filter === item} onClick={() => { setFilter(item); setExpanded(false); }}>{item}</button>)}</div><div className="project-grid">{visible.map((project) => <button type="button" className="project-tile project-button" key={project.id} onClick={() => setSelected(project)} aria-label={`Assistir ${project.title}`}><span className={`tile-media ${project.format === "vertical" ? "tile-vertical" : ""}`}><ProjectImage project={project} tile /><span className="cover-copy"><small>{project.coverLabel}</small></span><span className="tile-arrow"><Play fill="currentColor" size={17} aria-hidden="true" /></span></span><span className="tile-info"><span>{project.category}</span><strong>{project.title}</strong></span></button>)}</div>{filtered.length > 6 && <button className="button button-outline show-more" type="button" onClick={() => setExpanded(!expanded)}>{expanded ? "Mostrar menos" : "Ver todos os trabalhos"}</button>}</section>

        {colorStudies.length > 0 && <section className="section page-width color-section" id="color" aria-labelledby="color-heading"><div className="section-heading"><div><p className="eyebrow">Color grading</p><h2 id="color-heading">A mesma cena.<br /><em>Outra atmosfera.</em></h2></div><p>Deslize para comparar a imagem original com o tratamento de cor.</p></div>{colorStudies.map(study => <ColorComparison key={study.id} study={study} />)}</section>}

        <section className="about-section" id="about" aria-labelledby="about-heading"><div className="about-inner page-width"><div className="portrait"><Image src="/about/andre-portrait-bw.jpg" alt="André, motion designer" fill sizes="(max-width: 600px) 100vw, 40vw" /></div><div className="about-copy"><p className="eyebrow">03 / Por trás da imagem</p><h2 id="about-heading">Prazer, André.<br /><em>Arte é meu ponto de partida.</em></h2><p>Animes, séries e cinema sempre fizeram parte da minha vida. Gosto de um bom drama, de uma cena de ação e daqueles detalhes que fazem a gente sentir alguma coisa.</p><p>É desse lugar que vem meu olhar: combinar imagem, música e movimento para encontrar a personalidade de cada vídeo. Quero conhecer a sua ideia e dar forma a ela.</p><a className="text-button" href="#contact">Vamos criar algo juntos <ArrowUpRight size={18} aria-hidden="true" /></a></div></div></section>

        <section className="section process-section page-width" id="services" aria-labelledby="services-heading"><div className="section-heading"><div><p className="eyebrow">04 / O que faço</p><h2 id="services-heading">Da ideia à imagem<span className="brand-dot">.</span></h2></div><p>Uma direção visual clara para comunicar e emocionar.</p></div><div className="process-grid"><article><span>01 /</span><h3>Edição de vídeo</h3><p>Narrativa, ritmo e acabamento para vídeos que sustentam a atenção.</p></article><article><span>02 /</span><h3>Motion design</h3><p>Tipografia, animação e identidades que ganham vida na tela.</p></article><article><span>03 /</span><h3>Direção visual</h3><p>Escolhas de imagem e movimento que dão personalidade a cada projeto.</p></article></div></section>

        {testimonials.length > 0 && <section className="section page-width testimonials" aria-label="Depoimentos de clientes"><p className="eyebrow">Quem criou comigo</p>{testimonials.map(item => <figure key={item.name + item.context}><blockquote>“{item.quote}”</blockquote><figcaption><strong>{item.name}</strong><span>{item.context}</span></figcaption></figure>)}</section>}

        <section className="contact-section page-width" id="contact" aria-labelledby="contact-heading"><p className="eyebrow">05 / Vamos conversar</p><h2 id="contact-heading">SUA IDEIA MERECE<br /><em>SAIR DO PAPEL.</em></h2><p>Me conta o que você tem em mente. A gente conversa sobre o vídeo, os prazos e o melhor caminho para criar.</p><a className="button button-gold" href={projectContact()} target="_blank" rel="noopener noreferrer">Conversar pelo WhatsApp <ArrowUpRight size={18} aria-hidden="true" /></a><div className="social-links"><a href={instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="https://discord.gg/x5mwcHrQv" target="_blank" rel="noopener noreferrer">Discord ↗</a><a href="mailto:andre.pr.official23@gmail.com">E-mail ↗</a></div></section>
      </main>

      <footer className="site-footer page-width"><a className="brand" href="#top">ANDRÉ<span>MO</span>GRAPH<span className="brand-dot">.</span></a><span>© {new Date().getFullYear()} André · Motion designer & editor</span><a href={projectContact()} target="_blank" rel="noopener noreferrer">WhatsApp ↗</a></footer>

      {showContact && !selected && <a className="mobile-contact" href={projectContact()} target="_blank" rel="noopener noreferrer">Conversar sobre meu vídeo <ArrowUpRight size={18} aria-hidden="true" /></a>}

      {selected && <div className="modal-backdrop" data-project-modal onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}><div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-heading"><div className="modal-heading"><span className="eyebrow">ANDRÉ / PORTFÓLIO</span><button ref={closeRef} type="button" onClick={() => setSelected(null)} aria-label="Fechar vídeo"><X size={24} /></button></div><video className={selected.format ? "video-portrait" : ""} key={selected.id} src={selected.video} poster={selected.poster} controls playsInline autoPlay preload="metadata" aria-label={`Vídeo: ${selected.title}`} /><div className="modal-copy"><span className="eyebrow">{selected.subtitle}</span><h2 id="modal-heading">{selected.title}</h2><p className="project-role"><span>Minha participação</span>{selected.category === "Motion" ? "Motion design · Animação" : "Edição · Motion · Color grading"}</p><p>{selected.description}</p>{selected.note && <p className="project-note">{selected.note}</p>}<a className="button button-gold" href={projectContact(selected)} target="_blank" rel="noopener noreferrer">Quero um vídeo assim <ArrowUpRight size={18} aria-hidden="true" /></a></div></div></div>}
    </div>
  );
}


