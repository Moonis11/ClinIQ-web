"use client";

/* Neural Infinity mark — spec: 40-80 kichik node, ingichka connecting lines,
   chapda cyan, markazda dark navy, o'ng yuqorida pink. Rasmda text yo'q. */

// Parametric figure-8 (infinity) path sampled into node positions.
function infinityPoint(t: number, w: number, h: number) {
  const a = w / 2.15;
  const denom = 1 + Math.sin(t) ** 2;
  const x = (a * Math.cos(t)) / denom + w / 2;
  const y = (a * Math.sin(t) * Math.cos(t)) / denom * (h / w) * 2 + h / 2;
  return { x, y };
}

function colorForT(t: number) {
  // t in [0, 2PI). Left lobe (t near PI) -> cyan, center -> navy, top-right -> pink.
  const norm = ((t % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
  if (norm > Math.PI * 0.6 && norm < Math.PI * 1.4) return "#22D3EE"; // left lobe
  if (norm < Math.PI * 0.35 || norm > Math.PI * 1.85) return "#EC4899"; // right lobe top area
  return "#8B5CF6"; // transitional / center-ish
}

export default function NeuralInfinityMark({ size = 40, dense = 64 }: { size?: number; dense?: number }) {
  const w = 200;
  const h = 90;
  const nodes = Array.from({ length: dense }, (_, i) => {
    const t = (i / dense) * Math.PI * 2;
    const p = infinityPoint(t, w, h);
    const jitter = (Math.sin(i * 12.9) * 3);
    return { ...p, y: p.y + jitter, r: 1.1 + (Math.sin(i * 7.3) + 1) * 1.1, t };
  });

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
        <radialGradient id="cliniq-node-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* base infinity stroke */}
      <path
        d={nodes.map((n, i) => `${i === 0 ? "M" : "L"} ${n.x.toFixed(1)} ${n.y.toFixed(1)}`).join(" ") + " Z"}
        fill="none"
        stroke="url(#cliniq-neural-gradient)"
        strokeWidth={1.1}
        opacity={0.55}
      />

      {/* fine connecting lines between nearby nodes (neural-net look) */}
      {nodes.map((n, i) => {
        const next = nodes[(i + 3) % nodes.length];
        return (
          <line
            key={`l-${i}`}
            x1={n.x} y1={n.y} x2={next.x} y2={next.y}
            stroke={colorForT(n.t)}
            strokeWidth={0.4}
            opacity={0.28}
          />
        );
      })}

      {/* nodes */}
      {nodes.map((n, i) => (
        <circle key={`n-${i}`} cx={n.x} cy={n.y} r={n.r} fill={colorForT(n.t)} opacity={0.85} />
      ))}

      {/* subtle target-like rings at the two focal points */}
      <circle cx={w * 0.27} cy={h * 0.5} r={10} fill="none" stroke="#22D3EE" strokeWidth={0.5} opacity={0.35} />
      <circle cx={w * 0.73} cy={h * 0.5} r={10} fill="none" stroke="#EC4899" strokeWidth={0.5} opacity={0.35} />
    </svg>
  );
}
