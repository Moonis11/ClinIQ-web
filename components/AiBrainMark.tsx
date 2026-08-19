"use client";

/* Abstract AI "miya" tarmog'i - neural node'lar va ingichka chiziqlar
   bilan, hech qanday matn yoki logo ichida emas (spec §4 qoidasiga
   mos). Cyan -> binafsha -> pushti gradient. */

function seededRand(seed: number) {
  const x = Math.sin(seed * 999.7) * 43758.5453;
  return x - Math.floor(x);
}

function colorFor(x: number) {
  if (x < 0.33) return "#22D3EE";
  if (x > 0.66) return "#EC4899";
  return "#8B5CF6";
}

export default function AiBrainMark() {
  const w = 240;
  const h = 200;
  const cx = w / 2;
  const cy = h / 2;

  const nodes = Array.from({ length: 58 }, (_, i) => {
    const angle = seededRand(i) * Math.PI * 2;
    const radiusX = 78 * (0.45 + seededRand(i + 50) * 0.55);
    const radiusY = 62 * (0.45 + seededRand(i + 90) * 0.55);
    const x = cx + Math.cos(angle) * radiusX;
    const y = cy + Math.sin(angle) * radiusY * 0.92 - 4;
    return { x, y, r: 1 + seededRand(i + 20) * 1.8, cf: (Math.cos(angle) + 1) / 2 };
  });

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-full w-full" role="img" aria-hidden="true">
      <defs>
        <radialGradient id="ai-brain-glow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx={cx} cy={cy} rx="86" ry="68" fill="url(#ai-brain-glow)" />
      <ellipse cx={cx} cy={cy} rx="80" ry="63" fill="none" stroke="#8B5CF6" strokeWidth="0.6" opacity="0.25" />

      {nodes.map((n, i) => {
        const next = nodes[(i + 5) % nodes.length];
        return (
          <line
            key={`l-${i}`}
            x1={n.x} y1={n.y} x2={next.x} y2={next.y}
            stroke={colorFor(n.cf)}
            strokeWidth="0.35"
            opacity="0.3"
          />
        );
      })}
      {nodes.map((n, i) => (
        <circle key={`n-${i}`} cx={n.x} cy={n.y} r={n.r} fill={colorFor(n.cf)} opacity="0.85" />
      ))}
    </svg>
  );
}
