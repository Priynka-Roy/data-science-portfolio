"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navigation = [
  "Home",
  "About",
  "Projects",
  "Training",
  "Skills",
  "Education",
  "Research",
  "Contact",
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
    );
    navigation.forEach((name) => {
      const section = document.getElementById(name.toLowerCase());
      if (section) observer.observe(section);
    });
    return () => {
      document.removeEventListener("keydown", onKey);
      observer.disconnect();
    };
  }, [pathname, open]);
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link href="/#home" className="wordmark" aria-label="Priynka Roy, home">
          Priynka Roy<span aria-hidden="true">.</span>
        </Link>
        <button
          id="menu-toggle"
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={open ? "navigation is-open" : "navigation"}
        >
          {navigation.map((name) => (
            <Link
              key={name}
              href={`/#${name.toLowerCase()}`}
              onClick={() => setOpen(false)}
              aria-current={
                pathname === "/" && active === name.toLowerCase()
                  ? "location"
                  : undefined
              }
              className={name === "Contact" ? "nav-contact" : ""}
            >
              {name}
              {name === "Contact" && (
                <ArrowUpRight size={15} aria-hidden="true" />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
