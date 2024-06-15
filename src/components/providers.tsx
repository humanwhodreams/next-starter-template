import * as React from "react";

import { ThemeProvider } from "./theme-provider";

interface ThemeProps {
  defaultTheme?: "light" | "dark" | "system";
}

interface Props extends ThemeProps {
  children: React.ReactNode;
}

export function Providers({ children, defaultTheme = "system" }: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme={defaultTheme} enableSystem>
      {children}
    </ThemeProvider>
  );
}
