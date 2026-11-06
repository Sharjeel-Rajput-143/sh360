# Homepage balance review

## Implemented narrative

Hero → About SH360 → Our Capabilities → Where We Work → Our Work (only when verified content exists) → How We Work → Why SH360 → Get in Touch → footer.

About uses the requested heading and all three supplied paragraphs. Its company introduction has a shared twelve-column grid, editorial heading and restrained text treatment, without another service list. The CTA opens the new `/about` page, also included in the sitemap. Global About navigation still targets the homepage introduction.

Capabilities remain one seven-category section. Electrical, IoT and EV retain larger presentations. No service descriptions are duplicated in the new sections. Where We Work distinguishes residential, commercial, workplace and managed-property requirements through access, occupancy, permissions and existing conditions.

How We Work has the requested four stages. Why SH360 describes demonstrable features: the integrated service range, multi-service inquiry and service scope guides. It includes no credentials, experience claims, invented statistics or guarantees. Our Work remains content-ready and hidden because there are no verified projects.

## Hero status

The latest working hero remains **pending approval**. Its rendered HTML is byte-for-byte unchanged (SHA-256 `23bd2bd9103ccfe18dd26602bc35445b9d52dd8b245418f8910ceb67db037a7d`). The three rejected hero proposals remain preserved at `/hero-concepts` for separate reference. No new hero or headline was applied.

## Review evidence

Screenshots: `screenshots/home-balance/desktop.jpg` (1440px), `tablet.jpg` (768px), `mobile.jpg` (375px). All three viewport sizes have no horizontal overflow. Mobile uses stacked introduction copy, compact environment rows and a numbered process; tablet uses two-column environments and stages. Desktop page height is approximately 4886px, with distinct informational sections rather than repeated services.

Browser checks: mobile menu opens/closes, Solutions exposes the three engineering service routes, About CTA reaches `/about` with the expected heading. A dummy multi-service inquiry (Electrical and Plumbing) prepares the WhatsApp handoff and shows that no message has been sent. No WhatsApp message was sent. Existing search, saved catalog, category links and WhatsApp attribution retain regression coverage.

Lint, TypeScript, five regression tests and the production build passed (54 generated pages). 71 HTTP route/asset checks passed, including all seven service pages, catalog items/category links, existing hero previews and the new About route. Homepage checks verify section order, unique capabilities and four process headings. Unauthenticated admin redirects to login and the protected catalog API returns 401. Authenticated admin editing was not exercised; admin source and data are unchanged.

Localhost remains available at http://localhost:3000. No merge, deployment or push to main.
