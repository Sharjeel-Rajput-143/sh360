import Link from "next/link";
import PublicShell from "@/components/PublicShell";
import { getCatalog } from "@/lib/catalog";
export const metadata = {
  title: "About SH360 | Technical Thinking. Practical Solutions.",
  description: "SH360's approach to electrical engineering, connected technology and essential property services.",
};
export default async function AboutPage() {
  return (
    <PublicShell catalog={await getCatalog()}>
      <main id="main" className="rb-about-page px-wrap">
        <p className="px-label">ABOUT SH360</p>
        <h1>Technical Thinking.<br />Practical Solutions.</h1>
        <p className="rb-page-lead">SH360 brings electrical engineering, connected technology and essential property services together through a coordinated approach to installation, upgrades and maintenance.</p>
        <div className="rb-about-detail">
          <section><h2>Start with the property.</h2><p>Our focus is on understanding how a property operates, identifying the work required and delivering solutions suited to its technical and practical needs. Existing systems, how the space is used and the condition of the property shape that conversation.</p></section>
          <section><h2>Bring related requirements together.</h2><p>From individual service requirements to projects involving multiple systems, SH360 aims to make property improvements and technical work easier to manage. Describe the overall requirement in one inquiry and select the services relevant to your brief.</p></section>
          <section><h2>Define the work before proceeding.</h2><p>The service guides help you prepare information about the issue or planned upgrade. Suitability, availability, materials, access and the agreed scope are clarified during inquiry; the guides do not replace a property-specific assessment.</p></section>
        </div>
        <div className="rb-about-actions"><Link href="/services" className="ix-button">Explore our services ↗</Link><Link href="/#contact" className="ix-text-link">Discuss your requirements ↗</Link></div>
      </main>
    </PublicShell>
  );
}
