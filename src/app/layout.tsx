import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  generateMetadata as generateSEOMetadata,
  generatePersonStructuredData,
  generateWebsiteStructuredData,
} from "../utils/seo";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  ...generateSEOMetadata({
    title: "Ogbaje Leo Arome - Frontend Web Developer & Software Engineer",
    description:
      "Portfolio website of Ogbaje Leo Arome - A passionate Frontend Web Developer specializing in React, Next.js, Vue.js, Node.js, TypeScript, and modern web technologies. Building end-to-end web solutions with a focus on user experience and performance.",
    canonicalUrl: "https://omogbaje.vercel.app",
    ogImage: "/fav.jpg",
    ogImageAlt: "Ogbaje Leo Arome - Frontend Developer Portfolio",
  }),
  icons: {
    icon: "/fav.jpg",
    shortcut: "/fav.jpg",
    apple: "/fav.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personStructuredData = generatePersonStructuredData();
  const websiteStructuredData = generateWebsiteStructuredData();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
      </head>
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
