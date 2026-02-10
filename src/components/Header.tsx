"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import BackgroundDimmer from "./BackgroundDimmer";

export default function Header() {
  return (
    <header
      className="mono site-header"
    >
      <Link href="/" className="glitch" style={{ fontWeight: 700 }}>
        digital_chaos.sh
      </Link>
      <nav className="site-nav">
        <Link href="/laws" className="glitch">
          {"// laws"}
        </Link>
        <Link href="/witnesses" className="glitch">
          {"// witnesses"}
        </Link>
        <BackgroundDimmer />
        <ThemeToggle />
      </nav>
    </header>
  );
}
