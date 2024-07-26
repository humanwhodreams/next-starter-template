import { Github } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { SiteHeader } from "@/components/shared/site-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-dvh">
      <SiteHeader />
      <Main />
      <Footer />
    </main>
  );
}

function Main() {
  return (
    <section className="flex flex-col items-start flex-1 w-full max-w-4xl mx-auto my-24">
      <Hero />
      <section className="px-4 mt-8">User stats</section>
      <section className="px-4">Features</section>
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
