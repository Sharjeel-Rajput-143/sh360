> Superseded by [the corrective review](CORRECTIVE-REVIEW.md). The active localhost checkout is now `~/sh360`.

# Local review

Open http://localhost:3000. The development server runs from `/Users/muhammadhammad/Desktop/SH360-Seven/site` on `feature/sh360-complete-revamp`. The original `~/sh360` checkout stays intact. No push, merge or deployment was performed.

To restart:

```sh
cd /Users/muhammadhammad/Desktop/SH360-Seven/site
export PATH="$HOME/.local/node/bin:$PATH"
npm run dev
```

## Delivered

- Editorial public homepage, seven major service guides, a projects route and practical privacy/website information pages.
- Original architectural cutaways for integrated building systems, electrical, smart automation, EV, plumbing and carpentry. Original property interior for cleaning and maintenance. Optimized WebP files and image-generation prompt set in ASSETS.md.
- Responsive desktop dropdowns and mobile navigation, focus styles, active routes, keyboard-operable native FAQ disclosures and reduced-motion CSS.
- Service-specific preselected inquiry forms, multiple service selection, required-field validation, equipment details for technical inquiries, and explicit WhatsApp review/send handoff.
- Catalog, category deep links, saved services, service-specific quotes, campaign attribution, videos and existing admin architecture retained. Search and saved view work when entered from a service route.
- Local fonts with licenses, scoped public styles, service metadata and sitemap.

## Verification executed

- `npm run build`: PASS, 48 generated pages; all seven service guides and original 21 catalog detail routes compile.
- `npm run lint`: PASS, no warnings.
- `npx tsc --noEmit`: PASS.
- `node --test tests/regression.cjs`: PASS, four focused contract tests covering service-guide completeness, catalog search, WhatsApp service/UTM messages and category validity.
- `python3 scripts/check-local.py`: PASS against development and production servers: 47 route/asset checks, including all seven guides, 21 detail pages, five category links, seven visuals, protected catalog API (401), unknown service (404), and admin redirect to login.
- Edge browser: mobile navigation, solution dropdown, search (including entry from another route), saved service persistence and removal, category deep link, multi-select inquiry, missing-service validation, generated WhatsApp contents, campaign persistence across routes, service preselection, and FAQ mouse/keyboard operation.
- Responsive browser inspection at 375, 430, 768, 1024, 1440 and 1920px. No document-level horizontal overflow. Category tabs intentionally scroll horizontally on small screens. Screenshots saved in docs/screenshots.
- Basic DOM accessibility: one main heading; no unnamed buttons, unlabeled inputs, images without alt attributes or broken homepage hash targets. Focus styling and reduced-motion CSS reviewed. This was not a full screen-reader or WCAG conformance audit.
- Reviewed production page console: no warnings/errors. Transient development HMR errors encountered during editing were resolved before validation.

## Boundaries and owner review

- No verified projects or reviews were available. `data/evidence.json` remains empty and their homepage sections do not render. Add only approved real work. Project entries require `verified: true`, name, category, propertyType, location, requirement, scope, approach, outcome and image. Testimonials require verified, name, service and review; optional location. The source is version-controlled, not a new admin dashboard panel.
- Confirm exact geographic coverage, availability, qualifications and contractual terms. No new coverage areas, licenses, statistics, guarantees, partnerships or customer claims were invented. Existing catalog entries are retained and still need owner verification, including claims about certification, warranties and response timing.
- IoT and carpentry scope beyond catalog entries is inquiry-led and subject to confirmation. Architectural graphics are conceptual, not installation specifications or completed-project photographs.
- The form has no email endpoint or file upload service. It prepares a WhatsApp message, which the visitor must send. Files are attached in WhatsApp. No external message was sent during QA.
- Authenticated admin editing, password/recovery flows and actual media uploads were not exercised because no owner credentials were supplied. Their implementation was preserved; unauthenticated protection and login rendering were tested.
- The initial dependency installation reported 10 vulnerabilities (8 moderate, 1 high, 1 critical). Dependency versions were preserved; audit remediation needs a separate compatibility review.
- Core Web Vitals were not measured in a production field environment. No Lighthouse score is claimed. Visual assets are locally hosted WebP, fonts are local and public animation uses CSS/native observers.
