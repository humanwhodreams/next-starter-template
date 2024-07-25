import "@/styles/globals.css";

import * as React from "react";

import { _inter, _jetbrains } from "@/utils/local-font";

import type { Metadata } from "next";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Next Starter Template",
  description:
    "Create a next.js application with authentication, database, and components ready to go.",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={cn("font-Inter antialiased", _inter.variable, _jetbrains.variable)}>
        {children}
      </body>
    </html>
  );
}
