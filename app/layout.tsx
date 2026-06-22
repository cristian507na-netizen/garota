import type { Metadata, Viewport } from "next"
import { Suspense } from "react"
import { Fraunces, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloating } from "@/components/whatsapp-floating"
import { site } from "@/lib/site"
import { localBusinessSchema, websiteSchema } from "@/lib/structured-data"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-stack",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display-stack",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://garotassalon.spa"),
  title: {
    default: `${site.name} · Salón & Spa en Panamá City`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "salón y spa Panamá",
    "spa en Bella Vista Panamá",
    "salón de belleza Bella Vista",
    "salón de belleza Av. Samuel Lewis",
    "spa cerca de Calle 50",
    "salón cerca de Vía España",
    "Obarrio",
    "Marbella",
    "Punta Pacífica",
    "El Cangrejo",
    "faciales Panamá",
    "masajes Panamá",
    "depilación con cera Panamá",
    "uñas en gel Panamá",
    "manicure y pedicure Panamá",
    "tintes y mechas Panamá",
    "keratina Panamá",
    "nanoplastia Panamá",
    "salón de belleza cerca de mí",
  ],
  alternates: { canonical: "/" },
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: "Beauty & Spa",
  openGraph: {
    type: "website",
    locale: "es_PA",
    url: "https://garotassalon.spa",
    siteName: site.name,
    title: `${site.name} · Salón & Spa en Panamá City`,
    description: site.description,
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · Salón & Spa en Panamá City`,
    description: site.description,
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  other: {
    "geo.region": "PA-8",
    "geo.placename": "Bella Vista, Panamá City",
    "geo.position": `${site.geo.lat};${site.geo.lng}`,
    ICBM: `${site.geo.lat}, ${site.geo.lng}`,
  },
}

export const viewport: Viewport = {
  themeColor: "#fdf8f7",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="bg-background text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        <main className="min-h-[60vh] pt-20 md:pt-28">{children}</main>
        <Footer />
        <WhatsAppFloating />
        <Analytics />
      </body>
    </html>
  )
}
