import Link from "next/link";
import Image from "next/image";

/** Architectural cutaway review candidate. Approval is not implied. */
export default function EngineeringHero({ brand }: { brand: string }) {
  return (
    <section id="top" className="bp-hero" aria-labelledby="bp-title">
      <div className="px-wrap">
        <div className="bp-intro">
          <p className="ix-eyebrow">01 / ENGINEERING EVERYDAY SPACES</p>
          <p className="bp-descriptor">{brand} / ENGINEERING & INTEGRATED SERVICES</p>
        </div>
        <div className="bp-composition">
          <div className="bp-copy">
            <h1 id="bp-title">Built Around the Systems That Matter.</h1>
            <p className="bp-description">Electrical engineering, IoT, EV charging and essential property services — working together to support the spaces we live and work in.</p>
            <div className="bp-actions">
              <Link href="/services" className="ix-button">Explore Our Services <span aria-hidden="true">↗</span></Link>
              <Link href="#contact" className="ix-text-link">Discuss a Project <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <figure className="vs-hero-model">
            <Image src="/story/systems-cutaway.webp" alt="Two-storey building cutaway revealing electrical distribution, contained cable routes, lighting and a pipe riser" width={1536} height={1024} sizes="(max-width:700px) 100vw, 65vw" priority unoptimized />
            <figcaption><strong>HERO REVIEW CANDIDATE / NOT APPROVED</strong><span>Original AI-generated architectural study. Illustrative systems, not an installation design or SH360 project.</span></figcaption>
          </figure>
        </div>
        <nav className="bp-index" aria-label="Capability index">
          <p className="ix-eyebrow">EXPLORE OUR CAPABILITIES</p>
          <Link href="/services/electrical-engineering"><span>01</span>Electrical Engineering <b aria-hidden="true">↗</b></Link>
          <Link href="/services/iot-smart-automation"><span>02</span>IoT & Smart Automation <b aria-hidden="true">↗</b></Link>
          <Link href="/services/ev-charging"><span>03</span>EV Charging <b aria-hidden="true">↗</b></Link>
          <Link href="#property-services"><span>04–07</span>Property Services <b aria-hidden="true">↘</b></Link>
        </nav>
      </div>
    </section>
  );
}
