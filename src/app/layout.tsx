import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChunYu.sh — The fun software engineer",
  description: "Enjoy",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <canvas id="bg-canvas" aria-hidden="true" />
        <div className="container">{children}</div>
        {/* SSR-safe theme init */}
        <script src="/background.js" defer />
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { const t = localStorage.getItem('theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark':'light'); const root = document.documentElement; root.setAttribute('data-theme', t); root.style.colorScheme = t; })();`,
          }}
        />
      </body>
    </html>
  );
}
