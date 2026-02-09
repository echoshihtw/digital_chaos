import Header from "@/components/Header";
import Link from "next/link";
import Section from "@/components/Section";
import laws from "@/content/laws.json";
import type { Law } from "@/lib/types";
import Badge from "@/components/Badge";

export default function LawDetail({ params }: { params: { slug: string } }) {
  const p = (laws as Law[]).find((x) => x.id === params.slug);
  if (!p) return <div className="container">Not found</div>;

  const lawTitleById = new Map(
    (laws as Law[]).map((law) => [law.id, law.title]),
  );
  const formatLawId = (id: string) =>
    id
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");

  const examples = p.examples?.daily ?? [];
  const domains = p.domains ?? [];
  const hasExamples = examples.length > 0;
  const hasOriginNotes = Boolean(p.origin.notes);
  const hasVisualMetaphor = Boolean(p.visualMetaphor);
  const hasHistoricalNotes = p.historicalNotes.length > 0;
  const hasCommunityReflections = p.communityReflections.length > 0;
  const hasCounterExamples = p.counterExamples.length > 0;
  const hasCitations = p.citations.length > 0;
  const hasRelationships =
    p.relationships.reinforces.length > 0 ||
    p.relationships.related.length > 0 ||
    p.relationships.contrasts.length > 0;

  return (
    <>
      <Header />
      <Section>
        <div className="law-hero-grid">
          <div className="law-panel law-hero-content">
            <p className="law-hero-kicker mono">{p.tier}</p>
            <h1 className="law-hero-title mono">{p.title}</h1>
            <p className="law-hero-summary">{p.coreInsight}</p>
            <p className="law-origin">{p.origin.context}</p>
            <div className="law-meta">
              <Badge>{p.origin.period}</Badge>
              <Badge>{p.origin.attribution}</Badge>
            </div>
            {domains.length > 0 && (
              <div className="law-meta law-meta-secondary">
                {domains.map((d) => (
                  <Badge key={d}>{d}</Badge>
                ))}
              </div>
            )}
          </div>
          <div className="law-cover">
            <img src={p.cover} alt={`Cover for ${p.title}`} />
            <div className="law-cover-content">
              <p className="law-cover-label mono">Canonical Statement</p>
              <p className="law-cover-text">{p.canonical.statement}</p>
            </div>
          </div>
        </div>
      </Section>
      <Section title="Field Notes">
        <div className="law-case-grid">
          <article className="law-card">
            <h3 className="law-card-title mono">Core Insight</h3>
            <p className="law-card-body">{p.coreInsight}</p>
          </article>
          {hasExamples && (
            <article className="law-card">
              <h3 className="law-card-title mono">Examples</h3>
              <ul className="law-card-list">
                {examples.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </article>
          )}
          {hasOriginNotes && (
            <article className="law-card">
              <h3 className="law-card-title mono">Origin Notes</h3>
              <p className="law-card-body">{p.origin.notes}</p>
            </article>
          )}
          {hasVisualMetaphor && (
            <article className="law-card">
              <h3 className="law-card-title mono">Visual Metaphor</h3>
              <p className="law-card-body">{p.visualMetaphor}</p>
            </article>
          )}
          {hasRelationships && (
            <article className="law-card">
              <h3 className="law-card-title mono">Relationships</h3>
              {p.relationships.reinforces.length > 0 && (
                <div className="law-card-section">
                  <p className="law-card-label mono">Reinforces</p>
                  <ul className="law-card-list">
                    {p.relationships.reinforces.map((x, i) => {
                      const label = lawTitleById.get(x) ?? formatLawId(x);
                      const hasTarget = lawTitleById.has(x);
                      return (
                        <li key={i}>
                          {hasTarget ? (
                            <Link className="law-related-link" href={`/laws/${x}`}>
                              {label}
                            </Link>
                          ) : (
                            <span className="law-related-missing">{label}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
              {p.relationships.related.length > 0 && (
                <div className="law-card-section">
                  <p className="law-card-label mono">Related</p>
                  <ul className="law-card-list">
                    {p.relationships.related.map((x, i) => {
                      const label = lawTitleById.get(x) ?? formatLawId(x);
                      const hasTarget = lawTitleById.has(x);
                      return (
                        <li key={i}>
                          {hasTarget ? (
                            <Link className="law-related-link" href={`/laws/${x}`}>
                              {label}
                            </Link>
                          ) : (
                            <span className="law-related-missing">{label}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
              {p.relationships.contrasts.length > 0 && (
                <div className="law-card-section">
                  <p className="law-card-label mono">Contrasts</p>
                  <ul className="law-card-list">
                    {p.relationships.contrasts.map((x, i) => {
                      const label = lawTitleById.get(x) ?? formatLawId(x);
                      const hasTarget = lawTitleById.has(x);
                      return (
                        <li key={i}>
                          {hasTarget ? (
                            <Link className="law-related-link" href={`/laws/${x}`}>
                              {label}
                            </Link>
                          ) : (
                            <span className="law-related-missing">{label}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </article>
          )}
          {hasHistoricalNotes && (
            <article className="law-card">
              <h3 className="law-card-title mono">Historical Notes</h3>
              <ul className="law-card-list">
                {p.historicalNotes.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </article>
          )}
          {hasCommunityReflections && (
            <article className="law-card">
              <h3 className="law-card-title mono">Community Reflections</h3>
              <ul className="law-card-list">
                {p.communityReflections.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </article>
          )}
          {hasCounterExamples && (
            <article className="law-card">
              <h3 className="law-card-title mono">Counter Examples</h3>
              <ul className="law-card-list">
                {p.counterExamples.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </article>
          )}
          {hasCitations && (
            <article className="law-card">
              <h3 className="law-card-title mono">Citations</h3>
              <ul className="law-card-list">
                {p.citations.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </article>
          )}
          <article className="law-card">
            <h3 className="law-card-title mono">Last Reviewed</h3>
            <p className="law-card-body">{p.lastReviewed}</p>
          </article>
        </div>
      </Section>
    </>
  );
}
