import type { ReactNode } from "react";
import type { Catalog } from "@/lib/products";
import ShopProvider from "./ShopProvider";
import Attribution from "./Attribution";
import PublicHeader from "./PublicHeader";
import { services } from "@/lib/services";
import { LogoMark } from "./Icons";
import Link from "next/link";
import { SITE } from "@/lib/site";
import WhatsAppLink from "./WhatsAppLink";
export function PublicFooter({ brand }: { brand: string }) {
  return (
    <footer className="px-footer">
      <div className="px-wrap">
        <div className="px-footer-top">
          <div>
            <Link href="/" className="px-logo">
              <LogoMark />
              <span>{brand}</span>
            </Link>
            <h2>
              Engineering. Connectivity.
              <br />
              Complete Property Care.
            </h2>
            <WhatsAppLink className="px-text-link">
              Start a conversation ↗
            </WhatsAppLink>
          </div>
          <div>
            <p className="px-label">SOLUTIONS</p>
            {services.slice(0, 3).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                {s.title}
              </Link>
            ))}
          </div>
          <div>
            <p className="px-label">PROPERTY SERVICES</p>
            {services.slice(3).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                {s.title}
              </Link>
            ))}
          </div>
          <div>
            <p className="px-label">GET IN TOUCH</p>
            <a href={`tel:+${SITE.whatsappNumber}`}>{SITE.phoneDisplay}</a>
            <Link href="/#contact">Discuss your requirements</Link>
            <Link href="/projects">Our work</Link>
            <Link href="/#about">About {brand}</Link>
            <Link href="/admin">Admin access</Link>
          </div>
        </div>
        <div className="px-footer-bottom">
          <span>
            © {new Date().getFullYear()} {brand}. All rights reserved.
          </span>
          <span>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
export default function PublicShell({
  catalog,
  children,
  initialCategory,
}: {
  catalog: Catalog;
  children: ReactNode;
  initialCategory?: string;
}) {
  return (
    <div className="px-site">
      <ShopProvider
        catalog={catalog}
        initialCategory={initialCategory || catalog.categories[0].id}
      >
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Attribution />
        <PublicHeader />
        {children}
        <PublicFooter brand={catalog.brand} />
      </ShopProvider>
    </div>
  );
}
