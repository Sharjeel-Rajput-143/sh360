import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import ApproachProgress from "./ApproachProgress";

export function AboutSH360() {
  return (
    <section id="about" className="ix-section rb-about vs-about" aria-labelledby="about-title">
      <div className="px-wrap rb-introduction">
        <p className="ix-eyebrow">ABOUT SH360</p>
        <div className="rb-about-heading">
          <h2 id="about-title">Technical Thinking.<br />Practical Solutions.</h2>
          <Link href="/about" className="ix-text-link">Learn More About Us ↗</Link>
        </div>
        <figure className="vs-about-photo"><Image src="/photography/electrical-installation-1280.webp" alt="Technician testing an installed electrical distribution board" width={1280} height={853} sizes="(max-width:700px) 100vw, 45vw" unoptimized /><figcaption>Reference installation photograph · <a href="https://commons.wikimedia.org/wiki/File:Man-electrical-technician-working-switchboard-with-fuses.jpg" target="_blank" rel="noopener noreferrer">Cláudio Marques Unip. LDA</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>, cropped.</figcaption></figure>
        <div className="rb-about-copy">
          <p>SH360 brings electrical engineering, connected technology and essential property services together through a coordinated approach to installation, upgrades and maintenance.</p>
          <p>Our focus is on understanding how a property operates, identifying the work required and delivering solutions suited to its technical and practical needs.</p>
          <p>From individual service requirements to projects involving multiple systems, SH360 aims to make property improvements and technical work easier to manage.</p>
        </div>
      </div>
    </section>
  );
}

export function OurApproach() {
  return (
    <section id="approach" className="ix-section rb-approach" aria-labelledby="approach-title">
      <div className="px-wrap">
        <span id="how-we-work" className="cp-anchor" />
        <span id="process" className="cp-anchor" />
        <SectionHeading id="approach-title" label="OUR APPROACH" title="Understand the property. Define the work.">
          From the first inquiry to handover, clarify the requirements and agree what is included before proceeding.
        </SectionHeading>
        <div className="bp-approach-grid">
          <aside className="bp-approach-context" aria-label="A coordinated brief">
            <h3>One brief.<br />Related requirements.</h3>
            <p>Technical systems and everyday property needs can overlap. Select multiple services in one inquiry so the wider requirement can be discussed together.</p>
            <p>Our service guides outline example tasks, information to prepare and common questions. Suitability, access, materials and availability are clarified for your property.</p>
            <Link href="#contact" className="ix-text-link">Discuss your requirements ↗</Link>
          </aside>
          <ApproachProgress />
        </div>
      </div>
    </section>
  );
}
