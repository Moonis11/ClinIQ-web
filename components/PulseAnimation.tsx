"use client";

const SEGMENT = "H60 L80 60 L95 20 L115 100 L130 40 L145 60 L165 60 L180 45 L195 60 H260";

export default function PulseAnimation() {
  return (
    <div className="h-full w-full overflow-hidden">
      <svg viewBox="0 0 260 120" className="h-full" style={{ width: "600%" }} preserveAspectRatio="none" role="img" aria-label="Yurak zarbi animatsiyasi">
        <defs>
          <linearGradient id="pulse-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#14C7B0" />
            <stop offset="50%" stopColor="#6D5DFB" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
        <g className="pulse-track">
          {Array.from({ length: 6 }).map((_, i) => (
            <path
              key={i}
              transform={`translate(${i * 260} 0)`}
              d={`M0 ${SEGMENT}`}
              fill="none"
              stroke="url(#pulse-grad)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
