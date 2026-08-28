export type TechCategory = {
  label: string;
  items: string[];
};

export const technologies: TechCategory[] = [
  {
    label: "Languages",
    items: ["TypeScript", "Python", "Dart"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Mobile",
    items: ["Flutter", "React Native"],
  },
  {
    label: "Backend",
    items: ["Node.js", "NestJS", "Python"],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "MySQL", "Firebase"],
  },
  {
    label: "Infrastructure",
    items: ["Docker", "GitHub Actions", "Vercel / AWS"],
  },
];
