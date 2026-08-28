"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { HeroVisual } from "./HeroVisual";

const words = [
  "digital products",
  "that move",
  "your business",
  "forward.",
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative pt-36 md:pt-44 lg:pt-52 pb-20 md:pb-28 lg:pb-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]" />
      <div className="pointer-events-none absolute top-0 left-1/2 h-[380px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.06),transparent_70%)]" />

      <div className="container-x relative">
        <div className="flex flex-col items-start">
          {/* Status pill */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-mist-400"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span>Taking on new projects — 2026</span>
          </motion.div>

          {/* Headline */}
          <h1 className="mt-8 max-w-5xl text-display-xl font-display text-bone">
            <span className="block">We build</span>
            <span className="block">
              {words.map((w, i) => (
                <motion.span
                  key={i}
                  initial={reduce ? false : { y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.85,
                    delay: 0.2 + i * 0.09,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block mr-[0.24em] last:mr-0"
                >
                  {w === "digital products" ? (
                    <span className="italic text-mist-400">{w}</span>
                  ) : (
                    w
                  )}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Sub */}
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-lg md:text-xl text-mist-400 leading-relaxed"
          >
            Custom websites, web applications, and mobile apps engineered for
            performance, scalability, and growth.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
          >
            <a href="#contact" className="btn-primary focus-ring">
              Start a Project
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#work" className="btn-secondary focus-ring">
              View Our Work
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Tech line */}
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.1 }}
            className="mt-14 md:mt-16 w-full"
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] text-mist-500 font-mono">
              <span className="text-mist-400">What we do</span>
              <span className="h-px w-6 bg-white/10" />
              {[
                "Web Development",
                "Mobile Apps",
                "Backend",
                "Product Development",
              ].map((t, i, arr) => (
                <span key={t} className="flex items-center gap-3">
                  <span className="text-bone/80">{t}</span>
                  {i < arr.length - 1 && (
                    <span className="text-mist-600">·</span>
                  )}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Visual */}
        <div className="mt-16 md:mt-20 lg:mt-24">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
