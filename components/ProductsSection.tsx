"use client";

import { productsByCategory, searchProducts } from "@/lib/products";
import CategoryTabs from "./CategoryTabs";
import { WhatsAppIcon } from "./Icons";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";
import { useShop } from "./ShopProvider";
import WhatsAppLink from "./WhatsAppLink";

const PANEL_ID = "products-panel";

export default function ProductsSection() {
  const { categories, products: allProducts, category, select, query, setQuery, showSaved, toggleSavedView, savedIds } = useShop();
  const searching = query.trim().length > 0;

  const products = showSaved
    ? allProducts.filter((p) => savedIds.includes(p.id))
    : searching
      ? searchProducts(allProducts, query)
      : productsByCategory(allProducts, category);

  const heading = showSaved
    ? "Saved services"
    : searching
      ? `Results for “${query.trim()}”`
      : (categories.find((c) => c.id === category)?.label ?? "Services");

  const viewKey = showSaved ? "saved" : searching ? `q:${query.trim()}` : category;

  return (
    <section className="section" id="products">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">What we offer</p>
          <h2>Our services</h2>
          <p className="section-lead">
            Tap <strong>Get Quote</strong> on any service and we&rsquo;ll send you the price on
            WhatsApp.
          </p>
          <CategoryTabs
            idPrefix="products"
            variant="light"
            value={showSaved || searching ? null : category}
            onChange={select}
            controls={PANEL_ID}
          />
        </Reveal>

        <div className="toolbar">
          <h3 className="toolbar-title">{heading}</h3>
          <p className="toolbar-count" role="status">
            {products.length} {products.length === 1 ? "service" : "services"}
          </p>
        </div>

        <div id={PANEL_ID} role="tabpanel" aria-label={heading}>
          {products.length > 0 ? (
            <div className="product-grid" key={viewKey}>
              {products.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <div className="empty">
              {showSaved ? (
                <>
                  <h3>No saved services yet</h3>
                  <p>Tap the heart on any service to save it here.</p>
                  <button type="button" className="btn btn-dark" onClick={toggleSavedView}>
                    Browse services
                  </button>
                </>
              ) : !searching ? (
                <>
                  <h3>No services here yet</h3>
                  <p>New services are coming soon. Tell us what you need on WhatsApp.</p>
                  <div className="empty-actions">
                    <WhatsAppLink className="btn btn-wa">
                      <WhatsAppIcon className="btn-icon" />
                      Ask on WhatsApp
                    </WhatsAppLink>
                  </div>
                </>
              ) : (
                <>
                  <h3>No services match “{query.trim()}”</h3>
                  <p>Tell us what you need on WhatsApp and we&rsquo;ll take care of it.</p>
                  <div className="empty-actions">
                    <WhatsAppLink className="btn btn-wa">
                      <WhatsAppIcon className="btn-icon" />
                      Ask on WhatsApp
                    </WhatsAppLink>
                    <button type="button" className="btn btn-outline" onClick={() => setQuery("")}>
                      Clear search
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
