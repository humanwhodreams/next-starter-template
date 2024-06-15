import "@/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.metadata.title,
  description: siteConfig.metadata.title,
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
          <Providers defaultTheme="dark">{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
