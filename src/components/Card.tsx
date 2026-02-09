"use client";

import { PropsWithChildren } from "react";
export default function Card({ children }: PropsWithChildren) {
  return (
    <div
      className="neon-border"
      style={{
        padding: 20,
        background: "color-mix(in hsl, var(--bg), transparent 25%)",
        borderRadius: "12px",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      {children}
    </div>
  );
}
