"use client";

import { useLang } from "@/lib/i18n";

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
  const { lang } = useLang();
  const copy = {
    uz: { hello: "Xayrli kun, Munisa", record: "Sog'liq markazi", next: "Keyingi konsultatsiya", doctor: "Dr. Dilnoza Karimova", time: "Bugun · 16:30", join: "Video xonaga kirish", meds: "Dori rejasi", med: "Vitamin D · 1 kapsula", result: "Yangi natija", lab: "Umumiy qon tahlili", ready: "Tayyor", history: "Tibbiy tarix" },
    ru: { hello: "Добрый день, Муниса", record: "Центр здоровья", next: "Следующая консультация", doctor: "Д-р Дилноза Каримова", time: "Сегодня · 16:30", join: "Войти в видеочат", meds: "План лечения", med: "Витамин D · 1 капсула", result: "Новый результат", lab: "Общий анализ крови", ready: "Готов", history: "История здоровья" },
    en: { hello: "Good afternoon, Munisa", record: "Health center", next: "Next consultation", doctor: "Dr Dilnoza Karimova", time: "Today · 16:30", join: "Join video room", meds: "Medication plan", med: "Vitamin D · 1 capsule", result: "New result", lab: "Complete blood count", ready: "Ready", history: "Health timeline" },
  }[lang];
  return (
    <div className="dashboard-enter relative flex h-full w-full flex-col gap-3 overflow-hidden bg-[#08111f] p-4 text-white sm:p-5">
      <div className="dashboard-scan" aria-hidden="true" />
      <div className="flex items-center justify-between">
        <div><p className="text-[9px] text-cyan-200/60">CLINIQ • PATIENT</p><p className="mt-0.5 text-sm font-bold">{copy.hello}</p></div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 to-violet-500 text-[10px] font-black">MN</div>
      </div>
      <div className="grid flex-1 grid-cols-[1.2fr_.8fr] gap-2.5">
        <div className="space-y-2.5">
          <div className="rounded-xl border border-cyan-300/20 bg-gradient-to-br from-cyan-400/20 to-violet-500/10 p-3">
            <p className="text-[9px] font-semibold uppercase tracking-wider text-cyan-200/70">{copy.next}</p>
            <div className="mt-2 flex items-center gap-2"><span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-300/15 text-xs">✚</span><div><p className="text-[11px] font-bold">{copy.doctor}</p><p className="text-[9px] text-white/50">{copy.time}</p></div></div>
            <button className="mt-2.5 w-full rounded-lg bg-cyan-300 py-1.5 text-[9px] font-black text-[#061225]">{copy.join} →</button>
          </div>
          <div className="rounded-xl bg-white/[0.055] p-3"><p className="text-[9px] font-semibold text-white/55">{copy.history}</p><div className="mt-2 flex items-end gap-1">{[35,58,44,76,62,88,72,94].map((h,i)=><span key={i} className="patient-chart-bar flex-1 rounded-t bg-gradient-to-t from-cyan-500/30 to-cyan-300" style={{height:`${h/2}px`,animationDelay:`${i*.08}s`}} />)}</div></div>
        </div>
        <div className="space-y-2.5">
          <div className="rounded-xl bg-white/[0.055] p-3"><p className="text-[9px] text-white/50">{copy.meds}</p><p className="mt-2 text-[10px] font-bold">{copy.med}</p><div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10"><div className="h-full w-3/4 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" /></div></div>
          <div className="rounded-xl border border-pink-400/15 bg-pink-400/[0.06] p-3"><div className="flex items-center justify-between"><p className="text-[9px] text-white/50">{copy.result}</p><span className="h-2 w-2 rounded-full bg-pink-400 shadow-[0_0_10px_#ec4899]" /></div><p className="mt-2 text-[10px] font-bold leading-tight">{copy.lab}</p><p className="mt-2 text-[9px] font-semibold text-cyan-300">✓ {copy.ready}</p></div>
        </div>
      </div>
    </div>
  );
}

