# Visual storytelling and interaction review

Development branch: `feature/sh360-visual-systems`. Local review: http://localhost:3000.

## Implemented

- Kept the existing brand, headline and primary architecture. The hero is now an explicitly labeled **review candidate, not approved**, using a new original architectural cutaway with electrical distribution, contained routes, lighting and a secondary pipe riser. A restrained initial building reveal is its one visual interaction; no floating equipment, measurements or schematic overlays were added.
- About SH360 retains all three company paragraphs and its working About CTA, now paired with the genuine electrical installation/testing photograph and visible CC BY-SA attribution.
- The single Capabilities section has an accessible Electrical / IoT / EV selector. Every state changes the illustration, heading, work description, scope labels and service destination. Images crossfade in a fixed visual stage. Electrical defaults first. Supporting services follow with distinct plumbing pipework, real woodworking, cleaning-environment and repair-tool imagery.
- Where We Work switches between four distinct reference photographs and property-specific occupancy, access and permission considerations. It does not repeat service descriptions.
- Our Approach uses a numbered vertical line that fills as stages enter view. Content is always readable; it is not hidden behind animations. The form continues to prepare an editable WhatsApp message for the customer to send.
- All seven service guides now use the matching illustration or reference photograph. The maintenance guide no longer has a media-pending text panel.
- Dropdown navigation restores focus when dismissed. Escape closes one layer at a time on mobile. Selectors support arrows, Home/End, roving tab stops and named tab panels. On phones, all three engineering tabs are visible as stacked choices; property types use a two-column selector. Focus styles are visible. Reduced-motion CSS disables image, content and process-line transitions/animations, including pseudo-elements.

## Assets

New built-in image_gen artwork: `public/story/systems-cutaway.webp` and `smart-office.webp`. Integrated existing original electrical, EV and plumbing models. Added seven distinct Unsplash reference photographs for woodworking, cleaning, repairs and the four environments. Existing installation photograph moved into About. Assets are local WebP files, approximately 52–204KB each for the new story set.

Exact generation prompts, original paths, final files, photograph sources and licenses: [STORY-ASSETS.md](STORY-ASSETS.md). No competitor artwork was downloaded or used. No reference image is presented as SH360 staff, property or completed work.

## Interaction and visual checks

- All three engineering states: verified distinct image source, selected heading, description, three scope labels and matching service CTA. Keyboard Home returns to Electrical; ArrowRight selects IoT on mobile.
- All four property states: verified distinct image and application considerations. Keyboard ArrowLeft moves Managed to Workplaces.
- Desktop Escape returns focus to the disclosure button. On mobile, first Escape dismisses the service submenu while keeping navigation open; second Escape dismisses navigation and focuses its toggle.
- Hero Discuss a Project reaches Contact. A dummy IoT + Plumbing inquiry prepares the WhatsApp review link and explicitly states that nothing was sent. No message was sent.
- Header search for wiring returns five results. Saving a service opens the one-item saved view; the QA saved item was removed afterward. Plumbing category deep link selects the correct category.
- All seven service guide media sources and mobile widths checked. Representative IoT mobile and EV desktop views captured.
- Homepage inspected at desktop 1440px, tablet 768px and mobile 375px; additional width checks at 320, 430, 1024 and 1920px. No horizontal overflow. At 1440px all six rendered section containers share x=80…1360. At 375px all share x=20…355. The four supporting services and all category destinations remain accessible.
- Process progression reaches all four stages during scrolling. All homepage images load. Screenshots were inspected for actual composition, crop and text/media balance.
- Reduced-motion rules were reviewed in code; OS-level preference switching was not performed.

## Technical validation

Lint, TypeScript and six regression tests passed. The media contract test verifies that every service/environment asset exists and that images are distinct by file hash. 80 route/asset checks passed, including the new cutaways and seven reference photographs. Production build passed with 54 generated pages. The development server was restarted at http://localhost:3000 and the full route/asset check was repeated.

## Remaining review and limits

The architectural art is illustrative AI-generated content, not a certified design or construction document. Technical detailing and visual approval remain subject to owner review. No exact installation dimensions, ratings or wiring compliance are claimed. Optional user-driven hero system highlighting was not added; the specified initial building reveal is implemented.

No verified SH360 project content exists in the current data, so Our Work remains hidden and content-ready. Real SH360 installation/woodwork/cleaning/maintenance project photography could replace reference media later; none has been fabricated. No other critical visual category is missing. No unresolved layout or interaction defect was observed within the tested matrix.

Admin/authentication/backend and catalog data were not edited. Admin redirects to login and protected catalog API rejects unauthenticated access; authenticated admin writes were not exercised.

## Screenshots

`docs/screenshots/visual-systems/`: desktop hero/page, tablet page, mobile hero/page, electrical/IoT/EV panels, managed-property comparison, IoT service mobile and EV service desktop.

No deployment, push or merge. Localhost is kept running for review.
