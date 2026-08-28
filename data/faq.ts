export type FaqItem = {
  q: string;
  a: string;
};

export const faq: FaqItem[] = [
  {
    q: "How long does a project take?",
    a: "It depends on scope and complexity. A focused website typically takes a few weeks, while a full product build can run over several months. After discovery, we share a clear timeline before work begins.",
  },
  {
    q: "Can you work with an existing application?",
    a: "Yes. We regularly join existing codebases to extend, refactor, or stabilize them. We start with a technical review so recommendations are grounded in what's actually there.",
  },
  {
    q: "Do you build both web and mobile applications?",
    a: "Yes. We build web applications on the modern React and Next.js stack, and cross-platform mobile applications with Flutter or React Native.",
  },
  {
    q: "Can you handle backend development?",
    a: "Yes. We design and build APIs, databases, authentication, integrations and cloud infrastructure. Frontend and backend are handled by one team.",
  },
  {
    q: "Can you maintain the application after launch?",
    a: "Yes. Ongoing maintenance, monitoring and iteration is part of how we work. Most clients continue with us after launch to keep improving the product.",
  },
  {
    q: "How do we start a project?",
    a: "Send us a brief through the contact form — a few sentences about what you want to build is enough. We'll respond with next steps within a few working days.",
  },
];
