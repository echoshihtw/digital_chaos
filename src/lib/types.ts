export type Project = {
    slug: string;
    title: string;
    summary: string;
    cover: string; // /covers/*.png
    year: string;
    role: string;
    stack: string[];
    tags: string[];
    links: { demo?: string; repo?: string; post?: string };
    caseStudy: {
        problem: string;
        solution: string;
        architecture: string[]; // bullet points
        highlights: string[]; // bullet points
        results: string[]; // bullet points / metrics
    };
};

export type Law = {
    id: string;
    title: string;
    tier: "primary" | "secondary" | string;
    cover: string;
    origin: {
        period: string;
        context: string;
        attribution: string;
        notes: string;
    };
    canonical: {
        statement: string;
    };
    domains: string[];
    coreInsight: string;
    examples?: {
        daily?: string[];
    };
    relationships: {
        reinforces: string[];
        contrasts: string[];
        related: string[];
    };
    visualMetaphor: string | null;
    historicalNotes: string[];
    communityReflections: string[];
    counterExamples: string[];
    citations: string[];
    lastReviewed: string;
};

export type ExperienceItem = {
    start: string; // YYYY-MM
    end: string | "Now";
    title: string;
    org: string;
    bullets: string[];
};

export type WitnessEntry = {
    id: string;
    author: string;
    quote: string;
    year: number;
    source: string;
    related: string[];
    tone: string;
    hidden: boolean;
};

export type WitnessData = {
    meta: {
        category: string;
        description: string;
        intent: string;
        rules: string[];
        version: string;
    };
    entries: WitnessEntry[];
    extensions: {
        annotations: Record<string, string>;
        counterQuotes: string[];
        translations: Record<string, string>;
    };
};
