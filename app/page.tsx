import { ArrowUpRight, Github } from "lucide-react";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-dvh">
      <Header />
      <Main />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header>
      <nav className="p-1">
        <ul className="flex items-center gap-x-2">
          <li>
            <Link href="/" className={cn(buttonVariants({ variant: "ghost" }))}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/sign-in"
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              Sign in
              <ArrowUpRight className="flex-shrink-0 ml-2 size-4 text-muted-foreground" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Main() {
  return (
    <section>
      <div className="mb-6 space-y-4">
        <h1 className="font-bold">Next Starter Template</h1>
        <a
          href="http://github.com/fromenoabasi/next-starter-template"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({}))}
        >
          <Github className="flex-shrink-0 mr-2 size-4"/>Clone the repository
        </a>
      </div>

      <div>
        <h2 className="font-semibold">User Stats</h2>

        <ul>
          <li className="text-muted-foreground">Currently not available</li>
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <nav className="flex flex-row items-center px-4 gap-x-8">
        <p className="font-semibold">Next Starter Template</p>
        <p>Made with ⚡ + ☕</p>
      </nav>
    </footer>
  );
}
