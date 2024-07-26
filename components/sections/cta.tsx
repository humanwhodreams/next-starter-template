import { FaGithub } from "react-icons/fa";

export function CTA() {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/fromenoabasi/next-starter-template"
      className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-border bg-background px-6 font-medium text-muted-foreground transition-all [box-shadow:0px_4px_1px_hsl(var(--muted-foreground)/20%)] active:translate-y-[2px] active:shadow-none hover:text-foreground group"
    >
      <FaGithub
        size={22}
        className="mr-2 group-hover:text-foreground text-muted-foreground"
      />
      GitHub
    </a>
  );
}
