import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Verita AI",
  description: "Realistic Evaluations for Agents Leaderboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <header className="w-full bg-white py-5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 md:space-x-12">
                <Link href="/" className="text-2xl font-semibold text-[#2f2e47]">
                  Verita AI
                </Link>
                <nav className="flex items-center space-x-4 md:space-x-8">
                  <Link href="/metrics" className="text-base text-[#2f2e47] hover:text-gray-600">
                    Metrics
                  </Link>
                  <Link href="/about" className="text-base text-[#2f2e47] hover:text-gray-600">
                    About
                  </Link>
                </nav>
              </div>
              <div>
                <button className="bg-[#7c4dff] text-white px-3 sm:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium hover:bg-[#6c3ce9] transition-colors">Participate</button>
              </div>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
