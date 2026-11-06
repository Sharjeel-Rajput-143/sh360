import Link from "next/link";

/** Approved editorial composition; reference photography is not presented as SH360 work. */
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
          <figure className="bp-photo">
            <picture>
              <source type="image/webp" srcSet="/photography/electrical-installation-640.webp 640w, /photography/electrical-installation-1280.webp 1280w, /photography/electrical-installation-1920.webp 1920w" sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1360px) 40vw, 520px" />
              <img src="/photography/electrical-installation-1280.webp" width={1280} height={853} alt="Electrical technician testing an installed distribution board with a meter" fetchPriority="high" />
            </picture>
            <figcaption>
              <span>Electrical installation testing.<br />Reference photograph, not a SH360 project.</span>
              <span><a href="https://commons.wikimedia.org/wiki/File:Man-electrical-technician-working-switchboard-with-fuses.jpg" target="_blank" rel="noopener noreferrer">Cláudio Marques Unip. LDA</a><br /><a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> · cropped</span>
            </figcaption>
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
