"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Github,
  Calendar,
  Award,
  GraduationCap,
  Code,
  Users,
} from "lucide-react";
import { resumeData } from "../../data/resume";
import Card from "../components/Card";
import SectionWrapper from "../components/SectionWrapper";
import Button from "../components/Button";

const ResumePageClient = () => {
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

  const handleDownload = () => {
    
  };

  return (
    <div className="min-h-screen pt-20">
      <SectionWrapper
        title="Resume"
        subtitle="My professional journey and expertise"
        className="bg-primary3"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <Card className="p-4 lg:p-8 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {resumeData.personalInfo.name}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {resumeData.personalInfo.title}
              </p>
              <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
                {resumeData.personalInfo.summary}
              </p>

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5 text-primary1" />
                  <a
                    href={`mailto:${resumeData.personalInfo.email}`}
                    className="text-gray-700 hover:text-primary1"
                  >
                    {resumeData.personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-5 h-5 text-primary1" />
                  <a
                    href={`tel:${resumeData.personalInfo.phone}`}
                    className="text-gray-700 hover:text-primary1"
                  >
                    {resumeData.personalInfo.phone}
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary1" />
                  <span className="text-gray-700">
                    {resumeData.personalInfo.location}
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Globe className="w-5 h-5 text-primary1" />
                  <a
                    href={resumeData.personalInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary1"
                  >
                    {resumeData.personalInfo.website}
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-6">
                <a
                  href={resumeData.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary4 text-primary1 rounded-full hover:bg-primary4/80 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href={resumeData.personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </Card>
          </motion.div>

          {/* Experience Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <Card className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Users className="w-6 h-6 text-primary1" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Professional Experience
                </h2>
              </div>
              <div className="space-y-8">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="border-l-4 border-primary1 pl-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {exp.position}
                        </h3>
                        <p className="text-lg text-primary1 font-semibold">
                          {exp.company}
                        </p>
                        <p className="text-gray-600">{exp.location}</p>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500 mt-2 md:mt-0">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {exp.startDate} - {exp.endDate}
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <ul className="space-y-2">
                        {exp.description.map((desc, descIndex) => (
                          <li
                            key={descIndex}
                            className="flex items-start space-x-2"
                          >
                            <div className="w-2 h-2 bg-primary1 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-600">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start space-x-2"
                          >
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary4 text-primary1 text-sm font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <Card className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Education</h2>
              </div>
              <div className="space-y-6">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-green-200 pl-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {edu.degree} in {edu.field}
                        </h3>
                        <p className="text-lg text-green-600 font-semibold">
                          {edu.institution}
                        </p>
                        <p className="text-gray-600">{edu.location}</p>
                        {edu.gpa && (
                          <p className="text-gray-600">GPA: {edu.gpa}</p>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500 mt-2 md:mt-0">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {edu.startDate} - {edu.endDate}
                        </span>
                      </div>
                    </div>

                    {edu.relevantCoursework && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Relevant Coursework:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.relevantCoursework.map((course) => (
                            <span
                              key={course}
                              className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <Card className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Code className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Technical Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.technical.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Soft Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.soft.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Certifications Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <Card className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Award className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Certifications
                </h2>
              </div>
              <div className="space-y-4">
                {resumeData.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {cert.name}
                      </h3>
                      <p className="text-gray-600">{cert.issuer}</p>
                      {cert.credentialId && (
                        <p className="text-sm text-gray-500">
                          ID: {cert.credentialId}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-gray-500 text-sm">{cert.date}</p>
                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 text-sm"
                        >
                          Verify
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Languages Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Languages
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {resumeData.languages.map((lang, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-gray-50 rounded-lg"
                  >
                    <h3 className="font-semibold text-gray-900">{lang.name}</h3>
                    <p className="text-gray-600">{lang.proficiency}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Download Button */}
          <motion.div variants={itemVariants} className="text-center">
            <Button variant="primary" size="lg" onClick={handleDownload}>
              <Download className="w-5 h-5 mr-2" />
              Download Resume (PDF)
            </Button>
          </motion.div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
};

export default ResumePageClient;
