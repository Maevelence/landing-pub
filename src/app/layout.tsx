import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import {twMerge} from "tailwind-merge"

const opSans = Open_Sans({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Amazing Landing Page",
  description: "Template by amazing sites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="relative">
      <body className={twMerge(opSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
