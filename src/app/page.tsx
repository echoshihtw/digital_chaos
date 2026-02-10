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
              <p className="home-hero-kicker mono">{hero.tagline}</p>
              <h1 className="mono home-hero-title">{hero.headline}</h1>
              <p className="home-hero-highlight">{hero.highlight}</p>
              <p className="home-hero-quip mono">
                Protocol: laugh, then verify.
              </p>
              <div className="home-hero-manifest">
                <div className="home-hero-manifest-group">
                  <p className="home-hero-manifest-label mono">Stance</p>
                  <ul className="home-hero-manifest-list">
                    {hero.movement.stance.map((item) => (
                      <li key={item} className="home-hero-manifest-item mono">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="home-hero-manifest-group">
                  <p className="home-hero-manifest-label mono">Principles</p>
                  <ul className="home-hero-manifest-list">
                    {hero.movement.principles.map((item) => (
                      <li key={item} className="home-hero-manifest-item mono">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="home-hero-sub mono">{hero.subline}</p>
              <div className="home-hero-actions">
                <div className="home-hero-cta-row">
                  <Button as="a" href={hero.ctaPrimary.href}>
                    {hero.ctaPrimary.label}
                  </Button>
                  <Button
                    as="a"
                    href={hero.ctaWitness.href}
                    variant="secondary"
                  >
                    {hero.ctaWitness.label}
                  </Button>
                </div>
                <Link
                  className="home-hero-secondary mono"
                  href={hero.ctaSecondary.href}
                >
                  {hero.ctaSecondary.label}
                </Link>
              </div>
            </div>
            <div className="home-hero-glyph">
              <Glyph />
            </div>
          </div>
        </div>
      </Section>

      <Section id="laws" title="Laws">
        <div className="home-law-header">
          <p className="home-law-sub">Field notes catalogued as invariant patterns.</p>
          <Link className="home-law-link mono" href="/laws">
            View all laws →
          </Link>
        </div>
        <div className="home-law-grid">
          {laws.map((p) => (
            <ProjectCard key={p.id} p={p as Law} />
          ))}
        </div>
      </Section>

      <Section id="witnesses" title="Witnesses">
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
