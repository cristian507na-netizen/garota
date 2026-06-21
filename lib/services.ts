import { formatPrice } from "@/lib/utils"

export type ServiceCategory = "spa" | "depilacion" | "salon" | "nails"

export interface Service {
  id: string
  name: string
  category: ServiceCategory
  price: number
  /** Render price as "desde $X" */
  fromPrice?: boolean
  /** No fixed price — render "Valoración previa" instead of a number */
  quote?: boolean
  /** Small note shown under the price (e.g. "Incluye blower") */
  priceNote?: string
  duration: string
  description: string
  image: string
  featured?: boolean
  badge?: string
}

// Reusable image pool (Unsplash — already allowed in next.config)
const u = (id: string, opts = "") =>
  `https://images.unsplash.com/photo-${id}?w=800&auto=format&fit=crop&q=80${opts}`

const img = {
  facial: u("1570172619644-dfd03ed5d881"),
  facial2: u("1487412947147-5cebf100ffc2"),
  facial3: u("1596755389378-c31d21fd1273"),
  lift: u("1512290923902-8a9f81dc236c"),
  massage: u("1544161515-4ab6ce6db874"),
  body1: u("1515377905703-c4788e51af15"),
  body2: u("1519751138087-5bf79df62d5b"),
  drain: u("1545205597-3d9d02c29597"),
  wax: u("1576091160550-2173dba999ef"),
  hair: u("1560066984-138dadb4c035"),
  nails: u("1604654894610-df63bc536371"),
  pedi: u("1570172619644-dfd03ed5d881", "&focalpoint=top"),
}

