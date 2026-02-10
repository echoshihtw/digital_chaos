import Header from "@/components/Header";
import Section from "@/components/Section";
import data from "@/content/ethos.json";

type EthosData = typeof data;

export default function EthosPage() {
  const ethos = data as EthosData;

  return (
    <>
      {/*<Header />*/}
      <Section>
        <div className="ethos-hero">
          <p className="ethos-kicker mono">Ethos</p>
          <h1 className="ethos-title mono">{ethos.meta.title}</h1>
          <p className="ethos-description">{ethos.meta.description}</p>
          <div className="ethos-meta mono">
            <span>Version {ethos.meta.version}</span>
            <span>Status {ethos.meta.status}</span>
            <span>Updated {ethos.meta.lastUpdated}</span>
          </div>
        </div>
        <div className="ethos-opening">
          {ethos.opening.lines.map((line) => (
            <p key={line} className="ethos-line">
              {line}
            </p>
          ))}
        </div>
      </Section>

      {ethos.sections.map((section) => (
        <Section key={section.id} title={section.title}>
          <div className="ethos-section">
            {section.content.map((line, index) => (
              <p key={`${section.id}-${index}`} className="ethos-line">
                {line}
              </p>
            ))}
          </div>
        </Section>
      ))}

      <Section>
        <div className="ethos-closing">
          {ethos.closing.lines.map((line) => (
            <p key={line} className="ethos-line">
              {line}
            </p>
          ))}
        </div>
      </Section>
    </>
  );
}
