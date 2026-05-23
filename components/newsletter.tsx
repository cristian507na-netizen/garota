"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)

  return (
    <section className="bg-secondary py-24">
      <div className="container-page max-w-2xl text-center">
        <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground mb-4">
          Newsletter · Sin spam
        </p>
        <h2 className="font-display text-5xl md:text-6xl text-foreground">
          Recibe promos y recordatorios
        </h2>
        <p className="mt-4 text-lg text-foreground/70">
          Ofertas exclusivas, nuevos servicios y recordatorios de cita directo
          a tu inbox.
        </p>
        {done ? (
          <p className="mt-8 text-primary font-display text-2xl">
            ¡Gracias! Pronto tendrás noticias de nosotras ✨
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              if (email.trim()) setDone(true)
            }}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              required
              placeholder="tu@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-background"
            />
            <Button type="submit" size="lg">
              Suscribirme
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
