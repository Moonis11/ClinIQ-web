"use client";

import { useLang } from "@/lib/i18n";

const STEPS = [
  { num: "1", titleKey: "step_1_title", descKey: "step_1_desc" },
  { num: "2", titleKey: "step_2_title", descKey: "step_2_desc" },
  { num: "3", titleKey: "step_3_title", descKey: "step_3_desc" },
] as const;

export default function StepsSection() {
  const { t } = useLang();

  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {STEPS.map((step) => (
        <div key={step.num} className="glass-card p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-glass-teal text-sm font-bold text-white">
            {step.num}
          </div>
          <p className="mt-4 text-sm font-bold text-glass-textLight dark:text-glass-textDark">{t(step.titleKey)}</p>
          <p className="glass-muted mt-1.5 text-xs leading-relaxed">{t(step.descKey)}</p>
        </div>
      ))}
    </div>
  );
}
