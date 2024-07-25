import { Transition } from "@/components/shared/transitions";

export default function Template({ children }: { children: React.ReactNode }) {
  return <Transition>{children}</Transition>;
}
