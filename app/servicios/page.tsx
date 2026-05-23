import { Suspense } from "react"
import { ServiciosClient } from "./servicios-client"

export const metadata = {
  title: "Servicios",
  description:
    "Catálogo completo de servicios: faciales, masajes reductores, depilación láser, uñas y peluquería en Garotas Salón & Spa, Panamá.",
}

export default function ServiciosPage() {
  return (
    <Suspense
      fallback={
        <div className="container-page py-20 text-center text-muted-foreground">
          Cargando servicios…
        </div>
      }
    >
      <ServiciosClient />
    </Suspense>
  )
}
