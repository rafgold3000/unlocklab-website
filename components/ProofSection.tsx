import Proof from "@/components/Proof";
import { PROOF_SECTION as S } from "@/lib/offer";

// Shared by the home page and the Intensive page so the two never diverge.
export default function ProofSection() {
  return (
    <section className="section">
      <div className="container-page">
        <p className="eyebrow">{S.eyebrow}</p>
        <h2 className="mt-3 text-4xl font-semibold">{S.heading}</h2>
        <p className="mt-6 max-w-2xl text-lg">{S.lede}</p>

        <div className="mt-10 grid gap-px border border-rule bg-rule md:grid-cols-2">
          <div className="bg-paper p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-muted">{S.today.title}</h3>
            <ul className="mt-4 space-y-3 text-muted">
              {S.today.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="select-none">
                    –
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-paper-deep p-6 sm:p-8">
            <h3 className="text-lg font-semibold">{S.withCommandCenter.title}</h3>
            <ul className="mt-4 space-y-3">
              {S.withCommandCenter.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="select-none text-violet">
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="mt-16 text-2xl font-semibold">{S.resultsTitle}</h3>
        <div className="mt-2">
          <Proof intro={S.resultsIntro} />
        </div>
      </div>
    </section>
  );
}
