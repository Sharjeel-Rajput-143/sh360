import type { Catalog } from "@/lib/products";
import PublicShell from "./PublicShell";
import TemporaryHomeHero from "./TemporaryHomeHero";
import Capabilities from "./Capabilities";
import InquiryForm from "./InquiryForm";
import Evidence from "./Evidence";
import { AboutSH360, WhereWeWork, HowWeWork, WhySH360 } from "./HomeCompanySections";

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
        <TemporaryHomeHero brand={catalog.brand} />
        <AboutSH360 />
        <Capabilities />
        <WhereWeWork />
        <Evidence selected />
        <HowWeWork />
        <WhySH360 />
        <InquiryForm />
      </main>
    </PublicShell>
  );
}
