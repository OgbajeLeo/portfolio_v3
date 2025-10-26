import { Metadata } from "next";
import {
  generateMetadata as generateSEOMetadata,
  generateCanonicalUrl,
  generateBreadcrumbStructuredData,
} from "../../utils/seo";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = generateSEOMetadata({
  title: "Contact Me - Get In Touch",
  description:
    "Get in touch with Ogbaje Leo Arome for your next web development project. I'm available for freelance work, collaborations, and exciting opportunities. Contact me via email, phone, or through the contact form.",
  keywords: [
    "contact",
    "hire developer",
    "freelance",
    "web development",
    "collaboration",
    "project inquiry",
  ],
  canonicalUrl: generateCanonicalUrl("/contact"),
});

export default function ContactPage() {
  const breadcrumbStructuredData = generateBreadcrumbStructuredData([
    { name: "Home", url: "https://ogbajeleo.dev" },
    { name: "Contact", url: "https://ogbajeleo.dev/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <ContactPageClient />
    </>
  );
}
