"use client";

import Link from "next/link";
import Card from "./Card";
import { Law } from "@/lib/types";

export default function ProjectCard({ p }: { p: Law }) {
  const periodLabel = p.origin.period;
  const attribution = p.origin.attribution;

  return (
    <Link
      href={`/laws/${p.id}`}
      className="project-card-link"
      style={{ display: "block" }}
    >
      <Card>
        <div className="project-card-flip">
          <div className="project-card-inner">
            <div className="project-card-face project-card-front">
              <h3 className="mono project-card-title">{p.title}</h3>
              <p className="project-card-statement">
                "{p.canonical.statement}"
              </p>
            </div>
            <div className="project-card-face project-card-back">
              {p.cover && (
                <img
                  src={p.cover}
                  alt=""
                  className="project-card-back-image"
                />
              )}
              <span className="project-card-back-label mono">Origin</span>
              <div className="project-card-back-meta mono">
                {periodLabel && <span>{periodLabel}</span>}
                {attribution && <span>{attribution}</span>}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
