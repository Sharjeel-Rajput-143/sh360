import Image from "next/image";
import Link from "next/link";
import { capabilities } from "@/lib/capabilities";
import { serviceMedia, technicalScopes } from "@/lib/story-media";
import VisualSelector from "./VisualSelector";
import SectionHeading from "./SectionHeading";
import CapabilitiesShowcase from "./CapabilitiesShowcase";
export default function Capabilities() {
  return <section className="ix-section cp-capabilities vs-capabilities" id="capabilities" aria-labelledby="capabilities-title"><div className="px-wrap">
    <span id="solutions" className="cp-anchor" />
    <SectionHeading id="capabilities-title" label="OUR CAPABILITIES" title="Explore the systems. Find the right scope.">Select an engineering capability to see the work and its requirements. Property services follow below.</SectionHeading>
    <div id="engineering"><VisualSelector id="capability" label="Engineering capabilities" items={capabilities.filter(s=>s.primary).map(s=>({id:s.slug,title:s.title,description:s.description,...serviceMedia[s.slug],labels:technicalScopes[s.slug],href:`/services/${s.slug}`,caption:"AI-generated architectural study · illustrative, not an installation design"}))} /></div>
    <div id="property-services" className="vs-property-services"><p className="ix-eyebrow">PROPERTY SERVICES / 04–07</p><div className="vs-supporting">
      {capabilities.filter(s=>!s.primary).map(s=><article key={s.slug}><Link href={`/services/${s.slug}`} className="vs-service-image" tabIndex={-1} aria-hidden="true"><Image src={serviceMedia[s.slug].src} alt="" width={800} height={533} sizes="(max-width:700px) 100vw, 25vw" unoptimized /></Link><p className="vs-media-kind">{serviceMedia[s.slug].kind==="photo"?"Reference photography":"Conceptual pipework study"}</p><h3><Link href={`/services/${s.slug}`}>{s.title} <span aria-hidden="true">↗</span></Link></h3><p>{s.description}</p></article>)}
    </div><p className="vs-reference-note">Illustrations and reference photographs explain service scope; they do not show completed SH360 projects.</p></div>
    <CapabilitiesShowcase />
    <div className="cp-catalog-row" id="products"><p>Looking for a specific installation, repair or maintenance task?</p><Link href="/services" className="ix-text-link">Search the live service catalog ↗</Link></div>
  </div></section>;
}
