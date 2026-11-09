import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import { OFFER, PARTNERS } from "@/lib/offer";
import { PAST_WORKSHOPS } from "@/lib/workshops";

export const metadata: Metadata = {
  title: "Past workshops",
  description:
    "In-person workshops in New York on Claude Code and building with AI that UnlockLab has been part of, hosted by SkWx and FidelicAI.",
  alternates: { canonical: "/events" },
};

function formatDate(isoDate: string) {
  // Noon UTC keeps the calendar day stable once shown in New York time.
  return new Date(`${isoDate}T12:00:00Z`).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/New_York",
  });
}

export default function PastWorkshopsPage() {
  return (
    <div className="container-page py-16 sm:py-20">
      <p className="eyebrow">UnlockLab</p>
      <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Past workshops</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        In-person workshops in New York that UnlockLab has been part of. New workshops will be
        listed here when they&apos;re scheduled.
      </p>

      <ul className="mt-12 divide-y divide-rule border-y border-rule">
        {PAST_WORKSHOPS.map((w) => (
          <li key={w.url} className="py-8">
            <p className="text-sm text-muted">
              <time dateTime={w.date}>{formatDate(w.date)}</time> · {w.time} · {w.place}
            </p>
            <h2 className="mt-2 text-2xl font-semibold">{w.title}</h2>
            <p className="mt-1 text-sm text-muted">Hosted by {w.host}</p>
            <p className="mt-3 max-w-2xl">{w.summary}</p>
            <a
              href={w.url}
              className="mt-3 inline-block text-sm font-semibold text-violet"
              target="_blank"
              rel="noopener noreferrer"
            >
              Event page
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-12 max-w-2xl space-y-2 text-sm text-muted">
        <p className="font-semibold text-ink">About the hosts</p>
        <p>
          {PARTNERS.skwx.name} is {PARTNERS.skwx.description}.
        </p>
        <p>
          {PARTNERS.fidelic.name} {PARTNERS.fidelic.description}.
        </p>
      </div>

      <div className="mt-16 border-t border-rule pt-10">
        <p className="font-serif text-2xl">Looking for what&apos;s running now?</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button href="/intensive">{OFFER.name}</Button>
          <Link href="/" className="self-center text-sm text-muted hover:text-ink">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
