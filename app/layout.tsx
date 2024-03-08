import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import React from "react";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expense Chart Component",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("h-screen", dmSans.className)}>
        <div className="background-container flex min-h-screen items-center justify-center bg-cream">
          <div className="card-conainer w-[343px] shrink-0 md:w-[540px]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
