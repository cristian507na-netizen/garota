"use client"

import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { CalendarDays, CheckCircle2 } from "lucide-react"
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

const timeSlots = [
  "8:00 am", "9:00 am", "10:00 am", "11:00 am",
  "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm",
  "4:00 pm", "5:00 pm", "6:00 pm",
]

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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const msg = [
      `Hola ${site.name} ✨, quiero reservar una cita:`,
      `• Servicio: ${selectedService?.name ?? servicio}`,
      `• Fecha: ${fecha}`,
      `• Hora: ${hora}`,
      `• Nombre: ${nombre}`,
      `• Teléfono/WhatsApp: ${telefono}`,
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
      <div className="max-w-md mx-auto text-center py-12 animate-in fade-in zoom-in duration-500">
        <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" strokeWidth={1} />
        <h3 className="font-display text-3xl mb-2">¡Solicitud enviada!</h3>
        <p className="text-muted-foreground">
          Te redirigimos a WhatsApp para confirmar tu cita. Te responderemos
          a la brevedad.
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
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto space-y-4"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Nombre completo *
          </label>
          <Input
            required
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            WhatsApp / Teléfono *
          </label>
          <Input
            required
            type="tel"
            placeholder="+507 6000-0000"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Servicio deseado *
        </label>
        <Select required value={servicio} onValueChange={setServicio}>
          <SelectTrigger>
            <SelectValue placeholder="Elige un servicio" />
          </SelectTrigger>
          <SelectContent>
            {services.map((s) => (
              <SelectItem key={s.id} value={s.id}>
                {s.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Fecha preferida *
          </label>
          <Input
            required
            type="date"
            value={fecha}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Hora preferida *
          </label>
          <Select required value={hora} onValueChange={setHora}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar hora" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Notas adicionales (opcional)
        </label>
        <Textarea
          placeholder="Alergias, preferencias, zona del cuerpo…"
          value={notas}
          onChange={(e) => setNotas(e.target.value)}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full gap-2"
        disabled={!nombre || !telefono || !servicio || !fecha || !hora}
      >
        <CalendarDays className="h-5 w-5" strokeWidth={1.5} />
        Solicitar cita por WhatsApp
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Te confirmaremos la disponibilidad por WhatsApp.
      </p>
    </form>
  )
}
