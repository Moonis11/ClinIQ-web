"use client";

export default function OnlineConsultationShowcase() {
  return (
    <div className="relative min-h-[390px] overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[#061225] p-4 shadow-[0_35px_90px_rgba(8,145,178,0.24)] sm:p-6">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="relative grid h-full gap-4 sm:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-cyan-500 text-base font-black text-[#061225]">DM</div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-white">Dr. Malika Karimova</p>
                <p className="mt-0.5 text-[10px] text-cyan-100/60">Cardiology • 12 years</p>
              </div>
              <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[9px] font-semibold text-emerald-300">Verified</span>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[10px]">
              <span className="text-white/45">Languages</span><span className="font-semibold text-white/80">UZ • RU • EN</span>
            </div>
          </div>

          <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.045] p-4">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">Available today</p>
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {["10:30", "12:00", "14:30", "16:00", "17:30", "19:00"].map((slot, index) => (
                <span key={slot} className={`rounded-xl border px-2 py-2 text-center text-[10px] font-bold ${index === 2 ? "border-cyan-300 bg-cyan-300 text-[#061225]" : "border-white/10 bg-white/[0.04] text-white/70"}`}>{slot}</span>
              ))}
            </div>
            <div className="mt-4 rounded-xl bg-gradient-to-r from-cyan-300 via-cyan-400 to-violet-400 px-4 py-2.5 text-center text-[10px] font-extrabold text-[#061225]">Book secure consultation</div>
          </div>
        </div>

        <div className="relative flex min-h-[260px] flex-col overflow-hidden rounded-2xl border border-cyan-200/15 bg-gradient-to-br from-[#0b203a] to-[#10132e] p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-[10px] font-semibold text-white/70">Secure video consultation</span>
            </div>
            <span className="text-[9px] text-white/35">18:42</span>
          </div>

          <div className="mt-4 flex flex-1 items-center justify-center rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_50%_36%,rgba(34,211,238,0.22),transparent_38%),linear-gradient(145deg,#0b2139,#11152e)]">
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-cyan-200/20 bg-cyan-300/10 text-xl font-black text-cyan-200">DM</div>
              <p className="mt-3 text-xs font-bold text-white">Doctor connected</p>
              <p className="mt-1 text-[9px] text-white/40">End-to-end care workflow</p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {["Mic", "Cam", "Chat"].map((label) => <span key={label} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-[9px] font-semibold text-white/70">{label}</span>)}
            <span className="rounded-full bg-pink-500 px-3 py-2 text-[9px] font-semibold text-white">End</span>
          </div>
        </div>
      </div>
    </div>
  );
}
