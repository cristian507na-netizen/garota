"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Instagram, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { site } from "@/lib/site"
import { Button } from "@/components/ui/button"

const nav = [
  { label: "Inicio",       href: "/" },
  { label: "Servicios",    href: "/servicios" },
  { label: "Promociones",  href: "/promociones" },
  { label: "Reservar",     href: "/reservar" },
  { label: "Galería",      href: "/galeria" },
  { label: "Contacto",     href: "/#contacto" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    if (href.startsWith("/#")) return false
    return pathname.startsWith(href)
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-4 left-0 right-0 z-50 mx-auto max-w-7xl px-4 animate-in fade-in slide-in-from-top-4 duration-700"
        )}
      >
        <div
          className={cn(
            "relative group flex items-center justify-between gap-3 h-16 md:h-20 rounded-full border border-border bg-white/80 px-3 md:px-6 backdrop-blur-md shadow-[0_4px_24px_rgba(180,60,60,0.10)] transition-all duration-500",
            scrolled &&
              "bg-white/95 backdrop-blur-xl scale-[0.98] shadow-[0_6px_32px_rgba(180,60,60,0.14)]"
          )}
        >
          {/* ambient glow on scroll */}
          <div
            className={cn(
              "pointer-events-none absolute inset-0 -z-10 rounded-full transition-opacity duration-700",
              scrolled ? "opacity-100 bg-primary/8 blur-2xl" : "opacity-0"
            )}
            aria-hidden
          />
          {/* sheen sweep */}
          <div
            className="pointer-events-none absolute inset-0 -z-0 rounded-full overflow-hidden"
            aria-hidden
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-linear-to-r from-transparent via-primary/8 to-transparent [transition:transform_1400ms_ease]" />
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 relative z-10 shrink-0"
          >
            <span className="relative grid place-items-center size-10 md:size-12 rounded-full border border-border bg-card overflow-hidden">
              <Image
                src="/logo.jpg"
                alt="Garotas Salón & Spa"
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </span>
            <span className="font-display text-lg sm:text-xl text-foreground leading-none">
              Garotas<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center gap-1 relative z-10">
            {nav.map((item, i) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{ animationDelay: `${80 * i}ms` }}
                  className={cn(
                    "relative px-3 py-2 text-xs uppercase tracking-[0.25em] transition-colors animate-in fade-in slide-in-from-top-2 duration-500",
                    active
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {item.label}
                  {active && (
                    <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-primary shadow-[0_0_8px_var(--color-primary)]" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 relative z-10">
            <Link
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hidden sm:grid place-items-center size-10 rounded-full text-foreground/70 hover:text-primary transition-all hover:rotate-[12deg]"
            >
              <Instagram className="h-5 w-5" strokeWidth={1.5} />
            </Link>

            <Button asChild size="sm" className="hidden md:inline-flex">
              <Link href="/reservar">Reservar cita</Link>
            </Button>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Abrir menú"
              className="lg:hidden grid place-items-center size-10 rounded-full text-foreground hover:text-primary transition-colors"
            >
              {open ? (
                <X className="h-5 w-5" strokeWidth={1.5} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <MobileMenu items={nav} isActive={isActive} onClose={() => setOpen(false)} />
      )}
    </>
  )
}

function MobileMenu({
  items,
  isActive,
  onClose,
}: {
  items: typeof nav
  isActive: (href: string) => boolean
  onClose: () => void
}) {
  return (
    <div className="fixed inset-0 z-[55] lg:hidden bg-white/97 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between px-6 h-16 border-b border-border">
          <span className="font-display text-sm uppercase tracking-[0.3em] text-foreground">
            Garotas Salón & Spa
          </span>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="p-2 text-foreground hover:text-primary transition-transform hover:rotate-90"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="rounded-3xl bg-card border border-border p-3 space-y-1">
            {items.map((item, i) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  style={{ animationDelay: `${60 * i}ms` }}
                  className={cn(
                    "flex items-center justify-between rounded-2xl px-5 py-4 text-base transition-colors animate-in slide-in-from-left-2 fade-in duration-300",
                    active
                      ? "bg-muted text-foreground"
                      : "text-foreground/80 hover:bg-muted/60"
                  )}
                >
                  <span>{item.label}</span>
                  {active && (
                    <span className="size-2 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />
                  )}
                </Link>
              )
            })}
          </div>

          <div className="my-6 h-px bg-border" />

          <Link
            href="/reservar"
            onClick={onClose}
            className="flex items-center justify-center h-14 rounded-full bg-primary text-primary-foreground uppercase tracking-[0.25em] text-sm hover:bg-foreground hover:text-background transition-colors"
          >
            Reservar mi cita
          </Link>

          <div className="mt-8 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span>Síguenos</span>
            <Link
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary"
            >
              <Instagram className="h-4 w-4" strokeWidth={1.5} />
              {site.instagramHandle}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
