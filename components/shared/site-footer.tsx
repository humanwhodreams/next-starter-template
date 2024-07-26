import { cn } from "@/lib/cn";

interface SiteFooterProps {
  className?: string;
}

export function SiteFooter({ className }: SiteFooterProps) {
  return (
    <footer className={cn("w-full bg-background", className)}>
      <nav className="flex flex-col items-start px-4 py-1 md:flex-row md:items-center md:justify-between gap-y-4 md:gap-x-28">
        <h1 className="font-medium">Next Starter Template</h1>

        <div className="flex flex-col flex-1 md:flex-row md:pl-2 md:justify-between">
          <p className="text-sm text-muted-foreground">
            Built using <ALink label="Next.js" href="https://nextjs.org" /> +{" "}
            <ALink label="Shadcn/ui" href="https://ui.shadcn.com" />{" "}
            &amp; powered by <ALink label="Vercel" href="https://vercel.com" />.
          </p>
          <p className="text-sm text-muted-foreground">Made with ⚡ + ☕</p>
        </div>
      </nav>
    </footer>
  );
}

interface ALinkProps {
  href: string;
  label: string;
}

function ALink({ href, label }: ALinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-foreground"
    >
      {label}
    </a>
  );
}
