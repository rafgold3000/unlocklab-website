"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "@/components/Button";

const navLinks = [
  { href: "/intensive", label: "The Intensive" },
  { href: "/about", label: "About" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Main">
        <Link href="/" className="font-serif text-xl font-semibold text-ink no-underline">
          UnlockLab
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted no-underline hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/intensive#start">Start a conversation</Button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-muted hover:text-ink md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-rule md:hidden">
          <div className="container-page space-y-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-muted no-underline hover:text-ink"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button href="/intensive#start" onClick={() => setIsOpen(false)}>
                Start a conversation
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
