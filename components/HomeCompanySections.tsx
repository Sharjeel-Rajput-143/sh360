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
export function HowWeWork() {
  return (
    <section id="how-we-work" className="ix-section rb-process" aria-labelledby="process-title">
      <div className="px-wrap">
        <span id="process" className="cp-anchor" />
        <SectionHeading id="process-title" label="HOW WE WORK" title="From the first brief to the agreed work.">
          A clear sequence for discussing requirements, defining the scope and reviewing the result.
        </SectionHeading>
        <ol className="rb-timeline">
          {stages.map(([title, text], i) => <li key={title}><span aria-hidden="true">0{i + 1}</span><h3>{title}</h3><p>{text}</p></li>)}
        </ol>
      </div>
    </section>
  );
}
export function WhySH360() {
  return (
    <section id="why-sh360" className="ix-section rb-why" aria-labelledby="why-title">
      <div className="px-wrap">
        <SectionHeading id="why-title" label="WHY SH360" title="A connected brief for work that overlaps.">
          Useful when your requirements cross more than one part of a property.
        </SectionHeading>
        <div className="rb-reasons">
          <article><h3>Technical and practical work, together.</h3><p>The service range brings electrical systems, connected technology and everyday property needs into one place to explore.</p></article>
          <article><h3>One inquiry for a mixed brief.</h3><p>Select multiple services in the inquiry form and describe the overall requirement, rather than preparing a separate request for every task.</p></article>
          <article><h3>Scope information before you ask.</h3><p>Each service guide sets out example tasks, information to prepare and common questions, helping you describe the work you need.</p></article>
        </div>
        <Link href="#contact" className="ix-text-link">Start with your requirements ↗</Link>
      </div>
    </section>
  );
}
