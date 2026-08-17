export function PatientIllustration() {
  return (
    <svg viewBox="0 0 400 200" className="h-full w-full" role="img" aria-label="Bemor telefonda ClinIQ ilovasidan foydalanmoqda">
      <defs>
        <linearGradient id="pg1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#14C7B0" />
          <stop offset="100%" stopColor="#6D5DFB" />
        </linearGradient>
        <linearGradient id="pg2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="100" r="92" fill="url(#pg1)" opacity="0.08" />

      {/* Telefon */}
      <rect x="150" y="30" width="100" height="150" rx="18" fill="url(#pg1)" opacity="0.14" />
      <rect x="158" y="42" width="84" height="126" rx="10" fill="none" stroke="url(#pg1)" strokeWidth="2.5" />
      <rect x="168" y="54" width="64" height="8" rx="4" fill="url(#pg1)" opacity="0.5" />
      <rect x="168" y="70" width="64" height="30" rx="6" fill="url(#pg2)" opacity="0.25" />
      <path d="M178 85 h44 M178 92 h30" stroke="url(#pg2)" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="168" y="108" width="64" height="22" rx="6" fill="url(#pg1)" opacity="0.18" />
      <rect x="168" y="136" width="64" height="18" rx="9" fill="url(#pg1)" />

      {/* Yurak zarbi chizig'i - shifokor/sog'liq ramzi */}
      <path d="M40 110 h40 l10 -26 l14 46 l10 -30 l8 10 h30" fill="none" stroke="url(#pg2)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.75" />

      {/* AI yulduzcha */}
      <g transform="translate(300,55)" opacity="0.9">
        <path d="M0 -12 L3 -3 L12 0 L3 3 L0 12 L-3 3 L-12 0 L-3 -3 Z" fill="url(#pg2)" />
      </g>
      {/* Kalendar (navbat) ramzi */}
      <g transform="translate(300,130)" opacity="0.85">
        <rect x="-16" y="-14" width="32" height="28" rx="5" fill="none" stroke="url(#pg1)" strokeWidth="2.5" />
        <path d="M-16 -5 h32" stroke="url(#pg1)" strokeWidth="2.5" />
        <circle cx="-8" cy="6" r="2.2" fill="url(#pg1)" />
        <circle cx="2" cy="6" r="2.2" fill="url(#pg1)" />
      </g>
    </svg>
  );
}

export function ClinicIllustration() {
  return (
    <svg viewBox="0 0 400 200" className="h-full w-full" role="img" aria-label="Klinika jamoasi ClinIQ orqali bog'langan">
      <defs>
        <linearGradient id="cg1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6D5DFB" />
          <stop offset="100%" stopColor="#14C7B0" />
        </linearGradient>
        <linearGradient id="cg2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="100" r="92" fill="url(#cg1)" opacity="0.08" />

      {/* Klinika binosi */}
      <rect x="150" y="70" width="100" height="90" rx="8" fill="url(#cg1)" opacity="0.14" />
      <rect x="150" y="70" width="100" height="90" rx="8" fill="none" stroke="url(#cg1)" strokeWidth="2.5" />
      <path d="M142 78 L200 42 L258 78" fill="none" stroke="url(#cg1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="186" y="120" width="28" height="40" rx="3" fill="url(#cg2)" opacity="0.3" />
      <rect x="164" y="94" width="16" height="16" rx="2" fill="url(#cg1)" opacity="0.5" />
      <rect x="220" y="94" width="16" height="16" rx="2" fill="url(#cg1)" opacity="0.5" />
      {/* + belgisi */}
      <path d="M200 92 v16 M192 100 h16" stroke="url(#cg2)" strokeWidth="3.5" strokeLinecap="round" />

      {/* Xodim rollarini ifodalovchi bog'langan doiralar */}
      {[
        [60, 60], [40, 120], [90, 155],
        [340, 60], [360, 120], [310, 155],
      ].map(([x, y], i) => (
        <g key={i}>
          <line x1={x} y1={y} x2="200" y2="115" stroke="url(#cg2)" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.5" />
          <circle cx={x} cy={y} r="14" fill="url(#cg2)" opacity="0.16" />
          <circle cx={x} cy={y} r="14" fill="none" stroke="url(#cg2)" strokeWidth="2" />
          <circle cx={x} cy={y - 3} r="4.5" fill="url(#cg2)" />
          <path d={`M${x - 6} ${y + 9} q6 -8 12 0`} fill="none" stroke="url(#cg2)" strokeWidth="2" strokeLinecap="round" />
        </g>
      ))}
    </svg>
  );
}
