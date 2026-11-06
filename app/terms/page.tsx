import PublicShell from "@/components/PublicShell";
import { getCatalog } from "@/lib/catalog";
export const metadata = { title: "Website terms | SH360" };
export default async function Terms() {
  return (
    <PublicShell catalog={await getCatalog()}>
      <main id="main" className="px-wrap px-section px-legal">
        <p className="px-label">WEBSITE INFORMATION</p>
        <h1>Before work begins.</h1>
        <p>
          This website provides information to help you discuss technical and
          property-service requirements. Sending an inquiry does not confirm a
          booking, price, installation design or availability.
        </p>
        <h2>Scope & quotations</h2>
        <p>
          Location, property condition, access, materials and technical
          suitability must be reviewed before a service is agreed. Confirm
          inclusions, exclusions, timing and commercial terms directly with
          SH360 before authorizing work.
        </p>
        <h2>Conceptual illustrations</h2>
        <p>
          Architectural visuals illustrate service relationships. They are not
          installation drawings, engineering specifications, safety assessments
          or photographs of completed SH360 projects.
        </p>
        <h2>Existing installations</h2>
        <p>
          Device compatibility and existing-system capacity require review.
          Website content is not a substitute for a property-specific technical
          assessment. Do not use the illustrations as instructions for
          electrical or plumbing work.
        </p>
        <h2>External services</h2>
        <p>
          WhatsApp and any linked media platforms operate independently. Review
          your message before sending and confirm receipt directly with SH360.
        </p>
      </main>
    </PublicShell>
  );
}
