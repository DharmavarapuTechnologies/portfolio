import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledStarsCanvas from "@/components/Stars";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohan Teja",
  description: "The portfolio describing the capabilities of Mohan Teja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-[#1C1C27] text-[#FAEBD7] h-screen snap-y snap-mandatory overflow-scroll z-0 snap-top">
          <StyledStarsCanvas />
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
