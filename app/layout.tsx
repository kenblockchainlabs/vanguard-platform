import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Vanguard Runtime — Enterprise AI Agent Observability & Token Guardrails",
  description: "Deterministic rate-limiting, semantic caching, and real-time PII redaction for enterprise autonomous agent workloads.",
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
