import Link from "next/link";
import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} Priynka Roy
          <span>Statistics. Curiosity. Practical impact.</span>
        </p>
        <Link href="/#home" className="text-link">
          Back to top
          <ArrowUp size={16} aria-hidden="true" />
        </Link>
      </div>
    </footer>
  );
}
