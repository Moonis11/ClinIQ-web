import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme";
import { LangProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "ClinIQ — One continuous record. Every step of care.",
  description:
    "ClinIQ connects patients, clinicians and clinics through a secure, clinician-controlled clinical intelligence platform built in Uzbekistan.",
  icons: {
    icon: [
      { url: "/cliniq-logo.jpeg?v=20260828", type: "image/jpeg", sizes: "640x640" },
      { url: "/favicon.ico?v=20260828", type: "image/x-icon", sizes: "64x64" },
    ],
    shortcut: "/cliniq-logo.jpeg?v=20260828",
    apple: "/cliniq-logo.jpeg?v=20260828",
  },
  openGraph: {
    title: "ClinIQ — One continuous record. Every step of care.",
    description: "Secure clinical intelligence connecting patients, clinicians and clinics.",
    siteName: "ClinIQ",
    locale: "uz_UZ",
    type: "website",
    images: ["https://cliniq-medica.munisanematova2021.chatgpt.site/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClinIQ — One continuous record. Every step of care.",
    description: "Secure clinical intelligence connecting patients, clinicians and clinics.",
    images: ["https://cliniq-medica.munisanematova2021.chatgpt.site/og.png"],
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
        <link rel="icon" href="/cliniq-logo.jpeg?v=20260828" type="image/jpeg" />
        <link rel="shortcut icon" href="/cliniq-logo.jpeg?v=20260828" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/cliniq-logo.jpeg?v=20260828" />
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
