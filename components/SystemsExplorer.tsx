"use client";

import { useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const systems = [
  {
    id: "electrical",
    title: "Electrical infrastructure",
    number: "01",
    image: "wiring-detail",
    heading: "Start with the supply.",
    description:
      "The distribution board, protective devices and circuit routes form the foundation for lighting, sockets and connected equipment.",
    points: [
      "Existing supply and circuit arrangement",
      "Equipment demand and installation routes",
      "Appropriate protection and accessible isolation",
    ],
    destination: "electrical-engineering",
  },
  {
    id: "smart",
    title: "Intelligent control",
    number: "02",
    image: "smart",
    heading: "Connect around a useful routine.",
    description:
      "Lighting, sensors and controls need compatible devices and dependable connectivity. The useful starting point is what you want your space to do.",
    points: [
      "Lighting scenes and switching preferences",
      "Device protocols and network coverage",
      "Local controls, permissions and handover",
    ],
    destination: "iot-smart-automation",
  },
  {
    id: "ev",
    title: "Electric mobility",
    number: "03",
    image: "ev-installation",
    heading: "Bring the building to the parking space.",
    description:
      "An EV charger connects the vehicle to the property's electrical infrastructure. Parking access, supply capacity and the cable route shape the installation.",
    points: [
      "Vehicle needs and charger compatibility",
      "Parking position and cable route",
      "Existing loads and circuit protection",
    ],
    destination: "ev-charging",
  },
];

export default function SystemsExplorer({
  initial = "electrical",
}: {
  initial?: string;
}) {
  const [active, setActive] = useState(
    Math.max(
      0,
      systems.findIndex((s) => s.id === initial),
    ),
  );
  const id = useId();
  const current = systems[active];
  return (
    <section
      className="px-system-explorer"
      aria-label="Explore connected property systems"
    >
      <div
        className="px-explorer-tabs"
        role="tablist"
        aria-label="Property systems"
      >
        {systems.map((s, i) => (
          <button
            key={s.id}
            type="button"
            id={`${id}-tab-${i}`}
            role="tab"
            aria-selected={active === i}
            aria-controls={`${id}-panel`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(event) => {
              let next = i;
              if (event.key === "ArrowRight") next = (i + 1) % systems.length;
              else if (event.key === "ArrowLeft")
                next = (i + systems.length - 1) % systems.length;
              else if (event.key === "Home") next = 0;
              else if (event.key === "End") next = systems.length - 1;
              else return;
              event.preventDefault();
              setActive(next);
              document.getElementById(`${id}-tab-${next}`)?.focus();
            }}
          >
            <span>{s.number}</span>
            {s.title}
            <b aria-hidden="true">↗</b>
          </button>
        ))}
      </div>
      <div
        className="px-explorer-panel"
        id={`${id}-panel`}
        role="tabpanel"
        aria-labelledby={`${id}-tab-${active}`}
        tabIndex={0}
      >
        <div className="px-explorer-model" key={current.id}>
          <Image
            src={`/visuals/${current.image}.webp`}
            width={1536}
            height={1024}
            sizes="(max-width: 700px) 100vw, 65vw"
            alt={`Conceptual architectural study of ${current.title.toLowerCase()}`}
            unoptimized
          />
          <p>
            <span className="px-dot" /> SYSTEM STUDY / {current.number}
            <span>CONCEPTUAL ILLUSTRATION</span>
          </p>
        </div>
        <div className="px-explorer-copy">
          <p className="px-label">THE SYSTEM IN CONTEXT</p>
          <h3>{current.heading}</h3>
          <p>{current.description}</p>
          <ul>
            {current.points.map((point, i) => (
              <li key={point}>
                <span>0{i + 1}</span>
                {point}
              </li>
            ))}
          </ul>
          <Link
            href={`/services/${current.destination}`}
            className="px-text-link"
          >
            Understand the work ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
