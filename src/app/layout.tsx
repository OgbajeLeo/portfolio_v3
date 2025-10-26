import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ogbaje Leo Arome - Frontend Web Developer & Software Engineer",
  description:
    "Portfolio website of Ogbaje Leo Arome - A passionate Frontend Web Developer specializing in React, Next.js,Vue.js , Node.js, TypeScript, and modern web technologies. Building end-to-end web solutions with a focus on user experience and performance.",
  keywords: [
    "Frontend Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Vue.js",
    "Node.js",
    "TypeScript",
    "Portfolio",
    "Ogbaje Leo Arome",
  ],
  authors: [{ name: "Ogbaje Leo Arome" }],
  creator: "Ogbaje Leo Arome",
  openGraph: {
    title: "Ogbaje Leo Arome - Frontend Web Developer",
    description:
      "Portfolio website showcasing my work as a Frontend Web Developer specializing in React, Next.js, Node.js, and TypeScript.",
    url: "https://ogbajeleo.dev",
    siteName: "Ogbaje Leo Arome Portfolio",
    images: [
      {
        url: "https://ogbajeleo.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ogbaje Leo Arome - Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ogbaje Leo Arome - Frontend Web Developer",
    description:
      "Portfolio website showcasing my work as a Frontend Web Developer specializing in React, Next.js, Node.js, and TypeScript.",
    images: ["https://ogbajeleo.dev/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased`}>
        <div className="min-h-screen flex flex-col bg-primary3">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
