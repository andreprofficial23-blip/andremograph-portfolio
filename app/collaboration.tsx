import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import { colorStudies } from "./color-studies";

export const joseInstagram = "https://www.instagram.com/joseotavio.br/";

export function CaptureCredit() {
  return <span className="capture-credit">Captação: <a href={joseInstagram} target="_blank" rel="noopener noreferrer">José Otávio ↗</a></span>;
}

export default function Collaboration({ onChooseStudy }: { onChooseStudy: (id: string) => void }) {
  return <section className="collaboration-section page-width" id="collaboration" aria-labelledby="collaboration-heading">
    <div className="collaboration-panel">
      <div className="collaboration-intro">
        <a href={joseInstagram} target="_blank" rel="noopener noreferrer" aria-label="Conhecer José Otávio no Instagram" className="collaboration-portrait">
          <Image src="/about/jose-otavio-portrait-enviada.jpg" alt="José Otávio" fill sizes="(max-width: 600px) 96px, 152px" quality={90} />
        </a>
        <div><p className="eyebrow">Projetos em parceria</p><h2 id="collaboration-heading">Clientes em colaboração<br />com a captação do José.</h2><p className="collaboration-description">Minha edição, cor e motion, com a captação de José Otávio. Oceanus é cliente do José.</p><a className="collaboration-name" href={joseInstagram} target="_blank" rel="noopener noreferrer">José Otávio · Filmmaker <ArrowUpRight size={14} aria-hidden="true" /></a></div>
      </div>
      <div className="collaboration-projects">
        <div className="collaboration-clients">
          <a href="#oceanus" aria-label="Ver projeto Oceanus — D2C Summit"><span className="collaboration-thumbnail"><Image src="/videos-web/oceanus-d2c-summit/aftermovie-matchcut-bones.jpg" alt="" fill sizes="(max-width: 600px) 40vw, 140px" /><span><Play size={16} fill="currentColor" aria-hidden="true" /></span></span><strong>Oceanus</strong></a>
          {colorStudies.filter(study => study.capturedByJose).map(study => <a key={study.id} href="#color" onClick={() => onChooseStudy(study.id)} aria-label={`Ver projeto ${study.id === "daiane" ? "Daiane" : study.id === "bruna" ? "Bruna" : "Alice"}`}><span className="collaboration-thumbnail"><Image src={study.poster} alt="" fill sizes="(max-width: 600px) 40vw, 140px" /><span><Play size={16} fill="currentColor" aria-hidden="true" /></span></span><strong>{study.id === "daiane" ? "Daiane" : study.id === "bruna" ? "Bruna" : "Alice"}</strong></a>)}
        </div>
      </div>
    </div>
  </section>;
}
