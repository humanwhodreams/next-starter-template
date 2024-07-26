import { ReactNode } from "react";
import { SiteHeader } from "@/components/shared/site-header";

interface Props {
  children: ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <main className="relative flex flex-col items-center justify-between min-h-dvh">
      <SiteHeader />
      <Main>{children}</Main>
    </main>
  );
}

function Main({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-col items-start flex-1 w-full max-w-4xl px-4 mx-auto my-24 lg:px-0">
      {children}
    </section>
  );
}
