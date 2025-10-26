import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
  target,
  rel,
    disabled = false,
    type = "button",
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary:
      "bg-white text-black hover:bg-primary1/90 border-r-6 border-b-6 border-gray-900 shadow-lg hover:shadow-xl",
    secondary:
      "bg-white backdrop-blur-sm text-gray-700 hover:bg-white border-r-6 border-b-6 border-gray-900 shadow-lg hover:shadow-xl",
    outline:
      "border-2 border-primary1 text-primary1 bg-white border-r-6 border-b-6 border-gray-900  focus:ring-primary1",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${
    sizeClasses[size]
  } ${className} ${
    disabled
      ? "opacity-50 cursor-not-allowed"
      : "transform hover:-translate-y-1"
  }`;

  const buttonContent = (
    <motion.div
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className="flex items-center gap-2"
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        onClick={onClick}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {buttonContent}
    </button>
  );
};

export default Button;
