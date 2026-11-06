import type { Catalog } from "@/lib/products";
import PublicShell from "./PublicShell";
import ProductsSection from "./ProductsSection";
import { FAQ } from "./Editorial";
import VideoGallery from "./VideoGallery";
import Link from "next/link";
import { services } from "@/lib/services";
export default function CatalogView({
  catalog,
  initialCategory,
}: {
  catalog: Catalog;
  initialCategory?: string;
}) {
  return (
    <PublicShell catalog={catalog} initialCategory={initialCategory}>
      <main id="main">
        <section className="ix-catalog-intro px-wrap">
          <p className="ix-eyebrow">THE SERVICE DIRECTORY</p>
          <h1>
            Find the right work
            <br />
            for your space.
          </h1>
          <p>
            Explore practical service guides, browse the live catalog, or save a
            service to discuss later.
          </p>
          <div className="ix-guide-links">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                {s.title} ↗
              </Link>
            ))}
          </div>
        </section>
        <div className="px-catalog">
          <ProductsSection />
        </div>
        <VideoGallery />
        <section className="px-section">
          <div className="px-wrap px-faq-grid">
            <div>
              <p className="ix-eyebrow">SERVICE QUESTIONS</p>
              <h2>Before you inquire.</h2>
            </div>
            <FAQ />
          </div>
        </section>
      </main>
    </PublicShell>
  );
}
