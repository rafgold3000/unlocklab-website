import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import { OFFER, PARTNERS } from "@/lib/offer";

export const metadata: Metadata = {
  title: "About",
  description:
    "UnlockLab and SkWx, an innovation lab and AI solutions studio, run The Command Center Build Intensive together: practical AI capability for busy professionals, built by people who build these systems for clients.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="container-page py-20 sm:py-24">
        <p className="eyebrow">About</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight">
          UnlockLab and SkWx, building together
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          {OFFER.name} is a partnership between UnlockLab and {PARTNERS.skwx.name},{" "}
          {PARTNERS.skwx.description}. It brings the experience of SkWx&apos;s developers and
          builders, who have deployed this system for clients, to professionals who want the
          results without spending hundreds of hours working it out alone.
        </p>
      </section>

      <section className="section">
        <div className="container-page grid gap-10 md:grid-cols-[1fr_2fr]">
          <h2 className="text-3xl font-semibold">What we believe</h2>
          <div className="max-w-2xl space-y-4 text-lg">
            <p>
              Real skill is built through practice, feedback and repetition, not passive content.
            </p>
            <p>
              We don&apos;t deal in theory. We build with the tools we use every day, and we start
              from your work, not from a feature list.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">UnlockLab</h2>
            <p className="mt-3 text-muted">
              A home for practical, hands-on AI capability for working professionals. UnlockLab has
              run in-person workshops in New York on Claude Code and building with AI.
            </p>
            <Link href="/events" className="mt-3 inline-block text-sm font-semibold text-violet">
              Past workshops →
            </Link>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">{PARTNERS.skwx.name}</h2>
            <p className="mt-3 text-muted">
              {PARTNERS.skwx.name} is {PARTNERS.skwx.description}. It designs and builds AI systems
              for teams and businesses, including the Command Center architecture participants
              build their own version of.
            </p>
            <a
              href={PARTNERS.skwx.url}
              className="mt-3 inline-block text-sm font-semibold text-violet"
              target="_blank"
              rel="noopener noreferrer"
            >
              skwx.ai →
            </a>
          </div>
        </div>
      </section>

      <section className="section bg-paper-deep">
        <div className="container-page">
          <p className="eyebrow">{OFFER.cohortStatus}</p>
          <h2 className="mt-3 text-3xl font-semibold">{OFFER.headline}</h2>
          <div className="mt-8">
            <Button href="/intensive" size="lg">
              See the intensive
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
