"use client";

const markers = [
  { label: "HbA1c", value: "6.1%", width: "68%", tone: "from-cyan-400 to-cyan-300" },
  { label: "BP", value: "124/82", width: "52%", tone: "from-violet-500 to-violet-300" },
  { label: "LDL", value: "2.4", width: "42%", tone: "from-pink-500 to-pink-300" },
];

export default function AiBrainMark() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#080d21] p-4 shadow-[0_30px_70px_rgba(8,11,28,0.38)] sm:p-5">
      <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-14 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative flex h-full flex-col gap-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">ClinIQ intelligence</p>
            <p className="mt-1 text-sm font-bold text-white">Clinical risk overview</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-[9px] font-semibold text-cyan-200">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.9)]" />
            AI assisted
          </span>
        </div>

        <div className="grid flex-1 grid-cols-[1.12fr_0.88fr] gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-3.5">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[9px] uppercase tracking-wider text-white/40">Overall risk</p>
                <p className="mt-1 text-2xl font-extrabold tracking-tight text-white">Low</p>
              </div>
              <span className="rounded-lg bg-emerald-400/10 px-2 py-1 text-[9px] font-bold text-emerald-300">Stable</span>
            </div>
            <div className="mt-4 space-y-3">
              {markers.map((marker) => (
                <div key={marker.label}>
                  <div className="mb-1.5 flex items-center justify-between text-[9px]">
                    <span className="font-semibold text-white/65">{marker.label}</span>
                    <span className="text-white/45">{marker.value}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className={`h-full rounded-full bg-gradient-to-r ${marker.tone}`} style={{ width: marker.width }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex-1 rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/15 to-pink-500/10 p-3.5">
              <p className="text-[9px] uppercase tracking-wider text-white/40">AI insight</p>
              <p className="mt-2 text-[11px] font-semibold leading-relaxed text-white/85">Trend is stable. Continue clinician review.</p>
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
                  <p className="text-[9px] text-white/45">Final decision</p>
                  <p className="text-[10px] font-bold text-white">Clinician controlled</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
