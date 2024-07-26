import { FaGithub } from "react-icons/fa";

export function CTA() {
  return (
    <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-border bg-transparent px-6 font-medium text-muted-foreground transition-all [box-shadow:0px_4px_1px_#a3a3a3] active:translate-y-[2px] active:shadow-none hover:text-foreground group">
      <FaGithub size={22} className="mr-2 group-hover:text-foreground text-muted-foreground"/>GitHub
    </button>
  );
}
