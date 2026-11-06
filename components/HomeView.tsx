import type { Catalog } from "@/lib/products";
import PublicShell from "./PublicShell";
import EngineeringHero from "./EngineeringHero";
import Capabilities from "./Capabilities";
import InquiryForm from "./InquiryForm";
import Evidence from "./Evidence";
import { AboutSH360, WhereWeWork, OurApproach } from "./HomeCompanySections";

export default function HomeView({
  catalog,
  initialCategory,
}: {
  catalog: Catalog;
  initialCategory: string;
}) {
  return (
    <PublicShell catalog={catalog} initialCategory={initialCategory}>
      <main id="main" className="ix-home ed-home cp-home">
        <EngineeringHero brand={catalog.brand} />
        <AboutSH360 />
        <Capabilities />
        <WhereWeWork />
        <Evidence selected />
        <OurApproach />
        <InquiryForm />
      </main>
    </PublicShell>
  );
}
