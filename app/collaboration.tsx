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
          <Image src="/about/jose-otavio-portrait-enviada.jpg" alt="José Otávio" fill sizes="(max-width: 600px) 96px, 152px" quality={90} />
        </a>
        <div><p className="eyebrow">Captação + pós-produção</p><h2 id="collaboration-heading">Vídeos em colaboração<br />com José Otávio.</h2><a className="collaboration-name" href={joseInstagram} target="_blank" rel="noopener noreferrer">Filmmaker & publicitário <ArrowUpRight size={14} aria-hidden="true" /></a><p className="collaboration-description">José atende a Oceanus na produção audiovisual. Neste projeto, ele assina a captação e eu, a edição, cor e motion.</p></div>
      </div>
      <div className="collaboration-projects">
        <a href="#oceanus" className="collaboration-oceanus" aria-label="Ver projeto Oceanus — D2C Summit">
          <span className="collaboration-oceanus-cover"><Image src="/videos-web/oceanus-d2c-summit/aftermovie-matchcut-bones.jpg" alt="Match cut dos bonés no aftermovie Oceanus" fill sizes="(max-width: 1000px) 460px, 40vw" /><span><Play size={17} fill="currentColor" aria-hidden="true" /></span></span>
          <span className="collaboration-oceanus-caption"><span><small>OCEANUS · CLIENTE DO JOSÉ</small><strong>D2C Summit</strong></span><ArrowUpRight size={22} aria-hidden="true" /></span>
        </a>
        <div className="collaboration-more" aria-label="Outras colaborações">{sanvit && <button type="button" onClick={() => onWatch(sanvit)}>Sanvit</button>}{colorStudies.filter(study => study.capturedByJose).map(study => <button key={study.id} type="button" onClick={() => onWatch({ id: study.id, title: study.title, category: "Edição", subtitle: "Captação: José Otávio · Pós-produção: André", description: study.description, coverTitle: study.title, coverLabel: study.id, video: study.video, poster: study.poster, format: "vertical", capturedByJose: true })}>{study.id === "daiane" ? "Daiane" : study.id === "bruna" ? "Bruna" : "Alice"}</button>)}</div>
      </div>
    </div>
  </section>;
}
