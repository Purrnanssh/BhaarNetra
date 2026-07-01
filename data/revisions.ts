export type RevisionEntry = {
  version: string;
  date: string;
  summary: string;
  details: string[];
};

export const revisionData: RevisionEntry[] = [
  {
    version: "1.0",
    date: "June 2026",
    summary: "Initial Engineering Appendix Release",
    details: [
      "Established foundational PE-01 through PE-09 evidence domains.",
      "Mapped primary government standards and peer-reviewed literature to engineering claims.",
      "Introduced Technical Literature & Standards methodology.",
      "Created Glossary of Terms."
    ]
  }
];
