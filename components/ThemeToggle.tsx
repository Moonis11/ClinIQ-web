"use client";

import { useTheme } from "@/lib/theme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button onClick={toggleTheme} aria-label="Dark/Light rejimni almashtirish" className="new-control mode-control">
      <span>{isDark ? "☾" : "☼"}</span><b>{isDark ? "Dark" : "Light"}</b>
    </button>
  );
}
