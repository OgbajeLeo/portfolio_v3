"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Lock,
  Calendar,
  Tag,
} from "lucide-react";
import { Project } from "../../../data/projects";
import Button from "../../components/Button";
import Card from "../../components/Card";

interface ProjectDetailsPageClientProps {
  project: Project;
}

const ProjectDetailsPageClient = ({
  project,
}: ProjectDetailsPageClientProps) => {
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
    hidden: { opacity: 0, y: 20 },
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
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/projects">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Project Header */}
          <motion.div variants={itemVariants}>
            <Card className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                  <div className="flex items-center gap-4 mb-4">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
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
                    {project.featured && (
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-6">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-primary1 text-white rounded-lg hover:bg-primary1/90 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && !project.isNDA && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <Github className="w-5 h-5 mr-2" />
                        Source Code
                      </a>
                    )}
                    {project.isNDA && (
                      <div className="inline-flex items-center px-6 py-3 bg-gray-500 text-white rounded-lg cursor-not-allowed">
                        <Lock className="w-5 h-5 mr-2" />
                        Private Repository
                      </div>
                    )}
                  </div>
                </div>

                <div className="lg:w-1/3">
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Project Details Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Technologies */}
            <motion.div variants={itemVariants}>
              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Tag className="w-6 h-6 text-primary1" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Technologies Used
                  </h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-primary4 text-primary1 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Features */}
            <motion.div variants={itemVariants}>
              <Card className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary1 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* Challenges */}
            <motion.div variants={itemVariants}>
              <Card className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Challenges Faced
                </h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* Lessons Learned */}
            <motion.div variants={itemVariants}>
              <Card className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Lessons Learned
                </h2>
                <ul className="space-y-3">
                  {project.lessons.map((lesson, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>

          {/* Long Description */}
          <motion.div variants={itemVariants}>
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Project Overview
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailsPageClient;
