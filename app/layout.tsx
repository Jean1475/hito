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
    default: "Desarrollo Web, MVP y SaaS para Startups | Hito Studio",
    template: "%s | Hito Studio",
  },
  description:
    "Desarrollo web para empresas, MVP para validar tu idea y SaaS a medida. Studio de producto en Madrid para founders y equipos pequeños. Precio y plazo cerrados desde el día uno, sprints cortos, enviamos a producción — no a Figma.",
  keywords: [
    "desarrollo web para empresas",
    "desarrollo web para startups",
    "desarrollo de MVP para startups",
    "cuánto cuesta un MVP",
    "agencia de desarrollo SaaS",
    "desarrollo de SaaS a medida",
    "auditoría web para startups",
    "agencia de desarrollo web Madrid",
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
    title: "Desarrollo Web, MVP y SaaS para Startups | Hito Studio",
    description:
      "Desarrollo web para empresas, MVP para validar tu idea y SaaS a medida. Studio de producto en Madrid. Precio y plazo cerrados desde el día uno.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo Web, MVP y SaaS para Startups | Hito Studio",
    description:
      "Desarrollo web para empresas, MVP para validar tu idea y SaaS a medida. Studio de producto en Madrid.",
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
