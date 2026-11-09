import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import Definition from "@/components/Definition";
import Proof from "@/components/Proof";
import { OFFER } from "@/lib/offer";

export const metadata: Metadata = {
  title: { absolute: `UnlockLab · ${OFFER.headline.replace(/\.$/, "")}` },
  description:
    "Build your own AI productivity system in four weeks, live online, with SkWx builders. Claude Code and Claude Cowork, built around your real work.",
  alternates: { canonical: "/" },
};

const steps = [
  {
    title: "A discovery call",
    body: "A SkWx consultant learns your role, your priorities and the problems you want solved, and the four weeks are shaped around them.",
  },
  {
    title: `${OFFER.sessions} live sessions, online`,
    body: `Two hours a week, and every week ends with something you have built.`,
  },
  {
    title: "A working system",
    body: "You leave with your Command Center already handling your first recurring tasks, and the know-how to keep extending it.",
  },
];

export default function Home() {
  return (
    <>
      <section className="container-page py-20 sm:py-28">
        <p className="eyebrow">{OFFER.label}</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          {OFFER.headline}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">{OFFER.lede}</p>
        <div className="mt-8">
          <Button href="/intensive#start" size="lg">
            Start a conversation
          </Button>
        </div>
        <Definition className="mt-14" />
      </section>

      <section className="section">
        <div className="container-page grid gap-10 md:grid-cols-[1fr_2fr]">
          <h2 className="text-3xl font-semibold">The hole in the AI story</h2>
          <div className="max-w-2xl space-y-4 text-lg">
            <p>
              Large companies have technology teams rolling AI out across the business. Developers
              and early adopters live inside the newest tools every day.
            </p>
            <p>
              Busy professionals in the middle are somehow expected to produce the productivity
              gains on their own. So they tinker: a class here, an article there, YouTube videos
              from people no one has vetted. It adds up to hundreds of hours spent understanding,
              practicing and working things out alone.
            </p>
            <p className="font-serif text-xl">
              The intensive closes that gap. You build your own system, with the people who build
              these systems for clients.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <p className="eyebrow">What the architecture does</p>
          <h2 className="mt-3 text-3xl font-semibold">Hours of work, down to minutes</h2>
          <div className="mt-6">
            <Proof intro="These results come from the Command Center architecture SkWx deploys for clients. In the intensive, you build your own version of it, around your own work." />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <h2 className="text-3xl font-semibold">How it works</h2>
          <ol className="mt-10 grid gap-10 md:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title}>
                <span className="font-serif text-sm text-violet">0{i + 1}</span>
                <h3 className="mt-1 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
          <Link href="/intensive" className="mt-10 inline-block font-semibold text-violet">
            See the full four weeks →
          </Link>
        </div>
      </section>

      <section className="section bg-paper-deep">
        <div className="container-page">
          <p className="eyebrow">{OFFER.cohortStatus}</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold">
            Tell us about your work. We&apos;ll tell you what we&apos;d build.
          </h2>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Button href="/intensive#start" size="lg">
              Start a conversation
            </Button>
            <Link href="/events" className="text-sm text-muted hover:text-ink">
              Past workshops
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
