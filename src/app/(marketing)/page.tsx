import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";

export default function Page() {
  /*
    Each page is a collection of sections.
  */
  return (
    <>
      <Hero />
      <Features />
    </>
  );
}
