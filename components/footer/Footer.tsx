import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  const socials: { label: string; href: string }[] = [
    site.social.linkedin && { label: "LinkedIn", href: site.social.linkedin },
    site.social.github && { label: "GitHub", href: site.social.github },
    site.social.instagram && { label: "Instagram", href: site.social.instagram },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <footer className="relative border-t border-white/[0.06] bg-ink-950 mt-24 md:mt-32">
      <div className="container-x py-16 md:py-20">
        {/* Big CTA line */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 pb-16 border-b border-white/[0.06]">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-[1.05] max-w-2xl">
            Build products that <span className="text-[#0a6cff]">move</span> your business forward.
          </h2>
          <a href="#contact" className="btn-primary self-start focus-ring">
            Start a Project
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Meta */}
        <div className="mt-14 grid grid-cols-12 gap-y-10 md:gap-x-10">
          <div className="col-span-12 md:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-[14px] text-mist-400 leading-relaxed">
              {site.description}
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="col-span-6 md:col-span-3"
          >
            <div className="text-[11px] uppercase tracking-[0.22em] text-mist-500">
              Navigation
            </div>
            <ul className="mt-4 space-y-3 text-[14px]">
              {site.nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-bone/85 hover:text-bone transition-colors focus-ring rounded"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-6 md:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.22em] text-mist-500">
              Contact
            </div>
            <ul className="mt-4 space-y-3 text-[14px]">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-bone/85 hover:text-bone transition-colors focus-ring rounded"
                >
                  {site.email}
                </a>
              </li>
              <li className="text-mist-400">{site.location}</li>
            </ul>

            {socials.length > 0 && (
              <>
                <div className="mt-8 text-[11px] uppercase tracking-[0.22em] text-mist-500">
                  Elsewhere
                </div>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[14px]">
                  {socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-bone/85 hover:text-bone transition-colors"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-14 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px] text-mist-500">
          <p>© {year} {site.name}. All rights reserved.</p>
          <ul className="flex items-center gap-6">
            <li>
              <a href="#" className="hover:text-bone transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-bone transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div
        aria-hidden
        className="pointer-events-none select-none overflow-hidden"
      >
        <div className="container-x">
          <div className="mt-2 md:mt-4 pb-6 md:pb-10 text-center font-black uppercase tracking-[0.02em] text-[22vw] md:text-[16vw] leading-[0.85] text-white/[0.04]">
            {site.name}
          </div>
        </div>
      </div>
    </footer>
  );
}
