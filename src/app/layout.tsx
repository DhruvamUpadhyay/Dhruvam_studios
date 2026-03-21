import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GSAPIntro } from "@/components/ui/GSAPIntro";
import { NetworkBackground } from "@/components/ui/NetworkBackground";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dhruvam Studios",
  description: "Enterprise Automation, Full-Stack Web Apps, and AI Integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-display antialiased bg-background-dark text-slate-100 flex flex-col min-h-screen`} style={{ overflow: "hidden" }}>
        <NetworkBackground />
        <GSAPIntro />
        <Navbar />
        <main className="flex-1 shrink-0 bg-background-dark">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
