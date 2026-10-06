import type { Metadata, Viewport } from "next";
import { Sora, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import { site, contact } from "@/lib/site";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Opus LT Engenharia — Construção, Gerenciamento de Obras e Instalações",
    template: "%s — Opus LT Engenharia",
  },
  description: site.description,
  keywords: [
    "construtora",
    "gerenciamento de obras",
    "construção civil",
    "retrofit corporativo",
    "instalações elétricas",
    "infraestrutura de dados",
    "rede estruturada",
    "São Paulo",
  ],
  openGraph: {
    title: "Opus LT Engenharia — Construção, Gerenciamento de Obras e Instalações",
    description: site.description,
    locale: "pt_BR",
    type: "website",
    siteName: site.name,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0d1217",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: site.name,
  url: site.url,
  logo: `${site.url}/logo.svg`,
  description: site.description,
  telephone: `+${contact.whatsappNumber}`,
  email: contact.email,
  areaServed: "Brasil",
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${sora.variable} ${inter.variable} ${instrument.variable} bg-ink font-body text-bone antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <SmoothScroll>{children}</SmoothScroll>
        <Cursor />
        <div className="noise-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
