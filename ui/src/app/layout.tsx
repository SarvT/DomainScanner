import type { Metadata } from "next";
// import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { GeistSans } from 'geist/font/sans'; // For the sans-serif variant [1, 2, 5]
import { GeistMono } from 'geist/font/mono';



// const geistSans = GeistSans({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = GeistMono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "DomainHall",
  description: "A web-app that scans your domains, annd helps in choosing the best one.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
