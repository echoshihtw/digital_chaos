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
      {/*<Header />*/}
      <Section>
        <div className="home-hero">
          <div className="home-hero-grid">
            <div className="home-hero-copy">
              <h1 className="mono home-hero-title">{hero.headline}</h1>
              <p className="home-hero-sub">{hero.subline}</p>
              <div className="home-hero-actions">
                <Button as="a" href={hero.ctaPrimary.href}>
                  {hero.ctaPrimary.label}
                </Button>
                <Button
                  as="a"
                  href={hero.ctaSecondary.href}
                  variant="secondary"
                >
                  {hero.ctaSecondary.label}
                </Button>
              </div>
            </div>
            <div className="home-hero-glyph">
              <Glyph />
            </div>
          </div>
        </div>
      </Section>

      <Section title="Laws">
        <div className="home-law-grid">
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
