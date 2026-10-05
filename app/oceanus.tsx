const media = "/videos-web/oceanus-d2c-summit";

export default function OceanusSection() {
  return <section className="section page-width oceanus-section" id="oceanus" aria-labelledby="oceanus-heading">
    <div className="section-heading"><div><p className="eyebrow">Oceanus / Edição & motion</p><h2 id="oceanus-heading">Oceanus —<br /><em>D2C Summit.</em></h2></div><div className="oceanus-context"><p>O D2C Summit, realizado pela Nuvemshop, reúne marcas, empreendedores e especialistas do varejo digital para trocar experiências sobre e-commerce e venda direta ao consumidor.</p><a className="text-button" href="https://d2csummit.com.br/" target="_blank" rel="noopener noreferrer">Conheça o evento ↗</a></div></div>
    <figure className="oceanus-film"><video controls playsInline preload="none" poster={`${media}/aftermovie.jpg`} src={`${media}/aftermovie.mp4`} aria-label="Oceanus — Aftermovie D2C Summit" /><figcaption><strong>O evento, em movimento.</strong><span>Aftermovie · Oceanus — D2C Summit</span></figcaption></figure>
    <div className="oceanus-credit"><p className="eyebrow">Minha participação</p><p>Editei este aftermovie e criei as animações de logo da Oceanus.</p></div>
    <div className="oceanus-logos-heading"><h3>Uma marca que ganha movimento.</h3><p>As assinaturas animadas que abrem e encerram o vídeo.</p></div>
    <div className="oceanus-logos">{[{file:"logo-in",label:"Entrada do símbolo",detail:"Logo IN · Símbolo"},{file:"logo-out",label:"Letras com bounce",detail:"Logo OUT · Fundo branco"}].map((film,index)=><figure className="oceanus-film" key={film.file}><video controls playsInline preload="none" poster={`${media}/${film.file}.jpg`} src={`${media}/${film.file}.mp4`} aria-label={`Oceanus — ${film.detail}`} /><figcaption><span className="eyebrow">0{index+1} / {film.detail}</span><strong>{film.label}</strong></figcaption></figure>)}</div>
  </section>;
}
