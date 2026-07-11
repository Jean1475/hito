import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hitomarketing.com"),
  title: {
    default: "Hito — Desarrollo de MVP y SaaS en Madrid",
    template: "%s | Hito Studio",
  },
  description:
    "Studio de producto en Madrid. Construimos MVPs, SaaS y páginas web para founders y equipos pequeños. Embedded con tu equipo, sprints cortos, enviamos a producción — no a Figma.",
  keywords: [
    "studio producto digital Madrid",
    "desarrollo MVP Madrid",
    "agencia SaaS España",
    "desarrollo web Madrid",
    "producto digital founders",
    "embedded engineering",
  ],
  authors: [{ name: "Hito Studio" }],
  creator: "Hito Studio",
  publisher: "Hito Studio",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.hitomarketing.com",
    siteName: "Hito Studio",
    title: "Hito — Desarrollo de MVP y SaaS en Madrid",
    description:
      "Studio de producto en Madrid. MVPs, SaaS y páginas web para founders y equipos pequeños. Sprints cortos, enviamos a producción.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hito — Desarrollo de MVP y SaaS en Madrid",
    description:
      "Studio de producto en Madrid. MVPs, SaaS y páginas web para founders y equipos pequeños.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${archivo.variable} ${jetbrainsMono.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
