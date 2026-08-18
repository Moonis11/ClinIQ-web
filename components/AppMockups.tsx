"use client";

/* Stok video/rasmlar o'rniga — brendning o'z ranglarida (siyan, siyoh,
   juda kam pushti) qurilgan mockup illyustratsiyalar. Odam suratlari
   ishlatilmaydi, faqat mahsulot interfeysini ifodalovchi abstrakt bloklar. */

export function HeroMockup() {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-glass-bgDark2 p-5 text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-glass-teal" />
          <span className="text-[11px] font-semibold tracking-wide text-white/80">CLINIQ · PATIENT ID</span>
        </div>
        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-mono text-white/60">#04821</span>
      </div>

      <div>
        <p className="text-[10px] uppercase tracking-wider text-white/45">Keyingi tashrif</p>
        <p className="mt-1 text-sm font-bold">Dr. Botirov · Kardiolog</p>
        <p className="text-[11px] text-white/55">Ertaga, 10:30</p>
      </div>

      <div className="relative mt-2">
        <svg viewBox="0 0 220 60" className="w-full" preserveAspectRatio="none">
          <polyline
            points="0,40 30,40 45,15 60,52 75,28 95,28 115,40 150,40 165,12 180,52 195,40 220,40"
            fill="none" stroke="#38A9BF" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"
          />
          <circle cx="45" cy="15" r="3" fill="#38A9BF" />
          <circle cx="165" cy="12" r="3" fill="#C9607D" />
        </svg>
      </div>

      <div className="flex items-center justify-between rounded-xl bg-white/[0.06] px-3 py-2.5">
        <span className="text-[10px] text-white/60">AI tahlil natijasi tayyor</span>
        <span className="h-1.5 w-1.5 rounded-full bg-glass-rose" />
      </div>
    </div>
  );
}

export function AboutMockup() {
  const steps = ["Bemor", "Klinika", "AI"];
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 bg-glass-bgDark3 p-8">
      <div className="flex w-full items-center justify-between">
        {steps.map((s, i) => (
          <div key={s} className="flex flex-1 items-center">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-glass-teal/40 bg-white/[0.05] text-[11px] font-bold text-glass-tealLight">
                {i + 1}
              </div>
              <span className="text-[10px] text-white/55">{s}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="mx-2 h-px flex-1 bg-gradient-to-r from-glass-teal/60 to-glass-teal/10" />
            )}
          </div>
        ))}
      </div>
      <div className="w-full rounded-xl bg-white/[0.05] p-4">
        <div className="mb-2 h-1.5 w-16 rounded-full bg-glass-teal" />
        <div className="space-y-1.5">
          <div className="h-1.5 w-full rounded-full bg-white/10" />
          <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
          <div className="h-1.5 w-3/5 rounded-full bg-white/10" />
        </div>
      </div>
    </div>
  );
}

export function PatientDashboardMockup() {
  const rows = [
    { label: "Kardiolog ko'rigi", date: "02.08", ok: true },
    { label: "Umumiy tekshiruv", date: "14.05", ok: true },
    { label: "EKG natijasi", date: "22.01", ok: false },
  ];
  return (
    <div className="flex h-full w-full flex-col gap-3 bg-glass-bgDark2 p-5">
      <div className="rounded-xl bg-gradient-to-r from-glass-teal to-[#0B5A70] px-4 py-3">
        <p className="text-[10px] uppercase tracking-wide text-white/70">Tibbiy tarix</p>
        <p className="mt-0.5 text-sm font-bold text-white">Yagona Patient ID</p>
      </div>
      <div className="flex-1 space-y-2 rounded-xl bg-white/[0.05] p-3">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between rounded-lg bg-white/[0.04] px-3 py-2">
            <div className="flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${r.ok ? "bg-glass-teal" : "bg-glass-rose"}`} />
              <span className="text-[11px] text-white/80">{r.label}</span>
            </div>
            <span className="font-mono text-[10px] text-white/40">{r.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ClinicDashboardMockup() {
  const stats = [
    { label: "FAOL BEMOR", value: "342" },
    { label: "SHIFOKOR", value: "12" },
    { label: "BUGUNGI NAVBAT", value: "18" },
  ];
  return (
    <div className="flex h-full w-full flex-col gap-3 bg-glass-bgDark2 p-5">
      <div className="grid grid-cols-3 gap-2">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg bg-white/[0.06] p-2.5 text-center">
            <p className="text-base font-bold text-white">{s.value}</p>
            <p className="mt-0.5 text-[8px] tracking-wide text-white/45">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="flex-1 space-y-1.5 rounded-xl bg-white/[0.05] p-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center justify-between rounded-md bg-white/[0.04] px-2.5 py-1.5">
            <div className="h-1.5 w-20 rounded-full bg-white/15" />
            <span className={`rounded-full px-2 py-0.5 text-[8px] font-semibold ${i === 3 ? "bg-glass-rose/20 text-glass-rose" : "bg-glass-teal/20 text-glass-tealLight"}`}>
              {i === 3 ? "Bekor" : "Faol"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
