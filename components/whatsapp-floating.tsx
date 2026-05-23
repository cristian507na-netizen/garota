import { MessageCircle } from "lucide-react"
import { site, waLink } from "@/lib/site"

export function WhatsAppFloating() {
  return (
    <a
      href={waLink(`Hola ${site.name} ✨, quiero información sobre sus servicios.`)}
      target="_blank"
      rel="noreferrer"
      aria-label="Hablar por WhatsApp"
      className="group fixed bottom-6 right-6 z-40 grid place-items-center size-14 rounded-full bg-primary text-primary-foreground shadow-[0_10px_30px_rgba(180,0,0,0.45)] hover:scale-110 hover:ring-4 hover:ring-primary/30 transition-all"
    >
      <span className="absolute inset-0 rounded-full bg-primary animate-pulse opacity-40" />
      <MessageCircle className="relative h-6 w-6" strokeWidth={1.5} />
    </a>
  )
}
