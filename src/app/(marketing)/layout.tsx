import * as React from "react";

import { Footer } from "@/components/footer";
import { NavigationBar } from "@/components/navigation-bar";

interface Props {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: Props) {
  return (
    <>
      <main>
        <NavigationBar />
        <section>{children}</section>
        <Footer />
      </main>
    </>
  );
}
