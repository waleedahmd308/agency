"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/layout/Reveal";

const items = [
  {
    label: "Websites",
    text: "For companies that need a professional digital presence.",
  },
  {
    label: "Web Applications",
    text: "For businesses that need custom software, dashboards or SaaS products.",
  },
  {
    label: "Mobile Applications",
    text: "For businesses that want polished iOS and Android applications.",
  },
  {
    label: "Custom Projects",
    text: "For complex products requiring a tailored solution and engineering partner.",
  },
];

export function ProjectTypes() {
  const reduce = useReducedMotion();

  return (
    <Section id="pricing" className="border-t border-white/[0.06]">
      <div className="grid grid-cols-12 gap-y-12 md:gap-x-14">
        <div className="col-span-12 md:col-span-5">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-4 bg-mist-500" /> Project types
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-display-md text-bone">
              Engagements shaped around what you're building.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-mist-400 leading-relaxed">
              Every project is scoped individually. Send us a brief and we'll
              come back with a clear plan and timeline.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <a href="#contact" className="btn-primary mt-8 focus-ring">
              Tell us what you're building
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="col-span-12 md:col-span-7">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item, i) => (
              <motion.li
                key={item.label}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="card card-hover p-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-medium text-bone">
                    {item.label}
                  </h3>
                  <span className="font-mono text-[11px] text-mist-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-3 text-[13.5px] text-mist-400 leading-relaxed">
                  {item.text}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
