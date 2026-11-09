import { PROOF, PROOF_ATTRIBUTION } from "@/lib/offer";

export default function Proof({ intro }: { intro?: string }) {
  return (
    <div>
      {intro && <p className="max-w-2xl text-lg text-muted">{intro}</p>}
      <dl className="mt-8 grid gap-px border border-rule bg-rule sm:grid-cols-2">
        {PROOF.map((row) => (
          <div key={row.task} className="bg-paper p-6">
            <dt className="text-sm font-semibold text-muted">{row.task}</dt>
            <dd className="mt-2 font-serif text-2xl">
              <span className="text-muted">{row.before}</span>
              <span className="mx-2 text-violet" aria-label="down to">
                →
              </span>
              <span className="font-semibold">{row.after}</span>
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-sm italic text-muted">{PROOF_ATTRIBUTION}</p>
    </div>
  );
}
