// layout.tsx

import { Providers } from "./providers/providers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/app/components/Sidebar";
import DarkModeToggle from "@/app/components/DarkModeToggle";
import PageWrapper from "@/app/providers/PageWrapper";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mirko Perez | Frontend Developer",
  description:
    "Frontend Developer portfolio of Mirko Perez, showcasing skills in React, Next.js, and modern web development.",
  icons: {
    icon: "/mp-icon.png",
  },
  openGraph: {
    title: "Mirko Perez | Frontend Developer",
    description:
      "Explore my work, projects and frontend experience with modern tools like React, TypeScript, and Laravel.",
    url: "https://mirko-perez.netlify.app",
    siteName: "Mirko Perez Portfolio",
    images: [
      {
        url: "/portfolio-img.png",
        width: 1200,
        height: 630,
        alt: "Mirko Perez Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirko Perez | Frontend Developer",
    description:
      "Frontend Developer Portfolio - React, Next.js, Laravel, Tailwind and more.",
    images: ["/portfolio-img.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="transition-colors duration-300 scroll-smooth"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 flex min-h-screen`}
      >
        <Providers>
          <Sidebar />

          <div className="flex flex-col flex-1 ml-0 md:ml-64">
            <header
              className="
      fixed top-0 left-0 md:left-64 right-0 h-16 flex justify-end p-4
      border-b border-gray-200 dark:border-gray-800
      bg-[var(--background)]/70 backdrop-blur-md z-20
    "
            >
              <DarkModeToggle />
            </header>

            <main className="p-8 pt-16">
              <PageWrapper>{children}</PageWrapper>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
