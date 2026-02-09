import Header from "@/components/Header";
import Button from "@/components/Button";
import Glyph from "@/components/Glyph";
import hero from "@/content/hero.json";
import laws from "@/content/laws.json";
import witnessData from "@/content/witness.json";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { Law, WitnessData } from "@/lib/types";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />
      <Section>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr .8fr",
            gap: 24,
          }}
        >
          <div>
            <h1 className="mono" style={{ fontSize: 36, margin: 0 }}>
              {hero.headline}
            </h1>
            <p style={{ opacity: 0.9 }}>{hero.subline}</p>
            <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
              <Button as="a" href={hero.ctaPrimary.href}>
                {hero.ctaPrimary.label}
              </Button>
              <Button as="a" href={hero.ctaSecondary.href} variant="secondary">
                {hero.ctaSecondary.label}
              </Button>
            </div>
          </div>
          <div className="center">
            <Glyph />
          </div>
        </div>
      </Section>

      <Section title="Laws">
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          }}
        >
          {laws.map((p) => (
            <ProjectCard key={p.id} p={p as Law} />
          ))}
        </div>
      </Section>

      <Section title="Witnesses">
        <div className="witness-home">
          <div className="witness-home-header">
            <p className="witness-home-sub">
              Recorded statements captured without interpretation.
            </p>
            <Link className="witness-home-link mono" href="/witnesses">
              View all witnesses →
            </Link>
          </div>
          <div className="witness-home-list">
            {(witnessData as WitnessData).entries
              .filter((entry) => !entry.hidden)
              .slice(0, 5)
              .map((entry) => (
                <div key={entry.id} className="witness-home-item">
                  <p className="witness-home-quote">
                    &ldquo;{entry.quote}&rdquo;
                  </p>
                  <div className="witness-home-meta mono">
                    <span>{entry.author}</span>
                    <span>{entry.year}</span>
                    <span>{entry.source}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Section>

      {/*<Section title="Experience">*/}
      {/*  <Timeline items={experience as ExperienceItem[]} />*/}
      {/*</Section>*/}
    </>
  );
}
