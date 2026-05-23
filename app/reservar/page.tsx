import { Suspense } from "react"
import { BookingForm } from "@/components/booking-form"
import { site } from "@/lib/site"
import { Clock, MapPin, MessageCircle, ShieldCheck, Sparkles, Zap } from "lucide-react"

export const metadata = {
  title: "Reservar Cita",
  description:
    "Reserva tu cita en Garotas Salón & Spa. Elige tu servicio, fecha y hora. Te confirmamos por WhatsApp.",
}

const trust = [
  { icon: Zap, label: "Confirmación en minutos" },
  { icon: MessageCircle, label: "Respuesta por WhatsApp" },
  { icon: ShieldCheck, label: "Sin pagos por adelantado" },
]

export default function ReservarPage() {
  return (
    <>
      {/* ── HERO HEADER ───────────────────────────────── */}
      <section className="relative overflow-hidden pt-6 pb-20">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-20 -right-20 size-96 rounded-full bg-primary/8 blur-3xl" />
        <div className="pointer-events-none absolute top-10 -left-16 size-64 rounded-full bg-secondary/80 blur-2xl" />

        <div className="container-page relative z-10">
          <p className="text-[11px] uppercase tracking-[0.45em] text-primary mb-5">
            Agenda en minutos
          </p>

          <h1 className="font-display leading-tight">
            <span className="block text-5xl md:text-7xl text-foreground">Reserva</span>
            <span className="block text-5xl md:text-7xl italic text-primary">tu cita</span>
          </h1>

          <p className="mt-5 text-base text-muted-foreground max-w-md leading-relaxed">
            Completa el formulario y te contactaremos por WhatsApp para confirmar
            tu cita. Rápido, fácil y sin complicaciones.
          </p>

          {/* Trust pills */}
          <div className="mt-8 flex flex-wrap gap-3">
            {trust.map((t) => (
              <span
                key={t.label}
                className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 text-xs font-medium text-foreground shadow-sm"
              >
                <t.icon className="h-3.5 w-3.5 text-primary" strokeWidth={1.5} />
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN GRID ───────────────────────────────── */}
      <section className="container-page pb-24">
        <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-start">

          {/* ─ FORM CARD ─ */}
          <div className="bg-white rounded-3xl border border-border shadow-[0_8px_40px_rgba(180,60,60,0.08)] overflow-hidden">
            {/* Card header strip */}
            <div className="bg-gradient-to-r from-secondary/70 to-accent/40 px-8 py-6 border-b border-border">
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
                Formulario de reserva
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Todos los campos con * son obligatorios
              </p>
            </div>

            <div className="px-6 md:px-8 py-8">
              <Suspense
                fallback={
                  <div className="h-64 flex items-center justify-center text-muted-foreground text-sm">
                    Cargando formulario…
                  </div>
                }
              >
                <BookingForm />
              </Suspense>
            </div>
          </div>

          {/* ─ SIDEBAR ─ */}
          <div className="space-y-4 lg:sticky lg:top-28">

            {/* Info card */}
            <div className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden">
              <div className="bg-primary px-6 py-5">
                <p className="text-primary-foreground/80 text-[11px] uppercase tracking-[0.3em] mb-1">
                  Garotas Salón &amp; Spa
                </p>
                <p className="text-primary-foreground font-display text-xl">
                  Información del salón
                </p>
              </div>

              <div className="p-6 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="size-9 rounded-xl bg-primary/10 grid place-items-center shrink-0">
                    <MapPin className="h-4 w-4 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-0.5">Dirección</p>
                    <p className="text-sm text-foreground leading-snug">{site.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="size-9 rounded-xl bg-primary/10 grid place-items-center shrink-0">
                    <Clock className="h-4 w-4 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-0.5">Horario</p>
                    <p className="text-sm text-foreground">{site.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="size-9 rounded-xl bg-primary/10 grid place-items-center shrink-0">
                    <MessageCircle className="h-4 w-4 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-0.5">WhatsApp</p>
                    <p className="text-sm text-foreground">{site.whatsappDisplay}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp direct */}
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2.5 w-full h-13 rounded-2xl border border-border bg-white text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-all shadow-sm py-4"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              Chat directo en WhatsApp
            </a>

            {/* Note */}
            <div className="rounded-2xl bg-secondary/60 border border-border p-5">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-4 w-4 text-primary" strokeWidth={1.5} />
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Nota</p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Tu cita queda pendiente de confirmación hasta que te contactemos por
                WhatsApp. Por favor llega 5 minutos antes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
