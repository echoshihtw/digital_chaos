import { PropsWithChildren } from "react";
export default function Section({
  title,
  children,
}: PropsWithChildren<{ title?: string }>) {
  return (
    <section className="section">
      {title && (
        <h2 className="mono" style={{ marginBottom: 12 }}>
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
