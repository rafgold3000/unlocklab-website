import { expect, test } from "vitest";
import { OFFER, PROOF, PROOF_ATTRIBUTION, CONTACT_EMAIL } from "@/lib/offer";

test("offer facts match the spec", () => {
  expect(OFFER.name).toBe("The Command Center Build Intensive");
  expect(OFFER.headline).toBe("Build your personal productivity engine.");
  expect(OFFER.definition).toBe(
    "A personal productivity engine: your context, your voice, your design system, your workflows.",
  );
  expect(OFFER.priceUsd).toBe(1500);
  expect([OFFER.sessions, OFFER.sessionHours, OFFER.mode]).toEqual([4, 2, "online"]);
  expect(CONTACT_EMAIL).toBe("rafael@skwx.ai");
  expect(PROOF_ATTRIBUTION).toBe(
    "Results reported by the CEO of a strategic communications firm, for their own work, after six months using the system.",
  );
  expect(PROOF.map((p) => [p.before, p.after])).toEqual([
    ["4–6 hours", "45 minutes"],
    ["2 staff days", "1 hour"],
    ["6–7 hours", "1 hour"],
    ["2–3 hours a week", "minutes"],
  ]);
  expect(OFFER.weeks).toHaveLength(4);
});

test("no copy uses banned classroom or hype words", () => {
  const text = JSON.stringify({ OFFER, PROOF }).toLowerCase();
  for (const w of ["course", "class", "lesson", "curriculum", "student", "revolutionary", "10x", "unlock your potential"]) {
    expect(text).not.toContain(w);
  }
});

import { courseJsonLd, organizationJsonLd } from "@/lib/jsonld";

test("course JSON-LD mirrors offer facts", () => {
  const c = courseJsonLd() as any;
  expect(c["@type"]).toBe("Course");
  expect(c.name).toBe(OFFER.name);
  expect(c.offers.price).toBe("1500");
  expect(c.offers.priceCurrency).toBe("USD");
  expect(c.hasCourseInstance.courseMode).toBe(OFFER.mode);
  expect(c.provider.map((p: { name: string }) => p.name)).toEqual(["UnlockLab", "SkWx"]);
  const json = JSON.stringify(c);
  expect(json).not.toContain("startDate");
  expect(json).not.toContain("aggregateRating");
});

test("organization JSON-LD names UnlockLab at the canonical URL", () => {
  const o = organizationJsonLd() as any;
  expect([o["@type"], o.name, o.url]).toEqual(["Organization", "UnlockLab", "https://unlocklab.ai"]);
  expect(JSON.stringify(o)).not.toContain("address");
});

import { PROOF_SECTION, intensiveDescription, siteDescription } from "@/lib/offer";

test("proof section leads with the problem, then the Command Center contrast", () => {
  expect(PROOF_SECTION.heading).toBe("Supercharged productivity");
  expect(PROOF_SECTION.today.items.length).toBeGreaterThanOrEqual(4);
  expect(PROOF_SECTION.withCommandCenter.items).toHaveLength(PROOF_SECTION.today.items.length);
  const text = JSON.stringify(PROOF_SECTION).toLowerCase();
  for (const w of ["context", "voice", "design system", "inventory"]) expect(text).toContain(w);
  for (const w of ["course", "class", "student", "revolutionary", "10x"]) expect(text).not.toContain(w);
});

test("proof section describes the routine without generalizing about people", () => {
  const text = JSON.stringify(PROOF_SECTION).toLowerCase();
  for (const w of ["most people", "most professionals", "everyone"]) expect(text).not.toContain(w);
  expect(text).toContain("chat window");
});

test("search descriptions are built from offer facts", () => {
  const changed = { ...OFFER, priceUsd: 1750, sessionHours: 3 };
  expect(intensiveDescription(changed)).toContain("$1,750");
  expect(intensiveDescription(changed)).toContain("three-hour");
  expect(intensiveDescription(OFFER)).toContain("$1,500");
  expect(siteDescription(OFFER)).toContain("four weeks");
});

test("site copy no longer describes a partnership", () => {
  expect(OFFER.lede.toLowerCase()).not.toContain("partnership");
  expect(JSON.stringify(organizationJsonLd()).toLowerCase()).not.toContain("partnership");
});
