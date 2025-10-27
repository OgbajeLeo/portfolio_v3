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
              <div className="relative w-full overflow-hidden py-4">
                {/* CSS-based marquee container */}
                <div className="flex animate-marquee hover:pause-marquee">
                  {/* First set of skills */}
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={`marquee-1-${skill.name}`}
                      className="mx-6 flex-shrink-0"
                      whileHover={{
                        scale: 1.1,
                        y: -5,
                        transition: { duration: 0.3, ease: "easeOut" },
                      }}
                    >
                      <div className="p-6 text-center group cursor-pointer bg-white/40 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/60 min-w-[120px]">
                        <div className="text-4xl mb-3 size-16 mx-auto group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>
                        <h4 className="font-semibold text-gray-800 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {skill.name}
                        </h4>
                      </div>
                    </motion.div>
                  ))}

                  {/* Duplicate set for seamless loop */}
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={`marquee-2-${skill.name}`}
                      className="mx-6 flex-shrink-0"
                      whileHover={{
                        scale: 1.1,
                        y: -5,
                        transition: { duration: 0.3, ease: "easeOut" },
                      }}
                    >
                      <div className="p-6 text-center group cursor-pointer bg-white/40 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/60 min-w-[120px]">
                        <div className="text-4xl mb-3 size-16 mx-auto group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>
                        <h4 className="font-semibold text-gray-800 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {skill.name}
                        </h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
};

export default SkillsSection;
