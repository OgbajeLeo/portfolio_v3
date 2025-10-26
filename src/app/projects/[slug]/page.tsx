import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "../../../data/projects";
import {
  generateMetadata as generateSEOMetadata,
  generateCanonicalUrl,
  generateProjectStructuredData,
  generateBreadcrumbStructuredData,
} from "../../../utils/seo";
import ProjectDetailsPageClient from "./ProjectDetailsPageClient";

interface ProjectDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProjectDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return generateSEOMetadata({
    title: `${project.title} - Project Details`,
    description: project.description,
    keywords: project.technologies,
    canonicalUrl: generateCanonicalUrl(`/projects/${project.id}`),
    ogImage: project.image,
    ogImageAlt: `${project.title} - Project Screenshot`,
  });
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectStructuredData = generateProjectStructuredData(project);
  const breadcrumbStructuredData = generateBreadcrumbStructuredData([
    { name: "Home", url: "https://omogbaje.vercel.app" },
    { name: "Projects", url: "https://omogbaje.vercel.app/projects" },
    {
      name: project.title,
      url: `https://omogbaje.vercel.app/projects/${project.id}`,
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <ProjectDetailsPageClient project={project} />
    </>
  );
}
