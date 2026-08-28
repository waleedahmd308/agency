"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { faq } from "@/data/faq";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/layout/Reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <Section id="faq" className="border-t border-white/[0.06]">
      <div className="grid grid-cols-12 gap-y-12 md:gap-x-14">
        <div className="col-span-12 md:col-span-4">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-4 bg-mist-500" /> FAQ
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-display-md text-bone">
              Frequently asked questions.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-sm text-mist-400 leading-relaxed">
              The short answers. For anything else, we're one message away.
            </p>
          </Reveal>
        </div>

        <div className="col-span-12 md:col-span-8">
          <ul className="border-t border-white/[0.06]">
            {faq.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q} className="border-b border-white/[0.06]">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-center justify-between gap-6 py-6 md:py-7 text-left focus-ring rounded-md"
                  >
                    <span className="text-lg md:text-xl text-bone">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 transition-transform duration-300 ${
                        isOpen ? "rotate-45 bg-accent/10 border-accent/40" : ""
                      }`}
                    >
                      <Plus
                        className={`h-4 w-4 transition-colors ${
                          isOpen ? "text-accent" : "text-mist-400"
                        }`}
                      />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        role="region"
                        aria-labelledby={`faq-trigger-${i}`}
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="pb-7 max-w-2xl text-mist-400 leading-relaxed">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
