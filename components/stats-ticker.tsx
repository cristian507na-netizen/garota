"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const stats = [
  { value: "15+", label: "Servicios", color: "text-primary" },
  { value: "2k+", label: "Clientes satisfechas", color: "text-primary" },
  { value: "5+",  label: "Años de experiencia",  color: "text-primary" },
]

export function StatsTicker() {
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setActive((v) => (v + 1) % stats.length)
        setVisible(true)
      }, 350)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  const s = stats[active]

  return (
    <section className="border-b border-border bg-secondary/30">
      {/* ── MOBILE: cycling single stat ── */}
      <div className="md:hidden py-4">
        <div
          className={cn(
            "flex items-center justify-center gap-2.5 transition-all duration-350",
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
          )}
        >
          {/* Pulsing dot */}
          <span className="relative flex size-2 shrink-0">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary/40 animate-ping" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>

          <p className="text-sm text-foreground">
            <span className="font-display text-xl text-primary font-bold mr-1.5">
              {s.value}
            </span>
            <span className="uppercase tracking-[0.2em] text-[11px] text-muted-foreground">
              {s.label}
            </span>
          </p>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {stats.map((_, i) => (
            <button
              key={i}
              onClick={() => { setActive(i); setVisible(true) }}
              className={cn(
                "rounded-full transition-all duration-400 h-1.5",
                active === i
                  ? "w-5 bg-primary"
                  : "w-1.5 bg-border hover:bg-muted-foreground"
              )}
            />
          ))}
        </div>
      </div>

      {/* ── DESKTOP: all 3 with shimmer effect ── */}
      <div className="hidden md:flex container-page items-center justify-center py-4">
        {stats.map((t, i) => (
          <div key={t.label} className="flex items-center">
            <div className="group px-8 xl:px-12 py-1 text-center cursor-default select-none">
              <span className="font-display text-xl xl:text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                {t.value}
              </span>
              <span className="ml-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {t.label}
              </span>
            </div>
            {i < 2 && <div className="w-px h-4 bg-border" />}
          </div>
        ))}
      </div>
    </section>
  )
}
