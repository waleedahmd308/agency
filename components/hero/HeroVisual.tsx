"use client";

import { motion, useReducedMotion } from "framer-motion";

export function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative w-full">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(198,242,78,0.10),transparent_70%)] blur-2xl" />

      <div className="relative mx-auto grid max-w-5xl grid-cols-12 gap-3 md:gap-4">
        {/* Terminal card */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 md:col-span-7 rounded-2xl border border-white/[0.08] bg-ink-800/60 backdrop-blur-sm overflow-hidden"
        >
          <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="ml-3 text-[11px] text-mist-500 font-mono">
              ~/product · main
            </span>
          </div>
          <div className="px-5 py-5 font-mono text-[12.5px] leading-relaxed">
            <div className="text-mist-500">$ pnpm build</div>
            <div className="mt-2 text-bone/90">
              <span className="text-accent">▲</span> Next.js{" "}
              <span className="text-mist-500">15.1.6</span>
            </div>
            <div className="mt-1 text-mist-500">
              - Compiling routes...
            </div>
            <div className="mt-1 text-bone/90">
              ✓ Compiled successfully{" "}
              <span className="text-mist-500">in 4.2s</span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-x-4 text-[11.5px] text-mist-500">
              <span>Route</span>
              <span>Size</span>
              <span>First Load</span>
            </div>
            <div className="mt-1 grid grid-cols-3 gap-x-4 text-[11.5px]">
              <span className="text-bone">○ /</span>
              <span>2.1 kB</span>
              <span className="text-accent">98 kB</span>
            </div>
            <div className="mt-0.5 grid grid-cols-3 gap-x-4 text-[11.5px]">
              <span className="text-bone">○ /work</span>
              <span>1.8 kB</span>
              <span className="text-accent">96 kB</span>
            </div>
            <div className="mt-0.5 grid grid-cols-3 gap-x-4 text-[11.5px]">
              <span className="text-bone">○ /services</span>
              <span>1.4 kB</span>
              <span className="text-accent">94 kB</span>
            </div>
          </div>
        </motion.div>

        {/* Metric card */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-6 md:col-span-5 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-[0.2em] text-mist-500">
              Lighthouse
            </span>
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_rgba(198,242,78,0.7)]" />
          </div>
          <div className="mt-4">
            <div className="font-display text-5xl md:text-6xl text-bone leading-none">
              98
              <span className="text-accent">.</span>
            </div>
            <p className="mt-2 text-[12px] text-mist-500">
              Performance median — production builds
            </p>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {["A11y", "SEO", "Best"].map((l) => (
              <div
                key={l}
                className="rounded-md border border-white/[0.06] px-2 py-1.5 text-center"
              >
                <div className="text-[10px] text-mist-500">{l}</div>
                <div className="text-[13px] text-bone font-medium">100</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Deploy card */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-6 md:col-span-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-[0.2em] text-mist-500">
              Deploy
            </span>
            <span className="text-[11px] text-mist-500 font-mono">v1.4.2</span>
          </div>
          <div className="mt-3 space-y-2">
            {[
              { l: "Build", v: "passed" },
              { l: "Tests", v: "42 / 42" },
              { l: "Preview", v: "live" },
            ].map((r) => (
              <div key={r.l} className="flex items-center justify-between text-[12.5px]">
                <span className="text-mist-500">{r.l}</span>
                <span className="text-bone">{r.v}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* API card */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 md:col-span-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-[0.2em] text-mist-500">
              GET /api/products
            </span>
            <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent">
              200 OK
            </span>
          </div>
          <pre className="mt-3 overflow-hidden font-mono text-[11.5px] leading-relaxed text-mist-400">
            <span className="text-mist-500">{"{"}</span>
            {"\n"}  <span className="text-bone">"total"</span>: 1284,
            {"\n"}  <span className="text-bone">"page"</span>: 1,
            {"\n"}  <span className="text-bone">"items"</span>: [
            {"\n"}    {"{ "}<span className="text-accent">"slug"</span>: "acoustic-panel-r7", {"…"} {"}"},
            {"\n"}    {"{ "}<span className="text-accent">"slug"</span>: "insulation-flex-90", {"…"} {"}"}
            {"\n"}  ]
            {"\n"}
            <span className="text-mist-500">{"}"}</span>
          </pre>
        </motion.div>
      </div>
    </div>
  );
}
