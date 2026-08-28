"use client";

import { useLang } from "@/lib/i18n";

export default function OnlineConsultationShowcase() {
  const { lang } = useLang();
  const copy = {
    uz: { specialty: "Kardiolog • 12 yil tajriba", verified: "Tasdiqlangan", languages: "Tillar", available: "Bugun bo'sh vaqtlar", book: "Xavfsiz konsultatsiyani band qilish", secure: "Himoyalangan video konsultatsiya", connected: "Shifokor ulandi", workflow: "Uzluksiz tibbiy xizmat", controls: ["Mikrofon", "Kamera", "Chat"], end: "Yakunlash" },
    ru: { specialty: "Кардиолог • 12 лет опыта", verified: "Проверено", languages: "Языки", available: "Свободно сегодня", book: "Записаться на защищённую консультацию", secure: "Защищённая видеоконсультация", connected: "Врач подключён", workflow: "Непрерывный процесс лечения", controls: ["Микрофон", "Камера", "Чат"], end: "Завершить" },
    en: { specialty: "Cardiology • 12 years", verified: "Verified", languages: "Languages", available: "Available today", book: "Book secure consultation", secure: "Secure video consultation", connected: "Doctor connected", workflow: "End-to-end care workflow", controls: ["Mic", "Cam", "Chat"], end: "End" },
  }[lang];
  return (
    <div className="product-visual relative min-h-[390px] overflow-hidden rounded-[2rem] p-4 sm:p-6">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="relative grid h-full gap-4 sm:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-3">
          <div className="product-panel rounded-2xl p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-cyan-500 text-base font-black text-[#061225]">DM</div>
              <div className="min-w-0 flex-1">
                <p className="product-text truncate text-sm font-bold">Dr. Malika Karimova</p>
                <p className="product-muted mt-0.5 text-[10px]">{copy.specialty}</p>
              </div>
              <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[9px] font-semibold text-emerald-600 dark:text-emerald-300">{copy.verified}</span>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[10px]">
              <span className="product-muted">{copy.languages}</span><span className="product-text font-semibold">UZ • RU • EN</span>
            </div>
          </div>

          <div className="product-panel flex-1 rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <p className="product-muted text-[10px] font-semibold uppercase tracking-[0.16em]">{copy.available}</p>
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {["10:30", "12:00", "14:30", "16:00", "17:30", "19:00"].map((slot, index) => (
                <span key={slot} className={`rounded-xl border px-2 py-2 text-center text-[10px] font-bold ${index === 2 ? "border-cyan-400 bg-cyan-300 text-[#061225]" : "border-slate-200 bg-white/70 text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-white/70"}`}>{slot}</span>
              ))}
            </div>
            <div className="mt-4 rounded-xl bg-gradient-to-r from-cyan-300 via-cyan-400 to-violet-400 px-4 py-2.5 text-center text-[10px] font-extrabold text-[#061225]">{copy.book}</div>
          </div>
        </div>

        <div className="relative flex min-h-[260px] flex-col overflow-hidden rounded-2xl border border-cyan-200/30 bg-gradient-to-br from-cyan-50 to-violet-50 p-4 dark:border-cyan-200/15 dark:from-[#0b203a] dark:to-[#10132e]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="product-text text-[10px] font-semibold opacity-70">{copy.secure}</span>
            </div>
            <span className="product-muted text-[9px]">18:42</span>
          </div>

          <div className="video-visual mt-4 flex flex-1 items-center justify-center rounded-2xl border">
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-cyan-200/20 bg-cyan-300/10 text-xl font-black text-cyan-200">DM</div>
              <p className="product-text mt-3 text-xs font-bold">{copy.connected}</p>
              <p className="product-muted mt-1 text-[9px]">{copy.workflow}</p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {copy.controls.map((label) => <span key={label} className="product-control rounded-full px-3 py-2 text-[9px] font-semibold">{label}</span>)}
            <span className="force-white rounded-full bg-pink-500 px-3 py-2 text-[9px] font-semibold">{copy.end}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
