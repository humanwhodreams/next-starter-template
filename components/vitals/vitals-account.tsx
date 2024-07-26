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

export function AccountVitals() {
  const isAuth = true;
  return (
    <Table>
      <TableCaption>Account details.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Keys</TableHead>
          <TableHead className="text-right">Values</TableHead>
        </TableRow>
      </TableHeader>
      {isAuth ? <StateFull /> : <StateLess />}
    </Table>
  );
}

function StateLess() {
  return (
    <TableBody>
      <TableRow>
        <TableCell className="font-medium">Name</TableCell>
        <TableCell className="text-right">null</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium">Email</TableCell>
        <TableCell className="text-right">null</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium">Provider</TableCell>
        <TableCell className="text-right">null</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium">Session</TableCell>
        <TableCell className="text-right">null</TableCell>
      </TableRow>
    </TableBody>
  );
}

function StateFull() {
  return (
    <TableBody>
      <TableRow>
        <TableCell className="font-medium">Name</TableCell>
        <TableCell className="text-right">Enoabasi Essien</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium">Email</TableCell>
        <TableCell className="text-right">enoabasidream@gmail.com</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium">Provider</TableCell>
        <TableCell className="text-right">Google</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="font-medium">Session</TableCell>
        <TableCell className="text-right">
          kanon08a8h93uubq3bbkjc82393
        </TableCell>
      </TableRow>
    </TableBody>
  );
}
