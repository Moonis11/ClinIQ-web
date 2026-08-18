"use client";

import { useState } from "react";
import { useLang, Lang } from "@/lib/i18n";

const LANGS: { key: Lang; label: string }[] = [
  { key: "uz", label: "UZ" },
  { key: "ru", label: "RU" },
  { key: "en", label: "EN" },
];

export default function LangMenu() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const current = LANGS.find((l) => l.key === lang)?.label || "UZ";

  return (
    <div className="relative">
      <button onClick={() => setOpen((v) => !v)} className="glass-btn-outline px-3 py-1.5 text-xs">
        {current} ▾
      </button>
      {open && (
        <div className="glass-card absolute right-0 top-full z-20 mt-2 w-24 overflow-hidden p-1">
          {LANGS.map((l) => (
            <button
              key={l.key}
              onClick={() => { setLang(l.key); setOpen(false); }}
              className={`block w-full rounded-lg px-3 py-1.5 text-left text-xs transition ${
                lang === l.key ? "bg-glass-teal/15 font-semibold" : "hover:bg-white/10"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
