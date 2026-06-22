export const site = {
  name: "Garotas Salón & Spa",
  tagline: "Salón & Spa · Panamá",
  taglineLong: "Spa · Masajes · Faciales · Depilación · Cabello · Uñas",
  description:
    "Garotas Salón & Spa en Bella Vista, Panamá City. Masajes, faciales, paquetes reductores, depilación con cera, cortes, tintes, mechas, keratinas y uñas. Sobre Av. Samuel Lewis, a pasos de Calle 50 y Vía España. Realzamos tu belleza con productos de calidad premium.",
  country: "Panamá",
  city: "Panamá City, Panamá",
  neighborhood: "Bella Vista",
  instagram: "https://www.instagram.com/garotassalon.spa/",
  instagramHandle: "@garotassalon.spa",
  threads: "https://www.threads.net/@garotassalon.spa",
  threadsHandle: "@garotassalon.spa",
  agendaPro: "https://garotassalonyspa.site.agendapro.com/pa",
  whatsappNumber: "50765139500",
  whatsapp: "https://wa.me/50765139500",
  whatsappDisplay: "+507 6513-9500",
  whatsappNumber2: "50768898158",
  whatsapp2: "https://wa.me/50768898158",
  whatsappDisplay2: "+507 6889-8158",
  email: "info@garotassalon.spa",
  address: "Edif. 7, Av. Samuel Lewis, Bella Vista, Panamá City",
  // Coordenadas estimadas desde el mapa (Av. Samuel Lewis, Bella Vista).
  // Reemplazar por el pin exacto del Google Business Profile.
  geo: { lat: 8.9847, lng: -79.522 },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=8.9847,-79.522",
  // Referencias cercanas — refuerzan el SEO local ("cerca de…").
  landmarks: "A pasos de Calle 50 y Vía España, cerca de Riu Plaza Panamá, Courtyard by Marriott y Multiplaza.",
  hours: "Lun–Vie 8am–7pm · Sáb 9am–7pm",
  year: new Date().getFullYear(),
} as const

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`
