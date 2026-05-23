import Image from "next/image"
import Link from "next/link"
import { Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn, formatPrice } from "@/lib/utils"
import type { Service } from "@/lib/services"

export function ServiceCard({
  service,
  priority,
}: {
  service: Service
  priority?: boolean
}) {
  return (
    <div className={cn("group flex flex-col bg-card border border-border hover:border-primary/40 transition-all duration-300 rounded-xl overflow-hidden")}>
      <div className="relative aspect-4/3 overflow-hidden bg-muted">
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
        {service.badge && (
          <div className="absolute top-3 left-3">
            <Badge>{service.badge}</Badge>
          </div>
        )}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-foreground/90 bg-background/60 backdrop-blur px-2.5 py-1 rounded-full">
          <Clock className="h-3.5 w-3.5" strokeWidth={1.5} />
          {service.duration}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1 gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-1">
            {service.category === "facial" && "Faciales"}
            {service.category === "reductor" && "Reductor"}
            {service.category === "laser" && "Láser & Micro"}
            {service.category === "nails" && "Uñas"}
            {service.category === "spa" && "Cabello & Spa"}
          </p>
          <h3 className="font-display text-xl leading-tight text-foreground group-hover:text-primary transition-colors">
            {service.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2">
            {service.description}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between pt-3 border-t border-border">
          <p className="font-display text-2xl text-foreground">
            desde {formatPrice(service.price)}
          </p>
          <Button asChild size="sm">
            <Link href={`/reservar?servicio=${service.id}`}>
              Reservar
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
