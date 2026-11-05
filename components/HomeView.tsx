import CategoryTiles from "@/components/CategoryTiles";
import BottomNav from "@/components/BottomNav";
import RevampHeader from "@/components/RevampHeader";
import RevampHero from "@/components/RevampHero";
import ProductsSection from "@/components/ProductsSection";
import ShopProvider from "@/components/ShopProvider";
import VideoGallery from "@/components/VideoGallery";
import {
  CtaBand,
  Footer,
  HowItWorks,
  Lifestyle,
  TrustStrip,
  WhatsAppFab,
} from "@/components/Sections";
import type { Catalog } from "@/lib/products";

/** Landing page: new engineering-led identity with the existing service catalog and lead flow. */
export default function HomeView({ catalog, initialCategory }: { catalog: Catalog; initialCategory: string }) {
  return (
    <ShopProvider catalog={catalog} initialCategory={initialCategory}>
      <a className="skip-link" href="#products">Skip to services</a>
      <RevampHeader />
      <main>
        <RevampHero />
        <TrustStrip />
        <CategoryTiles />
        <ProductsSection />
        <Lifestyle />
        <VideoGallery />
        <HowItWorks />
        <CtaBand />
      </main>
      <Footer brand={catalog.brand} categories={catalog.categories} />
      <WhatsAppFab />
      <BottomNav />
    </ShopProvider>
  );
}
