import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { BookOpen, FileText, Film, PenTool, Languages } from "lucide-react";
import { BridgeProvider } from "@/components/bridge-provider";
import { Toaster } from "@/components/ui/sonner";
import { site } from "@/lib/data";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const appName = site.name;

export const metadata: Metadata = {
  title: appName,
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={cn("font-sans", geist.variable)}>
      <body className="antialiased min-h-screen bg-background flex flex-col">
        <BridgeProvider />
        <header className="sticky top-0 z-50 w-full border-b border-transparent bg-white/70 backdrop-blur-xl shadow-sm">
          <div className="container mx-auto px-4 h-14 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold tracking-tight"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-pragma-gradient text-white">
                <BookOpen className="h-4 w-4" />
              </div>
              <span className="text-pragma-gradient">{appName}</span>
            </Link>
            <nav className="flex items-center gap-0.5 sm:gap-1">
              <Link
                href="/courses"
                className="inline-flex items-center gap-1.5 rounded-lg px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-muted-foreground transition-all hover:text-orange-600 hover:bg-orange-50"
              >
                <BookOpen className="h-4 w-4 shrink-0" />
                <span className="hidden sm:inline">Курсы</span>
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center gap-1.5 rounded-lg px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-muted-foreground transition-all hover:text-orange-600 hover:bg-orange-50"
              >
                <FileText className="h-4 w-4 shrink-0" />
                <span className="hidden sm:inline">Демо</span>
              </Link>
              <Link
                href="/lectures"
                className="inline-flex items-center gap-1.5 rounded-lg px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-muted-foreground transition-all hover:text-orange-600 hover:bg-orange-50"
              >
                <Film className="h-4 w-4 shrink-0" />
                <span className="hidden sm:inline">Лекции</span>
              </Link>
              <Link
                href="/exercises"
                className="inline-flex items-center gap-1.5 rounded-lg px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-muted-foreground transition-all hover:text-orange-600 hover:bg-orange-50"
              >
                <PenTool className="h-4 w-4 shrink-0" />
                <span className="hidden sm:inline">Упражнения</span>
              </Link>
              <Link
                href="/german"
                className="inline-flex items-center gap-1.5 rounded-lg px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-amber-600 transition-all hover:text-amber-700 hover:bg-amber-50"
              >
                <Languages className="h-4 w-4 shrink-0" />
                <span className="hidden sm:inline">Немецкий</span>
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-orange-100/50 bg-gradient-to-r from-orange-50/80 via-amber-50/80 to-yellow-50/80">
          <div className="container mx-auto px-4 py-8 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-pragma-gradient text-white">
                <BookOpen className="h-3 w-3" />
              </div>
              <span className="text-pragma-gradient">{appName}</span>
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} {appName} — подготовка к ЕГЭ по
              английскому языку
            </p>
          </div>
        </footer>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
