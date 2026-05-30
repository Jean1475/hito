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
  metadataBase: new URL("https://hitostudio.es"),
  title: {
    default: "Hito — Studio de producto digital en Madrid",
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
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://hitostudio.es",
    siteName: "Hito Studio",
    title: "Hito — Studio de producto digital en Madrid",
    description:
      "Studio de producto en Madrid. MVPs, SaaS y páginas web para founders y equipos pequeños. Sprints cortos, enviamos a producción.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hito Studio — Producto digital desde Madrid",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hito — Studio de producto digital en Madrid",
    description:
      "Studio de producto en Madrid. MVPs, SaaS y páginas web para founders y equipos pequeños.",
    images: ["/og-image.png"],
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
