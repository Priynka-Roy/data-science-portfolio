import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";
import { getSiteUrl } from "@/lib/site";
import { profile } from "@/content/profile";
const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl), alternates: { canonical: siteUrl } } : {}),
  openGraph: { type: "website", locale: "en_GB", siteName: "Priynka Roy", title: "Priynka Roy | Statistics & Data Science", description: "Statistical research and industrial machine learning projects by Priynka Roy.", ...(siteUrl ? { url: siteUrl } : {}) },
  twitter: { card: "summary_large_image" },
  title: {
    default:
      "Priynka Roy | Statistics, Data Science & Machine Learning Portfolio",
    template: "%s | Priynka Roy",
  },
  description:
    "Portfolio of Priynka Roy, an MSc Statistics student at the University of Turku, featuring industrial machine learning, time-series forecasting, energy optimization, and statistical research.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Person", name: profile.name, ...(siteUrl ? { url: siteUrl } : {}), description: profile.headline, sameAs: [profile.github, profile.linkedin, profile.scholar].filter(Boolean), homeLocation: { "@type": "Place", name: profile.location } }).replace(/</g, "\u003c") }} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
