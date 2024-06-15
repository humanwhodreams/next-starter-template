import { BookText, Users2 } from "lucide-react";

import { Brand } from "./brand";
import Link from "next/link";
import { ThemeDropDown } from "./theme/theme-dropdown";
import { buttonVariants } from "./ui/button";

const navitems = [
  {
    title: "Docs",
    href: "/docs",
    icon: BookText,
  },
  {
    title: "Community",
    href: "/community",
    icon: Users2,
  },
];

export function NavigationBar() {
  return (
    <header className="z-50 w-full border-b bg-background">
      <nav className="relative flex items-center justify-between px-4 py-2 md:px-0 md:max-w-6xl md:mx-auto">
        <Brand />

        <ul className="flex items-center gap-x-2">
          {navitems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                  className: "text-base",
                })}
              >
                <item.icon className="w-4 h-4 mr-2 text-muted-foreground" />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <ul>
          <li>
            <ThemeDropDown />
          </li>
        </ul>
      </nav>
    </header>
  );
}
