"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { Logo } from "@/components/layout/Logo";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("#");
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Simple scrollspy on the section IDs
    const ids = site.nav.map((n) => n.href.replace("#", ""));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveHash(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
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
            ? "mt-3 md:mt-4 mx-3 md:mx-6 rounded-full border border-white/[0.08] bg-[#020617]/80 backdrop-blur-xl px-4 md:px-5 py-2.5 max-w-[1200px]"
            : "mt-0 mx-0 border border-transparent px-4 sm:px-6 py-4 sm:py-6 max-w-container"
        )}
      >
        <Logo />

        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-8"
        >
          {site.nav.map((item) => {
            const isActive = activeHash === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-xs font-bold tracking-widest uppercase transition-colors focus-ring rounded",
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                )}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 right-0 -bottom-2 h-[2px] bg-[#0a6cff]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-1.5 px-6 py-2.5 border border-blue-600 rounded-full bg-[#0a1128]/50 hover:bg-blue-600/20 transition-colors focus-ring"
          >
            <span className="text-xs font-bold tracking-widest text-white">
              GET STARTED
            </span>
            <ChevronRight className="w-4 h-4 text-blue-500" />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/5 transition-colors focus-ring"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.aside
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="pointer-events-auto lg:hidden fixed inset-y-0 right-0 z-[60] w-full sm:w-80 bg-[#020617] border-l border-white/10 flex flex-col"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex justify-between items-center px-4 sm:px-6 py-4 sm:py-6 border-b border-white/10">
              <span className="text-lg font-bold tracking-[0.2em] text-white">
                Menu
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center w-10 h-10 rounded-md text-white hover:bg-white/5 transition-colors focus-ring"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <ul className="flex-1 flex flex-col gap-2 px-6 py-8">
              {site.nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08 + i * 0.05,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base sm:text-lg font-bold tracking-widest uppercase border-b border-white/5 text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="px-6 pb-8">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="w-full inline-flex items-center justify-center gap-1.5 px-6 py-3 border border-blue-600 rounded-full bg-[#0a1128]/50 hover:bg-blue-600/20 transition-colors"
              >
                <span className="text-xs font-bold tracking-widest text-white">
                  GET STARTED
                </span>
                <ChevronRight className="w-4 h-4 text-blue-500" />
              </a>
              <p className="mt-6 text-center text-[11px] text-mist-500">
                {site.location} · {site.email}
              </p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
}
