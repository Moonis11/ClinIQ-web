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
      <button onClick={() => setOpen((v) => !v)} className="theme-select-button px-3 py-1.5 text-xs" aria-expanded={open} aria-haspopup="listbox">
        {current} ▾
      </button>
      {open && (
        <div className="theme-select-menu absolute right-0 top-full z-20 mt-2 w-24 overflow-hidden rounded-xl p-1 shadow-xl" role="listbox">
          {LANGS.map((l) => (
            <button
              key={l.key}
              onClick={() => { setLang(l.key); setOpen(false); }}
              className={`theme-select-option block w-full rounded-lg px-3 py-1.5 text-left text-xs transition ${
                lang === l.key ? "theme-select-option-active font-semibold" : ""
              }`}
              role="option"
              aria-selected={lang === l.key}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
