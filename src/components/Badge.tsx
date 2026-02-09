"use client";

import { ReactNode } from "react";

export default function Badge({ children }: { children: ReactNode }) {
  return (
    <span
      className="mono"
      style={{
        border: "1px solid var(--border)",
        padding: "2px 8px",
        borderRadius: 999,
        fontSize: 12,
        opacity: 0.9,
      }}
    >
      {children}
    </span>
  );
}
