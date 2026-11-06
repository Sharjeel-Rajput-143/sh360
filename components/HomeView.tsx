import Image from "next/image";
import Link from "next/link";
import type { Catalog } from "@/lib/products";
import { services, processSteps } from "@/lib/services";
import PublicShell from "./PublicShell";
import SystemsExplorer from "./SystemsExplorer";
import { FAQ } from "./Editorial";
import InquiryForm from "./InquiryForm";
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
      <main id="main" className="ix-home">
        <section className="ix-hero" id="top" aria-labelledby="ix-title">
          <Image
            className="ix-hero-image"
            src="/visuals/switchgear.webp"
            alt="Original professional render of an organized electrical distribution cabinet with circuit protection and contained wiring"
            width={1920}
            height={1200}
            sizes="100vw"
            priority
            unoptimized
          />
          <div className="ix-hero-shade" aria-hidden="true" />
          <div className="px-wrap ix-hero-inner">
            <p className="ix-kicker">
              <span /> SH360 / ENGINEERING & INTEGRATED SERVICES
            </p>
            <div className="ix-hero-copy">
              <p className="ix-eyebrow">
                POWER INFRASTRUCTURE MEETS INTELLIGENT SPACES
              </p>
              <h1 id="ix-title">
                Powering Spaces.
                <br />
                <em>
                  Connecting
                  <br />
                  Systems.
                </em>
              </h1>
              <p>
                Electrical engineering, smart automation, EV charging and
                property services — designed around the way your space works.
              </p>
              <div className="ix-actions">
                <Link className="ix-button" href="#solutions">
                  Explore Our Expertise <span>↗</span>
                </Link>
                <Link className="ix-text-link" href="#contact">
                  Discuss Your Project ↗
                </Link>
              </div>
            </div>
            <div className="ix-equipment-note">
              <span>01 / DISTRIBUTION & PROTECTION</span>
              <p>
                A considered foundation.
                <br />
                From supply to everyday use.
              </p>
            </div>
            <div className="ix-hero-bottom">
              <span>ENGINEERING. CONNECTIVITY. COMPLETE PROPERTY CARE.</span>
              <span>
                ILLUSTRATIVE EQUIPMENT STUDY <b>↓</b>
              </span>
            </div>
          </div>
          <svg
            className="ix-current"
            viewBox="0 0 500 130"
            fill="none"
            aria-hidden="true"
          >
            <path
              className="ix-current-base"
              d="M0 100H160L205 55H350L395 10H500"
            />
            <path
              className="ix-current-signal"
              d="M0 100H160L205 55H350L395 10H500"
            />
            <circle cx="205" cy="55" r="4" />
            <circle cx="395" cy="10" r="4" />
          </svg>
        </section>
        <section className="ix-expertise ix-section" id="solutions">
          <div className="px-wrap">
            <div className="ix-section-heading">
              <p className="ix-eyebrow">01 / OUR EXPERTISE</p>
              <h2>
                Engineering at the core.
                <br />
                Property care around it.
              </h2>
              <p>
                One point of contact for the systems that power your space, the
                technology that connects it, and the work that keeps it running.
              </p>
            </div>
            <div className="ix-expertise-grid">
              {services.slice(0, 3).map((s, i) => (
                <Link href={`/services/${s.slug}`} key={s.slug}>
                  <span className="ix-index">
                    0{i + 1}
                    <b>↗</b>
                  </span>
                  <h3>{s.title}</h3>
                  <p>
                    {i === 0
                      ? "Wiring, distribution, circuit protection and electrical fault diagnosis."
                      : i === 1
                        ? "Compatible controls, useful automation and connected environments."
                        : "Charger installation, supply assessment and practical electrical integration."}
                  </p>
                </Link>
              ))}
            </div>
            <div className="ix-catalog-link" id="products">
              <span>
                Need a specific installation, repair or maintenance task?
              </span>
              <Link href="/services">Search the service catalog ↗</Link>
            </div>
          </div>
        </section>
        <section className="ix-engineering ix-section" id="engineering">
          <div className="px-wrap">
            <div className="ix-section-heading">
              <p className="ix-eyebrow">02 / CONNECTED ENGINEERING</p>
              <h2>
                Three capabilities.
                <br />
                One connected approach.
              </h2>
              <p>
                Select a system to see the work, the equipment and the questions
                that shape a practical solution.
              </p>
            </div>
            <SystemsExplorer />
          </div>
        </section>
        <section className="ix-property ix-section" id="property-services">
          <div className="px-wrap">
            <div className="ix-section-heading">
              <p className="ix-eyebrow">03 / INTEGRATED PROPERTY SERVICES</p>
              <h2>
                The essential work.
                <br />
                Considered in every detail.
              </h2>
              <p>
                Everyday services with a clear scope. Explore the work, then
                tell us what needs attention.
              </p>
            </div>
            <div className="ix-property-grid">
              <Link className="ix-plumbing" href="/services/plumbing">
                <Image
                  src="/visuals/plumbing.webp"
                  alt="Conceptual sectional water-supply and plumbing study"
                  width={1536}
                  height={1024}
                  sizes="(max-width:700px) 100vw, 50vw"
                  unoptimized
                />
                <div>
                  <span className="ix-eyebrow">04 / WATER & FIXTURES</span>
                  <h3>
                    Plumbing <b>↗</b>
                  </h3>
                  <p>
                    Leaks, taps, fixtures and accessible pipework. Practical
                    repair starts with the source of the issue.
                  </p>
                </div>
              </Link>
              <Link className="ix-carpentry" href="/services/carpentry">
                <Image
                  src="/visuals/joinery-detail.webp"
                  alt="Original illustrative close-up of oak joinery and cabinet fitting details"
                  width={1536}
                  height={1024}
                  sizes="(max-width:700px) 100vw, 50vw"
                  unoptimized
                />
                <div>
                  <span className="ix-eyebrow">05 / FITTING & FINISH</span>
                  <h3>
                    Carpentry <b>↗</b>
                  </h3>
                  <p>
                    Doors, cabinets, shelving and wooden fixtures. Careful
                    fitting for functional spaces.
                  </p>
                </div>
              </Link>
              <Link className="ix-cleaning" href="/services/cleaning">
                <Image
                  src="/visuals/interior.webp"
                  alt="Illustrative well-maintained kitchen and living environment"
                  width={1536}
                  height={1024}
                  sizes="(max-width:700px) 100vw, 30vw"
                  unoptimized
                />
                <div>
                  <span className="ix-eyebrow">06 / ENVIRONMENT</span>
                  <h3>
                    Cleaning <b>↗</b>
                  </h3>
                  <p>
                    General, deep and post-maintenance cleaning, with agreed
                    rooms and surface care.
                  </p>
                </div>
              </Link>
              <Link
                className="ix-maintenance"
                href="/services/property-maintenance"
              >
                <span className="ix-eyebrow">07 / COMPLETE PROPERTY CARE</span>
                <h3>
                  Maintenance.
                  <br />
                  Keep the whole
                  <br />
                  property in view.
                </h3>
                <p>
                  Group fixture repairs, hardware adjustments and related
                  electrical or plumbing upkeep into one clear brief.
                </p>
                <span className="ix-maintenance-line">
                  INSPECT <i /> DEFINE <i /> COORDINATE
                </span>
                <span className="ix-text-link">
                  Plan your property maintenance ↗
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section className="ix-approach ix-section" id="about">
          <div className="px-wrap">
            <div className="ix-approach-top">
              <div>
                <p className="ix-eyebrow">04 / THE SH360 APPROACH</p>
                <h2>
                  Technical thinking.
                  <br />
                  Practical execution.
                </h2>
              </div>
              <div>
                <p>
                  SH360 brings electrical engineering, connected technology and
                  property services together. We start with the requirements of
                  the space and define the work around them.
                </p>
                <div className="ix-principles">
                  <span>Engineering-led decisions</span>
                  <span>Multiple services, one contact</span>
                  <span>Clear scope & communication</span>
                  <span>Installation & ongoing care</span>
                </div>
              </div>
            </div>
            <div className="ix-process" id="process">
              {processSteps.map(([title, description], i) => (
                <div key={title}>
                  <span>0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
            <div className="ix-audience">
              <span>HOMES / WORKPLACES / COMMERCIAL / MANAGED PROPERTIES</span>
              <Link href="#contact">Discuss your property requirements ↗</Link>
            </div>
          </div>
        </section>
        <Evidence />
        <section className="ix-questions ix-section" id="questions">
          <div className="px-wrap ix-questions-grid">
            <div>
              <p className="ix-eyebrow">05 / BEFORE WE START</p>
              <h2>
                A little clarity.
                <br />A better starting point.
              </h2>
              <p>
                Service scope, site requirements and quotations depend on your
                property. Start here, or explore a service guide for the
                details.
              </p>
              <Link className="ix-text-link" href="/services">
                Browse all services ↗
              </Link>
            </div>
            <FAQ
              items={[
                [
                  "What can I ask SH360 to help with?",
                  "Electrical engineering, smart automation, EV charging, plumbing, carpentry, cleaning and property maintenance. Exact scope, location and availability are confirmed in conversation.",
                ],
                [
                  "Can I combine services in one inquiry?",
                  "Yes. Select the relevant services and list the tasks so related work can be reviewed together.",
                ],
                [
                  "Will I need a site assessment?",
                  "Photos can help start a review. Electrical capacity, concealed work, access and larger installations may need an on-site assessment before a scope is confirmed.",
                ],
                [
                  "How does the quote inquiry work?",
                  "Complete the form to prepare a WhatsApp message. Review and send it in WhatsApp, attaching photos there if helpful. No message is sent automatically.",
                ],
              ]}
            />
          </div>
        </section>
        <InquiryForm />
      </main>
    </PublicShell>
  );
}
