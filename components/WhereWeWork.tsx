import { propertyApplications } from "@/lib/story-media";
import VisualSelector from "./VisualSelector";
import SectionHeading from "./SectionHeading";
export default function WhereWeWork() {
 return <section id="where-we-work" className="ix-section rb-environments" aria-labelledby="environments-title"><div className="px-wrap"><SectionHeading id="environments-title" label="WHERE WE WORK" title="Different spaces. Different requirements.">Choose an environment to review the access, occupancy and property details that shape the brief.</SectionHeading><VisualSelector id="property" label="Property environments" variant="environment" items={propertyApplications} /></div></section>;
}
