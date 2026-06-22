import type { MetadataRoute } from "next"

const BASE = "https://garotassalon.spa"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const routes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1, freq: "weekly" },
    { path: "/servicios", priority: 0.9, freq: "weekly" },
    { path: "/reservar", priority: 0.9, freq: "monthly" },
    { path: "/galeria", priority: 0.7, freq: "monthly" },
  ]

  return routes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }))
}
