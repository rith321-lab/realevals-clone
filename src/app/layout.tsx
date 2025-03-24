import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "REAL Evals - Realistic Evaluations for Agents Leaderboard",
  description: "REAL Evals offers realistic evaluations for agents on complex, modern websites. Evaluate AI systems on tasks mirroring real-world web usage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-full bg-white py-4 shadow-sm">
          <div className="container mx-auto px-4">
            <Link href="/" className="text-2xl font-bold text-center text-[#2f2e47] block">
              REAL
            </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
