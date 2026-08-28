export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Discovery",
    description:
      "Understand the business, users, requirements and goals. We align on scope before writing a line of code.",
  },
  {
    index: "02",
    title: "Strategy & Design",
    description:
      "Define product structure, user experience and visual direction. Prototypes, flows and a system to build against.",
  },
  {
    index: "03",
    title: "Development",
    description:
      "Build the product using modern technologies and clean architecture. Continuous review, incremental delivery.",
  },
  {
    index: "04",
    title: "Testing",
    description:
      "Test functionality, responsiveness, performance and usability across devices and real conditions.",
  },
  {
    index: "05",
    title: "Launch",
    description:
      "Deploy the product, connect the infrastructure and make it production-ready. Monitoring from day one.",
  },
  {
    index: "06",
    title: "Support",
    description:
      "Continue maintaining, improving and scaling the product as your business and users evolve.",
  },
];
