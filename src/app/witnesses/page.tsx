import Header from "@/components/Header";
import Section from "@/components/Section";
import data from "@/content/witness.json";
import type { WitnessData } from "@/lib/types";
import Link from "next/link";

export default function WitnessesPage() {
  const witnesses = (data as WitnessData).entries.filter((entry) => !entry.hidden);
  const meta = (data as WitnessData).meta;

  return (
    <>
      <Header />
      <Section title="Witnesses">
        <div className="witness-intro">
          <p className="witness-description">{meta.description}</p>
          <div className="witness-meta mono">
            <span>Version {meta.version}</span>
            <span>{witnesses.length} entries</span>
          </div>
          <ul className="witness-rules">
            {meta.rules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </div>

        <div className="witness-list">
          {witnesses.map((entry) => (
            <Link
              key={entry.id}
              href={`/witnesses/${entry.id}`}
              className="witness-item"
            >
              <p className="witness-quote">"{entry.quote}"</p>
              <div className="witness-item-meta mono">
                <span>{entry.author}</span>
                <span>{entry.year}</span>
                <span>{entry.source}</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
