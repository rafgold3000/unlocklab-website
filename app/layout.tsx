import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { organizationJsonLd } from "@/lib/jsonld";
import { OFFER, SITE_URL, siteDescription } from "@/lib/offer";
import "./globals.css";

const serif = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${OFFER.name} · UnlockLab`,
    template: "%s · UnlockLab",
  },
  description: siteDescription(OFFER),
  openGraph: {
    siteName: "UnlockLab",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <JsonLd data={organizationJsonLd()} />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
