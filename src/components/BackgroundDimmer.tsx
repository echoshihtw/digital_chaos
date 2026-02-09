"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "bg-dimmer";
const clamp = (value: number) => Math.min(1, Math.max(0, value));

export default function BackgroundDimmer() {
  const [value, setValue] = useState(0.88);

  useEffect(() => {
    const stored = Number(localStorage.getItem(STORAGE_KEY));
    const initial = Number.isFinite(stored) ? clamp(stored) : 0.88;
    setValue(initial);
    window.dispatchEvent(
      new CustomEvent("bg-dimmer-change", { detail: initial }),
    );
  }, []);

  const update = (next: number) => {
    const clamped = clamp(next);
    setValue(clamped);
    localStorage.setItem(STORAGE_KEY, String(clamped));
    window.dispatchEvent(
      new CustomEvent("bg-dimmer-change", { detail: clamped }),
    );
  };

  return (
    <div
      className="mono"
      style={{ display: "flex", alignItems: "center", gap: 8 }}
    >
      <span style={{ opacity: 0.7, fontSize: 12 }}>DIM</span>
      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={Math.round(value * 100)}
        onChange={(event) => update(Number(event.target.value) / 100)}
        aria-label="Background animation brightness"
        style={{
          width: 90,
          accentColor: "var(--primary)",
        }}
      />
    </div>
  );
}
