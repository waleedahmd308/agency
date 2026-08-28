"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { Logo } from "@/components/layout/Logo";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <motion.div
        initial={reduce ? false : { y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "pointer-events-auto mx-auto flex items-center justify-between transition-all duration-500 ease-premium",
          scrolled
            ? "mt-3 md:mt-4 mx-3 md:mx-6 rounded-full border border-white/[0.08] bg-ink-900/70 backdrop-blur-xl px-4 md:px-5 py-2.5 max-w-[1200px]"
            : "mt-0 mx-0 border border-transparent px-6 md:px-10 lg:px-14 py-5 max-w-container"
        )}
      >
        <Logo />

        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-1 text-[13px]"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-3 py-2 text-mist-400 hover:text-bone transition-colors focus-ring rounded-md"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-bone text-ink px-4 py-2 text-[13px] font-medium hover:bg-white transition-all focus-ring"
          >
            Start a Project
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-bone focus-ring"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="pointer-events-auto md:hidden fixed inset-0 top-0 z-40 bg-ink-950/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex h-full flex-col px-6 pt-24 pb-10">
              <ul className="flex flex-col gap-1">
                {site.nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.05 + i * 0.05,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between border-b border-white/[0.06] py-5 text-2xl font-display text-bone"
                    >
                      {item.label}
                      <ArrowUpRight className="h-5 w-5 text-mist-400" />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto space-y-4">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full"
                >
                  Start a Project
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <p className="text-xs text-mist-500 text-center">
                  {site.location} · {site.email}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
