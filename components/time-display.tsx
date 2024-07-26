"use client";

import { Clock } from "lucide-react";
import { useDateTime } from "@/hooks/use-date-time";
import { useMounted } from "@/hooks/use-mounted";

/*
  Displays the current time as a ticker
*/

export function TimeDisplay() {
  const { time, amp } = useDateTime();
  const isMounted = useMounted();

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
