import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme";
import { LangProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "ClinIQ — One continuous record. Every step of care.",
  description:
    "ClinIQ connects patients, clinicians and clinics through a secure, clinician-controlled clinical intelligence platform built in Uzbekistan.",
  openGraph: {
    title: "ClinIQ — One continuous record. Every step of care.",
    description: "Secure clinical intelligence connecting patients, clinicians and clinics.",
    siteName: "ClinIQ",
    locale: "uz_UZ",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const THEME_INIT_SCRIPT = `
(function() {
  try {
    var theme = localStorage.getItem('cliniq_website_theme') || 'light';
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
