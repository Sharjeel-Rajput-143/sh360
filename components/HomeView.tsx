import Link from "next/link";
import type { Catalog } from "@/lib/products";
import { services } from "@/lib/services";
import PublicShell from "./PublicShell";
import { Scene, Capability, Process, FAQ } from "./Editorial";
import InquiryForm from "./InquiryForm";
import ProductsSection from "./ProductsSection";
import VideoGallery from "./VideoGallery";
import Reveal from "./Reveal";
import Evidence from "./Evidence";
export default function HomeView({
  catalog,
  initialCategory,
}: {
  catalog: Catalog;
  initialCategory: string;
}) {
  return (
    <PublicShell catalog={catalog} initialCategory={initialCategory}>
      <main id="main">
        <section className="px-hero" id="top">
          <div className="px-wrap">
            <div className="px-hero-meta">
              <p className="px-label">
                ELECTRICAL ENGINEERING / IoT / TECHNICAL SERVICES
              </p>
              <span>CONNECTED THINKING. PRACTICAL SOLUTIONS.</span>
            </div>
            <div className="px-hero-grid">
              <div className="px-hero-copy">
                <h1>
                  Engineering
                  <br />
                  <span>Smarter</span>
                  <br />
                  Spaces<span className="px-period">.</span>
                </h1>
                <p>
                  From electrical infrastructure and intelligent automation to
                  the services that keep properties running. Technical
                  expertise, brought together under one roof.
                </p>
                <div className="px-actions">
                  <Link className="px-button" href="#solutions">
                    Explore Our Solutions <span>↗</span>
                  </Link>
                  <Link className="px-text-link" href="#contact">
                    Request a Service ↗
                  </Link>
                </div>
              </div>
              <div className="px-hero-art">
                <div className="px-art-index">
                  <span>THE INTEGRATED PROPERTY</span>
                  <span>FIG. 01</span>
                </div>
                <Scene
                  priority
                  alt="Original conceptual architectural cutaway showing a modern property with electrical systems, connected devices and EV charging"
                />
                <div className="px-art-tags">
                  <span>
                    <i /> Electrical systems
                  </span>
                  <span>
                    <i /> Smart connectivity
                  </span>
                  <span>
                    <i /> EV infrastructure
                  </span>
                </div>
              </div>
            </div>
            <div className="px-hero-bottom">
              <span>ONE PROPERTY. CONNECTED EXPERTISE.</span>
              <a href="#solutions">
                Discover the SH360 approach <span>↓</span>
              </a>
            </div>
          </div>
        </section>
        <section className="px-expertise px-section" id="solutions">
          <div className="px-wrap">
            <Reveal className="px-section-top">
              <p className="px-label">WHAT WE DO</p>
              <h2>
                One partner.
                <br />
                Multiple areas of expertise.
              </h2>
              <p>
                Modern properties work better when their systems work together.
                We connect technical installations, upgrades and everyday
                property care.
              </p>
            </Reveal>
            <div className="px-expertise-grid">
              {services.slice(0, 3).map((s, i) => (
                <Link
                  href={`/services/${s.slug}`}
                  className="px-expertise-item"
                  key={s.slug}
                >
                  <span className="px-index">
                    0{i + 1} / CORE SOLUTION <b>↗</b>
                  </span>
                  <h3>{s.title}</h3>
                  <p>
                    {i === 0
                      ? "The infrastructure behind a dependable property. Wiring, distribution, lighting and fault diagnosis."
                      : i === 1
                        ? "Greater control over your environment. Connected lighting, sensors and considered automation."
                        : "A practical connection to electric mobility. Site assessment, electrical integration and charger installation."}
                  </p>
                  <span className="px-explore">Explore the solution ↗</span>
                </Link>
              ))}
              <Link href="#property-services" className="px-expertise-property">
                <span>04 / COMPLETE PROPERTY CARE</span>
                <h3>The details that keep your space running.</h3>
                <span>
                  Plumbing · Carpentry · Cleaning · Maintenance <b>↗</b>
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section className="px-about px-section" id="about">
          <div className="px-wrap px-about-grid">
            <div>
              <p className="px-label">WHO WE ARE / SH360</p>
              <h2>
                Beyond installations.
                <br />
                Complete technical
                <br />
                solutions.
              </h2>
            </div>
            <div>
              <p className="px-large-copy">
                A building is more than a collection of individual systems. Its
                services need to work as one.
              </p>
              <p>
                SH360 brings electrical engineering, connected technology and
                essential property services together. Our approach begins with
                understanding the requirements of each space and defining the
                work needed for a practical result.
              </p>
              <p>
                From electrical upgrades and smart controls to maintenance
                issues, the aim is simpler coordination through one point of
                contact.
              </p>
              <Link className="px-text-link" href="#approach">
                Discover the SH360 approach ↗
              </Link>
            </div>
          </div>
        </section>
        {services.slice(0, 3).map((s, i) => (
          <Capability service={s} index={i} key={s.slug} />
        ))}
        <section className="px-section px-property" id="property-services">
          <div className="px-wrap">
            <div className="px-section-top">
              <p className="px-label">PROPERTY CARE & ESSENTIAL SERVICES</p>
              <h2>
                The essential work behind
                <br />a well-maintained space.
              </h2>
              <p>
                Water systems, fittings, finishes and everyday upkeep all
                contribute to how comfortably a property operates.
              </p>
            </div>
            <div className="px-property-feature">
              <Scene
                name="plumbing"
                alt="Conceptual kitchen and bathroom cutaway with water supply routes"
              />
              <div>
                <span className="px-label">04 / PLUMBING</span>
                <h3>
                  Reliable water systems.
                  <br />
                  Practical repairs.
                </h3>
                <p>
                  Leaks, taps, sinks, bathroom fittings and accessible pipework.
                  Understand what needs attention and the work involved.
                </p>
                <Link className="px-text-link" href="/services/plumbing">
                  Explore plumbing ↗
                </Link>
              </div>
            </div>
            <div className="px-property-feature px-property-reverse">
              <Scene
                name="carpentry"
                alt="Conceptual architectural interior with fitted oak cabinets, shelving and joinery"
              />
              <div>
                <span className="px-label">05 / CARPENTRY</span>
                <h3>
                  Practical craftsmanship.
                  <br />
                  Functional spaces.
                </h3>
                <p>
                  Door adjustments, cabinet installation, shelving and furniture
                  fitting. Share the dimensions and materials so the scope can
                  be confirmed.
                </p>
                <Link className="px-text-link" href="/services/carpentry">
                  Explore carpentry ↗
                </Link>
              </div>
            </div>
            <div className="px-care-pair">
              {services.slice(5).map((s, i) => (
                <Link href={`/services/${s.slug}`} key={s.slug}>
                  <span className="px-label">
                    0{i + 6} / {s.title.toUpperCase()}
                  </span>
                  <h3>
                    {i === 0
                      ? "Clean spaces. Better everyday environments."
                      : "Keeping the whole property in working order."}
                  </h3>
                  <p>
                    {i === 0
                      ? "General and deep cleaning, kitchens, bathrooms, move-in and post-maintenance cleaning. Define the areas and surfaces that need care."
                      : "Fixtures, fittings, minor repairs and coordinated maintenance tasks. Start with a clear room-by-room list of what needs attention."}
                  </p>
                  <span className="px-text-link">
                    Explore {s.short.toLowerCase()} ↗
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="px-section px-environments">
          <div className="px-wrap">
            <p className="px-label">APPLICATIONS & ENVIRONMENTS</p>
            <h2>Designed around your space.</h2>
            <div className="px-environment-grid">
              {[
                [
                  "Residential properties",
                  "Work around the way you live, from individual repairs to connected-home upgrades.",
                ],
                [
                  "Offices & workplaces",
                  "Consider occupancy, network infrastructure and access when planning technical work.",
                ],
                [
                  "Commercial properties",
                  "Discuss equipment loads, operating hours and permissions before defining scope.",
                ],
                [
                  "Managed properties",
                  "Bring a clear defect list and coordinate access across tenants or shared areas.",
                ],
              ].map(([a, b], i) => (
                <div key={a}>
                  <span>0{i + 1}</span>
                  <h3>{a}</h3>
                  <p>{b}</p>
                </div>
              ))}
            </div>
            <Link className="px-text-link" href="#contact">
              Discuss your property requirements ↗
            </Link>
          </div>
        </section>
        <Evidence />
        <VideoGallery />
        <Process />
        <section className="px-section px-approach" id="approach">
          <div className="px-wrap px-approach-grid">
            <div>
              <p className="px-label">THE SH360 APPROACH</p>
              <h2>
                Technical thinking.
                <br />
                Practical execution.
              </h2>
              <p>
                Start with the requirements.
                <br />
                Make the scope clear.
                <br />
                Focus on the work that matters.
              </p>
            </div>
            <div>
              {[
                [
                  "Engineering-led approach",
                  "Consider the property, existing systems and practical constraints before selecting a solution.",
                ],
                [
                  "Multiple services, one point of contact",
                  "Discuss related electrical, technology and maintenance requirements together.",
                ],
                [
                  "Solutions based on actual needs",
                  "Choose work and equipment for the problem being solved, rather than adding unnecessary complexity.",
                ],
                [
                  "Clear scope & communication",
                  "Clarify tasks, materials, access and exclusions before proceeding.",
                ],
                [
                  "Installation & ongoing support",
                  "Discuss operation, care and future maintenance as part of the handover.",
                ],
              ].map(([a, b], i) => (
                <div className="px-principle" key={a}>
                  <span>0{i + 1}</span>
                  <div>
                    <h3>{a}</h3>
                    <p>{b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="px-section px-tech">
          <div className="px-wrap">
            <div className="px-section-top">
              <p className="px-label">SYSTEMS & TECHNOLOGIES</p>
              <h2>
                The right technology starts
                <br />
                with the right application.
              </h2>
              <p>
                Compatibility, installation conditions and day-to-day use matter
                more than a logo on a box.
              </p>
            </div>
            <div className="px-tech-grid">
              {[
                [
                  "Electrical systems",
                  "Supply capacity → Circuit design → Suitable protection",
                ],
                [
                  "Smart technology",
                  "Connectivity → Device compatibility → Useful control",
                ],
                [
                  "EV charging equipment",
                  "Vehicle needs → Supply assessment → Charger selection",
                ],
                [
                  "Building services",
                  "Existing condition → Materials → Maintainability",
                ],
              ].map(([a, b]) => (
                <div key={a}>
                  <h3>{a}</h3>
                  <p>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="px-catalog">
          <ProductsSection />
        </div>
        <section className="px-section px-faq">
          <div className="px-wrap px-faq-grid">
            <div>
              <p className="px-label">GOOD TO KNOW</p>
              <h2>
                Answers before
                <br />
                you get started.
              </h2>
              <p>A little clarity goes a long way.</p>
            </div>
            <FAQ />
          </div>
        </section>
        <InquiryForm />
      </main>
    </PublicShell>
  );
}
