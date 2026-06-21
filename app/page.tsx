import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import {
  ArrowRight,
  CheckCircle2,
  Instagram,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Newsletter } from "@/components/newsletter"
import { ServiceCard } from "@/components/service-card"
import { BookingForm } from "@/components/booking-form"
import { StatsTicker } from "@/components/stats-ticker"
import { getFeatured } from "@/lib/services"
import { site, waLink } from "@/lib/site"

const categories = [
  {
    name: "Spa",
    href: "/servicios?cat=spa",
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop&q=80",
    desc: "Masajes · Faciales · Reductores",
  },
  {
    name: "Depilación",
    href: "/servicios?cat=depilacion",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80",
    desc: "Cera · Piernas · Bikini · Cejas",
  },
  {
    name: "Salón",
    href: "/servicios?cat=salon",
    img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&auto=format&fit=crop&q=80",
    desc: "Cortes · Tintes · Mechas · Keratinas",
  },
  {
    name: "Uñas",
    href: "/servicios?cat=nails",
    img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&auto=format&fit=crop&q=80",
    desc: "Manicure · Gel · Polygel · Pedispa",
  },
]

const benefits = [
  {
    icon: ShieldCheck,
    title: "Productos premium",
    desc: "Trabajamos solo con marcas de calidad certificada para cuidar tu piel.",
  },
  {
    icon: Sparkles,
    title: "Diseños únicos",
    desc: "Cada tratamiento y diseño es personalizado según tus necesidades.",
  },
  {
    icon: CheckCircle2,
    title: "Higiene garantizada",
    desc: "Equipos esterilizados y protocolos de higiene estrictos en cada servicio.",
  },
  {
    icon: Star,
    title: "Atención personalizada",
    desc: "Te atendemos con cariño. Tu bienestar es nuestra prioridad.",
  },
]

const marqueeItems = [
  "Masajes", "Faciales", "Reductores", "Depilación", "Cortes", "Blower",
  "Maquillaje", "Peinados", "Tintes", "Mechas", "Nanoplastia", "Keratinas",
  "Manicure", "Pedicure", "Gel", "Polygel", "Pedispa",
]

