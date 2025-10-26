"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Lock,
  Calendar,
  Tag,
} from "lucide-react";
import { getProjectBySlug } from "../../../data/projects";
import Button from "../../components/Button";
import Card from "../../components/Card";

interface ProjectDetailsPageProps {
  params: {
    slug: string;
  };
}

const ProjectDetailsPage = ({ params }: ProjectDetailsPageProps) => {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
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
          className="space-y-12"
        >
          {/* Project Header */}
          <motion.div variants={itemVariants}>
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center space-x-4 mb-4">
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
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {project.title}
                </h1>
                <p className="text-white/90 text-lg">{project.description}</p>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Description */}
              <motion.div variants={itemVariants}>
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    About This Project
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {project.longDescription}
                  </p>
                </Card>
              </motion.div>

              {/* Features */}
              <motion.div variants={itemVariants}>
                <Card className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Key Features
                  </h3>
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
                <Card className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Challenges & Solutions
                  </h3>
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
                <Card className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Lessons Learned
                  </h3>
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

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info */}
              <motion.div variants={itemVariants}>
                <Card className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Project Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Tag className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Category</p>
                        <p className="font-medium text-gray-900 capitalize">
                          {project.category}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Status</p>
                        <p className="font-medium text-gray-900">
                          {project.isNDA ? "NDA Protected" : "Public"}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Technologies */}
              <motion.div variants={itemVariants}>
                <Card className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary4 text-primary1 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Action Buttons */}
              <motion.div variants={itemVariants} className="space-y-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="primary" size="lg" className="w-full">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      View Live Demo
                    </Button>
                  </a>
                )}

                {project.githubUrl && !project.isNDA && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="outline" size="lg" className="w-full">
                      <Github className="w-5 h-5 mr-2" />
                      View Source Code
                    </Button>
                  </a>
                )}

                {project.isNDA && (
                  <div className="p-4 bg-gray-100 rounded-lg text-center">
                    <Lock className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">
                      Source code is protected by NDA
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
