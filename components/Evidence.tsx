import Image from "next/image";
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
export default function Evidence() {
  const projects = (evidence.projects as Project[]).filter(
    (p) => p.verified && p.name && p.image && p.location && p.outcome,
  );
  const reviews = (evidence.testimonials as Testimonial[]).filter(
    (t) => t.verified && t.name && t.review,
  );
  if (!projects.length && !reviews.length) return null;
  return (
    <section className="px-section" id="projects">
      <div className="px-wrap">
        <p className="px-label">OUR WORK</p>
        <h2>Our expertise, put into practice.</h2>
        {projects.map((p) => (
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
        {reviews.length > 0 && (
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
