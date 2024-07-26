/*
  Websites shared header component.
*/
"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { TimeDisplay } from "../time-display";
import { buttonVariants } from "../ui/button";
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
      <nav className="flex flex-row items-center justify-between px-4 py-1 gap-x-28">
        <Link href="/" className="font-medium">
          Next Starter Template
        </Link>

        <div className="flex flex-row items-center justify-between flex-1 md:ml-2">
          <ul aria-label="primary-navigation" className="flex items-center">
            <li>
              <Link
                href="/"
                className={cn(buttonVariants({ variant: "ghost-text" }))}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/sign-in"
                className={cn(buttonVariants({ variant: "ghost-text" }))}
              >
                Sign in
                <ArrowUpRight className="flex-shrink-0 ml-2 size-4 text-muted-foreground group-hover/button:text-foreground" />
              </Link>
            </li>
          </ul>

          <ul
            aria-label="secondary-navigation"
            className="flex items-center gap-x-4"
          >
            <li>
              <TimeDisplay />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
