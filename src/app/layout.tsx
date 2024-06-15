import "@/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ensk | An Opinionated Next.js Starter Kit",
  description: "An Opinionated Next.js Starter Kit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn("antialiased", inter.className)}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
