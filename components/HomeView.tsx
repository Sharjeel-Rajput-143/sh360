import type { Catalog } from "@/lib/products";
import { processSteps } from "@/lib/services";
import Link from "next/link";
import PublicShell from "./PublicShell";
import TemporaryHomeHero from "./TemporaryHomeHero";
import Capabilities from "./Capabilities";
import InquiryForm from "./InquiryForm";
import Evidence from "./Evidence";
import SectionHeading from "./SectionHeading";

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
        <Capabilities />
        <Evidence selected />
        <section className="ix-approach ix-section ed-process" id="about">
          <div className="px-wrap">
            <SectionHeading
              label="04 / WORKING WITH SH360"
              title="Agree the work before it begins."
            >
              Share what needs installing, upgrading or repairing. Confirm the
              requirements and agreed scope before work begins.
            </SectionHeading>
            <div className="ed-process-grid" id="process">
              {processSteps.map(([title, description], index) => (
                <div key={title}>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
            <div className="ed-process-end">
              <p>
                Location, access, materials and the condition of existing
                systems affect the scope. These details are clarified during
                your inquiry.
              </p>
              <Link className="ix-text-link" href="#contact">
                Discuss your requirements ↗
              </Link>
            </div>
          </div>
        </section>

        <InquiryForm />
      </main>
    </PublicShell>
  );
}
