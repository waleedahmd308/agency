"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { processSteps } from "@/data/process";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/layout/Reveal";

export function Process() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]);

  return (
    <Section id="process" className="border-t border-white/[0.06]">
      <div className="max-w-2xl">
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-4 bg-mist-500" /> Process
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 font-display text-display-md text-bone">
            From idea to launch.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-lg text-mist-400 leading-relaxed">
            A clear path with room for iteration. Every step has a purpose, a
            deliverable, and a moment for review.
          </p>
        </Reveal>
      </div>

      <div ref={ref} className="relative mt-16 md:mt-20">
        {/* Timeline rail */}
        <div className="absolute left-6 md:left-10 top-0 bottom-0 w-px bg-white/[0.06]" />
        <motion.div
          style={reduce ? undefined : { height: lineHeight }}
          className="absolute left-6 md:left-10 top-0 w-px bg-gradient-to-b from-accent via-accent/60 to-transparent"
        />

        <ol className="space-y-14 md:space-y-20">
          {processSteps.map((step, i) => (
            <motion.li
              key={step.index}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative pl-16 md:pl-24"
            >
              {/* Node */}
              <span className="absolute left-6 md:left-10 top-1.5 -translate-x-1/2 flex h-3 w-3 items-center justify-center">
                <span className="absolute h-3 w-3 rounded-full border border-accent/40" />
                <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(198,242,78,0.6)]" />
              </span>

              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-2">
                  <span className="font-mono text-[12px] text-mist-500">
                    {step.index}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-10">
                  <h3 className="font-display text-2xl md:text-3xl text-bone">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-mist-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
