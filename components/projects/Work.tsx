"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/layout/Reveal";
import { CaseStudyVisual } from "./CaseStudyVisual";

export function Work() {
  const reduce = useReducedMotion();

  return (
    <Section id="work" className="border-t border-white/[0.06]">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-4 bg-mist-500" /> Selected work
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-display-md text-bone">
              Real products, thoughtfully engineered.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <p className="text-mist-400 max-w-sm leading-relaxed">
            A closer look at how we approach product work — from the technical
            problem to the finished experience.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 md:mt-20 space-y-24 md:space-y-32">
        {projects.map((p, i) => (
          <motion.article
            key={p.id}
            initial={reduce ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: 0.9,
              delay: i * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-10">
              <div>
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-mist-500">
                  <span className="font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-6 bg-mist-500/40" />
                  <span>{p.category}</span>
                  <span className="h-px w-6 bg-mist-500/40" />
                  <span>{p.year}</span>
                </div>
                <h3 className="mt-4 font-display text-4xl md:text-5xl text-bone">
                  {p.title}
                </h3>
              </div>
              <a
                href={p.href}
                className="btn-ghost self-start md:self-end focus-ring rounded-full px-4 py-2 border border-white/10 hover:border-white/30 hover:bg-white/5 transition"
              >
                View Case Study
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Visual */}
            <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.02] p-3 md:p-4 overflow-hidden transition-transform duration-700 ease-premium group-hover:-translate-y-1">
              <CaseStudyVisual />
            </div>

            {/* Details */}
            <div className="mt-10 md:mt-14 grid grid-cols-12 gap-6 md:gap-10">
              <div className="col-span-12 md:col-span-6">
                <p className="max-w-xl text-lg text-bone/90 leading-relaxed">
                  {p.summary}
                </p>
              </div>
              <dl className="col-span-12 md:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 text-[13.5px]">
                {[
                  { k: "Challenge", v: p.challenge },
                  { k: "Solution", v: p.solution },
                  { k: "Outcome", v: p.outcome },
                  {
                    k: "Technology",
                    v: p.technology.join(" · "),
                  },
                ].map((row) => (
                  <div key={row.k}>
                    <dt className="text-[11px] uppercase tracking-[0.22em] text-mist-500">
                      {row.k}
                    </dt>
                    <dd className="mt-2 text-bone/85 leading-relaxed">{row.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.article>
        ))}

        {/* Next slot */}
        <Reveal>
          <div className="rounded-2xl border border-dashed border-white/10 p-8 md:p-10 text-center">
            <p className="text-[13px] uppercase tracking-[0.22em] text-mist-500">
              More case studies
            </p>
            <p className="mt-3 font-display text-2xl md:text-3xl text-bone/90">
              Your product could be here next.
            </p>
            <a
              href="#contact"
              className="btn-secondary mt-6 inline-flex focus-ring"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