export default function HomePage() {
  const featured = getFeatured(6)

  return (
    <>
      {/* ── HERO FULLBLEED CINEMATIC ─────────────────────────────── */}
      <section className="relative -mt-20 md:-mt-28 h-screen min-h-[600px] max-h-[960px] overflow-hidden">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1920&auto=format&fit=crop&q=85"
          alt="Garotas Salón & Spa"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 animate-in zoom-in-105 duration-[2000ms] ease-out"
        />

        {/* Multi-layer gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

        {/* Decorative top vignette */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/20 to-transparent" />

        {/* Floating badge — hidden on mobile, visible md+ */}
        <div className="hidden md:block absolute top-28 right-12 animate-in fade-in slide-in-from-right-4 duration-700 delay-300">
          <span className="inline-flex items-center gap-2 bg-white/12 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-full text-xs font-medium text-white/85 tracking-wide shadow-lg">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-primary/60 animate-ping" />
              <span className="relative size-2 rounded-full bg-primary" />
            </span>
            Salón &amp; Spa Premium · Panamá
          </span>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 px-5 sm:px-10 md:px-14 lg:px-20 pb-8 md:pb-12 lg:pb-16">

          {/* Description */}
          <p className="text-white/70 text-[13px] md:text-[15px] leading-relaxed max-w-[240px] md:max-w-xs mb-4 md:mb-6 animate-in fade-in slide-in-from-bottom-2 duration-700">
            Entra a un santuario diseñado para restaurar el balance y rejuvenecer tu cuerpo y mente.
          </p>

          {/* Headline — stacked on mobile, single line on desktop */}
          <h1 className="font-display font-bold text-white tracking-tight leading-[0.85] animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100">
            {/* Mobile: each word stacked, large */}
            <span className="block md:hidden text-[19vw]">Brillar.</span>
            <span className="block md:hidden text-[19vw]">Relajar.</span>
            <span className="block md:hidden text-[19vw]">Renovar.</span>
            {/* Desktop: single line */}
            <span className="hidden md:block text-[8.5vw] lg:text-[7.6vw] whitespace-nowrap">
              Brillar. Relajar. Renovar.
            </span>
          </h1>

          {/* CTA row */}
          <div className="mt-6 md:mt-9 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-200">
            <Button asChild size="lg" className="shadow-[0_8px_24px_rgba(180,60,60,0.35)]">
              <Link href="/reservar">Reservar cita</Link>
            </Button>
            <a
              href={waLink(`Hola ${site.name} ✨, quiero información sobre sus servicios.`)}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-sm text-white/80 uppercase tracking-[0.25em] hover:text-white transition-colors"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              WhatsApp
            </a>
            <span className="hidden lg:block ml-auto text-[11px] text-white/40 uppercase tracking-[0.3em]">
              {site.hours}
            </span>
          </div>

        </div>

        {/* Scroll indicator — mobile */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-3 md:hidden flex flex-col items-center gap-1 opacity-50">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/60" />
        </div>
      </section>

      {/* ── ANIMATED STATS TICKER ─────────────────────────────── */}
      <StatsTicker />

      {/* ── CATEGORIES ─────────────────────────────── */}
      <section className="container-page py-20 md:py-28">
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-2">
              Nuestros servicios
            </p>
            <h2 className="font-display text-4xl md:text-6xl">
              ¿Qué necesitas hoy?
            </h2>
          </div>
          <Link
            href="/servicios"
            className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-foreground hover:text-primary transition-colors"
          >
            Ver todo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {categories.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group relative aspect-3/4 overflow-hidden bg-muted rounded-xl"
            >
              <Image
                src={c.img}
                alt={c.name}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/30 to-transparent group-hover:from-background/90 transition-all duration-500" />
              <div className="absolute inset-0 p-3 flex flex-col justify-end">
                <h3 className="font-display text-xl md:text-2xl text-foreground leading-tight">
                  {c.name}
                </h3>
                <p className="text-xs text-foreground/70 mt-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {c.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FEATURED SERVICES ─────────────────────────────── */}
      <section className="border-y border-border bg-card/40">
        <div className="container-page py-20 md:py-28">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-2 flex items-center gap-2">
                <Zap className="h-3 w-3" />
                Más solicitados
              </p>
              <h2 className="font-display text-4xl md:text-6xl">
                Servicios destacados
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link href="/servicios">Ver todos</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((s, i) => (
              <ServiceCard key={s.id} service={s} priority={i < 3} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING CTA ─────────────────────────────── */}
      <section id="reservar" className="container-page py-20 md:py-28">
        <div className="text-center mb-10">
          <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-3">
            Agenda en minutos
          </p>
          <h2 className="font-display text-4xl md:text-6xl">
            Reserva tu cita online
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Elige tu servicio, fecha y hora favorita. Te confirmamos por
            WhatsApp.
          </p>
        </div>
        <Suspense fallback={<div className="h-64 flex items-center justify-center text-muted-foreground">Cargando formulario…</div>}>
          <BookingForm />
        </Suspense>
      </section>

      {/* ── BENEFITS ─────────────────────────────── */}
      <section className="border-y border-border bg-card/40">
        <div className="container-page py-20 md:py-28">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-2">
              Por qué elegirnos
            </p>
            <h2 className="font-display text-4xl md:text-6xl">
              Realizamos tu belleza
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                style={{ animationDelay: `${120 * i}ms` }}
                className="group flex md:flex-col items-start md:items-center md:text-center gap-4 p-5 md:p-6 border border-border bg-card hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 rounded-xl animate-in fade-in slide-in-from-bottom-2"
              >
                <div className="size-12 grid place-items-center rounded-full border border-border group-hover:scale-110 group-hover:border-primary/60 transition-all">
                  <b.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────── */}
      <section className="border-y border-border py-10 md:py-14 overflow-hidden bg-secondary/50">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="font-display text-3xl md:text-5xl text-foreground/30 hover:text-primary mx-8 md:mx-10 transition-colors cursor-default"
            >
              {item}
              <span className="text-primary/50 mx-4">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ── PREMIUM CONTACT ─────────────────────────────── */}
      <section id="contacto" className="relative overflow-hidden">
        {/* Decorative gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/70 via-background to-accent/40 pointer-events-none" />
        {/* Decorative circles */}
        <div className="absolute -top-32 -right-32 size-96 rounded-full bg-primary/6 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 size-72 rounded-full bg-primary/4 blur-2xl pointer-events-none" />

        <div className="container-page py-24 md:py-36 relative z-10">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.45em] text-primary mb-4">
              Estamos aquí para ti
            </p>
            <h2 className="font-display text-5xl md:text-7xl leading-tight">
              Habla con{" "}
              <span className="italic text-primary">nosotras</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md mx-auto">
              Reservas, consultas o simplemente dudas. Estamos a un mensaje de
              distancia.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {/* Location */}
            <div className="group bg-card/90 backdrop-blur border border-border rounded-3xl p-8 hover:border-primary/30 hover:shadow-[0_12px_40px_rgba(180,60,60,0.10)] transition-all duration-300 hover:-translate-y-1">
              <div className="size-12 rounded-2xl bg-primary/10 grid place-items-center mb-6">
                <MapPin className="h-5 w-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl mb-3">Encuéntranos</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                {site.address}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-primary">
                {site.hours}
              </p>
            </div>

            {/* WhatsApp — highlighted card */}
            <div className="group relative bg-primary text-primary-foreground rounded-3xl p-8 hover:shadow-[0_20px_56px_rgba(180,60,60,0.28)] transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
              <div className="size-12 rounded-2xl bg-primary-foreground/15 grid place-items-center mb-6 relative">
                <MessageCircle className="h-5 w-5 text-primary-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl mb-3 text-primary-foreground">
                WhatsApp
              </h3>
              <p className="text-sm text-primary-foreground/80 mb-8 leading-relaxed">
                Reserva tu cita, resuelve dudas o pide asesoría. Te respondemos
                rápido.
              </p>
              <a
                href={waLink(
                  `Hola ${site.name} ✨, quiero información sobre sus servicios.`
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-5 py-3 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-primary-foreground/90 transition-colors"
              >
                Escribir ahora
                <ArrowRight className="h-4 w-4" />
              </a>
              <p className="mt-4 text-xs text-primary-foreground/60">
                {site.whatsappDisplay}
              </p>
            </div>

            {/* Instagram */}
            <div className="group bg-card/90 backdrop-blur border border-border rounded-3xl p-8 hover:border-primary/30 hover:shadow-[0_12px_40px_rgba(180,60,60,0.10)] transition-all duration-300 hover:-translate-y-1">
              <div className="size-12 rounded-2xl bg-primary/10 grid place-items-center mb-6">
                <Instagram className="h-5 w-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl mb-3">Instagram</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                Síguenos para ver resultados, promos y nuevos diseños antes que
                nadie.
              </p>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-foreground transition-colors group-hover:gap-3"
              >
                {site.instagramHandle}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Bottom CTA strip */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/reservar">
                Reservar mi cita
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <a
              href={`mailto:${site.email}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {site.email}
            </a>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ─────────────────────────────── */}
      <Newsletter />
    </>
  )
}
