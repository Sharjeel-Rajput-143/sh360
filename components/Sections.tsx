import Image from "next/image";
import { photo, type Category } from "@/lib/products";
import { SITE } from "@/lib/site";
import CategoryLink from "./CategoryLink";
import { FeatureIcon, LogoMark, WhatsAppIcon, type FeatureIconName } from "./Icons";
import Reveal from "./Reveal";
import WhatsAppLink from "./WhatsAppLink";

const FEATURES: { icon: FeatureIconName; title: string; text: string }[] = [
  { icon: "leaf", title: "Licensed technicians", text: "Trained, background-checked professionals" },
  { icon: "ruler", title: "Upfront pricing", text: "Clear quotes before any work starts" },
  { icon: "chat", title: "Free consultation", text: "Describe the job on WhatsApp" },
  { icon: "truck", title: "Same day service", text: "Fast response across the city" },
];

const STEPS = [
  {
    title: "Pick a service",
    text: "Browse electrical, plumbing, cleaning, EV charger and maintenance services.",
  },
  {
    title: "Tap Get Quote",
    text: "WhatsApp opens with the service name and details already filled in.",
  },
  {
    title: "Get it done",
    text: "We confirm the price, schedule a visit and send a technician.",
  },
];

const LIFESTYLE_POINTS = [
  "Certified electricians for wiring, panels and repairs",
  "Background-checked technicians for every job",
  "One team for electrical, plumbing, cleaning, EV and maintenance",
];

export function TrustStrip() {
  return (
    <section className="strip" aria-label="Why choose us">
      <div className="container strip-grid">
        {FEATURES.map((feature) => (
          <div className="strip-item" key={feature.title}>
            <span className="strip-icon">
              <FeatureIcon name={feature.icon} />
            </span>
            <div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Lifestyle() {
  return (
    <section className="section section-soft">
      <div className="container lifestyle">
        <Reveal className="lifestyle-media">
          <div className="lifestyle-main">
            <Image
              src={photo("photo-1785682117029-86171f64c826")}
              alt="Electrician working on a home wiring panel"
              fill
              sizes="(min-width: 900px) 560px, 100vw"
              className="media-img"
            />
          </div>
          <div className="lifestyle-inset">
            <Image
              src={photo("photo-1635335874521-7987db781153")}
              alt="Technician checking an electrical distribution board"
              fill
              sizes="(min-width: 900px) 260px, 50vw"
              className="media-img"
            />
          </div>
        </Reveal>
        <Reveal className="lifestyle-copy" delay={100}>
          <p className="eyebrow">Built around your home</p>
          <h2>Electrical and home services done safely, the first time</h2>
          <p>
            From a full rewiring job to a single light fixture, every service is carried out by a
            trained technician and checked before we call it done.
          </p>
          <ul className="checklist">
            {LIFESTYLE_POINTS.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <WhatsAppLink className="btn btn-wa btn-lg">
            <WhatsAppIcon className="btn-icon" />
            Talk to our team
          </WhatsAppLink>
        </Reveal>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Simple process</p>
          <h2>How it works</h2>
        </Reveal>
        <ol className="steps">
          {STEPS.map((step, i) => (
            <li key={step.title}>
              <Reveal className="step" delay={i * 100}>
                <span className="step-num">{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="cta-band" id="contact">
      <Image
        src={photo("photo-1562259929-b4e1fd3aef09")}
        alt=""
        fill
        sizes="100vw"
        className="media-img"
      />
      <div className="cta-shade" />
      <div className="container cta-content">
        <Reveal className="cta-inner">
          <h2>Not sure which service you need?</h2>
          <p>Describe the problem on WhatsApp and our team will guide you to the right fix.</p>
          <WhatsAppLink className="btn btn-wa btn-lg">
            <WhatsAppIcon className="btn-icon" />
            Chat with us on WhatsApp
          </WhatsAppLink>
          <p className="cta-phone">
            Or call / message: <a href={`tel:+${SITE.whatsappNumber}`}>{SITE.phoneDisplay}</a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer({ brand, categories }: { brand: string; categories: Category[] }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#top" className="logo">
            <LogoMark className="logo-mark" />
            <span>{brand}</span>
          </a>
          <p>{SITE.tagline}. Electrical, plumbing, cleaning, EV charger and maintenance services.</p>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            {categories.map((c) => (
              <li key={c.id}>
                <CategoryLink id={c.id} className="footer-link">
                  {c.label}
                </CategoryLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Help</h4>
          <ul>
            <li>
              <a href="#how">How it works</a>
            </li>
            <li>
              <a href="#contact">Contact us</a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={`tel:+${SITE.whatsappNumber}`}>{SITE.phoneDisplay}</a>
            </li>
            <li>
              <WhatsAppLink className="footer-link">Chat on WhatsApp</WhatsAppLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        © {new Date().getFullYear()} {brand}. All rights reserved.
      </div>
    </footer>
  );
}

export function WhatsAppFab() {
  return (
    <WhatsAppLink className="fab">
      <WhatsAppIcon className="fab-icon" />
      <span className="sr-only">Chat on WhatsApp</span>
    </WhatsAppLink>
  );
}
