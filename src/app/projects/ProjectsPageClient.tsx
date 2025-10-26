"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github, Lock, Filter } from "lucide-react";
import { projects, Project } from "../../data/projects";
import Card from "../components/Card";
import SectionWrapper from "../components/SectionWrapper";
import Button from "../components/Button";

const ProjectsPageClient = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "frontend", label: "Frontend" },
    { value: "fullstack", label: "Full Stack" },
    { value: "mobile", label: "Mobile" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="min-h-screen pt-20">
      <SectionWrapper
        title="My Projects"
        subtitle="A collection of projects that showcase my skills and passion for development"
        className="bg-primary3"
      >
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.value
                  ? "bg-primary1 text-white shadow-lg"
                  : "bg-white/80 text-gray-700 hover:bg-primary4 hover:text-primary1"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="overflow-hidden h-full group">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5 text-gray-700" />
                      </a>
                    )}
                    {project.githubUrl && !project.isNDA && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                        aria-label="Source Code"
                      >
                        <Github className="w-5 h-5 text-gray-700" />
                      </a>
                    )}
                    {project.isNDA && (
                      <div className="p-3 bg-white/90 backdrop-blur-sm rounded-full">
                        <Lock className="w-5 h-5 text-gray-500" />
                      </div>
                    )}
                  </div>
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.category === "frontend"
                          ? "bg-primary4 text-primary1"
                          : project.category === "fullstack"
                          ? "bg-primary2 text-primary1"
                          : project.category === "mobile"
                          ? "bg-primary5 text-primary1"
                          : "bg-primary3 text-primary1"
                      }`}
                    >
                      {project.category.charAt(0).toUpperCase() +
                        project.category.slice(1)}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <Link href={`/projects/${project.id}`}>
                    <Button variant="outline" size="md" className="w-full">
                      View Project Details
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500">
              Try selecting a different category to see more projects.
            </p>
          </motion.div>
        )}
      </SectionWrapper>
    </div>
  );
};

export default ProjectsPageClient;
