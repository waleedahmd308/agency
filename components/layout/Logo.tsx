import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#"
      className={cn(
        "group inline-flex items-center gap-2.5 focus-ring rounded-md",
        className
      )}
      aria-label={`${site.name} home`}
    >
      <span className="relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-md border border-white/15 bg-white/5">
        <span className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        <span className="relative h-2 w-2 rounded-[2px] bg-accent shadow-[0_0_12px_rgba(198,242,78,0.7)]" />
      </span>
      <span className="text-[15px] font-medium tracking-tight text-bone">
        {site.name}
      </span>
    </a>
  );
}
