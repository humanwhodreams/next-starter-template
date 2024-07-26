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
      <body
        className={cn(
          "font-Inter antialiased",
          _inter.variable,
          _jetbrains.variable
        )}
      >
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        {children}
      </body>
    </html>
  );
}
