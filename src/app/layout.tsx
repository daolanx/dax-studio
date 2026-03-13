import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
} as const;

export const metadata: Metadata = {
  title: {
    default: "Dax | Freelance Frontend Developer",
    template: "%s | Dax",
  },
  description: "Freelance Frontend Developer & Indie Developer. Building exceptional web experiences with React, Next.js, and TypeScript.",
  keywords: ["frontend developer", "freelance developer", "React", "Next.js", "TypeScript", "web developer", "Hangzhou"],
  authors: [{ name: "Dax" }],
  creator: "Dax",
  publisher: "Dax",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dax.studio",
    title: "Dax | Freelance Frontend Developer",
    description: "Freelance Frontend Developer & Indie Developer. Building exceptional web experiences.",
    siteName: "Dax",
  },
  twitter: {
    card: "summary",
    title: "Dax | Freelance Frontend Developer",
    description: "Freelance Frontend Developer & Indie Developer.",
    creator: "@daolanx",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="2008e087-18a7-43de-8901-4f580e9ddabc"
        />
      </head>
      <body style={{ backgroundColor: "var(--terminal-bg)" }}>{children}</body>
    </html>
  );
}
