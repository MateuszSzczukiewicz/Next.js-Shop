import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import "tailwindcss/tailwind.css";
import { NavBar } from "@/ui/organisms/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <NavBar />
        <section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
          {children}
        </section>
        <footer>
          <p className="text-center text-gray-500 text-sm">© 2023</p>
        </footer>
      </body>
    </html>
  );
}
