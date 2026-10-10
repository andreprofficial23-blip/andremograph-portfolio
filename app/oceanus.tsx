const media = "/videos-web/oceanus-d2c-summit";
import { CaptureCredit } from "./collaboration";

export default function OceanusSection() {
  return <section className="section page-width oceanus-section" id="oceanus" aria-labelledby="oceanus-heading">
    <div className="section-heading"><div><p className="eyebrow">02 / Oceanus · Edição & motion</p><h2 id="oceanus-heading">Oceanus —<br /><em>D2C Summit.</em></h2></div><div className="oceanus-context"><p>Um registro do encontro entre marcas, empreendedores e especialistas em e-commerce, com edição e motion para acompanhar a energia do evento.</p></div></div>
    <figure className="oceanus-film"><video controls playsInline preload="none" poster={`${media}/aftermovie-matchcut-bones.jpg`} src={`${media}/aftermovie.mp4`} aria-label="Oceanus — Aftermovie D2C Summit" /><figcaption><strong>O evento, em movimento.</strong><span>Aftermovie · Oceanus — D2C Summit</span></figcaption></figure>
    <div className="oceanus-credit"><p className="eyebrow">Nossa colaboração</p><p>Oceanus é cliente do José Otávio, responsável pela captação deste projeto. Eu editei o aftermovie e criei as animações de logo da Oceanus.</p><div className="oceanus-capture"><CaptureCredit /></div></div>
    <div className="oceanus-logos-heading"><h3>Uma marca que ganha movimento.</h3><p>As assinaturas animadas que abrem e encerram o vídeo.</p></div>
    <div className="oceanus-logos">{[{file:"logo-in",label:"Entrada do símbolo",detail:"Logo IN · Símbolo"},{file:"logo-out",label:"Letras com bounce",detail:"Logo OUT · Fundo branco"}].map((film,index)=><figure className="oceanus-film" key={film.file}><video controls playsInline preload="none" poster={`${media}/${film.file}.jpg`} src={`${media}/${film.file}.mp4`} aria-label={`Oceanus — ${film.detail}`} /><figcaption><span className="eyebrow">0{index+1} / {film.detail}</span><strong>{film.label}</strong></figcaption></figure>)}</div>
  </section>;
}
