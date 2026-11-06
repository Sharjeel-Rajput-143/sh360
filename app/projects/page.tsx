import PublicShell from "@/components/PublicShell";
import Evidence from "@/components/Evidence";
import { getCatalog } from "@/lib/catalog";
import Link from "next/link";
export const metadata = {
  title: "Projects | SH360",
  description: "Verified SH360 project stories and customer experiences.",
};
export default async function Projects() {
  const catalog = await getCatalog();
  return (
    <PublicShell catalog={catalog}>
      <main id="main">
        <section className="px-section px-project-intro">
          <div className="px-wrap">
            <p className="px-label">OUR WORK</p>
            <h1>
              Expertise,
              <br />
              put into practice.
            </h1>
            <p>
              Project stories will be published here when details and
              photography are verified and approved for sharing.
            </p>
            <p>
              Have a property requirement in mind? Tell us about the work, the
              existing systems and the outcome you need.
            </p>
            <Link className="px-button" href="/#contact">
              Discuss your project ↗
            </Link>
          </div>
        </section>
        <Evidence />
      </main>
    </PublicShell>
  );
}
