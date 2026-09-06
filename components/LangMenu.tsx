"use client";

import { useState } from "react";
import { useSiteLanguage, SiteLang } from "@/lib/site-language";

const LANGS: { key: SiteLang; label: string }[] = [
  { key: "uz", label: "UZ" },
  { key: "uzc", label: "ЎЗ" },
  { key: "ru", label: "RU" },
  { key: "en", label: "EN" },
];

export default function LangMenu() {
  const { lang, setLang } = useSiteLanguage();
  const [open, setOpen] = useState(false);
  const current = LANGS.find((l) => l.key === lang)?.label || "UZ";

  return (
    <div className="relative">
      <button onClick={() => setOpen((v) => !v)} className="new-control language-control" aria-label="Tilni tanlash" aria-expanded={open} aria-haspopup="listbox">
        {current} ▾
      </button>
      {open && (
        <div className="new-language-menu absolute right-0 top-full z-20 mt-2 w-28 overflow-hidden rounded-xl p-1 shadow-xl" role="listbox">
          {LANGS.map((l) => (
            <button
              key={l.key}
              onClick={() => { setLang(l.key); setOpen(false); }}
              className={`new-language-option block w-full rounded-lg px-3 py-2 text-left text-xs transition ${
                lang === l.key ? "active font-semibold" : ""
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
