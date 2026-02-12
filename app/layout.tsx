import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google"; // Import fonts
import "./globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: "The Makeup By Guntas Sandhu | Luxury Indian Bridal Makeup",
  description: "Exquisite Indian bridal makeup services tailored for your most precious moments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${newsreader.variable}`}>
      <body className="antialiased bg-background text-foreground">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        {/* Floating WhatsApp Button - Global */}
        <a className="fixed bottom-8 right-8 z-50 bg-primary hover:scale-110 transition-transform shadow-xl shadow-primary/40 text-white w-16 h-16 rounded-full flex items-center justify-center" href="https://wa.me/917347235119">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
        </a>
      </body>
    </html>
  );
}
