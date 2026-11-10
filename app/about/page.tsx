import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import { OFFER } from "@/lib/offer";

export const metadata: Metadata = {
  title: "About",
  description:
    "UnlockLab helps professionals turn AI from a curiosity into a capability, through hands-on practice led by builders, founders and technologists working at the edge of AI.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="container-page py-20 sm:py-24">
        <p className="eyebrow">About UnlockLab</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight">
          From trying AI to unlocking all it can do
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          UnlockLab is a hands-on learning lab for professionals who want to stay ahead of the
          curve: not by watching from the sidelines, but by building real fluency, confidence and
          leverage in how they work.
        </p>
      </section>

      <section className="section">
        <div className="container-page grid gap-10 md:grid-cols-[1fr_2fr]">
          <h2 className="text-3xl font-semibold">Why it matters now</h2>
          <div className="max-w-2xl space-y-4 text-lg">
            <p>
              AI is reshaping how work gets done. Everyone in the workforce now needs to learn how to
              use these new capabilities, and to keep growing that knowledge as the tools change.
            </p>
            <p>
              The people who build that skill early carry an advantage that lasts. UnlockLab exists
              to make that advantage accessible.
            </p>
          </div>
        </div>
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
        <div className="container-page grid gap-10 md:grid-cols-[1fr_2fr]">
          <h2 className="text-3xl font-semibold">Who&apos;s behind it</h2>
          <div className="max-w-2xl space-y-4 text-lg">
            <p>
              UnlockLab is run by builders, founders and technologists working at the edge of AI.
              We build first and share what we&apos;ve learned from experience, so you learn from
              people who move at the pace of change.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">{OFFER.name}</h2>
            <p className="mt-3 text-muted">
              Our four-week intensive, live online. You build your own Command Center,{" "}
              {OFFER.definition.charAt(0).toLowerCase() + OFFER.definition.slice(1)}
            </p>
            <Link href="/intensive" className="mt-3 inline-block text-sm font-semibold text-violet">
              See the intensive →
            </Link>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Workshops</h2>
            <p className="mt-3 text-muted">
              UnlockLab has been part of in-person workshops in New York on Claude Code and building
              with AI.
            </p>
            <Link href="/events" className="mt-3 inline-block text-sm font-semibold text-violet">
              Past workshops →
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-paper-deep">
        <div className="container-page">
          <p className="eyebrow">{OFFER.cohortStatus}</p>
          <h2 className="mt-3 text-3xl font-semibold">{OFFER.headline}</h2>
          <div className="mt-8">
            <Button href="/intensive#start" size="lg">
              Start a conversation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
