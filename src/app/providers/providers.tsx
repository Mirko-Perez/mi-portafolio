"use client";

import { ThemeProvider } from "next-themes";
import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";
import { LanguageProvider } from "../i18n/LanguageProvider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <MotionConfig reducedMotion="user">
        <LanguageProvider>{children}</LanguageProvider>
      </MotionConfig>
    </ThemeProvider>
  );
}
