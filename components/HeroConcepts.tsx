import Link from "next/link";
import ConceptPhoto from "./ConceptPhoto";
export const heroConcepts = {
  a: {
    name: "Architectural Editorial",
    approach:
      "An oversized typographic opening, a positioning-and-action row and a continuous photographic band.",
    mobile:
      "The headline, positioning and actions lead into the photograph as a vertical editorial sequence.",
  },
  b: {
    name: "Engineering Portfolio",
    approach:
      "Photography leads, with a narrow service index and a strong title-and-action baseline below the image.",
    mobile:
      "The image opens the composition; the title, brief and service index follow in reading order.",
  },
  c: {
    name: "Modular Corporate",
    approach:
      "Four unequal content modules: positioning, inquiry, photography and a capability directory.",
    mobile:
      "The modules become a deliberate sequence: positioning, inquiry, photograph and service discovery.",
  },
} as const;
export type HeroConceptKey = keyof typeof heroConcepts;
const headline = "Engineering the spaces we live and work in.";
const positioning =
  "Electrical engineering, smart automation, EV charging and essential property services through one technical partner.";
function Actions() {
  return (
    <div className="hc-actions">
      <Link className="ix-button" href="/#capabilities">
        Explore capabilities <span aria-hidden="true">↗</span>
      </Link>
      <Link className="ix-text-link" href="/#contact">
        Discuss a project ↗
      </Link>
    </div>
  );
}
function Directory() {
  return (
    <nav className="hc-directory" aria-label="Concept service navigation">
      <Link href="/services/electrical-engineering">
        <span>01</span>Electrical Engineering<b aria-hidden="true">↗</b>
      </Link>
      <Link href="/services/iot-smart-automation">
        <span>02</span>IoT & Smart Automation<b aria-hidden="true">↗</b>
      </Link>
      <Link href="/services/ev-charging">
        <span>03</span>EV Charging<b aria-hidden="true">↗</b>
      </Link>
      <Link href="/#property-services">
        <span>04</span>Property Services<b aria-hidden="true">↗</b>
      </Link>
    </nav>
  );
}
export default function HeroConcept({
  concept,
  brand,
}: {
  concept: HeroConceptKey;
  brand: string;
}) {
  if (concept === "a")
    return (
      <section
        className="hc-concept hc-architectural"
        aria-labelledby="concept-title"
      >
        <div className="px-wrap">
          <div className="hc-a-opening">
            <p className="ix-eyebrow">
              {brand} / ENGINEERING & INTEGRATED SERVICES
            </p>
            <h1 id="concept-title">{headline}</h1>
          </div>
          <div className="hc-a-closing">
            <p>{positioning}</p>
            <Actions />
          </div>
          <ConceptPhoto />
        </div>
      </section>
    );
  if (concept === "b")
    return (
      <section
        className="hc-concept hc-portfolio"
        aria-labelledby="concept-title"
      >
        <div className="px-wrap">
          <ConceptPhoto />
          <div className="hc-b-baseline">
            <h1 id="concept-title">{headline}</h1>
            <Actions />
          </div>
          <aside className="hc-b-index">
            <p className="ix-eyebrow">{brand} / ENGINEERING IN FOCUS</p>
            <p className="hc-b-intro">
              The work behind a functioning property.
            </p>
            <p>{positioning}</p>
            <Directory />
          </aside>
        </div>
      </section>
    );
  return (
    <section className="hc-concept hc-modular" aria-labelledby="concept-title">
      <div className="px-wrap hc-c-grid">
        <div className="hc-c-position">
          <p className="ix-eyebrow">
            {brand} / ENGINEERING & INTEGRATED SERVICES
          </p>
          <h1 id="concept-title">{headline}</h1>
          <p>{positioning}</p>
        </div>
        <div className="hc-c-inquiry">
          <p className="ix-eyebrow">START WITH YOUR REQUIREMENTS</p>
          <h2>What does your space need?</h2>
          <p>
            Share the property, the existing systems and the work you have in
            mind.
          </p>
          <Link className="ix-button" href="/#contact">
            Discuss a project <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <ConceptPhoto className="hc-c-photo" />
        <div className="hc-c-services">
          <p className="ix-eyebrow">EXPLORE OUR CAPABILITIES</p>
          <Directory />
          <Link className="ix-text-link" href="/services">
            Search all services ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
