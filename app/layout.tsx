import type { Metadata, Viewport } from "next"
import { Suspense } from "react"
import { Fraunces, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloating } from "@/components/whatsapp-floating"
import { site } from "@/lib/site"

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
  title: {
    default: `${site.name} · ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL("https://garotassalon.spa"),
  openGraph: {
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
    locale: "es_PA",
    type: "website",
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
