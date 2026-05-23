export const site = {
  name: "Garotas Salón & Spa",
  tagline: "Salón & Spa · Panamá",
  taglineLong: "Cabello · Uñas · Faciales · Spa · Depilación Láser",
  description:
    "Garotas Salón & Spa en Panamá City. Faciales, masajes reductores, depilación láser, uñas y peluquería. Realzamos tu belleza con productos de calidad premium.",
  country: "Panamá",
  city: "Panamá City, Panamá",
  instagram: "https://www.instagram.com/garotassalon.spa/",
  instagramHandle: "@garotassalon.spa",
  whatsappNumber: "50765135000",
  whatsapp: "https://wa.me/50765135000",
  whatsappDisplay: "+507 6513-5000",
  email: "info@garotassalon.spa",
  address: "Edif. 7, Av. Samuel Lewis, Panamá City",
  hours: "Lun–Vie 8am–7pm · Sáb 9am–5pm",
  year: new Date().getFullYear(),
} as const

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`
