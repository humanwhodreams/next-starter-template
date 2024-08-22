"use client";

import { Clock } from "lucide-react";
import { useDateTime } from "@/hooks/use-date-time";
import { useMounted } from "@/hooks/use-mounted";

export function SiteTime() {
  const { isMounted } = useMounted();
  const { time, amp } = useDateTime();

  if (!isMounted) {
    return null;
  }

  return (
    <p className="flex items-center text-muted-foreground tabular-nums">
      <Clock className="flex-shrink-0 mr-2 text-muted-foreground size-4" />
      {time} {amp}
    </p>
  );
}
