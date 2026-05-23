"use client"

import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { CalendarDays, CheckCircle2, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/services"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

const timeSlots = [
  "8:00 am", "9:00 am", "10:00 am", "11:00 am",
  "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm",
  "4:00 pm", "5:00 pm", "6:00 pm",
]

function FormLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground mb-2">
      {children}
      {required && <span className="text-primary ml-1">*</span>}
    </label>
  )
}

function Step({ n, label, active }: { n: number; label: string; active: boolean }) {
  return (
    <div className={cn("flex items-center gap-2.5 mb-6", !active && "opacity-40")}>
      <span className={cn(
        "inline-flex size-6 rounded-full text-[11px] font-bold items-center justify-center shrink-0 transition-colors",
        active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
      )}>
        {n}
      </span>
      <p className="text-sm font-medium text-foreground uppercase tracking-[0.15em]">{label}</p>
      <div className="flex-1 h-px bg-border" />
    </div>
  )
}

export function BookingForm() {
  const params = useSearchParams()
  const preselected = params.get("servicio") ?? ""

  const [nombre, setNombre] = useState("")
  const [telefono, setTelefono] = useState("")
  const [servicio, setServicio] = useState(preselected)
  const [fecha, setFecha] = useState("")
  const [hora, setHora] = useState("")
  const [notas, setNotas] = useState("")
  const [sent, setSent] = useState(false)

  const selectedService = services.find((s) => s.id === servicio)
  const canSubmit = nombre && telefono && servicio && fecha && hora

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!canSubmit) return
    const msg = [
      `Hola ${site.name} ✨, quiero reservar una cita:`,
      `• Servicio: ${selectedService?.name ?? servicio}`,
      `• Fecha: ${fecha}`,
      `• Hora: ${hora}`,
      `• Nombre: ${nombre}`,
      `• Teléfono: ${telefono}`,
      notas ? `• Notas: ${notas}` : null,
    ]
      .filter(Boolean)
      .join("\n")

    window.open(
      `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(msg)}`,
      "_blank"
    )
    setSent(true)
  }

  if (sent) {
    return (
      <div className="py-10 text-center animate-in fade-in zoom-in duration-500">
        <div className="inline-flex size-16 rounded-full bg-primary/10 items-center justify-center mb-5">
          <CheckCircle2 className="h-8 w-8 text-primary" strokeWidth={1.5} />
        </div>
        <h3 className="font-display text-2xl mb-2">¡Solicitud enviada!</h3>
        <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">
          Te redirigimos a WhatsApp. Te confirmaremos la cita a la brevedad.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors"
        >
          Nueva reserva
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">

      {/* ── Paso 1: Datos personales ── */}
      <div>
        <Step n={1} label="Tus datos" active />
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <FormLabel required>Nombre completo</FormLabel>
            <Input
              required
              placeholder="Tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="bg-background"
            />
          </div>
          <div>
            <FormLabel required>WhatsApp / Teléfono</FormLabel>
            <Input
              required
              type="tel"
              placeholder="+507 6000-0000"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="bg-background"
            />
          </div>
        </div>
      </div>

      {/* ── Paso 2: Servicio ── */}
      <div>
        <Step n={2} label="Elige tu servicio" active={!!nombre && !!telefono} />
        <FormLabel required>Servicio deseado</FormLabel>
        <Select required value={servicio} onValueChange={setServicio}>
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="Selecciona un servicio…" />
          </SelectTrigger>
          <SelectContent className="z-[200]">
            {services.map((s) => (
              <SelectItem key={s.id} value={s.id}>
                {s.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {selectedService && (
          <div className="mt-3 flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary/60 border border-border animate-in fade-in duration-300">
            <span className="size-2 rounded-full bg-primary shrink-0" />
            <p className="text-xs text-muted-foreground">
              <span className="font-medium text-foreground">{selectedService.name}</span>
              {" · "}desde ${selectedService.price}
              {" · "}{selectedService.duration}
            </p>
          </div>
        )}
      </div>

      {/* ── Paso 3: Fecha y hora ── */}
      <div>
        <Step n={3} label="Fecha y hora" active={!!servicio} />
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <FormLabel required>Fecha preferida</FormLabel>
            <Input
              required
              type="date"
              value={fecha}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setFecha(e.target.value)}
              className="bg-background"
            />
          </div>
          <div>
            <FormLabel required>Hora preferida</FormLabel>
            <Select required value={hora} onValueChange={setHora}>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Seleccionar hora" />
              </SelectTrigger>
              <SelectContent className="z-[200]">
                {timeSlots.map((t) => (
                  <SelectItem key={t} value={t}>{t}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-4">
          <FormLabel>Notas adicionales</FormLabel>
          <Textarea
            placeholder="Alergias, preferencias, zona del cuerpo…"
            value={notas}
            onChange={(e) => setNotas(e.target.value)}
            className="bg-background resize-none"
            rows={3}
          />
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="pt-2">
        <Button
          type="submit"
          size="lg"
          disabled={!canSubmit}
          className="w-full gap-2.5 shadow-[0_4px_20px_rgba(180,60,60,0.25)] disabled:shadow-none"
        >
          <CalendarDays className="h-4 w-4" strokeWidth={1.5} />
          Solicitar cita por WhatsApp
          <ChevronRight className="h-4 w-4 ml-auto" strokeWidth={1.5} />
        </Button>
        <p className="text-center text-xs text-muted-foreground mt-3">
          Te confirmaremos la disponibilidad por WhatsApp
        </p>
      </div>
    </form>
  )
}
