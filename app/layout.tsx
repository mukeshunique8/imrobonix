import type { Metadata } from "next";
import { Orbitron, Roboto, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { LandingNavbar } from "@/components/custom/Navbar";
import Footerdemo from "@/components/custom/Footer";
import { LoadingProvider } from "./contexts/LoadingContext";

export const metadata: Metadata = {
  title: "Imrobonix Robotics",
  description: "Robotics website built with Next.js",
};

export const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
export const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });
export const poppins = Poppins({ subsets: ["latin"], variable: "--font-poppins", weight: "400" });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingProvider>
            <div className="min-h-screen">
              <LandingNavbar />
              <main className="bg-background">
                {children}
              </main>
              <Footerdemo />
            </div>
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}