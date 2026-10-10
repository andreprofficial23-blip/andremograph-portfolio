import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import { colorStudies } from "./color-studies";
import { featured, type Project } from "./projects";

export const joseInstagram = "https://www.instagram.com/joseotavio.br/";

export function CaptureCredit() {
  return <span className="capture-credit">Captação: <a href={joseInstagram} target="_blank" rel="noopener noreferrer">José Otávio ↗</a></span>;
}

export default function Collaboration({ onWatch }: { onWatch: (project: Project) => void }) {
  const sanvit = featured.find(project => project.id === "jose-otavio");
  return <section className="collaboration-section page-width" id="collaboration" aria-labelledby="collaboration-heading">
    <div className="collaboration-panel">
      <div className="collaboration-intro">
        <a href={joseInstagram} target="_blank" rel="noopener noreferrer" aria-label="Conhecer José Otávio no Instagram" className="collaboration-portrait">
          <Image src="/about/jose-otavio-portrait-4k.jpg" alt="José Otávio" fill sizes="(max-width: 600px) 96px, 152px" quality={90} />
        </a>
        <div><p className="eyebrow">Captação + pós-produção</p><h2 id="collaboration-heading">Vídeos em colaboração<br />com José Otávio.</h2><a className="collaboration-name" href={joseInstagram} target="_blank" rel="noopener noreferrer">Filmmaker & publicitário <ArrowUpRight size={14} aria-hidden="true" /></a><p className="collaboration-description">O olhar dele na captação. O meu na edição, cor e motion.</p></div>
      </div>
      <div className="collaboration-projects">
        <div className="collaboration-clients">{colorStudies.filter(study => study.capturedByJose).map(study => <button key={study.id} type="button" onClick={() => onWatch({ id: study.id, title: study.title, category: "Edição", subtitle: "Captação: José Otávio · Pós-produção: André", description: study.description, coverTitle: study.title, coverLabel: study.id, video: study.video, poster: study.poster, format: "vertical", capturedByJose: true })} aria-label={`Assistir colaboração: ${study.id === "daiane" ? "Daiane" : study.id === "bruna" ? "Bruna" : "Alice"}`}>
          <span className="collaboration-thumbnail"><Image src={study.poster} alt="" fill sizes="(max-width: 600px) 28vw, 140px" /><span><Play size={16} fill="currentColor" aria-hidden="true" /></span></span><strong>{study.id === "daiane" ? "Daiane" : study.id === "bruna" ? "Bruna" : "Alice"}</strong>
        </button>)}</div>
        <div className="collaboration-more">{sanvit && <button type="button" onClick={() => onWatch(sanvit)}>Sanvit <ArrowUpRight size={14} aria-hidden="true" /></button>}<a href="#oceanus">Oceanus <ArrowUpRight size={14} aria-hidden="true" /></a></div>
      </div>
    </div>
  </section>;
}
