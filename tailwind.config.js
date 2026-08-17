/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: {
          bgLight1: "#EEF1FA",
          bgLight2: "#F7EEF5",
          bgLight3: "#EAFBF7",
          bgDark1: "#080B14",
          bgDark2: "#0E1525",
          bgDark3: "#131B2E",

          textLight: "#182133",
          textDark: "#F2F5FF",
          mutedLight: "#70809B",
          mutedDark: "#A5AEC5",

          cardLight: "rgba(255,255,255,0.85)",
          cardDark: "rgba(255,255,255,0.06)",
          borderLight: "rgba(20,199,176,0.22)",
          borderDark: "rgba(255,255,255,0.12)",
          inputLight: "rgba(255,255,255,0.55)",
          inputDark: "rgba(255,255,255,0.08)",

          accentLight: "#2E9DA0",
          accentDark: "#49F5F7",
          purple: "#6D5DFB",
          purpleLight: "#8B7CFF",
          teal: "#14C7B0",
          tealLight: "#34E5C9",
          magenta: "#EC4899",
          violet: "#8B5CF6",
          danger: "#FF5C72",
          warning: "#F4A52A",
          success: "#00C896",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "sans-serif"],
        serif: ["Fraunces", "Georgia", "serif"],
      },
      boxShadow: {
        glassLight: "0 8px 32px rgba(31,38,68,0.12), inset 0 1px 0 rgba(255,255,255,0.4)",
        glassDark: "0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)",
        glowAccent: "0 0 24px -4px rgba(73,245,247,0.35)",
        glowPurple: "0 0 24px -4px rgba(139,92,246,0.35)",
      },
    },
  },
  plugins: [],
};
