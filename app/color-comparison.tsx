"use client";
import type { ColorStudy } from "./color-studies";
export default function ColorStudyPlayer({ study }: { study: ColorStudy }) {
  return <article className="color-study color-study-portrait">
    <video className="color-preview" src={study.video} poster={study.poster} controls playsInline preload="none" aria-label={"Assistir trecho de " + study.title} />
    <p className="eyebrow">Edição final · Color grading e motion</p>
    <h3>{study.title}</h3><p>{study.description}</p>
  </article>;
}
