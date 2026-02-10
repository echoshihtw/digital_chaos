import { PropsWithChildren } from "react";
export default function Section({
  id,
  title,
  children,
}: PropsWithChildren<{ id?: string; title?: string }>) {
  return (
    <section className="section" id={id}>
      {title && (
        <h2 className="mono" style={{ marginBottom: 12 }}>
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
