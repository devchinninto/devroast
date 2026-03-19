import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "DevRoast",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(jetbrainsMono.variable, "antialiased")}>
      <body className="min-h-screen bg-bg-page font-mono text-text-primary">
        <header className="border-b border-border-primary bg-bg-page">
          <div className="flex h-14 w-full items-center justify-between px-6 sm:px-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[18px] font-medium"
            >
              <span className="text-[20px] font-bold text-accent-green">
                {">"}
              </span>
              <span>devroast</span>
            </Link>

            <nav className="flex items-center gap-6 text-[13px] text-text-secondary">
              <Link
                href="/#leaderboard"
                className="transition-colors hover:text-text-primary"
              >
                leaderboard
              </Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
