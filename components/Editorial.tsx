import Link from "next/link";
import Image from "next/image";
import { generalFaq, processSteps, type Service } from "@/lib/services";
import Reveal from "./Reveal";
export function Scene({
  name = "building",
  alt,
  priority = false,
}: {
  name?: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <figure className={`px-scene px-scene-${name}`}>
      <Image
        src={`/visuals/${name}.webp`}
        alt={alt}
        width={1536}
        height={1024}
        sizes="(max-width: 768px) 100vw, 60vw"
        priority={priority}
        unoptimized
      />
      <figcaption>
        <span className="px-dot" /> SH360 / SYSTEM STUDY{" "}
        <span>CONCEPTUAL VISUALIZATION</span>
      </figcaption>
    </figure>
  );
}
export function FAQ({ items = generalFaq }: { items?: [string, string][] }) {
  return (
    <div className="px-faq-list">
      {items.map(([q, a], i) => (
        <details key={q}>
          <summary>
            <span className="px-faq-number">
              {String(i + 1).padStart(2, "0")}
            </span>
            {q}
            <span className="px-plus" aria-hidden="true">
              +
            </span>
          </summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}
export function Process() {
  return (
    <section className="px-section px-process" id="process">
      <div className="px-wrap">
        <div className="px-section-top">
          <p className="px-label">HOW WE WORK</p>
          <h2>
            From the first conversation
            <br />
            to the final check.
          </h2>
          <Link className="px-text-link" href="/#contact">
            Start your inquiry ↗
          </Link>
        </div>
        <div className="px-process-line">
          {processSteps.map(([title, desc], i) => (
            <Reveal key={title} delay={i * 50}>
              <span className="px-process-num">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Capability({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  return (
    <section
      className={`px-section px-capability ${index === 1 ? "px-dark" : ""}`}
      id={service.slug}
    >
      <div className="px-wrap">
        <Reveal className="px-capability-grid">
          <div className="px-capability-copy">
            <p className="px-label">CORE CAPABILITY / 0{index + 1}</p>
            <h2>
              {index === 0
                ? "Electrical systems built for everyday demands."
                : index === 1
                  ? "Make your space work smarter."
                  : "Charging infrastructure for the road ahead."}
            </h2>
            <p>{service.intro}</p>
            <div className="px-capability-tasks">
              {service.tasks.map(([title, desc], i) => (
                <details key={title} open={i === 0}>
                  <summary>
                    <span>0{i + 1}</span>
                    {title}
                    <b aria-hidden="true">+</b>
                  </summary>
                  <p>{desc}</p>
                </details>
              ))}
            </div>
            <div className="px-actions">
              <Link className="px-text-link" href={`/services/${service.slug}`}>
                Explore {service.short.toLowerCase()} ↗
              </Link>
              <Link
                className="px-small-link"
                href={`/services/${service.slug}#contact`}
              >
                {index === 0
                  ? "Request an assessment"
                  : index === 1
                    ? "Discuss a smart project"
                    : "Discuss your installation"}{" "}
                ↗
              </Link>
            </div>
          </div>
          <div className="px-capability-art">
            <Scene
              name={service.image}
              alt={`Conceptual architectural illustration of ${service.title.toLowerCase()}`}
            />
            <div className="px-system-caption">
              <span>
                0{index + 1} / {service.short.toUpperCase()}
              </span>
              <p>
                {index === 0
                  ? "From supply to switch. A considered system."
                  : index === 1
                    ? "Connected devices. Practical control."
                    : "The connection between building and mobility."}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
