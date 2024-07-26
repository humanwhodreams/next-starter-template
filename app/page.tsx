import { Hero } from "@/components/sections/hero";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-dvh">
      <SiteHeader />
      <Main />
      <SiteFooter />
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
