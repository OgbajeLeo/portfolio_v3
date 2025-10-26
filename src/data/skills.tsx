import React from "react";
import {
  ReactIcon,
  NextJSIcon,
  VueIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  TailwindIcon,
  HTMLIcon,
  CSSIcon,
  SASSIcon,
  NodeJSIcon,
  GitIcon,
  GitHubIcon,
  DockerIcon,
  AWSIcon,
  VercelIcon,
  NetlifyIcon,
  FigmaIcon,
  VSCodeIcon,
} from "./skillIcons";

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "mobile" | "tools" | "database";
  level: "beginner" | "intermediate" | "advanced" | "expert";
  icon?: React.ReactElement;
  description?: string;
}

export const skills: Skill[] = [
  // Frontend Technologies
  {
    name: "React",
    category: "frontend",
    level: "expert",
    icon: <ReactIcon />,
    description: "Building interactive user interfaces with React and hooks",
  },
  {
    name: "Next.js",
    category: "frontend",
    level: "expert",
    icon: <NextJSIcon />,
    description: "Full-stack React framework with SSR and SSG capabilities",
  },
  {
    name: "Vue.js",
    category: "frontend",
    level: "advanced",
    icon: <VueIcon />,
    description: "Progressive JavaScript framework for building UIs",
  },
  {
    name: "TypeScript",
    category: "frontend",
    level: "expert",
    icon: <TypeScriptIcon />,
    description: "Strongly typed JavaScript for better development experience",
  },
  {
    name: "JavaScript",
    category: "frontend",
    level: "expert",
    icon: <JavaScriptIcon />,
    description: "Modern JavaScript with ES6+ features and async programming",
  },
  {
    name: "TailwindCSS",
    category: "frontend",
    level: "expert",
    icon: <TailwindIcon />,
    description: "Utility-first CSS framework for rapid UI development",
  },
  {
    name: "HTML5",
    category: "frontend",
    level: "expert",
    icon: <HTMLIcon />,
    description: "Semantic HTML markup and accessibility best practices",
  },
  {
    name: "CSS3",
    category: "frontend",
    level: "expert",
    icon: <CSSIcon />,
    description: "Advanced CSS with animations, flexbox, and grid layouts",
  },
  {
    name: "SASS/SCSS",
    category: "frontend",
    level: "advanced",
    icon: <SASSIcon />,
    description: "CSS preprocessor for maintainable stylesheets",
  },

  // Backend Technologies
  {
    name: "Node.js",
    category: "backend",
    level: "expert",
    icon: <NodeJSIcon />,
    description: "Server-side JavaScript runtime for building APIs",
  },
 
 
  // Tools & Technologies
  {
    name: "Git",
    category: "tools",
    level: "expert",
    icon: <GitIcon />,
    description: "Version control system for tracking code changes",
  },
  {
    name: "GitHub",
    category: "tools",
    level: "expert",
    icon: <GitHubIcon />,
    description: "Code hosting platform for version control and collaboration",
  },
  {
    name: "Docker",
    category: "tools",
    level: "intermediate",
    icon: <DockerIcon />,
    description: "Containerization platform for application deployment",
  },
  {
    name: "AWS",
    category: "tools",
    level: "intermediate",
    icon: <AWSIcon />,
    description: "Amazon Web Services cloud computing platform",
  },
  {
    name: "Vercel",
    category: "tools",
    level: "expert",
    icon: <VercelIcon />,
    description: "Cloud platform for frontend developers",
  },
  {
    name: "Netlify",
    category: "tools",
    level: "advanced",
    icon: <NetlifyIcon />,
    description: "Web development platform for static sites",
  },
  {
    name: "Figma",
    category: "tools",
    level: "advanced",
    icon: <FigmaIcon />,
    description: "Collaborative interface design tool",
  },
  {
    name: "VS Code",
    category: "tools",
    level: "expert",
    icon: <VSCodeIcon />,
    description: "Code editor optimized for modern web development",
  },
];

export const getSkillsByCategory = (category: Skill["category"]): Skill[] => {
  return skills.filter((skill) => skill.category === category);
};

export const getSkillsByLevel = (level: Skill["level"]): Skill[] => {
  return skills.filter((skill) => skill.level === level);
};
