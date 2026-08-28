"use client";

import { useLang } from "@/lib/i18n";

const markers = [
  { label: "HbA1c", value: "6.1%", width: "68%", tone: "from-cyan-400 to-cyan-300" },
  { label: "BP", value: "124/82", width: "52%", tone: "from-violet-500 to-violet-300" },
  { label: "LDL", value: "2.4", width: "42%", tone: "from-pink-500 to-pink-300" },
];

export default function AiBrainMark() {
  const { lang } = useLang();
  const copy = {
    uz: { eyebrow: "ClinIQ intellekti", title: "Klinik xavf ko'rsatkichi", assisted: "AI yordami", risk: "Umumiy xavf", low: "Past", stable: "Barqaror", insight: "AI tahlili", note: "Ko'rsatkichlar barqaror. Shifokor nazoratini davom ettiring.", decision: "Yakuniy qaror", controlled: "Shifokor nazoratida" },
    ru: { eyebrow: "Интеллект ClinIQ", title: "Обзор клинического риска", assisted: "С поддержкой ИИ", risk: "Общий риск", low: "Низкий", stable: "Стабильно", insight: "Анализ ИИ", note: "Показатели стабильны. Продолжите врачебный контроль.", decision: "Итоговое решение", controlled: "Под контролем врача" },
    en: { eyebrow: "ClinIQ intelligence", title: "Clinical risk overview", assisted: "AI assisted", risk: "Overall risk", low: "Low", stable: "Stable", insight: "AI insight", note: "Trend is stable. Continue clinician review.", decision: "Final decision", controlled: "Clinician controlled" },
  }[lang];
  return (
    <div className="product-visual relative h-full w-full overflow-hidden rounded-[1.75rem] p-4 sm:p-5">
      <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-14 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative flex h-full flex-col gap-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="product-muted text-[9px] font-semibold uppercase tracking-[0.2em]">{copy.eyebrow}</p>
            <p className="product-text mt-1 text-sm font-bold">{copy.title}</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-[9px] font-semibold text-cyan-200">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.9)]" />
            {copy.assisted}
          </span>
        </div>

        <div className="grid flex-1 grid-cols-[1.12fr_0.88fr] gap-3">
          <div className="product-panel rounded-2xl p-3.5">
            <div className="flex items-end justify-between">
              <div>
                <p className="product-muted text-[9px] uppercase tracking-wider">{copy.risk}</p>
                <p className="product-text mt-1 text-2xl font-extrabold tracking-tight">{copy.low}</p>
              </div>
              <span className="rounded-lg bg-emerald-400/10 px-2 py-1 text-[9px] font-bold text-emerald-600 dark:text-emerald-300">{copy.stable}</span>
            </div>
            <div className="mt-4 space-y-3">
              {markers.map((marker) => (
                <div key={marker.label}>
                  <div className="mb-1.5 flex items-center justify-between text-[9px]">
                    <span className="product-text font-semibold opacity-70">{marker.label}</span>
                    <span className="product-muted">{marker.value}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                    <div className={`h-full rounded-full bg-gradient-to-r ${marker.tone}`} style={{ width: marker.width }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex-1 rounded-2xl border border-violet-300/20 bg-gradient-to-br from-violet-500/10 to-pink-500/[0.06] p-3.5 dark:border-white/10">
              <p className="product-muted text-[9px] uppercase tracking-wider">{copy.insight}</p>
              <p className="product-text mt-2 text-[11px] font-semibold leading-relaxed">{copy.note}</p>
              <div className="mt-3 flex gap-1">
                {[34, 48, 42, 62, 55, 72, 68].map((height, index) => (
                  <span key={index} className="flex-1 self-end rounded-full bg-gradient-to-t from-cyan-400 via-violet-400 to-pink-400 opacity-80" style={{ height: `${height / 2}px` }} />
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-pink-300/15 bg-pink-400/[0.08] p-3">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 via-violet-500 to-pink-500 text-xs font-black text-white">✓</span>
                <div>
                  <p className="product-muted text-[9px]">{copy.decision}</p>
                  <p className="product-text text-[10px] font-bold">{copy.controlled}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
