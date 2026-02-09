"use client";

import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Law } from "@/lib/types";

export default function ProjectFiltersGrid({ projects }: { projects: Law[] }) {
  const filters = useMemo(() => {
    const unique = new Set<string>();
    projects.forEach((p) => {
      if (p.tier) unique.add(p.tier);
      p.domains?.forEach((domain) => unique.add(domain));
    });
    return Array.from(unique).sort((a, b) => a.localeCompare(b));
  }, [projects]);

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = (value: string) => {
    setSelectedFilters((prev) =>
      prev.includes(value) ? prev.filter((r) => r !== value) : [...prev, value],
    );
  };

  const filteredProjects = useMemo(() => {
    if (selectedFilters.length === 0) return projects;
    return projects.filter((p) => {
      const projectFilters = [p.tier, ...(p.domains ?? [])].filter(
        Boolean,
      ) as string[];

      return selectedFilters.some((value) => projectFilters.includes(value));
    });
  }, [projects, selectedFilters]);

  return (
    <>
      <div className="project-filters">
        <div className="project-filters-group">
          <span className="project-filters-label mono">Filters</span>
          <div className="project-filters-buttons">
            {filters.map((value) => {
              const isActive = selectedFilters.includes(value);
              return (
                <button
                  key={value}
                  type="button"
                  className={`project-filter-button mono${isActive ? " is-active" : ""}`}
                  aria-pressed={isActive}
                  onClick={() => toggleFilter(value)}
                >
                  {value}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className="grid"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
      >
        {filteredProjects.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
    </>
  );
}
