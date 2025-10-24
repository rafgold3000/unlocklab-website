import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UnlockLab - AI Education Community",
  description: "Join UnlockLab, a vibrant community dedicated to AI education and innovation. Learn, connect, and grow with fellow AI enthusiasts.",
  keywords: ["AI", "education", "community", "learning", "artificial intelligence", "UnlockLab"],
  openGraph: {
    title: "UnlockLab - AI Education Community",
    description: "Join UnlockLab, a vibrant community dedicated to AI education and innovation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
