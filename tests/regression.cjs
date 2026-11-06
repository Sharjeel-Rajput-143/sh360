/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS hook transpiles existing TS modules for Node contract tests. */
// Focused contract tests for retained catalog and WhatsApp behavior.
const ts = require("typescript");
const fs = require("node:fs");
require.extensions[".ts"] = (module, filename) =>
  module._compile(
    ts.transpileModule(fs.readFileSync(filename, "utf8"), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2020,
      },
    }).outputText,
    filename,
  );
const test = require("node:test");
const assert = require("node:assert/strict");
const { services } = require("../lib/services.ts");
const { withLabels, searchProducts } = require("../lib/products.ts");
const { readAdSource, productWhatsappUrl } = require("../lib/whatsapp.ts");
const catalog = withLabels(require("../data/catalog.json"));
test("seven unique service guides have practical requirements and FAQs", () => {
  assert.equal(services.length, 7);
  assert.equal(new Set(services.map((s) => s.slug)).size, 7);
  for (const s of services) {
    assert.ok(s.tasks.length >= 5);
    assert.ok(s.requirements.length >= 3);
    assert.ok(s.faq.length >= 2);
  }
});
test("catalog search matches all words, case insensitive", () => {
  const results = searchProducts(catalog.products, "ELECTRICAL wiring");
  assert.ok(results.length);
  assert.ok(
    results.every((p) =>
      [p.title, p.description, p.id, p.categoryLabel, ...p.specs]
        .join(" ")
        .toLowerCase()
        .includes("wiring"),
    ),
  );
  assert.deepEqual(
    searchProducts(catalog.products, "zz-nonexistent-service"),
    [],
  );
});
test("WhatsApp messages retain service code and UTM attribution", () => {
  const p = catalog.products[0],
    ad = readAdSource("?utm_source=Meta&utm_campaign=Renovation");
  const url = new URL(productWhatsappUrl(p, catalog.brand, ad));
  assert.equal(url.hostname, "wa.me");
  const msg = url.searchParams.get("text");
  assert.ok(msg.includes(p.id));
  assert.ok(msg.includes("Meta / Renovation"));
  assert.ok(msg.includes(p.title));
  assert.deepEqual(readAdSource("?fbclid=example"), { source: "Meta Ads" });
  assert.equal(readAdSource(""), undefined);
});
test("catalog category deep-link ids remain unique and valid", () => {
  assert.equal(
    new Set(catalog.categories.map((c) => c.id)).size,
    catalog.categories.length,
  );
  for (const p of catalog.products)
    assert.ok(catalog.categories.some((c) => c.id === p.category));
});

const { capabilities } = require("../lib/capabilities.ts");
test("unified capabilities preserve all service destinations and engineering prominence", () => {
  assert.equal(capabilities.length, 7);
  assert.equal(new Set(capabilities.map((s) => s.slug)).size, 7);
  assert.deepEqual(
    new Set(capabilities.map((s) => s.slug)),
    new Set(services.map((s) => s.slug)),
  );
  assert.deepEqual(
    capabilities.filter((s) => s.primary).map((s) => s.slug),
    ["electrical-engineering", "iot-smart-automation", "ev-charging"],
  );
});

const { serviceMedia, propertyApplications } = require("../lib/story-media.ts");
const { createHash } = require("node:crypto");
const path = require("node:path");
test("all service and property media exist and use distinct assets", () => {
  for (const group of [services.map((s) => serviceMedia[s.slug]), propertyApplications]) {
    const hashes = group.map((media) => {
      assert.ok(media?.src && media.alt, "Media needs a source and useful alternative text");
      const file = path.join(__dirname, "../public", media.src);
      assert.ok(fs.existsSync(file), `Missing asset ${media.src}`);
      return createHash("sha256").update(fs.readFileSync(file)).digest("hex");
    });
    assert.equal(new Set(hashes).size, group.length, "Distinct services/environments must not repeat an image");
  }
});
