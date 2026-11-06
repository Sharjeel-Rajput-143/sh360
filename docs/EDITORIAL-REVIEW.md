> Historical review. Superseded by CAPABILITIES-HERO-REVIEW.md. The homepage hero remains pending approval.

# Editorial hero and structural refinement

Active checkout: `~/sh360`, branch `feature/sh360-complete-revamp`. Review at http://localhost:3000. This iteration refines the established graphite, warm off-white and copper direction; it does not introduce new branding.

## Audit before implementation

The complete rendered homepage was reviewed at desktop, tablet and mobile widths. Outer section containers already aligned, but the header used a different width and inner heading/copy layouts varied. The property section occupied about 1,250px at desktop, unequal media/text rows were vertically centered, service introductions repeated, and the maintenance panel had insufficient text contrast. The generated switchgear hero also conflicted with the new editorial brief.

## Changes

- Editorial hero with the requested headline, company positioning, two relevant CTAs and one real electrical-installation photograph. The headline sits above an offset image; supporting copy aligns with the image's top edge. No rendered switchgear hero, floating labels, circuit overlays or signal animation remains in the homepage markup.
- Shared 1280px maximum container, 12-column desktop foundation, 24px gutters, reusable `SectionHeading`, controlled paragraph widths and common section spacing. Header, section containers and footer share the same width. Shared section headings align to the same grid line.
- Six principal homepage sections: Hero, What We Do, Engineering Expertise, Property Services, Process and Contact. Footer completes the requested structure. Verified project/testimonial entries remain conditional on real approved data.
- What We Do now provides hierarchical discovery rather than repeating technical explanations. Engineering has practical wiring, distribution-board, protection, lighting/socket, fault-finding and maintenance content. IoT and EV copy describe the actual work and requirements.
- Property services are four concise, linked scope descriptions with one relevant sectional plumbing illustration. Large alternating media rows and the low-contrast maintenance panel were removed. Detailed requirements and FAQs remain on the existing catalog and seven service guides.
- Existing inquiry behavior remains intact. Form typography and controls have stronger legibility, responsive field layouts and top alignment. Mobile uses a deliberate text/CTA/photo sequence, visible engineering tabs and readable service lists.

## Real photograph and licensing

Source: [Man-electrical-technician-working-switchboard-with-fuses.jpg](https://commons.wikimedia.org/wiki/File:Man-electrical-technician-working-switchboard-with-fuses.jpg), by Cláudio Marques Unip. LDA, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

The source photograph was downloaded from Wikimedia Commons and inspected before use. It is resized and format-converted into 640px (~59KB), 1280px (~147KB) and 1920px (~254KB) WebP variants. Responsive delivery uses an explicit source set with reserved dimensions. The visible crop retains the technician and switchboard. Source, author, license and crop credit appear below the image. `public/photography/LICENSE.md` describes the image adaptations, which remain available under CC BY-SA 4.0. The photo is representative photography, not a claimed SH360 employee, project or endorsement. No image generation was used in this iteration.

## Verification

- Full-page visual review before and after at desktop, 768px tablet and 375px mobile; additional layout measurements at 430, 1024, 1394, 1440 and 1920px.
- No document-level horizontal overflow at any tested width.
- At 1440px, each main section container measures 1280px and all four shared section headings begin at x=406px. Header width matches the section container.
- At 1394px, homepage height decreased from 5,523px to 4,677px (about 15%). At 375px, it decreased from 8,274px to 6,803px (about 18%).
- Mobile navigation and solution links; engineering tab arrow-key selection; catalog search; save/open/remove service; legacy plumbing category link; inquiry preparation without sending a WhatsApp message: PASS.
- Reviewed browser console: no errors or warnings. Existing keyboard focus, reduced-motion support and semantic native FAQ behavior remain available. This is not a full screen-reader conformance audit.
- `npm run lint`, `npx tsc --noEmit`, four focused regression tests and `npm run build`: PASS.
- `python3 scripts/check-local.py`: 58 route/asset checks PASS, including the responsive photograph variants, all seven service guides, catalog details, legacy query/category routes, admin redirect and protected API response.

Admin authentication, permissions, catalog/category schema, attribution logic, data and API handlers were not changed. Authenticated admin edits were not retested. Existing business-fact verification and dependency-audit follow-up remain as documented in earlier reports. No merge, push or deployment was performed.
