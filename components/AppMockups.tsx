"use client";

/* Stok video/rasmlar o'rniga — brendning o'z ranglarida (siyan, siyoh,
   binafsha, pushti) qurilgan mockup illyustratsiyalar. Odam suratlari
   ISHLATILMAYDI, faqat mahsulot interfeysini ifodalovchi abstrakt
   bloklar. MUHIM: hech qanday haqiqiy matn yo'q (faqat abstrakt
   chiziq/blok bilan matn "his qildiriladi") - shunda UZ/RU/EN
   tillarida ham bir xil qoladi. */

export function FullBleedHero() {
  const rows = [
    { points: "0,30 60,30 80,10 100,55 120,22 150,22 180,30 220,30" },
    { points: "0,55 40,55 55,38 70,72 85,48 110,48 140,55 220,55" },
    { points: "0,78 90,78 105,62 120,95 135,70 160,70 190,78 220,78" },
  ];
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-glass-bgDark1">
      <div className="pointer-events-none absolute inset-0 opacity-[0.35]">
        <svg viewBox="0 0 220 100" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
          {rows.map((r, i) => (
            <polyline key={i} points={r.points} fill="none" stroke="#22D3EE" strokeWidth="0.6" opacity={0.5 - i * 0.12} />
          ))}
        </svg>
      </div>
      <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-sm sm:h-32 sm:w-32">
        <svg width="42" height="42" viewBox="0 0 26 26" fill="none">
          <circle cx="13" cy="13" r="12" stroke="#F4F7F6" strokeWidth="1.4" />
          <path d="M13 7 V13 L17 15.5" stroke="#22D3EE" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

/* Bar - matn o'rnini bosuvchi abstrakt chiziq (tilga bog'liq emas) */
function Bar({ w, tone = "light" }: { w: string; tone?: "light" | "accent" | "faint" }) {
  const cls = tone === "accent" ? "bg-glass-teal" : tone === "faint" ? "bg-white/10" : "bg-white/25";
  return <div className={`h-1.5 rounded-full ${cls}`} style={{ width: w }} />;
}

export function HeroMockup() {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-glass-bgDark2 p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-glass-teal" />
          <Bar w="52px" tone="light" />
        </div>
        <span className="rounded-full bg-white/10 px-2.5 py-1">
          <Bar w="20px" tone="faint" />
        </span>
      </div>

      <div className="space-y-1.5">
        <Bar w="60px" tone="faint" />
        <Bar w="90px" tone="light" />
        <Bar w="45px" tone="faint" />
      </div>

      <div className="relative mt-2">
        <svg viewBox="0 0 220 60" className="w-full" preserveAspectRatio="none">
          <polyline
            points="0,40 30,40 45,15 60,52 75,28 95,28 115,40 150,40 165,12 180,52 195,40 220,40"
            fill="none" stroke="#22D3EE" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"
          />
          <circle cx="45" cy="15" r="3" fill="#22D3EE" />
          <circle cx="165" cy="12" r="3" fill="#EC4899" />
        </svg>
      </div>

      <div className="flex items-center justify-between rounded-xl bg-white/[0.06] px-3 py-2.5">
        <Bar w="80px" tone="faint" />
        <span className="h-1.5 w-1.5 rounded-full bg-glass-magenta" />
      </div>
    </div>
  );
}

export function AboutMockup() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 bg-glass-bgDark3 p-8">
      <div className="flex w-full items-center justify-between">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-1 items-center">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-glass-teal/40 bg-white/[0.05] text-[11px] font-bold text-glass-tealLight">
                {i + 1}
              </div>
              <Bar w="30px" tone="faint" />
            </div>
            {i < 2 && <div className="mx-2 h-px flex-1 bg-gradient-to-r from-glass-teal/60 to-glass-teal/10" />}
          </div>
        ))}
      </div>
      <div className="w-full rounded-xl bg-white/[0.05] p-4">
        <div className="mb-2 h-1.5 w-16 rounded-full bg-glass-teal" />
        <div className="space-y-1.5">
          <Bar w="100%" tone="faint" />
          <Bar w="80%" tone="faint" />
          <Bar w="60%" tone="faint" />
        </div>
      </div>
    </div>
  );
}

