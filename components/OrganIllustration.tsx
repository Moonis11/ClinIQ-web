"use client";

export type OrganType = "brain" | "heart" | "kidney" | "lung";

const ORGAN_PATHS: Record<OrganType, string> = {
  // Miya - ikkita yarim shar, burmalar bilan
  brain:
    "M100 30 C60 30 35 55 35 85 C35 95 38 103 43 110 C36 118 32 128 32 138 C32 162 55 178 82 178 C90 178 97 176 103 172 C109 176 116 178 124 178 C151 178 174 162 174 138 C174 128 170 118 163 110 C168 103 171 95 171 85 C171 55 146 30 106 30 Z",
  // Yurak - klassik yurak shakli
  heart:
    "M100 178 C100 178 30 130 30 82 C30 55 50 38 74 38 C88 38 97 45 100 55 C103 45 112 38 126 38 C150 38 170 55 170 82 C170 130 100 178 100 178 Z",
  // Buyrak - loviyasimon shakl
  kidney:
    "M130 30 C160 30 178 58 178 95 C178 135 158 172 122 172 C100 172 90 155 92 135 C94 118 82 108 68 108 C50 108 35 122 30 100 C24 74 42 30 78 30 C95 30 100 45 105 55 C110 42 115 30 130 30 Z",
  // O'pka - ikkita nosimmetrik bo'lak, traxeya bilan
  lung:
    "M100 25 L100 70 M100 70 C100 70 60 60 45 85 C28 113 30 165 55 172 C75 177 90 155 92 130 C94 105 96 90 100 90 C104 90 106 105 108 130 C110 155 125 177 145 172 C170 165 172 113 155 85 C140 60 100 70 100 70 Z",
};

export default function OrganIllustration({ type }: { type: OrganType }) {
  return (
    <div className="organ-spin">
      <svg viewBox="0 0 200 200" className="h-full w-full" role="img" aria-label={type}>
        <defs>
          <linearGradient id={`organ-grad-${type}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#14C7B0" />
            <stop offset="50%" stopColor="#6D5DFB" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
        <path
          d={ORGAN_PATHS[type]}
          fill={`url(#organ-grad-${type})`}
          fillOpacity="0.14"
          stroke={`url(#organ-grad-${type})`}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Sxema uslubidagi porlab turuvchi nuqtalar */}
        {[
          [70, 70], [130, 65], [100, 100], [60, 120], [140, 125], [90, 150], [120, 155],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3.2" fill={`url(#organ-grad-${type})`} opacity="0.85" />
        ))}
        <path
          d="M70 70 L100 100 L130 65 M100 100 L60 120 M100 100 L140 125 M60 120 L90 150 M140 125 L120 155"
          fill="none"
          stroke={`url(#organ-grad-${type})`}
          strokeWidth="1"
          opacity="0.4"
        />
      </svg>
    </div>
  );
}
