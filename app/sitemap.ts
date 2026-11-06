import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { getCatalog } from "@/lib/catalog";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000");
  const catalog = await getCatalog();
  return [
    "",
    "/projects",
    "/services",
    "/privacy",
    "/terms",
    ...services.map((s) => `/services/${s.slug}`),
    ...catalog.products.map((p) => `/p/${p.id}`),
  ].map((p) => ({ url: base + p }));
}
