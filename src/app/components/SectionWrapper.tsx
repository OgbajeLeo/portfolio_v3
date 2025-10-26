import React from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className = "",
  id,
  title,
  subtitle,
}) => {
  return (
    <section id={id} className={`py-16 lg:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            {title && (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
