import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ScrollProgressBar } from "@/components/ui/scroll-progress";
import { GSAPCursor } from "@/components/ui/gsap-cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { SmoothScrollProvider } from "@/components/ui/smooth-scroll";
import { AmbientBackground } from "@/components/ui/ambient-background";

export const metadata: Metadata = {
  title: "Asarudeen S | Software Engineer",
  description: "Portfolio of Asarudeen S, a Software Engineer specializing in the MERN stack, real-time apps, and modern web development.",
  openGraph: {
    title: "Asarudeen S | Software Engineer",
    description: "Portfolio of Asarudeen S, a Software Engineer specializing in the MERN stack, real-time apps, and modern web development.",
    url: "https://asarudeen.dev",
    siteName: "Asarudeen S Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] selection:bg-blue-500/30 selection:text-white font-sans">
        <SmoothScrollProvider>
          <AmbientBackground />
          <ScrollProgressBar />
          <GSAPCursor />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
