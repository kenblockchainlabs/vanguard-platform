import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Vanguard Motion — Code-Driven Video Synthesis & Autonomous Creative Engine",
  description: "Headless video motion architecture for developers and autonomous AI agents. Turn HTML, CSS, and GSAP into 60 FPS broadcast video via CLI. Zero After Effects, zero cloud GPU.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${mono.variable} font-sans bg-[#09090B] text-zinc-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
