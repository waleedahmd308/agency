"use client";

import { motion, useReducedMotion } from "framer-motion";
import { technologies } from "@/data/technologies";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/layout/Reveal";

export function Technologies() {
  const reduce = useReducedMotion();

  return (
    <Section id="tech" className="border-t border-white/[0.06]">
      <div className="max-w-3xl">
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-4 bg-mist-500" /> Stack
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 font-display text-display-md text-bone">
            Built with modern technology.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-lg text-mist-400 leading-relaxed">
            A carefully chosen stack — proven in production, maintainable over
            years, and boring in the best way. No fashionable rewrites.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {technologies.map((cat, i) => (
          <motion.div
            key={cat.label}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="card card-hover p-6"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.22em] text-mist-500">
                {cat.label}
              </span>
              <span className="text-[11px] text-mist-500 font-mono">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-[12.5px] text-bone"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
