import "@/styles/globals.css";

import * as React from "react";

import type { Metadata } from "next";

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
      <body className={"antialiased"}>{children}</body>
    </html>
  );
}
