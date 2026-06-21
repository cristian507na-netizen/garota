import Link from "next/link"
import Image from "next/image"
import { Clock, Instagram, MapPin, MessageCircle } from "lucide-react"
import { site } from "@/lib/site"

export function Footer() {
  return (
    <footer id="contacto" className="mt-32 border-t border-border bg-secondary/60">
      <div className="container-page py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <span className="relative size-10 rounded-full border border-border bg-card overflow-hidden">
              <Image
                src="/logo.jpg"
                alt="Garotas Salón & Spa"
                fill
                sizes="40px"
                className="object-cover"
              />
            </span>
            <span className="font-display text-2xl text-foreground">
              Garotas<span className="text-primary">.</span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-foreground/70 leading-relaxed">
            Realizamos tu belleza con
            <br />
            productos de calidad premium.
          </p>
          <Link
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-foreground/70 hover:text-primary transition-colors"
          >
            <Instagram className="h-4 w-4" strokeWidth={1.5} />
            {site.instagramHandle}
          </Link>
        </div>

        {/* Servicios */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Servicios
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Todos los servicios", href: "/servicios" },
              { label: "Spa & Masajes", href: "/servicios?cat=spa" },
              { label: "Depilación con Cera", href: "/servicios?cat=depilacion" },
              { label: "Salón & Cabello", href: "/servicios?cat=salon" },
              { label: "Uñas", href: "/servicios?cat=nails" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Reservas
          </h4>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li>
              <Link href="/reservar" className="hover:text-primary transition-colors">
                Reservar cita online
              </Link>
            </li>
            <li>Confirmación por WhatsApp</li>
            <li>Cupo limitado por día</li>
            <li>
              <Link href="/galeria" className="hover:text-primary transition-colors">
                Ver galería de trabajos
              </Link>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Contacto
          </h4>
          <ul className="space-y-3 text-sm text-foreground/70">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" strokeWidth={1.5} />
              <span>{site.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary shrink-0" strokeWidth={1.5} />
              <span>{site.hours}</span>
            </li>
            <li>
              <Link
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
                {site.whatsappDisplay}
              </Link>
            </li>
            <li>
              <Link
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
                {site.instagramHandle}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {site.year} {site.name} · Todos los derechos reservados.</p>
          <p className="uppercase tracking-[0.25em]">Panamá City, Panamá</p>
        </div>
      </div>
    </footer>
  )
}
