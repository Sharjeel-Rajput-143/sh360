import type { Catalog } from "@/lib/products";
import PublicShell from "./PublicShell";
import EngineeringHero from "./EngineeringHero";
import Capabilities from "./Capabilities";
import WhereWeWork from "./WhereWeWork";
import InquiryForm from "./InquiryForm";
import Evidence from "./Evidence";
import { AboutSH360, OurApproach } from "./HomeCompanySections";

export default function HomeView({
  catalog,
  initialCategory,
}: {
  catalog: Catalog;
  initialCategory: string;
}) {
  return (
    <PublicShell catalog={catalog} initialCategory={initialCategory}>
      <main id="main" className="ix-home ed-home cp-home vs-home">
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
