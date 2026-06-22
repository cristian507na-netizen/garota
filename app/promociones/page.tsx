import Link from "next/link"
import { ArrowRight, MessageCircle, Sparkles, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { site, waLink } from "@/lib/site"

export const metadata = {
  title: "Promociones",
  description:
    "Promociones y ofertas exclusivas de Garotas Salón & Spa en Bella Vista, Panamá City. Muy pronto: descuentos y paquetes especiales en spa, faciales, uñas y cabello.",
  alternates: { canonical: "/promociones" },
}

export default function PromocionesPage() {
  return (
    <section className="container-page py-16 md:py-24">
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-secondary/70 via-background to-accent/40 px-6 py-16 md:px-16 md:py-24">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-24 -right-16 size-80 rounded-full bg-primary/8 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-12 size-64 rounded-full bg-primary/6 blur-2xl" />

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/70 backdrop-blur px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] text-primary font-medium mb-6">
            <Tag className="h-3.5 w-3.5" strokeWidth={1.5} />
            Ofertas exclusivas
          </span>

          <h1 className="font-display text-6xl md:text-8xl leading-[0.95]">
            Promociones
          </h1>

          <div className="mt-6 inline-flex items-center gap-2.5">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full rounded-full bg-primary/50 animate-ping" />
              <span className="relative size-2.5 rounded-full bg-primary" />
            </span>
            <p className="text-sm uppercase tracking-[0.35em] text-primary font-semibold">
              Próximamente
            </p>
          </div>

          <p className="mt-7 text-base md:text-lg text-muted-foreground leading-relaxed">
            Estamos preparando descuentos y paquetes especiales para consentirte.
            Déjanos tu WhatsApp y serás la primera en enterarte cuando estén
            disponibles.
          </p>

          {/* Teaser locked cards */}
          <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl border border-dashed border-primary/25 bg-white/40 backdrop-blur grid place-items-center"
              >
                <Sparkles className="h-7 w-7 text-primary/40" strokeWidth={1.5} />
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <a
                href={waLink(
                  `Hola ${site.name} ✨, quiero enterarme de las promociones cuando estén disponibles.`
                )}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
                Avísame por WhatsApp
              </a>
            </Button>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-foreground hover:text-primary transition-colors"
            >
              Ver servicios
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
