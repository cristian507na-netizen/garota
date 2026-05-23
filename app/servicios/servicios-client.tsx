"use client"

import { useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Filter, X } from "lucide-react"
import {
  allCategories,
  services,
  type ServiceCategory,
} from "@/lib/services"
import { ServiceCard } from "@/components/service-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export function ServiciosClient() {
  const params = useSearchParams()
  const initialCat = params.get("cat") as ServiceCategory | null

  const [category, setCategory] = useState<ServiceCategory | null>(initialCat)
  const [q, setQ] = useState("")
  const [openFilters, setOpenFilters] = useState(false)

  const filtered = useMemo(() => {
    return services.filter((s) => {
      if (category && s.category !== category) return false
      if (q && !`${s.name} ${s.description}`.toLowerCase().includes(q.toLowerCase()))
        return false
      return true
    })
  }, [category, q])

  const reset = () => {
    setCategory(null)
    setQ("")
  }

  const FilterPanel = (
    <div className="space-y-8">
      <div>
        <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
          Buscar
        </p>
        <Input
          placeholder="Facial, láser, uñas…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      <div>
        <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
          Categoría
        </p>
        <div className="flex flex-wrap gap-2">
          <Chip
            active={!category}
            onClick={() => setCategory(null)}
            label="Todos"
          />
          {allCategories.map((c) => (
            <Chip
              key={c.value}
              active={category === c.value}
              onClick={() => setCategory(c.value)}
              label={c.label}
            />
          ))}
        </div>
      </div>

      <button
        onClick={reset}
        className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors"
      >
        Limpiar filtros
      </button>
    </div>
  )

  return (
    <div className="container-page py-12">
      <header className="mb-10 md:mb-14">
        <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-2">
          Catálogo
        </p>
        <h1 className="font-display text-5xl md:text-7xl">Servicios</h1>
        <p className="text-xl text-foreground/70 mt-3 max-w-2xl">
          {filtered.length} {filtered.length === 1 ? "servicio" : "servicios"}{" "}
          disponibles. Reserva tu cita en minutos.
        </p>
      </header>

      <div className="grid lg:grid-cols-[260px_1fr] gap-10">
        <aside className="hidden lg:block sticky top-32 self-start">
          {FilterPanel}
        </aside>

        <div>
          <div className="lg:hidden flex items-center justify-between mb-6">
            <Button variant="outline" onClick={() => setOpenFilters(true)} size="sm">
              <Filter className="h-4 w-4" />
              Filtros
            </Button>
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {filtered.length} resultados
            </span>
          </div>

          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-xl text-foreground/70">
                No hay servicios que coincidan con tu búsqueda.
              </p>
              <Button onClick={reset} variant="outline" className="mt-6">
                Limpiar filtros
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          )}
        </div>
      </div>

      {openFilters && (
        <div
          className="fixed inset-0 z-50 lg:hidden bg-background/80 backdrop-blur"
          onClick={() => setOpenFilters(false)}
        >
          <div
            className="absolute inset-y-0 left-0 w-[85%] max-w-sm bg-card border-r border-border p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs uppercase tracking-[0.25em] text-foreground">
                Filtros
              </span>
              <button
                onClick={() => setOpenFilters(false)}
                aria-label="Cerrar"
                className="p-2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            {FilterPanel}
            <Button onClick={() => setOpenFilters(false)} className="w-full mt-8">
              Ver {filtered.length} servicios
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

function Chip({
  active,
  onClick,
  label,
}: {
  active: boolean
  onClick: () => void
  label: string
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] rounded-full border transition-colors",
        active
          ? "bg-primary text-primary-foreground border-primary"
          : "border-border text-foreground/80 hover:border-primary hover:text-primary"
      )}
    >
      {label}
    </button>
  )
}
