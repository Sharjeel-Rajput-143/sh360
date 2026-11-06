import PrivacyControls from "@/components/PrivacyControls";
import PublicShell from "@/components/PublicShell";
import { getCatalog } from "@/lib/catalog";
export const metadata = { title: "Privacy | SH360" };
export default async function Privacy() {
  return (
    <PublicShell catalog={await getCatalog()}>
      <main id="main" className="px-wrap px-section px-legal">
        <p className="px-label">INQUIRY PRIVACY</p>
        <h1>Your inquiry details.</h1>
        <p>
          The inquiry form prepares a message on your device. It does not submit
          the form to a SH360 web endpoint. When you continue to WhatsApp, the
          details you enter are placed in a message addressed to the contact
          number configured for SH360. You choose whether to send it.
        </p>
        <h2>What you share</h2>
        <p>
          Your name, contact details, property location, selected services and
          description are included in the prepared message. Photos and documents
          can be attached separately in WhatsApp. Only share information needed
          to discuss the work.
        </p>
        <h2>Saved services & attribution</h2>
        <p>
          Saved service IDs are stored locally in your browser. Existing
          campaign source and campaign name parameters may be included with a
          WhatsApp inquiry. Admin authentication uses a session cookie. WhatsApp
          processes information under its own privacy terms.
        </p>
        <h2>Questions about your information</h2>
        <p>
          Contact SH360 through the listed WhatsApp number to discuss an inquiry
          or request clarification about information you have shared. Retention
          practices and any requirements specific to your inquiry should be
          confirmed with SH360.
        </p>
        <PrivacyControls />
      </main>
    </PublicShell>
  );
}
