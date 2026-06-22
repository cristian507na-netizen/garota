import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Galería",
  description:
    "Galería de trabajos de Garotas Salón & Spa en Bella Vista, Panamá City. Faciales, uñas, cabello, tintes y tratamientos reductores.",
  alternates: { canonical: "/galeria" },
}

const photos = [
  {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=80",
    alt: "Tratamiento facial",
    label: "Facial",
  },
  {
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&auto=format&fit=crop&q=80",
    alt: "Nail art diseños",
    label: "Nail Art",
  },
  {
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop&q=80",
    alt: "Masaje reductor",
    label: "Reductor",
  },
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&auto=format&fit=crop&q=80",
    alt: "Cabello y peluquería",
    label: "Cabello",
  },
  {
    src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&auto=format&fit=crop&q=80",
    alt: "Anti-edad facial",
    label: "Anti-Edad",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80",
    alt: "Depilación láser",
    label: "Láser",
  },
  {
    src: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=800&auto=format&fit=crop&q=80",
    alt: "Pedicure spa",
    label: "Pedicure",
  },
  {
    src: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=800&auto=format&fit=crop&q=80",
    alt: "Tratamiento spa",
    label: "Spa",
  },
  {
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&auto=format&fit=crop&q=80",
    alt: "Hidratación intensiva",
    label: "Hidratación",
  },
]

export default function GaleriaPage() {
  return (
    <div className="container-page py-12 md:py-16">
      <div className="mb-12">
        <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-3">
          Nuestros trabajos
        </p>
        <h1 className="font-display text-5xl md:text-7xl">Galería</h1>
        <p className="text-lg text-foreground/70 mt-4 max-w-xl">
          Una muestra de los tratamientos y resultados que realizamos día a día
          en Garotas Salón & Spa.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="group relative aspect-square overflow-hidden bg-muted rounded-xl"
            style={{ animationDelay: `${60 * i}ms` }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <span className="text-xs uppercase tracking-[0.25em] text-foreground bg-background/80 backdrop-blur px-3 py-1 rounded-full">
                {photo.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 text-center border-t border-border pt-16">
        <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-3">
          Síguenos
        </p>
        <h2 className="font-display text-4xl md:text-5xl mb-4">
          Más trabajos en Instagram
        </h2>
        <p className="text-foreground/70 mb-8 max-w-md mx-auto">
          Visita nuestro perfil para ver todos nuestros trabajos, antes y
          después, y últimas promos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <a
              href="https://www.instagram.com/garotassalon.spa/"
              target="_blank"
              rel="noreferrer"
            >
              Ver en Instagram
            </a>
          </Button>
          <Button asChild variant="outline">
            <Link href="/reservar">Reservar cita</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
