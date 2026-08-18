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
          bgLight1: "#F4F7F6",
          bgLight2: "#EFF5F1",
          bgLight3: "#E9F2ED",
          bgDark1: "#10231C",
          bgDark2: "#12271F",
          bgDark3: "#16302A",

          textLight: "#12271F",
          textDark: "#F4F7F6",
          mutedLight: "#5B6E67",
          mutedDark: "#9FB3AC",

          cardLight: "rgba(255,255,255,0.85)",
          cardDark: "rgba(255,255,255,0.06)",
          borderLight: "rgba(31,111,92,0.22)",
          borderDark: "rgba(255,255,255,0.12)",
          inputLight: "rgba(255,255,255,0.55)",
          inputDark: "rgba(255,255,255,0.08)",

          accentLight: "#1F6F5C",
          accentDark: "#3F9C86",
          purple: "#164F42",
          purpleLight: "#3F9C86",
          teal: "#1F6F5C",
          tealLight: "#3F9C86",
          magenta: "#0F3A30",
          violet: "#164F42",
          danger: "#B5453D",
          warning: "#C89B3C",
          success: "#1F6F5C",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "sans-serif"],
        serif: ["Fraunces", "Georgia", "serif"],
      },
      boxShadow: {
        glassLight: "0 8px 32px rgba(31,38,68,0.12), inset 0 1px 0 rgba(255,255,255,0.4)",
        glassDark: "0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)",
        glowAccent: "0 0 16px -4px rgba(31,111,92,0.30)",
        glowPurple: "0 0 16px -4px rgba(31,111,92,0.25)",
      },
    },
  },
  plugins: [],
};
