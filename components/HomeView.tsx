import Image from "next/image";
import Link from "next/link";
import type { Catalog } from "@/lib/products";
import { services, processSteps } from "@/lib/services";
import PublicShell from "./PublicShell";
import SystemsExplorer from "./SystemsExplorer";
import InquiryForm from "./InquiryForm";
import Evidence from "./Evidence";
import SectionHeading from "./SectionHeading";

const propertyScope = [
  {
    title: "Plumbing",
    slug: "plumbing",
    work: "Leak investigation, taps and fixtures, accessible pipework and drainage troubleshooting.",
    preparation:
      "Share the leak location, fitting photos and any access restrictions.",
  },
  {
    title: "Carpentry",
    slug: "carpentry",
    work: "Door and frame adjustments, cabinet and shelving fitting, furniture assembly and wooden-fixture repairs.",
    preparation:
      "Send photos, approximate dimensions and the material or item details.",
  },
  {
    title: "Cleaning",
    slug: "cleaning",
    work: "General and deep cleaning, kitchens and bathrooms, move-in/out and post-maintenance cleaning.",
    preparation:
      "Identify rooms, surfaces, property condition and the level of cleaning needed.",
  },
  {
    title: "Property maintenance",
    slug: "property-maintenance",
    work: "Fixture repairs, hardware adjustments and coordinated minor electrical, plumbing and interior upkeep.",
    preparation:
      "Start with a room-by-room task list and the issues that need attention first.",
  },
];
export default function HomeView({
  catalog,
  initialCategory,
}: {
  catalog: Catalog;
  initialCategory: string;
}) {
  return (
    <PublicShell catalog={catalog} initialCategory={initialCategory}>
      <main id="main" className="ix-home ed-home">
        <section className="ed-hero" id="top" aria-labelledby="ed-title">
          <div className="px-wrap">
            <div className="ed-hero-rule">
              <p className="ix-eyebrow">
                {catalog.brand} / ENGINEERING & INTEGRATED SERVICES
              </p>
              <span>RESIDENTIAL & COMMERCIAL INQUIRIES</span>
            </div>
            <h1 id="ed-title">
              Engineering the Spaces
              <br className="ed-desktop-break" /> We Live and Work In.
            </h1>
            <div className="ed-hero-lower">
              <div className="ed-hero-intro">
                <p>
                  Electrical engineering, smart automation, EV charging and
                  essential property services — brought together through one
                  technical partner.
                </p>
                <div className="ed-hero-actions">
                  <Link href="/services" className="ix-button">
                    Explore Our Services <span aria-hidden="true">↗</span>
                  </Link>
                  <Link href="#contact" className="ix-text-link">
                    Discuss a Project ↗
                  </Link>
                </div>
              </div>
              <figure className="ed-hero-photo">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/photography/electrical-installation-640.webp 640w, /photography/electrical-installation-1280.webp 1280w, /photography/electrical-installation-1920.webp 1920w"
                    sizes="(max-width: 900px) calc(100vw - 40px), (max-width: 1440px) 66vw, 950px"
                  />
                  <img
                    src="/photography/electrical-installation-1280.webp"
                    width={1280}
                    height={853}
                    alt="Electrical technician using a test meter at an installed switchboard"
                    fetchPriority="high"
                  />
                </picture>
                <figcaption>
                  <span>
                    Electrical installation testing / representative photograph
                  </span>
                  <span>
                    <a
                      href="https://commons.wikimedia.org/wiki/File:Man-electrical-technician-working-switchboard-with-fuses.jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cláudio Marques Unip. LDA
                    </a>{" "}
                    ·{" "}
                    <a
                      href="https://creativecommons.org/licenses/by-sa/4.0/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CC BY-SA 4.0
                    </a>{" "}
                    · cropped
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className="ix-section ed-discovery" id="solutions">
          <div className="px-wrap">
            <SectionHeading
              label="01 / WHAT WE DO"
              title="Find the right expertise."
            >
              Choose a technical solution or an everyday property service. Each
              guide explains the work and what to share when you inquire.
            </SectionHeading>
            <div className="ed-discovery-grid">
              <div className="ed-primary-services">
                <p className="ed-group-label">ENGINEERING SOLUTIONS</p>
                {services.slice(0, 3).map((service, index) => (
                  <Link href={`/services/${service.slug}`} key={service.slug}>
                    <span>0{index + 1}</span>
                    <h3>{service.title}</h3>
                    <b aria-hidden="true">↗</b>
                  </Link>
                ))}
              </div>
              <div className="ed-secondary-services">
                <p className="ed-group-label">PROPERTY SERVICES</p>
                {services.slice(3).map((service) => (
                  <Link href={`/services/${service.slug}`} key={service.slug}>
                    {service.title}
                    <span aria-hidden="true">↗</span>
                  </Link>
                ))}
                <Link
                  className="ed-catalog-link"
                  id="products"
                  href="/services"
                >
                  Search the full service catalog ↗
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          className="ix-engineering ix-section ed-engineering"
          id="engineering"
        >
          <div className="px-wrap">
            <SectionHeading
              label="02 / ENGINEERING EXPERTISE"
              title="Understand the work before you start."
            >
              Explore electrical installations, connected controls and charging
              infrastructure. The existing system and your intended use shape
              the scope.
            </SectionHeading>
            <SystemsExplorer />
          </div>
        </section>
        <section
          className="ix-property ix-section ed-property"
          id="property-services"
        >
          <div className="px-wrap">
            <SectionHeading
              label="03 / PROPERTY SERVICES"
              title="Practical work. A clearly defined scope."
            >
              Describe the issue, the space and any access constraints. We can
              then discuss which tasks and materials need to be included.
            </SectionHeading>
            <div className="ed-property-grid">
              <figure className="ed-property-study">
                <Image
                  src="/visuals/plumbing.webp"
                  width={1536}
                  height={1024}
                  sizes="(max-width:700px) 100vw, 32vw"
                  alt="Conceptual section showing accessible water supply routes serving a kitchen and bathroom"
                  unoptimized
                />
                <figcaption>
                  Plumbing / a conceptual view of supply and fixture
                  connections.
                </figcaption>
                <Link className="ix-text-link" href="/services/plumbing">
                  What to share about a plumbing issue ↗
                </Link>
              </figure>
              <div className="ed-property-list">
                {propertyScope.map((service, index) => (
                  <article key={service.slug}>
                    <div>
                      <span>0{index + 4}</span>
                      <h3>
                        <Link href={`/services/${service.slug}`}>
                          {service.title}
                          <b aria-hidden="true">↗</b>
                        </Link>
                      </h3>
                    </div>
                    <p>{service.work}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="ix-approach ix-section ed-process" id="about">
          <div className="px-wrap">
            <SectionHeading
              label="04 / OUR PROCESS"
              title="From your first brief to the final review."
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
                SH360 brings engineering and property services together through
                one point of contact. Location, availability and exact scope are
                confirmed during your inquiry.
              </p>
              <Link className="ix-text-link" href="#contact">
                Discuss your requirements ↗
              </Link>
            </div>
          </div>
        </section>
        <Evidence />
        <InquiryForm />
      </main>
    </PublicShell>
  );
}
