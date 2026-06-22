"use client"

import { useSearchParams } from "next/navigation"
import { useMemo, useState } from "react"
import {
  Check,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Search,
  Send,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { allCategories, priceLabel, services, type ServiceCategory } from "@/lib/services"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

function Chip({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
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

export function BookingForm() {
  const params = useSearchParams()
  const preselected = params.get("servicio") ?? ""

  const [servicio, setServicio] = useState(preselected)
  const [category, setCategory] = useState<ServiceCategory | null>(null)
  const [q, setQ] = useState("")
  const [sent, setSent] = useState(false)

  const selectedService = services.find((s) => s.id === servicio)
  const canSubmit = !!servicio

  const filtered = useMemo(() => {
    return services.filter((s) => {
      if (category && s.category !== category) return false
      if (q && !`${s.name} ${s.description}`.toLowerCase().includes(q.toLowerCase()))
        return false
      return true
    })
  }, [category, q])

  // Live WhatsApp message — changes with the selected service
  const message = useMemo(() => {
    return [
      `Hola ${site.name} ✨`,
      `Quiero reservar:`,
      ``,
      selectedService
        ? `💆 Servicio: ${selectedService.name} (${priceLabel(selectedService)} · ${selectedService.duration})`
        : `💆 Servicio: —`,
    ].join("\n")
  }, [selectedService])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!canSubmit) return
    window.open(
      `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    )
    setSent(true)
  }

  if (sent) {
    return (
      <div className="bg-white rounded-3xl border border-border shadow-[0_8px_40px_rgba(180,60,60,0.08)] py-16 px-6 text-center animate-in fade-in zoom-in duration-500">
        <div className="inline-flex size-16 rounded-full bg-[#25D366]/12 items-center justify-center mb-5">
          <CheckCircle2 className="h-8 w-8 text-[#25D366]" strokeWidth={1.5} />
        </div>
        <h3 className="font-display text-2xl mb-2">¡Te llevamos a WhatsApp!</h3>
        <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">
          Tu mensaje ya está listo en el chat. Solo tienes que enviarlo y te
          confirmamos la disponibilidad en minutos.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors"
        >
          Hacer otra reserva
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid lg:grid-cols-[1fr_360px] gap-6 items-start">

      {/* ── LEFT: service picker ── */}
      <div className="bg-white rounded-3xl border border-border shadow-[0_8px_40px_rgba(180,60,60,0.08)] overflow-hidden">
        <div className="bg-gradient-to-r from-secondary/70 to-accent/40 px-6 md:px-8 py-5 border-b border-border">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
            ¿Qué quieres reservar?
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Toca un servicio y tu mensaje se arma solo.
          </p>
        </div>

        <div className="px-6 md:px-8 py-6 space-y-5">
          {/* Search + categories */}
          <div className="relative">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar servicio…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="bg-background pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Chip active={!category} onClick={() => setCategory(null)} label="Todos" />
            {allCategories.map((c) => (
              <Chip
                key={c.value}
                active={category === c.value}
                onClick={() => setCategory(c.value)}
                label={c.label}
              />
            ))}
          </div>

          {/* Service tiles */}
          {filtered.length === 0 ? (
            <p className="py-8 text-center text-sm text-muted-foreground">
              No encontramos servicios para esa búsqueda.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 gap-3 max-h-[520px] overflow-y-auto pr-1 -mr-1">
              {filtered.map((s) => {
                const active = servicio === s.id
                return (
                  <button
                    type="button"
                    key={s.id}
                    onClick={() => setServicio(s.id)}
                    className={cn(
                      "group relative text-left rounded-2xl border p-4 transition-all",
                      active
                        ? "border-primary bg-secondary/60 ring-1 ring-primary shadow-sm"
                        : "border-border bg-background hover:border-primary/50 hover:bg-secondary/30"
                    )}
                  >
                    <div
                      className={cn(
                        "absolute top-3 right-3 size-5 rounded-full grid place-items-center transition-all",
                        active ? "bg-primary text-primary-foreground scale-100" : "scale-0"
                      )}
                    >
                      <Check className="h-3 w-3" strokeWidth={2.5} />
                    </div>
                    {s.badge && (
                      <span className="inline-block mb-1.5 text-[9px] uppercase tracking-[0.2em] text-primary font-semibold">
                        {s.badge}
                      </span>
                    )}
                    <p className="text-sm font-medium text-foreground leading-snug pr-5">
                      {s.name}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {priceLabel(s)} · {s.duration}
                    </p>
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </div>

      {/* ── RIGHT: live WhatsApp preview + CTA + info ── */}
      <div className="space-y-4 lg:sticky lg:top-28">

        {/* WhatsApp preview */}
        <div className="rounded-3xl border border-border bg-white shadow-[0_8px_40px_rgba(180,60,60,0.08)] overflow-hidden">
          <div className="flex items-center gap-3 bg-[#075E54] px-5 py-3.5">
            <div className="size-9 rounded-full bg-white/15 grid place-items-center">
              <MessageCircle className="h-4.5 w-4.5 text-white" strokeWidth={1.5} />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-medium text-white">{site.name}</p>
              <p className="text-[11px] text-white/70">{site.whatsappDisplay}</p>
            </div>
          </div>

          {/* chat body */}
          <div className="bg-[#ECE5DD] px-4 py-5 min-h-[160px]">
            <div className="relative max-w-[92%] ml-auto rounded-xl rounded-tr-sm bg-[#DCF8C6] px-3.5 py-2.5 shadow-sm">
              <p className="whitespace-pre-wrap break-words text-[13px] leading-relaxed text-[#1f2c33]">
                {message}
              </p>
              <span className="block text-right text-[10px] text-[#1f2c33]/45 mt-1">
                vista previa
              </span>
            </div>
          </div>

          <div className="p-4 space-y-2">
            <Button
              type="submit"
              size="lg"
              disabled={!canSubmit}
              className="w-full gap-2.5 bg-[#25D366] text-white hover:bg-[#1ebe5d] hover:text-white shadow-[0_4px_20px_rgba(37,211,102,0.35)] disabled:shadow-none"
            >
              <Send className="h-4 w-4" strokeWidth={1.8} />
              Reservar por WhatsApp
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              {canSubmit
                ? "Se abrirá WhatsApp con tu mensaje listo."
                : "Elige un servicio para continuar."}
            </p>
          </div>
        </div>

        {/* Salon info */}
        <div className="rounded-3xl border border-border bg-white shadow-sm p-5 space-y-4">
          <div className="flex items-start gap-3">
            <div className="size-9 rounded-xl bg-primary/10 grid place-items-center shrink-0">
              <MapPin className="h-4 w-4 text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-0.5">Dirección</p>
              <p className="text-sm text-foreground leading-snug">{site.address}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="size-9 rounded-xl bg-primary/10 grid place-items-center shrink-0">
              <Clock className="h-4 w-4 text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-0.5">Horario</p>
              <p className="text-sm text-foreground">{site.hours}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="size-9 rounded-xl bg-primary/10 grid place-items-center shrink-0">
              <MessageCircle className="h-4 w-4 text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-0.5">Atención</p>
              <p className="text-sm text-foreground leading-snug">
                {site.whatsappDisplay}
                <br />
                {site.whatsappDisplay2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
