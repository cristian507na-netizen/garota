import { Suspense } from "react"
import { ServiciosClient } from "./servicios-client"

export const metadata = {
  title: "Servicios",
  description:
    "Catálogo completo de servicios: masajes, faciales, paquetes reductores, depilación con cera, cortes, tintes, mechas, keratinas y uñas en Garotas Salón & Spa, Panamá.",
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
