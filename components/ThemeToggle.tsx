"use client";

import { useTheme } from "@/lib/theme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button onClick={toggleTheme} aria-label="Dark/Light rejimni almashtirish" className="glass-toggle-track">
      <span
        className="glass-toggle-thumb flex items-center justify-center text-[10px]"
        style={{ left: isDark ? "calc(100% - 22px)" : "2px" }}
      >
        {isDark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}
