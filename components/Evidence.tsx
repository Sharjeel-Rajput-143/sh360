import Image from "next/image";
import SectionHeading from "./SectionHeading";
import evidence from "@/data/evidence.json";
type Project = {
  name: string;
  category: string;
  propertyType: string;
  location: string;
  requirement: string;
  scope: string;
  approach: string;
  outcome: string;
  image: string;
  verified: boolean;
};
type Testimonial = {
  name: string;
  service: string;
  review: string;
  location?: string;
  verified: boolean;
};
export default function Evidence({ selected = false }: { selected?: boolean }) {
  const projects = (evidence.projects as Project[]).filter(
    (p) => p.verified === true && p.name && p.image && p.location && p.outcome,
  );
  const reviews = (evidence.testimonials as Testimonial[]).filter(
    (t) => t.verified === true && t.name && t.review,
  );
  if (selected ? !projects.length : !projects.length && !reviews.length)
    return null;
  const displayedProjects = selected ? projects.slice(0, 3) : projects;
  return (
    <section className="px-section" id="projects">
      <div className="px-wrap">
        {selected ? (
          <SectionHeading
            label="SELECTED WORK"
            title="Verified work, in context."
          />
        ) : (
          <>
            <p className="px-label">OUR WORK</p>
            <h2>Our expertise, put into practice.</h2>
          </>
        )}
        {displayedProjects.map((p) => (
          <article className="px-evidence" key={p.name}>
            <Image
              src={p.image}
              alt={p.name}
              width={1200}
              height={800}
              unoptimized
            />
            <div>
              <p>
                {p.category} / {p.propertyType} / {p.location}
              </p>
              <h3>{p.name}</h3>
              <p>{p.requirement}</p>
              <p>{p.scope}</p>
              <p>{p.approach}</p>
              <p>{p.outcome}</p>
            </div>
          </article>
        ))}
        {!selected && reviews.length > 0 && (
          <>
            <h2>Work that earns confidence.</h2>
            {reviews.map((r) => (
              <blockquote key={r.name}>
                <p>{r.review}</p>
                <cite>
                  {r.name} / {r.service}
                  {r.location ? ` / ${r.location}` : ""}
                </cite>
              </blockquote>
            ))}
          </>
        )}
      </div>
    </section>
  );
}
