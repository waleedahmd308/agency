export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  technology: string[];
  href: string;
};

export const projects: Project[] = [
  {
    id: "materials-explorer",
    title: "Building Materials Explorer",
    category: "Product discovery platform",
    year: "2025",
    summary:
      "A modern product discovery platform helping users explore, search, filter and understand building material products.",
    challenge:
      "The existing catalogue was hard to navigate, technical specifications were buried in PDFs, and users couldn't compare products meaningfully. Purchasing decisions were slow and required back-and-forth with sales.",
    solution:
      "We designed a focused product discovery interface with fast faceted search, structured specifications, and clean product detail pages. The frontend was built on Next.js with a NestJS API optimized for filter-heavy queries.",
    outcome:
      "Users can now find, compare and understand products independently. Product data is structured, searchable and consistent across the platform — reducing friction for both customers and the sales team.",
    technology: ["Next.js", "TypeScript", "React", "Tailwind CSS", "NestJS"],
    href: "#",
  },
];
