"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github, Lock } from "lucide-react";
import { getFeaturedProjects } from "../../data/projects";
import Card from "./Card";
import SectionWrapper from "./SectionWrapper";
import Button from "./Button";

const FeaturedProjects = () => {
  const featuredProjects = getFeaturedProjects();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle="Some of my recent work that I'm particularly proud of"
      className="bg-primary4"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {featuredProjects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <Card className="overflow-hidden h-full">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-700" />
                    </a>
                  )}
                  {project.githubUrl && !project.isNDA && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                      aria-label="Source Code"
                    >
                      <Github className="w-4 h-4 text-gray-700" />
                    </a>
                  )}
                  {project.isNDA && (
                    <div className="p-2 bg-white/90 backdrop-blur-sm rounded-full">
                      <Lock className="w-4 h-4 text-gray-500" />
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary4 text-primary1 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <Link href={`/projects/${project.id}`}>
                  <Button variant="outline" size="md" className="w-full">
                    View Details
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Link href="/projects">
          <Button variant="primary" size="lg">
            View All Projects
          </Button>
        </Link>
      </motion.div>
    </SectionWrapper>
  );
};

export default FeaturedProjects;
