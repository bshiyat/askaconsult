import type { Metadata } from "next";
import { Orbitron, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "AskAConsult | IT Consulting Solutions for Tomorrow's Business",
  description: "Canada-based IT consulting company specializing in IT Strategy, Cloud Solutions, Cybersecurity, and Managed IT Services. Tech solutions for tomorrow's business.",
  keywords: ["IT Consulting", "Canada", "Cloud Solutions", "Cybersecurity", "Managed IT Services", "Digital Transformation"],
  authors: [{ name: "AskAConsult" }],
  openGraph: {
    title: "AskAConsult | IT Consulting Solutions",
    description: "Canada-based IT consulting company specializing in IT Strategy, Cloud Solutions, Cybersecurity, and Managed IT Services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${shareTechMono.variable} antialiased`}
      >
        {children}
        <div className="crt-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
