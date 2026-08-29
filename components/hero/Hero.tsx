"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const BG_VIDEO =
  "https://strvid.nyc3.digitaloceanspaces.com/motionitems/source/1781983008187-motion_51.mp4";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#020617]">
      {/* Video background + overlays */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover opacity-80"
          src={BG_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000414] via-transparent to-[#000414]/80" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 text-center mt-[-40px]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
        >
          {/* Status pill */}
          <div className="mb-8 sm:mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm px-3 py-1.5 text-[11px] font-bold tracking-widest uppercase text-gray-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#0a6cff] opacity-70 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#0a6cff]" />
            </span>
            <span>Taking on new projects · 2026</span>
          </div>

          {/* Headline with negative mask */}
          <div className="relative inline-flex items-center justify-center mb-6 sm:mb-8 w-full px-2 sm:px-8">
            <h1 className="uppercase text-5xl sm:text-6xl md:text-8xl font-black leading-[1.05] tracking-tight text-white">
              Build
              <br className="block sm:hidden" />
              <span className="sm:ml-4">Forward</span>
            </h1>

            {/* White mask circle — mix-blend-difference inverts text + video underneath */}
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 rounded-full bg-white w-20 h-20 sm:w-24 sm:h-24 md:w-[140px] md:h-[140px]"
              style={{ mixBlendMode: "difference", x: "-50%", y: "-50%" }}
              animate={
                reduce ? undefined : { left: ["20%", "80%", "20%"] }
              }
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Subtitle */}
          <p className="max-w-[650px] mx-auto text-sm sm:text-base md:text-xl text-gray-300 leading-relaxed">
            Custom websites, web applications, and mobile apps engineered for
            performance, scalability, and growth.
          </p>

          {/* CTAs */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto px-2 sm:px-0"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0a6cff] hover:bg-blue-600 text-white text-sm font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(10,108,255,0.4)] hover:shadow-[0_0_30px_rgba(10,108,255,0.6)] transition-all focus-ring"
            >
              Start a Project
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-blue-600 bg-[#0a1128]/50 hover:bg-blue-600/20 text-white text-sm font-bold tracking-widest uppercase transition-all focus-ring"
            >
              View Our Work
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Tech line */}
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.65 }}
            className="mt-14 md:mt-20 w-full"
          >
            <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-[11px] font-mono uppercase tracking-widest text-mist-400">
              {[
                "Web Development",
                "Mobile Apps",
                "Backend",
                "Product Development",
              ].map((t, i, arr) => (
                <span key={t} className="flex items-center gap-3">
                  <span className="text-white/80">{t}</span>
                  {i < arr.length - 1 && (
                    <span className="text-mist-600">·</span>
                  )}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400"
          aria-hidden="true"
        >
          <span>Scroll</span>
          <span className="block h-8 w-px bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
