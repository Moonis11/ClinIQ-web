import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme";
import { LangProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "ClinIQ - AI asosidagi klinik intellekt platformasi",
  description:
    "ClinIQ - O'zbekistondagi klinikalar va bemorlar uchun sun'iy intellekt yordamida ishlaydigan tibbiy tarix, navbat, AI maslahat va favqulodda tibbiy karta platformasi.",
  openGraph: {
    title: "ClinIQ - AI asosidagi klinik intellekt platformasi",
    description: "Bitta bog'langan yo'l. Aqlliroq sog'liqni saqlash.",
    siteName: "ClinIQ",
    locale: "uz_UZ",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const THEME_INIT_SCRIPT = `
(function() {
  try {
    var theme = localStorage.getItem('cliniq_website_theme') || 'dark';
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
