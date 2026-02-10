import Header from "@/components/Header";
import Section from "@/components/Section";
import ProjectFiltersGrid from "@/components/ProjectFiltersGrid";
import data from "@/content/laws.json";
import { Law } from "@/lib/types";

export default function ProjectsPage() {
  const sortedProjects = [...data].sort((a, b) =>
    a.title.localeCompare(b.title),
  );

  return (
    <>
      {/*<Header />*/}
      <Section title="The Universal Laws">
        <ProjectFiltersGrid projects={sortedProjects as Law[]} />
      </Section>
    </>
  );
}
