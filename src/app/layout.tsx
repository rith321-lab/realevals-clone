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
        <header className="w-full bg-white py-5">
          <div className="container mx-auto px-4 md:px-6 flex items-center">
            <div className="flex items-center space-x-12">
              <Link href="/" className="text-2xl font-semibold text-[#2f2e47]">
                REAL
              </Link>
              <nav className="flex items-center space-x-8">
                <Link href="/about" className="text-base text-[#2f2e47] hover:text-gray-600">
                  About
                </Link>
                <Link href="/metrics" className="text-base text-[#2f2e47] hover:text-gray-600">
                  Metrics
                </Link>
              </nav>
            </div>
            <div className="ml-auto">
              <Link 
                href="/demo"
                className="bg-[#000000] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#1a1a1a] transition-colors"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
