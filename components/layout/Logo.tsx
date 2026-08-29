import { Hexagon } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#"
      className={cn(
        "group inline-flex items-center gap-2 sm:gap-3 focus-ring rounded-md",
        className
      )}
      aria-label={`${site.name} home`}
    >
      <span className="relative inline-flex items-center justify-center">
        <Hexagon
          className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 fill-blue-500/20"
          strokeWidth={2}
        />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 bg-blue-500" />
      </span>
      <span className="text-lg sm:text-xl font-bold tracking-[0.2em] text-white">
        {site.name}
      </span>
    </a>
  );
}
