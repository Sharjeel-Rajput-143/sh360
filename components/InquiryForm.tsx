"use client";
import { useState, type FormEvent } from "react";
import { services } from "@/lib/services";
import { SITE } from "@/lib/site";
import { inquiryAdSource } from "@/lib/whatsapp";
import { useBrand } from "./BrandProvider";
import WhatsAppLink from "./WhatsAppLink";
export default function InquiryForm({
  initialService = "",
}: {
  initialService?: string;
}) {
  const [selected, setSelected] = useState<string[]>(
      initialService ? [initialService] : [],
    ),
    [ready, setReady] = useState(""),
    [error, setError] = useState("");
  const brand = useBrand();
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    if (!selected.length) {
      setError("Select at least one service.");
      return;
    }
    const d = new FormData(e.currentTarget);
    const ad = inquiryAdSource();
    const text = [
      `Hello ${brand}, I would like to discuss a service.`,
      ...["Full name", "Phone", "Email", "Location", "Property type"].map(
        (k) => `${k}: ${d.get(k)}`,
      ),
      `Services: ${selected.join(", ")}`,
      `Requirements: ${d.get("Description")}`,
      `Preferred contact: ${d.get("Contact method")}`,
      d.get("System details")
        ? `System / equipment: ${d.get("System details")}`
        : "",
      ad
        ? `Came from: ${[ad.source, ad.campaign].filter(Boolean).join(" / ")}`
        : "",
    ]
      .filter(Boolean)
      .join("\n");
    setReady(
      `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`,
    );
  }
  return (
    <section id="contact" className="px-section px-inquiry">
      <div className="px-wrap px-inquiry-grid">
        <div>
          <p className="px-label">CONTACT & INQUIRY</p>
          <h2>
            Tell us what
            <br />
            your space needs.
          </h2>
          <p>
            Planning an upgrade, exploring smart automation or tackling everyday
            maintenance? Start with the work you have in mind.
          </p>
          <WhatsAppLink className="px-text-link">
            Contact us on WhatsApp ↗
          </WhatsAppLink>
          <div className="px-inquiry-note">
            <span>01 / A clear starting point</span>
            <p>
              Your message opens in WhatsApp for you to review and send.
              Availability, location and scope are confirmed in conversation.
            </p>
            <span>02 / Photos & documents</span>
            <p>
              Attach photos, plans or equipment documents directly in WhatsApp
              after opening the conversation. Files are not uploaded by this
              form.
            </p>
          </div>
        </div>
        <form
          onSubmit={submit}
          onChange={() => setReady("")}
          className="px-form"
        >
          <div className="px-fields">
            {[
              ["Full name", "text", "name"],
              ["Phone", "tel", "tel"],
              ["Email", "email", "email"],
              ["Location", "text", "street-address"],
            ].map(([name, type, auto]) => (
              <label key={name}>
                {name}
                {name === "Location" ? " / city & area" : ""}
                <input
                  required
                  name={name}
                  type={type}
                  pattern={
                    type === "tel"
                      ? String.raw`[+0-9\(\) .\-]{7,25}`
                      : undefined
                  }
                  title={
                    type === "tel"
                      ? "Enter a phone number with 7–25 characters"
                      : undefined
                  }
                  autoComplete={auto}
                  maxLength={name === "Email" ? 254 : 120}
                />
              </label>
            ))}
            <label>
              Property type
              <select required name="Property type" defaultValue="">
                <option value="" disabled>
                  Select property type
                </option>
                {[
                  "Residential",
                  "Office / workplace",
                  "Commercial",
                  "Managed property",
                  "Other",
                ].map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </label>
            <label>
              Preferred contact method
              <select name="Contact method">
                <option>WhatsApp</option>
                <option>Phone</option>
                <option>Email</option>
              </select>
            </label>
          </div>
          <fieldset>
            <legend>
              Service required <small>SELECT ALL THAT APPLY</small>
            </legend>
            <div className="px-service-checks">
              {services.map((s) => (
                <label key={s.slug}>
                  <input
                    type="checkbox"
                    checked={selected.includes(s.title)}
                    onChange={(e) =>
                      setSelected(
                        e.target.checked
                          ? [...selected, s.title]
                          : selected.filter((x) => x !== s.title),
                      )
                    }
                  />
                  <span>{s.short}</span>
                </label>
              ))}
            </div>
          </fieldset>
          {selected.some((s) =>
            services.slice(0, 3).some((x) => x.title === s),
          ) && (
            <label>
              Existing systems / equipment <span>(optional)</span>
              <input
                name="System details"
                maxLength={500}
                placeholder="Board, smart device or EV charger model; planned changes"
              />
            </label>
          )}
          <label>
            Project or service description
            <textarea
              required
              name="Description"
              maxLength={2000}
              rows={4}
              placeholder="What needs installing, repairing or reviewing? Include access or timing requirements."
            />
          </label>
          <p className="px-form-disclosure">
            By continuing, you choose to share these details with SH360 through
            WhatsApp. <a href="/privacy">Privacy policy</a>. Do not include
            passwords or sensitive documents.
          </p>
          {error && (
            <p role="alert" className="px-error">
              {error}
            </p>
          )}
          <button type="submit" className="px-button">
            Prepare Your Inquiry <span>↗</span>
          </button>
          {ready && (
            <div className="px-handoff" role="status">
              <strong>Your message is ready to review.</strong>
              <p>
                It has not been sent. Open WhatsApp, check your details, attach
                any photos and press Send.
              </p>
              <a
                href={ready}
                target="_blank"
                rel="noopener noreferrer"
                className="px-button"
              >
                Continue to WhatsApp ↗
              </a>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
