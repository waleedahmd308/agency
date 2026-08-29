"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/layout/Reveal";

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
            <h2 className="mt-5 font-display text-display-md text-white uppercase">
              Real products, thoughtfully engineered.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            A closer look at how each project came together — the problem, the
            approach, the outcome.
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
              delay: i * 0.03,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-10">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-mist-400">
                  <span className="font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-6 bg-mist-500/40" />
                  <span>{p.category}</span>
                  <span className="h-px w-6 bg-mist-500/40" />
                  <span>{p.year}</span>
                  {p.client && (
                    <>
                      <span className="h-px w-6 bg-mist-500/40" />
                      <span className="text-[#0a6cff]">{p.client}</span>
                    </>
                  )}
                </div>
                <h3 className="mt-4 text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-[1.05]">
                  {p.title}
                </h3>
              </div>
              {p.href && (
                <a
                  href={p.href}
                  className="btn-secondary self-start md:self-end focus-ring"
                >
                  View Case Study
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>

            {/* Visual */}
            <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.02] p-2 sm:p-3 md:p-4 overflow-hidden transition-transform duration-700 ease-premium group-hover:-translate-y-1">
              <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden bg-[#050B1F]">
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 1200px, 100vw"
                  priority={i < 2}
                  className="object-cover"
                />
                {/* Subtle blue accent glow inside the frame */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-[#0a6cff]/[0.06]" />
              </div>
            </div>

            {/* Details */}
            <div className="mt-10 md:mt-14 grid grid-cols-12 gap-6 md:gap-10">
              <div className="col-span-12 md:col-span-6">
                <p className="max-w-xl text-lg text-white/90 leading-relaxed">
                  {p.summary}
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {p.technology.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-[11.5px] font-medium text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <dl className="col-span-12 md:col-span-6 grid grid-cols-1 gap-y-6 text-[13.5px]">
                {[
                  { k: "Challenge", v: p.challenge },
                  { k: "Solution", v: p.solution },
                  { k: "Outcome", v: p.outcome },
                ].map((row) => (
                  <div key={row.k}>
                    <dt className="text-[11px] font-bold uppercase tracking-widest text-[#0a6cff]">
                      {row.k}
                    </dt>
                    <dd className="mt-2 text-white/80 leading-relaxed max-w-xl">
                      {row.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.article>
        ))}

        {/* Next slot */}
        <Reveal>
          <div className="rounded-2xl border border-dashed border-white/10 p-8 md:p-10 text-center">
            <p className="text-[13px] font-bold uppercase tracking-widest text-mist-400">
              More case studies
            </p>
            <p className="mt-3 text-2xl md:text-3xl font-black uppercase tracking-tight text-white/90">
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
