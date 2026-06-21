import { Suspense } from "react"
import { BookingForm } from "@/components/booking-form"
import { MessageCircle, ShieldCheck, Zap } from "lucide-react"

export const metadata = {
  title: "Reservar Cita",
  description:
    "Reserva tu cita en Garotas Salón & Spa. Elige tu servicio y te llega listo a WhatsApp en segundos.",
}

const trust = [
  { icon: Zap, label: "Reserva en segundos" },
  { icon: MessageCircle, label: "Directo a WhatsApp" },
  { icon: ShieldCheck, label: "Sin pagos por adelantado" },
]

export default function ReservarPage() {
  return (
    <>
      {/* ── HERO HEADER ───────────────────────────────── */}
      <section className="relative overflow-hidden pt-6 pb-12">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-20 -right-20 size-96 rounded-full bg-primary/8 blur-3xl" />
        <div className="pointer-events-none absolute top-10 -left-16 size-64 rounded-full bg-secondary/80 blur-2xl" />

        <div className="container-page relative z-10">
          <p className="text-[11px] uppercase tracking-[0.45em] text-primary mb-5">
            Agenda en segundos
          </p>

          <h1 className="font-display leading-tight">
            <span className="block text-5xl md:text-7xl text-foreground">Reserva</span>
            <span className="block text-5xl md:text-7xl italic text-primary">tu cita</span>
          </h1>

          <p className="mt-5 text-base text-muted-foreground max-w-md leading-relaxed">
            Elige el servicio que quieres y tu mensaje se arma solo. Lo envías por
            WhatsApp y te confirmamos la disponibilidad al instante.
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

      {/* ── BOOKING ───────────────────────────────── */}
      <section className="container-page pb-24">
        <Suspense
          fallback={
            <div className="h-64 flex items-center justify-center text-muted-foreground text-sm">
              Cargando reserva…
            </div>
          }
        >
          <BookingForm />
        </Suspense>
      </section>
    </>
  )
}
