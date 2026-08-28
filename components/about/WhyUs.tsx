"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Target, Cpu, Gauge, Handshake } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/layout/Reveal";

const points = [
  {
    icon: Target,
    title: "Business-focused",
    text: "We build around your actual business goals, not just technical requirements.",
  },
  {
    icon: Cpu,
    title: "Modern engineering",
    text: "Modern technologies and engineering practices that create maintainable software.",
  },
  {
    icon: Gauge,
    title: "Performance focused",
    text: "Fast, responsive and optimized experiences across every device.",
  },
  {
    icon: Handshake,
    title: "Long-term partnership",
    text: "We stay to maintain, improve and scale your product long after launch.",
  },
];

export function WhyUs() {
  const reduce = useReducedMotion();

  return (
    <Section className="border-t border-white/[0.06]">
      <div className="grid grid-cols-12 gap-y-14 md:gap-x-14">
        <div className="col-span-12 md:col-span-5 md:sticky md:top-32 self-start">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-4 bg-mist-500" /> Why us
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-display-md text-bone">
              Engineering that goes beyond just writing code.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-mist-400 leading-relaxed">
              We treat every project like a product — with real users, real
              constraints, and a business behind it that matters.
            </p>
          </Reveal>
        </div>

        <ul className="col-span-12 md:col-span-7 divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.li
                key={p.title}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group py-8 md:py-10 grid grid-cols-12 items-start gap-6 transition-colors hover:bg-white/[0.015]"
              >
                <div className="col-span-2 md:col-span-1 pt-1">
                  <span className="text-[11px] font-mono text-mist-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="col-span-2 md:col-span-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] group-hover:border-accent/40 group-hover:bg-accent/5 transition-colors">
                    <Icon className="h-4 w-4 text-bone group-hover:text-accent transition-colors" strokeWidth={1.6} />
                  </div>
                </div>
                <div className="col-span-8 md:col-span-9">
                  <h3 className="text-lg md:text-xl text-bone">{p.title}</h3>
                  <p className="mt-2 text-mist-400 leading-relaxed max-w-lg">
                    {p.text}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