export const services: Service[] = [
  // ── ÁREA SPA ──────────────────────────────────────────
  {
    id: "masajes",
    name: "Masajes",
    category: "spa",
    price: 60,
    priceNote: "Por hora",
    duration: "60 min",
    description:
      "Masaje corporal relajante o terapéutico para liberar tensión, activar la circulación y renovar tu energía.",
    image: img.massage,
    featured: true,
  },
  {
    id: "faciales",
    name: "Faciales",
    category: "spa",
    price: 45,
    duration: "60 min",
    description:
      "Tratamiento facial completo que limpia, hidrata y revitaliza tu piel, dejándola radiante y rejuvenecida.",
    image: img.facial,
    featured: true,
  },
  {
    id: "paquete-reductor",
    name: "Paquetes Reductores",
    category: "spa",
    price: 350,
    fromPrice: true,
    badge: "Paquete completo",
    duration: "8–10 sesiones",
    description:
      "Paquetes reductores con manta térmica, masaje reductor, drenaje linfático y maderoterapia para moldear tu figura.",
    image: img.body2,
    featured: true,
  },

  // ── DEPILACIÓN CON CERA ───────────────────────────────
  {
    id: "depilacion-piernas",
    name: "Depilación · Piernas",
    category: "depilacion",
    price: 35,
    duration: "45 min",
    description:
      "Depilación con cera de piernas completas. Piel suave y libre de vello por mucho más tiempo.",
    image: img.wax,
    featured: true,
  },
  {
    id: "depilacion-media-pierna",
    name: "Depilación · Media Pierna",
    category: "depilacion",
    price: 15,
    duration: "30 min",
    description:
      "Depilación con cera de media pierna. Rápida, efectiva y con acabado suave.",
    image: img.body1,
  },
  {
    id: "depilacion-bikini",
    name: "Depilación · Bikini",
    category: "depilacion",
    price: 40,
    duration: "30 min",
    description:
      "Depilación con cera de la zona bikini con productos de calidad y máximo cuidado.",
    image: img.drain,
  },
  {
    id: "depilacion-axilas",
    name: "Depilación · Axilas",
    category: "depilacion",
    price: 10,
    duration: "15 min",
    description:
      "Depilación con cera de axilas, suave y precisa, para una piel impecable.",
    image: img.wax,
  },
  {
    id: "depilacion-cejas-bozo",
    name: "Depilación · Cejas y Bozo",
    category: "depilacion",
    price: 15,
    duration: "20 min",
    description:
      "Perfilado de cejas y bozo con cera para un acabado definido y un rostro armónico.",
    image: img.facial2,
  },

  // ── SALÓN ─────────────────────────────────────────────
  {
    id: "corte",
    name: "Cortes",
    category: "salon",
    price: 10,
    duration: "30 min",
    description:
      "Corte profesional adaptado a tu tipo de cabello y estilo. Incluye lavado.",
    image: img.hair,
  },
  {
    id: "blower",
    name: "Blower",
    category: "salon",
    price: 10,
    fromPrice: true,
    duration: "30 min",
    description:
      "Blower y secado con acabado de salón para lucir tu cabello con cuerpo y brillo.",
    image: img.lift,
  },
  {
    id: "maquillaje",
    name: "Maquillaje",
    category: "salon",
    price: 35,
    duration: "45 min",
    description:
      "Maquillaje profesional para eventos, sesiones o tu día especial. Realza tu belleza natural.",
    image: img.facial2,
  },
  {
    id: "peinados",
    name: "Peinados",
    category: "salon",
    price: 25,
    fromPrice: true,
    duration: "45 min",
    description:
      "Peinados para toda ocasión: recogidos, ondas, trenzas y más, a tu medida.",
    image: img.hair,
  },
  {
    id: "tintes",
    name: "Tintes",
    category: "salon",
    price: 45,
    priceNote: "Incluye blower",
    duration: "90 min",
    description:
      "Coloración completa del cabello con productos de calidad. Incluye blower de acabado.",
    image: img.lift,
    featured: true,
  },
  {
    id: "mechas",
    name: "Mechas",
    category: "salon",
    price: 85,
    fromPrice: true,
    priceNote: "Sujeto a valoración previa",
    duration: "2–3 hrs",
    description:
      "Mechas y babylights para iluminar tu cabello con dimensión y un acabado natural.",
    image: img.hair,
  },
  {
    id: "nanoplastia",
    name: "Nanoplastia",
    category: "salon",
    price: 60,
    fromPrice: true,
    priceNote: "Sujeto a valoración del cabello",
    duration: "2–3 hrs",
    description:
      "Tratamiento de nanoplastia que alisa, sella y aporta brillo al cabello sin formol.",
    image: img.facial3,
  },
  {
    id: "keratinas",
    name: "Keratinas",
    category: "salon",
    price: 0,
    quote: true,
    priceNote: "Sujeto a valoración del cabello",
    duration: "2–3 hrs",
    description:
      "Keratina que reduce el frizz, sella la cutícula y deja el cabello manejable y sedoso.",
    image: img.facial3,
  },
  {
    id: "tratamiento-hidratante",
    name: "Tratamientos Hidratantes",
    category: "salon",
    price: 35,
    duration: "45 min",
    description:
      "Tratamiento hidratante profundo que restaura la suavidad, el brillo y la vitalidad del cabello.",
    image: img.facial3,
  },

  // ── UÑAS ──────────────────────────────────────────────
  {
    id: "mani-pedi-regular",
    name: "Manicure y Pedicure Regular",
    category: "nails",
    price: 25,
    duration: "60 min",
    description:
      "Manicure y pedicure con esmalte tradicional. Manos y pies impecables y prolijos.",
    image: img.nails,
  },
  {
    id: "mani-pedi-gel",
    name: "Manicure y Pedicure en Gel",
    category: "nails",
    price: 35,
    badge: "Larga duración",
    duration: "75 min",
    description:
      "Manicure y pedicure en gel de larga duración. Uñas perfectas por hasta 3 semanas.",
    image: img.nails,
    featured: true,
  },
  {
    id: "unas-polygel",
    name: "Uñas Polygel",
    category: "nails",
    price: 35,
    fromPrice: true,
    duration: "75 min",
    description:
      "Uñas en polygel: resistentes, ligeras y con el largo y la forma que prefieras.",
    image: img.nails,
  },
  {
    id: "pedispa",
    name: "Pedispa",
    category: "nails",
    price: 25,
    duration: "60 min",
    description:
      "Pedicure spa con baño relajante, exfoliación e hidratación profunda. Un mimo para tus pies.",
    image: img.pedi,
  },
]

export const allCategories: { value: ServiceCategory; label: string }[] = [
  { value: "spa", label: "Spa" },
  { value: "depilacion", label: "Depilación" },
  { value: "salon", label: "Salón" },
  { value: "nails", label: "Uñas" },
]

export const categoryLabel: Record<ServiceCategory, string> = {
  spa: "Spa",
  depilacion: "Depilación",
  salon: "Salón",
  nails: "Uñas",
}

/** "$45", "desde $85" o "Valoración previa" según el servicio */
export function priceLabel(s: Service): string {
  if (s.quote) return "Valoración previa"
  return `${s.fromPrice ? "desde " : ""}${formatPrice(s.price)}`
}

export function getService(id: string) {
  return services.find((s) => s.id === id)
}

export function getFeatured(limit = 6) {
  return services.filter((s) => s.featured).slice(0, limit)
}
