> Historical implementation. Superseded by VISUAL-SYSTEMS-REVIEW.md following the owner’s architectural cutaway and interaction brief. The current hero is a review candidate, not approved.

# Engineering Blueprint implementation

Implemented the user-specified direction on `feature/sh360-engineering-blueprint`, a separate development branch from the prior homepage restoration. No alternative concepts were generated.

## Design and architecture

The homepage now uses the supplied eyebrow, headline and description with a seven-column text / five-column photograph desktop hero. Paragraph and actions share the text edge; the descriptor aligns with the photograph. A compact four-part capability index follows the composition. Mobile stacks introduction, text/actions, photograph and a two-column capability index. The photograph is real, locally served electrical installation imagery with retained CC BY-SA 4.0 attribution and an explicit reference-photograph label. It is not used as evidence of a SH360 project.

The existing logo, fonts, warm neutral/copper/graphite palette and shared 1280px container remain. All rendered homepage section containers share the same left/right edges (80px and 1360px at a 1440px viewport). The hero has no decorative animations, diagrams, sliders or artificial effects.

Order: Hero → About SH360 → Our Capabilities → Where We Work → Selected Work (conditional on verified projects) → Our Approach → Contact & Inquiry → footer. The seven service summaries remain consolidated and linked to existing guides. No verified project records exist, so Selected Work stays hidden. Our Approach now combines inquiry, assessment, scope/quotation, execution/handover and demonstrable multi-service inquiry/guide features; the separate Why and How sections were removed.

The old hero proposals remain accessible as a labeled, noindex archive of rejected proposals. They do not appear on the homepage. Prior review documents and screenshots describe earlier versions, not the current implementation.

## Verification

- Lint, `tsc --noEmit`, five existing regression tests and the production build passed (54 generated pages).
- 71 HTTP route/asset checks passed: homepage architecture and specified hero content, seven service pages, catalog entries, category links, search/saved URLs, About, photo assets, archived proposals and invalid routes.
- Admin redirects to login; protected catalog API returns 401. Authenticated admin writes were not exercised. No admin, authentication, backend or catalog-data code was changed.
- Desktop/tablet/mobile inspected at 1440, 768 and 375px. Additional widths: 320, 430, 1024 and 1920px. No horizontal overflow after correcting a narrow-phone header collision. At 320px, the duplicate header Quote shortcut is hidden; Contact remains in navigation and the hero's Discuss a Project action. Search, saved and menu controls remain visible.
- Desktop hero height approximately 651px; mobile approximately 882px including image attribution and capability index. Photo crop keeps the board, test meter and technician in view.
- Browser interactions: service search for “wiring” reaches five matching results; save → saved view displays the chosen service; test saved item removed afterward; plumbing category deep link selects Plumbing and its four catalog entries; mobile service menu exposes all four property services and catalog access.
- Hero Discuss a Project targets Contact. A dummy Electrical + Plumbing inquiry prepares a WhatsApp handoff with both services. No message was sent. Existing regression coverage checks service codes and UTM attribution in WhatsApp URLs.

## Review

Localhost: http://localhost:3000

Screenshots: `screenshots/engineering-blueprint/desktop-hero.jpg`, `desktop-page.jpg`, `tablet-page.jpg`, `mobile-hero.jpg`, `mobile-page.jpg`.

No deployment, merge or push. The implementation follows the supplied approved direction; final visual review belongs to the user.
