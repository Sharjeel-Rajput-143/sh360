# Industrial editorial redesign — local review

This replaces the earlier long architectural-house homepage. The active checkout is now `~/sh360`, branch `feature/sh360-complete-revamp`, served at http://localhost:3000. No production configuration, push, merge or deployment changed.

## Visible changes

- New “Powering Spaces. Connecting Systems.” hero with an original professional switchgear render, copper/steel materials and a restrained signal path. Decorative linework is not an installation schematic. The signal animation stops after two cycles and is disabled for reduced motion.
- Graphite, warm off-white, steel gray and restrained copper replace the pale blue/cyan section system. The official logo remains unchanged.
- Seven principal homepage sections: hero, expertise, selectable engineering, integrated property services, approach/process, questions and inquiry. Verified work appears only when approved records exist. Header and footer complete the layout.
- Desktop height measured at the same approximately 1394px viewport: about 15,526px before correction and 5,523px afterward, roughly 64% shorter.
- A single engineering feature switches between electrical wiring detail, the one smart-building cutaway and a believable charger installation environment. Supports mouse, touch, arrow keys, Home and End.
- Property services use one sectional plumbing graphic, original joinery detail, a maintained interior and a text-led maintenance treatment. No invented maintenance or project photographs.
- Seven detailed service guides retain the practical scope, requirements, process and FAQs. Electrical, EV and carpentry guides use their subject-specific media. Maintenance photography is explicitly pending verified assets.
- The full live catalog and videos are now at `/services`; all original catalog entries and category data remain unchanged. Existing `/?tab=...`, `/?q=...` and `/?saved=1` links remain supported. Header search and saved links lead to the catalog. The homepage's legacy `#products` anchor provides a catalog link.

## Validation executed

- `npm run lint`, `npx tsc --noEmit`, four Node regression tests and `npm run build`: PASS. Build generates 49 pages.
- HTTP smoke tests: 54 paths/assets pass, including all seven service guides, 21 catalog details, category rewrites, legacy search/saved routes, four new image assets, admin login redirect and protected API 401.
- Browser: engineering selection with keyboard arrows, mobile search, saved-service creation/persistence/removal, old plumbing category link, phone validation and WhatsApp inquiry preparation. No message was sent.
- Browser layouts at 375, 430, 768, 1024, 1440 and 1920px: no document-level horizontal overflow. Measured homepage heights range from roughly 5,400–5,900px on tablet/desktop to about 8,300px at 375px.
- Browser form fields are labeled; reviewed console showed no errors or warnings. Reduced-motion CSS and native FAQ behavior are retained. No full screen-reader audit or field Core Web Vitals score is claimed.

## Media and facts

New assets were generated with built-in image_gen, converted to WebP and saved in `public/visuals`. Exact prompts are in `corrective-image-prompts.json`. Hero is about 127KB; other new visuals are about 120–210KB. They are illustrative original media, not verified SH360 installations or customer work. No random stock photos were added.

Verified project photographs, real testimonials, location/coverage and company qualifications still require owner confirmation. Existing catalog content remains owner-managed. Authenticated admin edits were not exercised; authentication, permissions and API implementation were preserved. Previously reported dependency vulnerabilities remain outside this visual correction.
