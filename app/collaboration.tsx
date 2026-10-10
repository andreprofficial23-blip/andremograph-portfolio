import Image from "next/image";

export const joseInstagram = "https://www.instagram.com/joseotavio.br/";

export function CaptureCredit() {
  return <span className="capture-credit">Captação: <a href={joseInstagram} target="_blank" rel="noopener noreferrer">José Otávio ↗</a></span>;
}

export default function Collaboration() {
  return <aside className="collaboration" aria-label="Parceria de captação">
    <Image src="/thumbnails/jose-otavio-hq.jpg" alt="José Otávio, filmmaker e publicitário" width={64} height={64} sizes="64px" className="collaboration-photo" />
    <div><p className="collaboration-label">Parceria de captação</p><a className="collaboration-name" href={joseInstagram} target="_blank" rel="noopener noreferrer">José Otávio ↗</a><p className="collaboration-description">Em projetos selecionados, José cuida da captação. Eu, da edição, cor e motion.</p></div>
  </aside>;
}
