import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/cn";

export function CTA() {
  return (
    <>
      <a
        href="https://github.com/fromenoabasi/next-starter-template"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttonVariants({ size: "lg" }))}
      >
        <ChevronRight className="mr-2 size-4" />
        See the repository
      </a>
      <Link
        href="components"
        className="font-medium underline transition-colors duration-200 md:ml-6 decoration-dotted underline-offset-2 hover:text-sky-500"
      >
        Browse components
      </Link>
    </>
  );
}
