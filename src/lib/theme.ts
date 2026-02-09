export type Theme = "light" | "dark";


export function getInitialTheme(): Theme {
    if (typeof window === "undefined") return "dark"; // default: dark (cypherpunk)
    return (localStorage.getItem("theme") as Theme) ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}


export function applyTheme(theme: Theme, hue?: number) {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    html.style.colorScheme = theme;
    if (typeof hue === "number") html.style.setProperty("--hue", String(hue));
    localStorage.setItem("theme", theme);
}
