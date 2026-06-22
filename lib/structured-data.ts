import { services } from "@/lib/services"
import { site } from "@/lib/site"

const BASE = "https://garotassalon.spa"

// Coordenadas y referencias centralizadas en site.ts
const GEO = site.geo

/**
 * LocalBusiness (BeautySalon) — la señal #1 para búsquedas locales y "cerca de mí".
 * Incluye NAP, geolocalización, horarios, redes y catálogo de servicios con precio.
 */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "@id": `${BASE}/#business`,
  name: site.name,
  description: site.description,
  url: BASE,
  image: `${BASE}/logo.jpg`,
  logo: `${BASE}/logo.jpg`,
  telephone: `+${site.whatsappNumber}`,
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Efectivo, Tarjeta, Transferencia",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Samuel Lewis, Edif. 7, Bella Vista",
    addressLocality: "Panamá",
    addressRegion: "Provincia de Panamá",
    addressCountry: "PA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: GEO.lat,
    longitude: GEO.lng,
  },
  hasMap: site.mapsUrl,
  areaServed: [
    { "@type": "City", name: "Panamá City" },
    "Bella Vista",
    "Obarrio",
    "Marbella",
    "El Cangrejo",
    "San Francisco",
    "Punta Pacífica",
    "Costa del Este",
    "Calle 50",
    "Vía España",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "19:00",
    },
  ],
  sameAs: [site.instagram, site.threads],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Garotas Salón & Spa",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      name: s.name,
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.description,
      },
      ...(s.quote
        ? {}
        : {
            price: s.price,
            priceCurrency: "USD",
            ...(s.fromPrice && {
              priceSpecification: {
                "@type": "PriceSpecification",
                minPrice: s.price,
                priceCurrency: "USD",
              },
            }),
          }),
    })),
  },
} as const

/** Breadcrumb genérico para reforzar la estructura del sitio. */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE}/#website`,
  url: BASE,
  name: site.name,
  inLanguage: "es-PA",
  publisher: { "@id": `${BASE}/#business` },
} as const