export function ClinicDashboardMockup() {
  const { lang } = useLang();
  const copy = {
    uz: { title: "Klinika boshqaruvi", live: "Jonli", patients: "Bugungi bemorlar", doctors: "Shifokorlar", revenue: "Oylik tushum", queue: "Qabul navbati", analytics: "Haftalik qabul", statuses: ["Qabulda", "Kutilmoqda", "Tahlilda"] },
    ru: { title: "Управление клиникой", live: "Онлайн", patients: "Пациенты сегодня", doctors: "Врачи", revenue: "Доход за месяц", queue: "Очередь приёма", analytics: "Приёмы за неделю", statuses: ["На приёме", "Ожидает", "Анализы"] },
    en: { title: "Clinic operations", live: "Live", patients: "Patients today", doctors: "Clinicians", revenue: "Monthly revenue", queue: "Appointment queue", analytics: "Weekly visits", statuses: ["In consultation", "Waiting", "In lab"] },
  }[lang];
  const patients = ["M. Abdukarimova", "A. Yusupov", "D. Rasulova"];
  return (
    <div className="dashboard-enter relative flex h-full w-full flex-col overflow-hidden bg-[#08111f] p-4 text-white sm:p-5">
      <div className="dashboard-scan" aria-hidden="true" />
      <div className="flex items-center justify-between"><div><p className="text-[9px] text-cyan-200/60">CLINIQ • OPERATIONS</p><p className="mt-0.5 text-sm font-bold">{copy.title}</p></div><span className="flex items-center gap-1.5 rounded-full bg-cyan-300/10 px-2.5 py-1 text-[9px] font-bold text-cyan-200"><i className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />{copy.live}</span></div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[["48",copy.patients],["12",copy.doctors],["186M",copy.revenue]].map(([value,label],i)=><div key={label} className="rounded-xl border border-white/[0.06] bg-white/[0.045] p-2.5"><p className="text-sm font-black text-white">{value}</p><p className="mt-0.5 truncate text-[8px] text-white/45">{label}</p><div className="mt-2 h-0.5 rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" style={{width:["78%","60%","86%"][i]}} /></div></div>)}
      </div>
      <div className="mt-2.5 grid min-h-0 flex-1 grid-cols-[1.15fr_.85fr] gap-2.5">
        <div className="rounded-xl bg-white/[0.045] p-3"><div className="mb-2 flex items-center justify-between"><p className="text-[9px] font-bold">{copy.queue}</p><span className="text-[8px] text-cyan-300">08:00–19:00</span></div>{patients.map((name,i)=><div key={name} className="clinic-row flex items-center justify-between border-t border-white/[0.05] py-2" style={{animationDelay:`${i*.12}s`}}><div className="flex items-center gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400/25 to-violet-500/20 text-[8px] font-bold">{i+1}</span><div><p className="text-[9px] font-semibold">{name}</p><p className="text-[7px] text-white/40">{["09:30","10:00","10:20"][i]}</p></div></div><span className={`rounded-full px-1.5 py-1 text-[7px] font-semibold ${i===0?"bg-cyan-300/15 text-cyan-200":i===1?"bg-violet-400/15 text-violet-200":"bg-pink-400/15 text-pink-200"}`}>{copy.statuses[i]}</span></div>)}</div>
        <div className="flex flex-col rounded-xl bg-white/[0.045] p-3"><p className="text-[9px] font-bold">{copy.analytics}</p><div className="mt-2 flex flex-1 items-end gap-1.5">{[45,72,58,88,67,96,76].map((h,i)=><div key={i} className="flex flex-1 flex-col items-center justify-end gap-1"><span className="clinic-chart-bar w-full rounded-t bg-gradient-to-t from-violet-500/40 via-cyan-400/70 to-cyan-200" style={{height:`${h}%`,animationDelay:`${i*.07}s`}} /><span className="text-[6px] text-white/30">{["D","S","C","P","J","S","Y"][i]}</span></div>)}</div></div>
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
