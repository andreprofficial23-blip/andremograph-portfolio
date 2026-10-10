"use client";

import { useState } from "react";
import ColorComparison from "./color-comparison";
import type { ColorStudy } from "./color-studies";

export default function ColorGallery({ studies, selectedId, onChoose }: { studies: ColorStudy[]; selectedId?: string; onChoose?: (id: string) => void }) {
  const [localSelected, setLocalSelected] = useState(studies[0].id);
  const selected = selectedId ?? localSelected;
  const study = studies.find(item => item.id === selected) ?? studies[0];
  return <div className="color-gallery">
    <div className="color-picker" role="group" aria-label="Escolher projeto de color grading">
      {studies.map(item => <button key={item.id} type="button" aria-pressed={item.id === selected} onClick={() => { setLocalSelected(item.id); onChoose?.(item.id); }}>{item.title.split(" — ")[0]}</button>)}
    </div>
    <ColorComparison key={study.id} study={study} />
  </div>;
}
