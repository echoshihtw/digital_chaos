"use client";
import { useEffect, useState } from "react";
import { applyTheme, getInitialTheme, type Theme } from "@/lib/theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const initial = getInitialTheme();
    applyTheme(initial);
    setTheme(initial);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleMediaChange = () => {
      if (localStorage.getItem("theme")) return;
      const next = media.matches ? "dark" : "light";
      applyTheme(next);
      setTheme(next);
    };
    const handleStorage = (event: StorageEvent) => {
      if (event.key !== "theme") return;
      const next =
        (event.newValue as Theme | null) ??
        (media.matches ? "dark" : "light");
      applyTheme(next);
      setTheme(next);
    };

    media.addEventListener("change", handleMediaChange);
    window.addEventListener("storage", handleStorage);
    return () => {
      media.removeEventListener("change", handleMediaChange);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    setTheme(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      aria-pressed={theme === "dark"}
      className="theme-toggle"
      data-theme={theme}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="theme-toggle-pill">
        <span className="theme-toggle-dot" aria-hidden="true" />
      </span>
      <span className="theme-toggle-label mono">
        {theme === "dark" ? "Dark" : "Light"}
      </span>
    </button>
  );
}
