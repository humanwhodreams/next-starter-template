"use client";

import { Clock } from "lucide-react";
import { useDateTime } from "@/hooks/use-date-time";

/*
  Displays the current time as a ticker
*/

export function TimeDisplay() {
  const { time,amp } = useDateTime();
  
  return (
    <p className="flex items-center text-muted-foreground tabular-nums">
      <Clock className="flex-shrink-0 mr-2 text-muted-foreground size-4" />
      {time} {amp}
    </p>
  );
}
