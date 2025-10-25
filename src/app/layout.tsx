import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MotionCursor from "../components/cursor/MotionCursor";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Travel",
description: "Discover breathtaking destinations, plan your perfect trip, and explore the world with Best Travel — your ultimate guide to unforgettable adventures.",

openGraph: {
    title: "Best Travel",
    description:
      "Discover breathtaking destinations, plan your perfect trip, and explore the world with Best Travel — your ultimate guide to unforgettable adventures.",
    siteName: "Best Travel",
    images: [
      {
        url: "https://plus.unsplash.com/premium_photo-1681487924146-c091598b7e8a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        width: 1200,
        height: 630,
        alt: "Best Travel",
      },
    ],
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className= {`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <MotionCursor />
        {children}
      </body>
    </html>

    
  );
}
