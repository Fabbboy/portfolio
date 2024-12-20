import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full w-full bg-neutral-900 overflow-x-hidden`}
      >
        <div className="relative h-full w-full">
          <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
            <TooltipProvider>{children}</TooltipProvider>
            <footer className="flex flex-col items-center justify-center p-4 bg-neutral-900/80 text-blue-400 text-sm space-y-2">
              <div className="flex space-x-6">
                <Link href="/imprint" legacyBehavior>
                  <a className="hover:underline flex items-center space-x-1">
                    <span>🔗</span>
                    <span>Imprint</span>
                  </a>
                </Link>
                <Link href="#top" legacyBehavior>
                  <a className="hover:underline flex items-center space-x-1">
                    <span>⬆️</span>
                    <span>Back to Top</span>
                  </a>
                </Link>
                <a
                  href="https://github.com/your-github-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center space-x-1"
                >
                  <span>💻</span>
                  <span>GitHub</span>
                </a>
              </div>
              <p className="text-center text-blue-400">
                &copy; 2024 Fabrice Schaub
              </p>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
