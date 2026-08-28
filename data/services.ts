import { Globe, Smartphone, Server, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  id: string;
  index: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    id: "web",
    index: "01",
    icon: Globe,
    title: "Web Development",
    summary:
      "Fast, scalable websites and web applications tailored to your business.",
    bullets: [
      "Business websites",
      "SaaS applications",
      "E-commerce platforms",
      "Dashboards & admin panels",
      "Custom web applications",
      "Marketing sites",
    ],
  },
  {
    id: "mobile",
    index: "02",
    icon: Smartphone,
    title: "Mobile App Development",
    summary:
      "Polished cross-platform mobile applications for iOS and Android.",
    bullets: [
      "Flutter & React Native",
      "API integration",
      "Authentication flows",
      "Push notifications",
      "Offline-first architecture",
      "App Store deployment",
    ],
  },
  {
    id: "backend",
    index: "03",
    icon: Server,
    title: "Backend & API Development",
    summary:
      "Reliable backend infrastructure that powers modern applications.",
    bullets: [
      "REST & GraphQL APIs",
      "Database architecture",
      "Authentication & security",
      "Third-party integrations",
      "Cloud deployment",
      "Scalable infrastructure",
    ],
  },
  {
    id: "product",
    index: "04",
    icon: Sparkles,
    title: "Product Development",
    summary:
      "Turn an idea into a production-ready digital product, end to end.",
    bullets: [
      "Idea validation",
      "Product design",
      "Engineering",
      "Testing & QA",
      "Launch",
      "Iteration",
    ],
  },
];
