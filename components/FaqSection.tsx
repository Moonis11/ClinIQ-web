"use client";

import { useState } from "react";
import { useLang, TranslationKey } from "@/lib/i18n";

const FAQ_ITEMS: { qKey: TranslationKey; aKey: TranslationKey }[] = [
  { qKey: "faq_1_q", aKey: "faq_1_a" },
  { qKey: "faq_2_q", aKey: "faq_2_a" },
  { qKey: "faq_3_q", aKey: "faq_3_a" },
  { qKey: "faq_4_q", aKey: "faq_4_a" },
  { qKey: "faq_5_q", aKey: "faq_5_a" },
  { qKey: "faq_6_q", aKey: "faq_6_a" },
];

export default function FaqSection() {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.qKey} className="glass-card overflow-hidden">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-bold text-glass-textLight dark:text-glass-textDark">{t(item.qKey)}</span>
              <span
                className={`shrink-0 text-lg text-glass-teal transition-transform duration-200 dark:text-glass-accentDark ${isOpen ? "rotate-45" : ""}`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {isOpen && (
              <p className="glass-muted px-5 pb-5 text-sm leading-relaxed">{t(item.aKey)}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
