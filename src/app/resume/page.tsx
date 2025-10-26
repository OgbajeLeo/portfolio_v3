import { Metadata } from "next";
import {
  generateMetadata as generateSEOMetadata,
  generateCanonicalUrl,
  generateBreadcrumbStructuredData,
} from "../../utils/seo";
import ResumePageClient from "./ResumePageClient";

export const metadata: Metadata = generateSEOMetadata({
  title: "Resume - Professional Experience & Skills",
  description:
    "View Ogbaje Leo Arome's professional resume including work experience, education, technical skills, certifications, and achievements in web development and software engineering.",
  keywords: [
    "resume",
    "CV",
    "experience",
    "skills",
    "education",
    "certifications",
    "professional",
    "career",
    "work history",
  ],
  canonicalUrl: generateCanonicalUrl("/resume"),
});

export default function ResumePage() {
  const breadcrumbStructuredData = generateBreadcrumbStructuredData([
    { name: "Home", url: "https://omogbaje.vercel.app" },
    { name: "Resume", url: "https://omogbaje.vercel.app/resume" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <ResumePageClient />
    </>
  );
}
