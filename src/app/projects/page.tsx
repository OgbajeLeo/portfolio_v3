import { Metadata } from "next";
import {
  generateMetadata as generateSEOMetadata,
  generateCanonicalUrl,
  generateBreadcrumbStructuredData,
} from "../../utils/seo";
import ProjectsPageClient from "./ProjectsPageClient";

export const metadata: Metadata = generateSEOMetadata({
  title: "My Projects - Portfolio Showcase",
  description:
    "Explore my portfolio of web development projects including React, Next.js, Vue.js applications, mobile apps, and full-stack solutions. See my latest work and technical implementations.",
  keywords: [
    "portfolio",
    "projects",
    "web development",
    "React",
    "Next.js",
    "Vue.js",
    "mobile apps",
    "full-stack",
    "frontend",
    "backend",
  ],
  canonicalUrl: generateCanonicalUrl("/projects"),
});

export default function ProjectsPage() {
  const breadcrumbStructuredData = generateBreadcrumbStructuredData([
    { name: "Home", url: "https://omogbaje.vercel.app" },
    { name: "Projects", url: "https://omogbaje.vercel.app/projects" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <ProjectsPageClient />
    </>
  );
}
