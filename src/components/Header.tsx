"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import BackgroundDimmer from "./BackgroundDimmer";

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const height = headerRef.current?.offsetHeight ?? 0;
      const current = window.scrollY;
      setIsScrolled(current > height);
      if (current <= height) {
        setIsHidden(false);
      } else if (current > lastScrollY.current) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY.current = current;
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`mono site-header${isScrolled ? " is-scrolled" : ""}${
        isHidden ? " is-hidden" : ""
      }`}
    >
      <Link href="/" className="glitch" style={{ fontWeight: 700 }}>
        digital_chaos.sh
      </Link>
      <nav className="site-nav">
        <div className="flex gap-3">
          <Link href="/laws" className="glitch nav-link">
            {"laws"}
          </Link>
          <Link href="/witnesses" className="glitch nav-link">
            {"witnesses"}
          </Link>
        </div>
        <div className="flex gap-4">
          <BackgroundDimmer />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
