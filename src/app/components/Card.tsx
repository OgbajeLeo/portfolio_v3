import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = true,
  glass = false,
}) => {
  const baseClasses = "rounded-2xl border border-gray-200/50 shadow-lg";
  const glassClasses = glass
    ? "glass-card backdrop-blur-sm"
    : "bg-white/80 backdrop-blur-sm";
  const hoverClasses = hover ? "hover:shadow-xl hover:-translate-y-1" : "";

  return (
    <motion.div
      className={`${baseClasses} ${glassClasses} ${hoverClasses} ${className}`}
      whileHover={hover ? { y: -4, scale: 1.02 } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
