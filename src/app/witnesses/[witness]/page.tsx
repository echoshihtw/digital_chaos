import Header from "@/components/Header";
import Section from "@/components/Section";
import data from "@/content/witness.json";
import type { WitnessData } from "@/lib/types";
import Badge from "@/components/Badge";

export default function WitnessDetail({
  params,
}: {
  params: { witness: string };
}) {
  const entry = (data as WitnessData).entries.find(
    (item) => item.id === params.witness,
  );

  if (!entry) return <div className="container">Not found</div>;

  return (
    <>
      <Header />
      <Section>
          <div className="witness-detail">
            <p className="witness-detail-kicker mono">Witness</p>
            <h1 className="witness-detail-quote">
              &ldquo;{entry.quote}&rdquo;
            </h1>
            <div className="witness-detail-meta">
            <Badge>{entry.author}</Badge>
            <Badge>{entry.year}</Badge>
            <Badge>{entry.source}</Badge>
            <Badge>{entry.tone}</Badge>
            {entry.hidden && <Badge>Hidden</Badge>}
          </div>
        </div>
      </Section>
      {entry.related.length > 0 && (
        <Section title="Related">
          <div className="witness-related">
            {entry.related.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
