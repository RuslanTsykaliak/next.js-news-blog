import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { NextAuthProvider } from "@/components/Providers";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Tech News",
  description: "Next.js Tech News create for learners",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <div className="lg:max-w-[900px] lg:px-16 mx-auto py-8 shadow-xl min-h-screen flex flex-col px-8">
            <Navbar />
            <div className="flex-auto">{children}</div>
            <Footer />
          </div>

          <Toaster />
        </NextAuthProvider>
      </body>
    </html>
  );
}