export function PatientDashboardMockup() {
  const rows = [true, true, false];
  return (
    <div className="flex h-full w-full flex-col gap-3 bg-glass-bgDark2 p-5">
      <div className="rounded-xl bg-gradient-to-r from-glass-teal to-[#0B5A70] px-4 py-3">
        <Bar w="70px" tone="light" />
        <div className="mt-1.5" />
        <Bar w="110px" tone="light" />
      </div>
      <div className="flex-1 space-y-2 rounded-xl bg-white/[0.05] p-3">
        {rows.map((ok, i) => (
          <div key={i} className="flex items-center justify-between rounded-lg bg-white/[0.04] px-3 py-2.5">
            <div className="flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${ok ? "bg-glass-teal" : "bg-glass-magenta"}`} />
              <Bar w="90px" tone="faint" />
            </div>
            <Bar w="30px" tone="faint" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ClinicDashboardMockup() {
  return (
    <div className="flex h-full w-full flex-col gap-3 bg-glass-bgDark2 p-5">
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-lg bg-white/[0.06] p-2.5 text-center">
            <p className="text-base font-bold text-white">{["342", "12", "18"][i]}</p>
            <div className="mt-1 flex justify-center"><Bar w="24px" tone="faint" /></div>
          </div>
        ))}
      </div>
      <div className="flex-1 space-y-1.5 rounded-xl bg-white/[0.05] p-3">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex items-center justify-between rounded-md bg-white/[0.04] px-2.5 py-2">
            <Bar w="80px" tone="faint" />
            <span className={`h-2 w-8 rounded-full ${i === 3 ? "bg-glass-magenta/40" : "bg-glass-teal/40"}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* Bemorlar uchun - telefon atrofida suzuvchi tibbiy ma'lumot bloklari */
export function PatientOrbitMockup() {
  const items = [
    { x: 12, y: 18, color: "#22D3EE" },
    { x: 82, y: 12, color: "#EC4899" },
    { x: 6, y: 55, color: "#8B5CF6" },
    { x: 88, y: 50, color: "#22D3EE" },
    { x: 18, y: 85, color: "#EC4899" },
    { x: 78, y: 88, color: "#8B5CF6" },
  ];
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-glass-bgDark1">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {items.map((it, i) => (
          <line key={i} x1="50" y1="50" x2={it.x} y2={it.y} stroke={it.color} strokeWidth="0.3" opacity="0.35" />
        ))}
      </svg>
      {items.map((it, i) => (
        <div
          key={i}
          className="absolute h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-lg border"
          style={{ left: `${it.x}%`, top: `${it.y}%`, borderColor: `${it.color}66`, background: `${it.color}22` }}
        />
      ))}
      <div className="relative flex h-24 w-14 items-center justify-center rounded-2xl border-2 border-white/20 bg-white/[0.04]">
        <div className="h-1.5 w-1.5 rounded-full bg-glass-teal" />
      </div>
    </div>
  );
}

/* Klinikalar uchun - markaziy tugundan bo'limlarga tarqaladigan tarmoq */
export function ClinicNetworkMockup() {
  const nodes = [
    { x: 50, y: 12, color: "#22D3EE" },
    { x: 85, y: 30, color: "#8B5CF6" },
    { x: 88, y: 72, color: "#EC4899" },
    { x: 50, y: 90, color: "#22D3EE" },
    { x: 12, y: 72, color: "#8B5CF6" },
    { x: 15, y: 30, color: "#EC4899" },
  ];
  return (
    <div className="relative h-full w-full bg-glass-bgDark3">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {nodes.map((n, i) => (
          <line key={i} x1="50" y1="50" x2={n.x} y2={n.y} stroke={n.color} strokeWidth="0.35" opacity="0.4" />
        ))}
        <circle cx="50" cy="50" r="9" fill="url(#cn-grad)" opacity="0.9" />
        <defs>
          <radialGradient id="cn-grad">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </radialGradient>
        </defs>
      </svg>
      {nodes.map((n, i) => (
        <div
          key={i}
          className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ left: `${n.x}%`, top: `${n.y}%`, background: n.color }}
        />
      ))}
    </div>
  );
}
