// Structured data built only from lib/offer.ts, so it always matches the visible page.
// No dates, ratings or addresses: none are confirmed facts (spec §8).
import { OFFER, PARTNERS, SITE_URL } from "@/lib/offer";

const unlocklabOrg = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: PARTNERS.unlocklab.name,
  url: SITE_URL,
};

const skwxOrg = {
  "@type": "Organization",
  name: PARTNERS.skwx.name,
  url: PARTNERS.skwx.url,
  description: `SkWx is ${PARTNERS.skwx.description}.`,
};

export function organizationJsonLd(): object {
  return {
    "@context": "https://schema.org",
    ...unlocklabOrg,
    description: `UnlockLab runs ${OFFER.name} in partnership with SkWx, ${PARTNERS.skwx.description}.`,
  };
}

export function courseJsonLd(): object {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: OFFER.name,
    description: `${OFFER.headline} A discovery call plus ${OFFER.sessions} live ${OFFER.sessionHours}-hour sessions, held ${OFFER.mode}, to build your own Command Center with ${OFFER.tools.join(" and ")}.`,
    url: `${SITE_URL}/intensive`,
    provider: [unlocklabOrg, skwxOrg],
    offers: {
      "@type": "Offer",
      price: String(OFFER.priceUsd),
      priceCurrency: "USD",
      category: "Paid",
      url: `${SITE_URL}/intensive`,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: OFFER.mode,
    },
  };
}
