import Link from "next/link";
import SectionHeading from "./SectionHeading";

export function AboutSH360() {
  return (
    <section id="about" className="ix-section rb-about" aria-labelledby="about-title">
      <div className="px-wrap rb-introduction">
        <p className="ix-eyebrow">ABOUT SH360</p>
        <div className="rb-about-heading">
          <h2 id="about-title">Technical Thinking.<br />Practical Solutions.</h2>
          <Link href="/about" className="ix-text-link">Learn More About Us ↗</Link>
        </div>
        <div className="rb-about-copy">
          <p>SH360 brings electrical engineering, connected technology and essential property services together through a coordinated approach to installation, upgrades and maintenance.</p>
          <p>Our focus is on understanding how a property operates, identifying the work required and delivering solutions suited to its technical and practical needs.</p>
          <p>From individual service requirements to projects involving multiple systems, SH360 aims to make property improvements and technical work easier to manage.</p>
        </div>
      </div>
    </section>
  );
}

const environments = [
  ["Residential Properties", "Plan improvements around occupied rooms, existing fittings and daily routines. Describe the issue, the affected area and any access restrictions."],
  ["Commercial Properties", "Identify the areas used by customers, the condition of existing systems and any trading or access constraints that affect the proposed work."],
  ["Offices & Workplaces", "Consider workstations, shared areas and equipment in use. Share occupancy, access arrangements and where planned changes may affect staff."],
  ["Managed Properties", "Bring reported defects and planned improvements into one brief. Identify the property contact, permissions and access arrangements for each location."],
];
export function WhereWeWork() {
  return (
    <section id="where-we-work" className="ix-section rb-environments" aria-labelledby="environments-title">
      <div className="px-wrap">
        <SectionHeading id="environments-title" label="WHERE WE WORK" title="Different spaces. Different requirements.">
          The way a property is used shapes the work, the access needed and the details to review.
        </SectionHeading>
        <div className="rb-environment-list">
          {environments.map(([title, text], i) => <article key={title}><span className="cp-number">0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </div>
    </section>
  );
}
const stages = [
  ["Share Your Requirements", "Tell us about the property and the issue or planned improvement. Include the location, relevant photos and any equipment details you have."],
  ["Review & Assessment", "Discuss existing conditions, access and technical requirements. Establish whether a site assessment or further information is needed."],
  ["Scope & Quotation", "Review the proposed tasks, materials, exclusions and quotation. Clarify responsibilities and arrangements before agreeing to proceed."],
  ["Execution & Handover", "Arrange access for the agreed work. Review the completed scope and discuss relevant operating instructions, care information and any remaining items."],
];
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
          <ol className="bp-approach-stages">
            {stages.map(([title, text], i) => <li key={title}><span aria-hidden="true">0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}
          </ol>
        </div>
      </div>
    </section>
  );
}
