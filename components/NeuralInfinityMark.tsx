"use client";

/* Neural Infinity mark v2 - ikki ipli DNA spirali cheksizlik (infinity)
   shaklida aylanadi, foydalanuvchi yuborgan ilhom-rasmga mos (lekin
   butunlay original, parametrik chizilgan SVG - hech qanday tashqi
   rasm ishlatilmaydi). Chapda ko'k, markazda binafsha, o'ngda pushti. */

function infinityPoint(t: number, w: number, h: number) {
  const a = w / 2.15;
  const denom = 1 + Math.sin(t) ** 2;
  const x = (a * Math.cos(t)) / denom + w / 2;
  const y = ((a * Math.sin(t) * Math.cos(t)) / denom) * (h / w) * 2 + h / 2;
  return { x, y };
}

function colorForT(t: number) {
  const norm = ((t % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
  if (norm > Math.PI * 0.6 && norm < Math.PI * 1.4) return "#22D3EE";
  if (norm < Math.PI * 0.35 || norm > Math.PI * 1.85) return "#EC4899";
  return "#8B5CF6";
}

export default function NeuralInfinityMark({ size = 40 }: { size?: number }) {
  const w = 200;
  const h = 90;
  const samples = 220;
  const twists = 11;
  const amp = 4.4;
  const eps = 0.01;

  const centerline = Array.from({ length: samples + 1 }, (_, i) => {
    const t = (i / samples) * Math.PI * 2;
    return { t, ...infinityPoint(t, w, h) };
  });

  const strandA: { x: number; y: number; t: number }[] = [];
  const strandB: { x: number; y: number; t: number }[] = [];
  centerline.forEach((p) => {
    const p2 = infinityPoint(p.t + eps, w, h);
    const dx = p2.x - p.x;
    const dy = p2.y - p.y;
    const len = Math.hypot(dx, dy) || 1;
    const nx = -dy / len;
    const ny = dx / len;
    const twist = Math.sin(p.t * twists) * amp;
    strandA.push({ x: p.x + nx * twist, y: p.y + ny * twist, t: p.t });
    strandB.push({ x: p.x - nx * twist, y: p.y - ny * twist, t: p.t });
  });

  const pathFrom = (pts: { x: number; y: number }[]) =>
    pts.map((n, i) => `${i === 0 ? "M" : "L"} ${n.x.toFixed(1)} ${n.y.toFixed(1)}`).join(" ") + " Z";

  const rungIndices = Array.from({ length: 46 }, (_, i) => Math.floor((i / 46) * samples));

  return (
    <svg
      width={size}
      height={size * (h / w)}
      viewBox={`0 0 ${w} ${h}`}
      className="shrink-0"
      role="img"
      aria-label="ClinIQ"
    >
      <defs>
        <linearGradient id="cliniq-neural-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="45%" stopColor="#0F172A" />
          <stop offset="75%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>

      {rungIndices.map((idx) => {
        const a = strandA[idx];
        const b = strandB[idx];
        return (
          <line
            key={`r-${idx}`}
            x1={a.x} y1={a.y} x2={b.x} y2={b.y}
            stroke={colorForT(a.t)}
            strokeWidth={0.55}
            opacity={0.4}
          />
        );
      })}

      <path d={pathFrom(strandA)} fill="none" stroke="url(#cliniq-neural-gradient)" strokeWidth={1.5} opacity={0.9} strokeLinejoin="round" />
      <path d={pathFrom(strandB)} fill="none" stroke="url(#cliniq-neural-gradient)" strokeWidth={1.5} opacity={0.65} strokeLinejoin="round" />

      {strandA.filter((_, i) => i % 6 === 0).map((n, i) => (
        <circle key={`na-${i}`} cx={n.x} cy={n.y} r={1.3} fill={colorForT(n.t)} opacity={0.9} />
      ))}
      {strandB.filter((_, i) => i % 6 === 0).map((n, i) => (
        <circle key={`nb-${i}`} cx={n.x} cy={n.y} r={1.1} fill={colorForT(n.t)} opacity={0.7} />
      ))}

      <circle cx={w * 0.27} cy={h * 0.5} r={9} fill="none" stroke="#22D3EE" strokeWidth={0.6} opacity={0.4} />
      <circle cx={w * 0.73} cy={h * 0.5} r={9} fill="none" stroke="#EC4899" strokeWidth={0.6} opacity={0.4} />
    </svg>
  );
}
