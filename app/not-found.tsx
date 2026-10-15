import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function NotFound() {
  return (
    <main id="main-content" className="container not-found">
      <p className="eyebrow">404 / Page not found</p>
      <h1>
        Let’s get you back
        <br />
        to familiar ground.
      </h1>
      <p>
        This page could not be found. Explore the portfolio and its three
        industrial and financial data science projects.
      </p>
      <Link href="/" className="button button-primary">
        <ArrowLeft size={17} aria-hidden="true" />
        Back to the portfolio
      </Link>
    </main>
  );
}
