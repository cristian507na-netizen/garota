import { Suspense } from "react"
import { BookingForm } from "@/components/booking-form"
import { site } from "@/lib/site"
import { MapPin, Clock, MessageCircle } from "lucide-react"

export const metadata = {
  title: "Reservar Cita",
  description:
    "Reserva tu cita en Garotas Salón & Spa. Elige tu servicio, fecha y hora. Te confirmamos por WhatsApp.",
}

export default function ReservarPage() {
  return (
    <div className="container-page py-12 md:py-16">
      {/* Header */}
      <div className="max-w-2xl mb-14">
        <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-3">
          Agenda en minutos
        </p>
        <h1 className="font-display text-5xl md:text-7xl leading-tight">
          Reserva
          <br />
          <span className="italic text-primary">tu cita</span>
        </h1>
        <p className="text-lg text-foreground/70 mt-4 max-w-lg">
          Completa el formulario y te contactaremos por WhatsApp para confirmar
          tu cita. Es rápido y fácil.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-start">
        {/* Form */}
        <Suspense fallback={<div className="h-64 flex items-center justify-center text-muted-foreground">Cargando…</div>}>
          <BookingForm />
        </Suspense>

        {/* Info sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-32">
          <div className="rounded-2xl border border-border bg-card p-6 space-y-5">
            <h3 className="font-display text-2xl">Información</h3>

            <div className="flex items-start gap-3 text-sm text-foreground/80">
              <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
              <span>{site.address}</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-foreground/80">
              <Clock className="h-4 w-4 text-primary shrink-0" strokeWidth={1.5} />
              <span>{site.hours}</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-foreground/80">
              <MessageCircle className="h-4 w-4 text-primary shrink-0" strokeWidth={1.5} />
              <span>{site.whatsappDisplay}</span>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Tu cita se confirma por WhatsApp. Por favor llega 5 minutos
                antes de tu hora agendada.
              </p>
            </div>
          </div>

          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 h-12 rounded-full border border-border text-sm uppercase tracking-[0.2em] text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
            Chat directo en WhatsApp
          </a>
        </aside>
      </div>
    </div>
  )
}
