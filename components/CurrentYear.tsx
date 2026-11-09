"use client";

// Rendered in the browser so the footer year is never frozen at build time.
export default function CurrentYear() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}
