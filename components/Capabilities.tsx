import Link from "next/link";
import { capabilities } from "@/lib/capabilities";
import SectionHeading from "./SectionHeading";
export default function Capabilities() {
  return (
    <section
      className="ix-section cp-capabilities"
      id="capabilities"
      aria-labelledby="capabilities-title"
    >
      <div className="px-wrap">
        <span id="solutions" className="cp-anchor" />
        <SectionHeading
          id="capabilities-title"
          label="02 / CAPABILITIES"
          title="Choose the work your property needs."
        >
          Explore the scope below, then open a service guide for requirements,
          preparation and FAQs. Exact suitability and availability are confirmed
          during inquiry.
        </SectionHeading>
        <div className="cp-primary" id="engineering">
          {capabilities
            .filter((s) => s.primary)
            .map((service, index) => (
              <article key={service.slug}>
                <span className="cp-number">0{index + 1} / ENGINEERING</span>
                <h3>
                  <Link href={`/services/${service.slug}`}>
                    {service.title}
                    <span aria-hidden="true">↗</span>
                  </Link>
                </h3>
                <p>{service.description}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="ix-text-link"
                >
                  Scope & requirements ↗
                </Link>
              </article>
            ))}
        </div>
        <div className="cp-secondary" id="property-services">
          <p className="cp-group-label">PROPERTY SERVICES</p>
          <div>
            {capabilities
              .filter((s) => !s.primary)
              .map((service, index) => (
                <article key={service.slug}>
                  <span className="cp-number">0{index + 4}</span>
                  <div>
                    <h3>
                      <Link href={`/services/${service.slug}`}>
                        {service.title}
                        <span aria-hidden="true">↗</span>
                      </Link>
                    </h3>
                    <p>{service.description}</p>
                  </div>
                </article>
              ))}
          </div>
        </div>
        <div className="cp-catalog-row" id="products">
          <p>
            Looking for a specific installation, repair or maintenance task?
          </p>
          <Link href="/services" className="ix-text-link">
            Search the live service catalog ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
