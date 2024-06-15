import { APP_NAME } from "@/constants/ensk";
import { cn } from "@/lib/utils";
import { type ClassValue } from "clsx";
import { BatteryCharging } from "lucide-react";
import Link from "next/link";

interface Props {
  className?: ClassValue[];
}

export function Brand({ className }: Props) {
  return (
    <Link href={"/"} className={cn("text-3xl font-bold lowercase flex items-center justify-center", className)}>
      <BatteryCharging className="mr-2"/>{APP_NAME}
    </Link>
  );
}
