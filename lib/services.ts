export type ServiceCategory = "facial" | "reductor" | "nails" | "laser" | "spa"

export interface Service {
  id: string
  name: string
  category: ServiceCategory
  price: number
  duration: string
  description: string
  image: string
  featured?: boolean
  badge?: string
}

export const services: Service[] = [
  {
    id: "limpieza-facial",
    name: "Limpieza Facial Profunda",
    category: "facial",
    price: 45,
    duration: "60 min",
    description:
      "Tratamiento facial completo que elimina impurezas, puntos negros y células muertas. Piel limpia, radiante y rejuvenecida.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=80",
    featured: true,
  },
  {
    id: "facial-antienvejecimiento",
    name: "Facial Anti-Edad",
    category: "facial",
    price: 60,
    duration: "75 min",
    description:
      "Tratamiento de 4 sesiones con tecnología de radiofrecuencia para estimular el colágeno, reducir arrugas y lograr una piel más firme.",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&auto=format&fit=crop&q=80",
    featured: true,
    badge: "4 Sesiones",
  },
  {
    id: "lifting-facial",
    name: "Lifting de Rostro",
    category: "facial",
    price: 75,
    duration: "90 min",
    description:
      "Lifting facial no invasivo que reafirma y levanta los tejidos del rostro. Resultados visibles desde la primera sesión.",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&auto=format&fit=crop&q=80",
    featured: true,
  },
  {
    id: "hidratacion-intensiva",
    name: "Hidratación Intensiva",
    category: "facial",
    price: 50,
    duration: "60 min",
    description:
      "Tratamiento de hidratación profunda con activos premium que restauran la barrera cutánea y aportan luminosidad inmediata.",
    image:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "masaje-reductor",
    name: "Masaje Reductor",
    category: "reductor",
    price: 55,
    duration: "60 min",
    description:
      "Masaje corporal reafirmante y reductivo con técnicas especializadas para moldear la figura y reducir medidas.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop&q=80",
    featured: true,
  },
  {
    id: "paquete-reductor-8",
    name: "Paquete Reductor 8 Sesiones",
    category: "reductor",
    price: 200,
    duration: "60 min c/u",
    description:
      "Paquete completo de 8 sesiones de masaje reductor. Incluye manta térmica, masaje reductor y drenaje linfático.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&auto=format&fit=crop&q=80",
    featured: true,
    badge: "8 Sesiones",
  },
  {
    id: "paquete-reductor-10",
    name: "Paquete Reductor 10 Sesiones",
    category: "reductor",
    price: 250,
    duration: "60 min c/u",
    description:
      "Paquete premium de 10 sesiones. Incluye manta térmica, masaje reductor, drenajes linfáticos, maderoterapia, hidratación intensiva, antiedad y luminosidad.",
    image:
      "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=800&auto=format&fit=crop&q=80",
    badge: "¡Más Popular!",
  },
  {
    id: "maderoterapia",
    name: "Maderoterapia",
    category: "reductor",
    price: 50,
    duration: "60 min",
    description:
      "Técnica de masaje con instrumentos de madera que estimula la circulación, moldea el cuerpo y reduce la celulitis.",
    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "drenaje-linfatico",
    name: "Drenaje Linfático",
    category: "reductor",
    price: 50,
    duration: "60 min",
    description:
      "Masaje suave y rítmico que activa el sistema linfático, elimina toxinas y reduce la retención de líquidos.",
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "depilacion-laser",
    name: "Depilación Láser",
    category: "laser",
    price: 35,
    duration: "30–60 min",
    description:
      "Depilación con tecnología láser de última generación. Resultados permanentes y seguros para todo tipo de piel.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80",
    featured: true,
  },
  {
    id: "micropigmentacion",
    name: "Micropigmentación",
    category: "laser",
    price: 120,
    duration: "2–3 hrs",
    description:
      "Micropigmentación de cejas, labios y delineado permanente. Define y realza tus rasgos con resultados naturales.",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&auto=format&fit=crop&q=80",
    featured: true,
  },
  {
    id: "manicure-gel",
    name: "Manicure en Gel",
    category: "nails",
    price: 25,
    duration: "45 min",
    description:
      "Manicure completo con esmalte en gel de larga duración. Uñas perfectas por hasta 3 semanas.",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&auto=format&fit=crop&q=80",
    featured: true,
  },
  {
    id: "pedicure-spa",
    name: "Pedicure Spa",
    category: "nails",
    price: 30,
    duration: "60 min",
    description:
      "Pedicure completo con baño de pies, exfoliación, hidratación y esmalte. Un momento de relajación total.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=80&focalpoint=top",
  },
  {
    id: "nail-art",
    name: "Nail Art & Diseños",
    category: "nails",
    price: 35,
    duration: "60–90 min",
    description:
      "Diseños personalizados, nail art, decoraciones y estilos únicos. Tu imaginación es el límite.",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "corte-cabello",
    name: "Corte y Peinado",
    category: "spa",
    price: 20,
    duration: "45 min",
    description:
      "Corte profesional adaptado a tu tipo de cabello y estilo. Incluye lavado y secado.",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&auto=format&fit=crop&q=80",
    featured: true,
  },
  {
    id: "yoga-zumba",
    name: "Yoga & Zumba",
    category: "spa",
    price: 15,
    duration: "60 min",
    description:
      "Clases de yoga y zumba para completar tu rutina de bienestar. Consultar horarios disponibles.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80",
  },
]

export const allCategories: { value: ServiceCategory; label: string }[] = [
  { value: "facial", label: "Faciales" },
  { value: "reductor", label: "Reductor" },
  { value: "laser", label: "Láser & Micro" },
  { value: "nails", label: "Uñas" },
  { value: "spa", label: "Cabello & Spa" },
]

export function getService(id: string) {
  return services.find((s) => s.id === id)
}

export function getFeatured(limit = 6) {
  return services.filter((s) => s.featured).slice(0, limit)
}
