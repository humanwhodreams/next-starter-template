import { APP_DESCRIPTION } from "@/constants/ensk";
import { Button } from "../ui/button";
import { LuHeartHandshake } from "react-icons/lu";

export function Hero() {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
          {APP_DESCRIPTION}
        </h1>
        <p className="mb-8 text-lg font-normal text-muted-foreground lg:text-xl sm:px-16 xl:px-48">
          Quickly setup Next.js applications with a free and easy-to-use starter
          kit. The technologies used are opinionated based on personal
          experience.
        </p>
        <div className="flex flex-col mb-8 space-y-4 lg:mb-16 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Button type="button">
            Get Started
          </Button>
          <Button type="button" variant={"secondary"}>
            Join Contributors <LuHeartHandshake className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
