"use client";

import { Search, SlidersHorizontal, Layers, ChevronRight } from "lucide-react";

export function CaseStudyVisual() {
  const products = [
    { name: "Acoustic Panel R7", type: "Insulation", u: "0.24 W/m²K" },
    { name: "Insulation Flex 90", type: "Thermal", u: "0.35 W/m²K" },
    { name: "Cladding Line V2", type: "Facade", u: "0.28 W/m²K" },
    { name: "Waterproof Membrane 4", type: "Roofing", u: "—" },
    { name: "Structural Beam S-40", type: "Steel", u: "—" },
  ];

  return (
    <div className="relative w-full aspect-[16/12] md:aspect-[16/10] rounded-2xl border border-white/[0.08] bg-gradient-to-b from-ink-800/60 to-ink-900/60 overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <div className="ml-3 flex-1 max-w-md rounded-md border border-white/[0.06] bg-ink-900 px-3 py-1 text-[11px] text-mist-500 font-mono">
          materials.example.com / products
        </div>
      </div>

      {/* App body */}
      <div className="grid grid-cols-12 gap-3 p-3 md:p-4 h-[calc(100%-40px)]">
        {/* Sidebar filters */}
        <aside className="col-span-4 md:col-span-3 rounded-lg border border-white/[0.06] bg-ink-900/60 p-3">
          <div className="flex items-center gap-2 text-[11px] text-mist-500">
            <SlidersHorizontal className="h-3 w-3" />
            <span className="uppercase tracking-[0.2em]">Filters</span>
          </div>
          <div className="mt-3 space-y-3">
            <div>
              <div className="text-[10.5px] text-mist-500">Category</div>
              <div className="mt-1 space-y-1 text-[11.5px] text-bone/80">
                {["Insulation", "Facade", "Roofing", "Steel"].map((c, idx) => (
                  <div key={c} className="flex items-center gap-2">
                    <span
                      className={`h-2.5 w-2.5 rounded-[3px] border ${
                        idx === 0
                          ? "bg-accent border-accent"
                          : "border-white/15"
                      }`}
                    />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[10.5px] text-mist-500">U-value</div>
              <div className="mt-2 h-1 w-full rounded-full bg-white/[0.06]">
                <div className="h-1 w-2/3 rounded-full bg-accent" />
              </div>
            </div>
          </div>
        </aside>

        {/* Main list */}
        <div className="col-span-8 md:col-span-6 rounded-lg border border-white/[0.06] bg-ink-900/60 p-3">
          <div className="flex items-center gap-2">
            <Search className="h-3.5 w-3.5 text-mist-500" />
            <div className="flex-1 rounded-md border border-white/[0.06] bg-ink-900 px-2.5 py-1.5 text-[11.5px] text-mist-400">
              Search 1,284 products
            </div>
          </div>
          <ul className="mt-3 space-y-2">
            {products.map((p, i) => (
              <li
                key={p.name}
                className={`flex items-center justify-between rounded-md border px-3 py-2.5 ${
                  i === 0
                    ? "border-accent/30 bg-accent/[0.03]"
                    : "border-white/[0.06] bg-ink-900/40"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.02]">
                    <Layers className="h-3.5 w-3.5 text-mist-400" />
                  </span>
                  <div>
                    <div className="text-[12.5px] text-bone">{p.name}</div>
                    <div className="text-[10.5px] text-mist-500">{p.type}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono text-mist-500">
                    {p.u}
                  </span>
                  <ChevronRight className="h-3.5 w-3.5 text-mist-500" />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Detail panel (desktop only) */}
        <aside className="hidden md:flex col-span-3 rounded-lg border border-white/[0.06] bg-ink-900/60 p-3 flex-col">
          <div className="text-[11px] uppercase tracking-[0.2em] text-mist-500">
            Detail
          </div>
          <div className="mt-3 aspect-square rounded-md border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-transparent" />
          <div className="mt-3 text-[12.5px] text-bone">Acoustic Panel R7</div>
          <div className="mt-1 text-[10.5px] text-mist-500">
            Class A · 50mm · Mineral
          </div>
          <div className="mt-3 space-y-1.5 text-[11px]">
            {[
              ["λ", "0.024"],
              ["Density", "70 kg/m³"],
              ["Class", "A1"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between">
                <span className="text-mist-500">{k}</span>
                <span className="text-bone/90">{v}</span>
              </div>
            ))}
          </div>
          <div className="mt-auto pt-3">
            <div className="rounded-md bg-bone px-3 py-1.5 text-center text-[11.5px] font-medium text-ink">
              Request spec
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
