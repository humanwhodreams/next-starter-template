"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useOs } from "@/hooks/use-operating-system";

export function Vitals() {
  const operatingSystemInfo = useOs();

  return (
    <div className="p-2 rounded-md bg-muted border border-border w-full md:w-[300px]">
      <Table className="rounded-md bg-card">
        <TableCaption>Operating system details.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Keys</TableHead>
            <TableHead className="text-right">Values</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Device</TableCell>
            <TableCell className="text-right">{operatingSystemInfo}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
