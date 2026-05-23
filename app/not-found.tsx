import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container-page py-32 text-center">
      <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-4">
        Error 404
      </p>
      <h1 className="font-display text-7xl md:text-9xl leading-[0.9]">
        Página
        <br />
        <span className="italic text-primary">no encontrada</span>
      </h1>
      <p className="text-lg text-foreground/70 mt-8 max-w-xl mx-auto">
        La página que buscas no existe o fue movida. Vuelve al inicio.
      </p>
      <Button asChild className="mt-10" size="lg">
        <Link href="/">Volver al inicio</Link>
      </Button>
    </div>
  )
}
