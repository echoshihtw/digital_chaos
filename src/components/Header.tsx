"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header
      className="mono"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 0",
      }}
    >
      <Link href="/" className="glitch" style={{ fontWeight: 700 }}>
        digital_chaos.sh
      </Link>
      <nav style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Link href="/laws" className="glitch">
          Laws
        </Link>
        <Link href="/quotes" className="glitch">
          Quotes
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
