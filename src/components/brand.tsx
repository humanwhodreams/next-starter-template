import { APP_NAME } from "@/constants/ensk";
import { cn } from "@/lib/utils";
import { type ClassValue } from "clsx";
import Link from "next/link";

interface Props {
  className?: ClassValue[];
}

export function Brand({ className }: Props) {
  return (
    <Link
      href={"/"}
      className={cn(
        "text-3xl font-bold lowercase flex items-center justify-center",
        className
      )}
    >
      {APP_NAME}
    </Link>
  );
}
