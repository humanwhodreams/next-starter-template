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

export function OSVitals() {
  const os = useOs();

  return (
    <Table>
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
          <TableCell className="text-right">{os}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
