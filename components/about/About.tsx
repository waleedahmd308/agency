"use client";

import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/layout/Reveal";
import { site } from "@/data/site";

export function About() {
  return (
    <Section id="about" className="border-t border-white/[0.06]">
      <div className="grid grid-cols-12 gap-y-12 md:gap-x-14">
        <div className="col-span-12 md:col-span-5">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-4 bg-mist-500" /> About
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-display-md text-bone">
              Technology should solve problems, not create them.
            </h2>
          </Reveal>
        </div>

        <div className="col-span-12 md:col-span-7 md:pt-10">
          <div className="space-y-6 max-w-xl text-lg text-mist-400 leading-relaxed">
            <Reveal delay={0.05}>
              <p>
                {site.name} combines software engineering, product thinking and
                modern technology to build reliable digital products for
                businesses.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                We work closely with clients from the initial idea through
                development and launch — with a focus on quality, usability
                and long-term maintainability.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                No hand-offs. No black boxes. Just an engineering partner that
                understands what you are building and why it matters.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-white/[0.06] pt-8">
              {[
                { k: "Based", v: site.location },
                { k: "Availability", v: "New projects · 2026" },
                { k: "Focus", v: "Web · Mobile · Backend" },
              ].map((row) => (
                <div key={row.k}>
                  <dt className="text-[11px] uppercase tracking-[0.22em] text-mist-500">
                    {row.k}
                  </dt>
                  <dd className="mt-2 text-[14px] text-bone/90">{row.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
