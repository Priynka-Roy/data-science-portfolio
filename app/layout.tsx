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
  openGraph: { type: "website", locale: "en_GB", siteName: "Priynka Roy", title: "Priynka Roy | Statistics & Data Science", description: "Statistical modeling, machine learning, and data analytics by Priynka Roy. Explore practical applications, Python and R skills, transparent evaluation, and research.", ...(siteUrl ? { url: siteUrl } : {}) },
  twitter: { card: "summary_large_image" },
  title: {
    default:
      "Priynka Roy | Statistics, Data Science & Machine Learning Portfolio",
    template: "%s | Priynka Roy",
  },
  description:
    "Priynka Roy’s portfolio in statistics, data science, machine learning, and analytics. Explore statistical modeling, practical applications, Python and R skills, basic SQL, and quantitative research.",
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
