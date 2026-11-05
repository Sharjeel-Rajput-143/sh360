"use client";

import ArchitecturalSystems from "./ArchitecturalSystems";
import { scrollToProducts, useShop } from "./ShopProvider";
import WhatsAppLink from "./WhatsAppLink";

export default function RevampHero() {
  const { categories, select } = useShop();
  function choose(id: string) { select(id); scrollToProducts(); }
  return <section className="sh-hero" id="top" aria-labelledby="sh-hero-title">
    <div className="sh-hero-inner">
      <div className="sh-hero-copy">
        <p className="sh-eyebrow">Electrical engineering / IoT / Technical services</p>
        <h1 id="sh-hero-title">Engineering <em>Smarter Spaces.</em></h1>
        <p className="sh-hero-desc">From electrical infrastructure and intelligent automation to the services that keep properties running, SH360 brings technical expertise and practical solutions together under one roof.</p>
        <div className="sh-hero-actions">
          <button type="button" className="sh-btn sh-btn-primary" onClick={scrollToProducts}>Explore Our Solutions <span aria-hidden="true">↗</span></button>
          <WhatsAppLink className="sh-btn sh-btn-secondary">Request a Service <span aria-hidden="true">↗</span></WhatsAppLink>
        </div>
        <p className="sh-hero-note">Electrical systems · Connected technology · Property care</p>
      </div>
      <div className="sh-art"><ArchitecturalSystems /></div>
    </div>
    <div className="sh-service-rail" aria-label="Explore service categories">
      <div className="sh-service-rail-inner">
        <span className="sh-service-rail-label">Our capabilities</span>
        <button type="button" onClick={scrollToProducts}>IoT & Smart Automation ↗</button>
        {categories.map(cat => <button key={cat.id} type="button" onClick={() => choose(cat.id)}>{cat.label} ↗</button>)}
        <WhatsAppLink>Carpentry inquiries ↗</WhatsAppLink>
      </div>
    </div>
  </section>;
}
