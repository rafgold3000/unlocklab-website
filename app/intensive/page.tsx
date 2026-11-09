import type { Metadata } from "next";
import Definition from "@/components/Definition";
import InquiryForm from "@/components/InquiryForm";
import JsonLd from "@/components/JsonLd";
import { courseJsonLd } from "@/lib/jsonld";
import ProofSection from "@/components/ProofSection";
import { OFFER, intensiveDescription } from "@/lib/offer";

export const metadata: Metadata = {
  title: OFFER.name,
  description: intensiveDescription(OFFER),
  alternates: { canonical: "/intensive" },
};

const price = `$${OFFER.priceUsd.toLocaleString("en-US")}`;

export default function IntensivePage() {
  return (
    <>
      <JsonLd data={courseJsonLd()} />
      <section className="container-page py-20 sm:py-24">
        <p className="eyebrow">{OFFER.label}</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight">
          {OFFER.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          {OFFER.lede} Built with {OFFER.tools.join(" and ")}.
        </p>
        <Definition className="mt-12" />
      </section>

      <section className="section">
        <div className="container-page grid gap-10 md:grid-cols-[1fr_2fr]">
          <h2 className="text-3xl font-semibold">The pressure you&apos;re under</h2>
          <div className="max-w-2xl space-y-4 text-lg">
            <p>
              Professionals are now expected to deliver the productivity gains AI promises, with
              little time to learn a complex technology that changes every month.
            </p>
            <p>
              Most options teach individual features and leave you to work out how they fit your
              job. What&apos;s missing is an understanding of how these AI systems actually work,
              and a durable structure to build on. That&apos;s what you build here, starting from
              your own work.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <h2 className="text-3xl font-semibold">What sets it apart</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {OFFER.differentiators.map((d) => (
              <div key={d.title}>
                <h3 className="text-xl font-semibold">{d.title}</h3>
                <p className="mt-2 text-muted">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-10 md:grid-cols-[1fr_2fr]">
          <h2 className="text-3xl font-semibold">Who it&apos;s for</h2>
          <p className="max-w-2xl text-lg">{OFFER.audience}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <h2 className="text-3xl font-semibold">How the four weeks run</h2>
          <div className="mt-8 max-w-2xl">
            <p className="eyebrow">Before you start</p>
            <h3 className="mt-2 text-xl font-semibold">Discovery call</h3>
            <p className="mt-2 text-muted">{OFFER.discoveryCall}</p>
          </div>
          <ol className="mt-12 divide-y divide-rule border-y border-rule">
            {OFFER.weeks.map((week, i) => (
              <li key={week.title} className="grid gap-6 py-8 md:grid-cols-[1fr_2fr]">
                <div>
                  <p className="eyebrow">Week {i + 1}</p>
                  <h3 className="mt-2 text-xl font-semibold">{week.title}</h3>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold">You build</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5">
                      {week.build.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted">You learn</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-muted">
                      {week.learn.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-muted">
            {OFFER.sessions} live sessions of {OFFER.sessionHours} hours each, held {OFFER.mode}.
          </p>
        </div>
      </section>

      <ProofSection />

      <section className="section">
        <div className="container-page grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">What you leave with</h2>
            <ul className="mt-6 list-disc space-y-2 pl-5">
              {OFFER.leaveWith.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">What you need</h2>
            <ul className="mt-6 list-disc space-y-2 pl-5">
              {OFFER.whatYouNeed.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-muted">No coding background needed.</p>
          </div>
        </div>
      </section>

      <section className="section bg-paper-deep">
        <div className="container-page grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow">{OFFER.cohortStatus}</p>
            <p className="mt-4 font-serif text-5xl font-semibold">{price}</p>
            <p className="mt-1 text-muted">per person</p>
            <p className="mt-6 max-w-sm text-muted">
              Includes the discovery call, {OFFER.sessions} live online sessions and one hour of
              one-on-one support afterwards. Cohort dates are set with the people who join.
            </p>
          </div>
          <div id="start" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold">Start a conversation</h2>
            <p className="mt-2 text-muted">
              Tell us a little about your work. We&apos;ll be in touch {OFFER.responseTime}.
            </p>
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
