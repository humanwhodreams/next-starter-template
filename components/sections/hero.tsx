import { CTA } from "../cta";

export function Hero() {
  return (
    <section className="px-4 space-y-4 md:px-0">
      <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
        Kickstart Your Next.js Project with My Starter Template! <span className="text-sky-500">&mdash; It&apos;s Free.</span>
      </h1>

      <div className="space-y-2">
        <p className="font-medium text-muted-foreground">
          Get the code below, happy hacking.
        </p>

        <CTA />
      </div>
    </section>
  );
}
