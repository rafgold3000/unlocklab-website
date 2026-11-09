import { OFFER } from "@/lib/offer";

export default function Definition({ className = "" }: { className?: string }) {
  return (
    <dl className={`max-w-xl border-l-[3px] border-violet py-1.5 pl-5 ${className}`}>
      <dt className="font-serif text-xl font-semibold">
        Command Center <span className="ml-1 text-base font-normal italic text-muted">noun</span>
      </dt>
      <dd className="mt-1 font-serif text-lg">{OFFER.definition}</dd>
    </dl>
  );
}
