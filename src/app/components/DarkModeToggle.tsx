"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useLanguage } from "@/app/i18n/LanguageProvider";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded px-2 py-0.5 border cursor-pointer "
    >
      {theme === "dark" ? t.theme.light : t.theme.dark}
    </button>
  );
}
