"use client";

import { useState, useEffect } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DarkModeToggle from "@/app/components/DarkModeToggle";
import Sidebar from "@/app/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Al montar el componente, chequear si el usuario tiene preferencia o clase 'dark' previa
    const hasDarkClass = document.documentElement.classList.contains("dark");
    setIsDark(hasDarkClass);
  }, []);

  function toggleDark() {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }

  return (
    <html lang="en" className={isDark ? "dark" : ""}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
          bg-[var(--background)] text-[var(--foreground)]
          transition-colors duration-300 flex min-h-screen`}
      >
        <Sidebar isDark={isDark} />

        <div className="flex flex-col flex-1 ml-60">
          <header className="w-full flex justify-end p-4 border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/70 backdrop-blur-md z-20 sticky top-0">
            <DarkModeToggle isDark={isDark} toggleDark={toggleDark} />
          </header>
          <main className="p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
