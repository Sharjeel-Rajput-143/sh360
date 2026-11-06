> Historical architecture review. See HOMEPAGE-BALANCE-REVIEW.md for the restored company narrative. Hero proposals remain unapproved.

# Homepage architecture and hero review

The existing homepage hero remains unchanged and **pending approval**. No proposal has been applied. The rendered hero HTML was compared byte-for-byte before and after extraction into `TemporaryHomeHero`; SHA-256: `23bd2bd9103ccfe18dd26602bc35445b9d52dd8b245418f8910ceb67db037a7d`.

## Homepage

Order: temporary hero → unified Capabilities → verified Selected Work (conditional) → Working With SH360 → Inquiry & Contact → footer. The seven capability summaries appear once; Electrical Engineering, IoT & Smart Automation and EV Charging receive larger columns. All seven categories link to their existing service guides. Legacy section anchors remain available for navigation compatibility.

Selected Work is omitted because `data/evidence.json` contains no verified projects. No projects, credentials, certifications or service guarantees were invented. Detail and FAQs remain on service pages. Copy uses practical tasks and scope questions, informed by the content clarity of https://westenglandservice.com/ without importing that company's credentials, services or promises.

At a 1440px desktop viewport the homepage measures 3536px tall, previously 4677px (about 24% shorter). At 375px mobile it measures 5966px, previously 6803px. These measurements depend on the current content and fonts.

## Isolated proposals

Review: http://localhost:3000/hero-concepts

- A — Architectural Editorial: oversized type, brief and actions, then a continuous photographic band.
- B — Engineering Portfolio: image-led composition with a narrow service index and a title/action baseline below.
- C — Modular Corporate: asymmetric positioning, inquiry and directory modules; mobile moves inquiry ahead of the image.

Interactive routes: `/hero-concepts/a`, `/hero-concepts/b`, `/hero-concepts/c`. All are noindex and clearly marked pending approval. The proposals deliberately share a headline, existing theme and licensed real photograph so composition can be compared. The photograph is labeled reference photography, not SH360 work; attribution and license links remain visible.

Rendered screenshot pairs are available at `/hero-previews/{a,b,c}-{desktop,mobile}.jpg` and linked from the comparison page. Desktop captures are 1440×1000; mobile captures use a 375px viewport and full page height.

## Validation

- Lint, TypeScript, five regression tests and the production build passed (53 generated pages). Local dev server restarted at http://localhost:3000 and all 70 route/asset checks passed again.
- 70 route/asset checks cover services, product/category deep links, search/saved routes, preview routes and screenshots. Unknown concepts return 404, including prototype-like names; preview pages are noindex.
- Admin redirects to login; protected catalog API returns 401. Authenticated editing was not exercised; admin implementation is unchanged.
- Homepage widths checked at 375, 430, 768, 1024, 1440 and 1920px without horizontal overflow. All concepts checked at 375, 768 and 1440px without horizontal overflow.
- Homepage hero rendered HTML remains identical. All seven capabilities remain present, and concept components are absent from the homepage.
- Inquiry, WhatsApp, search and saved-item implementation remain unchanged; existing regression coverage verifies search, category deep links and WhatsApp attribution. No inquiry was sent.

No merge or deployment. Hero selection and approval remain outstanding by design.
