"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/layout/Reveal";

export function Services() {
  const reduce = useReducedMotion();

  return (
    <Section id="services" className="border-t border-white/[0.06]">
      <div className="grid grid-cols-12 gap-y-12 md:gap-x-10">
        <div className="col-span-12 md:col-span-5">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-4 bg-mist-500" /> Services
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-display-md text-bone max-w-md">
              Everything you need to build your next digital product.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-sm text-mist-400 leading-relaxed">
              One team handling design, engineering and infrastructure — from
              the first sketch to a live product in production.
            </p>
          </Reveal>
        </div>

        <div className="col-span-12 md:col-span-7">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.li
                  key={s.id}
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group card card-hover p-6 h-full flex flex-col"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] group-hover:border-accent/40 group-hover:bg-accent/5 transition-colors">
                      <Icon
                        className="h-4 w-4 text-bone group-hover:text-accent transition-colors"
                        strokeWidth={1.6}
                      />
                    </div>
                    <span className="text-[11px] text-mist-500 font-mono">
                      {s.index}
                    </span>
                  </div>
                  <h3 className="mt-6 text-[17px] font-medium text-bone">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[14px] text-mist-400 leading-relaxed">
                    {s.summary}
                  </p>
                  <ul className="mt-5 space-y-1.5 text-[13px] text-mist-400">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-mist-600" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center gap-1.5 text-[13px] text-mist-400 group-hover:text-bone transition-colors">
                    <span>Explore</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
