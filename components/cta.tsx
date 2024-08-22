import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/cn";

export function CTA() {
  return (
    <div className="flex flex-col items-start gap-4 md:gap-6 md:flex-row md:items-center">
      <a
        href="https://github.com/fromenoabasi/next-starter-template"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttonVariants({}))}
      >
        See the repository
      </a>
    </div>
  );
}
