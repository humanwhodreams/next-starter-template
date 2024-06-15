import * as React from "react";

import { Footer } from "@/components/footer";

interface Props {
  children: React.ReactNode;
}

export default function AuthenticationLayout({ children }: Props) {
  return (
    <main>
      <section>{children}</section>
      <Footer />
    </main>
  );
}
