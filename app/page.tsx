import { Hero } from "@/components/sections/hero";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";
import { Vitals } from "@/components/vitals";

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
      <section className="hidden md:block md:mt-8">
        <Vitals />
      </section>
    </section>
  );
}
