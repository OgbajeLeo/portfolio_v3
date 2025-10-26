"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills, getSkillsByCategory } from "../../data/skills";
import Card from "./Card";
import SectionWrapper from "./SectionWrapper";

const SkillsSection = () => {
  const categories = ["frontend", "tools"] as const;

  const categoryLabels = {
    frontend: "Frontend",

    tools: "Tools & Technologies",
  };

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
        duration: 0.5,
      },
    },
  };

  return (
    <SectionWrapper
      id="skills"
      title="Skills & Technologies"
      subtitle="Technologies and tools I use to bring ideas to life"
      className="bg-primary2 box backdrop-blur-sm"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-12"
      >
        {categories.map((category) => {
          const categorySkills = getSkillsByCategory(category);

          return (
            <motion.div key={category} variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {categoryLabels[category]}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="p-4 text-center group cursor-pointer">
                      <div className="text-2xl mb-2">{skill.icon}</div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">
                        {skill.name}
                      </h4>
                      <div className="flex justify-center space-x-1">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i <
                              (skill.level === "expert"
                                ? 4
                                : skill.level === "advanced"
                                ? 3
                                : skill.level === "intermediate"
                                ? 2
                                : 1)
                                ? "bg-primary1"
                                : "bg-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {skill.description}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
};

export default SkillsSection;
