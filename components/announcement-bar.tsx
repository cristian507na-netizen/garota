import { Clock, MapPin, ShieldCheck, Sparkles, Star } from "lucide-react"

const messages = [
  { icon: Sparkles, text: "Faciales · Reductor · Depilación Láser" },
  { icon: Clock, text: "Reserva tu cita hoy · Cupo limitado" },
  { icon: Star, text: "Diseños de uñas personalizados" },
  { icon: MapPin, text: "Av. Samuel Lewis · Panamá City" },
  { icon: ShieldCheck, text: "Productos de calidad premium" },
  { icon: Sparkles, text: "Pedicure · Manicure · Nail Art · Spa" },
]

export function AnnouncementBar() {
  const items = [...messages, ...messages]
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] overflow-hidden bg-secondary text-secondary-foreground border-b border-border">
      <div className="flex animate-marquee whitespace-nowrap py-2">
        {items.map((c, i) => (
          <div
            key={i}
            className="mx-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.25em]"
          >
            <c.icon className="h-3 w-3 text-primary" strokeWidth={1.5} />
            <span>{c.text}</span>
            <span className="ml-6 text-primary/60">·</span>
          </div>
        ))}
      </div>
    </div>
  )
}
