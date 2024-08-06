/*
  Websites shared header component.
*/
"use client";

import Link from "next/link";
import { TimeDisplay } from "../time-display";
import { cn } from "@/lib/cn";
import { useWindowScroll } from "@/hooks/use-window-scroll";

interface SiteHeaderProps {
  className?: string;
}

export function SiteHeader({ className }: SiteHeaderProps) {
  const [scroll] = useWindowScroll();

  const isScrolling: boolean = scroll.y > 8 ? true : false;

  return (
    <header
      className={cn(
        "w-full sticky top-0 inset-x-0 transition-all",
        isScrolling
          ? "bg-background/55 backdrop-blur-md border-b border-border"
          : "bg-transparent",
        className
      )}
    >
      <nav className="flex flex-row items-center justify-between px-4 py-2 md:gap-x-28">
        <Link href="/" className="font-medium">
          Next Starter Template
        </Link>

        <ul aria-label="primary-navigation" className="flex items-center">
          <li>
            <TimeDisplay />
          </li>
        </ul>
      </nav>
    </header>
  );
}
