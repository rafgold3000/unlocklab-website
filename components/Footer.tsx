import Link from "next/link";
import CurrentYear from "@/components/CurrentYear";
import { CONTACT_EMAIL } from "@/lib/offer";

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="container-page flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <Link href="/" className="font-serif text-xl font-semibold text-ink no-underline">
            UnlockLab
          </Link>
          <p className="mt-2 text-sm text-muted">Hands-on AI capability for working professionals.</p>
        </div>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/events" className="text-muted hover:text-ink">
              Past workshops
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-muted hover:text-ink">
              About
            </Link>
          </li>
          <li>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-muted hover:text-ink">
              {CONTACT_EMAIL}
            </a>
          </li>
        </ul>
      </div>
      <div className="container-page border-t border-rule py-6 text-xs text-muted">
        © <CurrentYear /> UnlockLab. All rights reserved.
      </div>
    </footer>
  );
}
