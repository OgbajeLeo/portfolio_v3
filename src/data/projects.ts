export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  isNDA?: boolean;
  features: string[];
  challenges: string[];
  lessons: string[];
  category: 'web' | 'mobile' | 'fullstack' | 'frontend' | 'backend';
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A comprehensive full-stack e-commerce platform with modern UI and robust backend systems.',
    longDescription: 'Built a complete e-commerce solution using Next.js, Node.js, TypeScript, and Stripe for payments. The platform features user authentication, product management, shopping cart functionality, and order processing. Implemented responsive design with TailwindCSS, built RESTful APIs with Express.js, and integrated with PostgreSQL database for data persistence.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    technologies: ['Next.js', 'Node.js', 'TypeScript', 'TailwindCSS', 'Express.js', 'Stripe', 'Prisma', 'PostgreSQL'],
    liveUrl: 'https://demo-ecommerce.com',
    githubUrl: 'https://github.com/ogbajeleo/ecommerce-platform',
    features: [
      'User authentication and authorization',
      'Product catalog with search and filtering',
      'Shopping cart and checkout process',
      'Payment integration with Stripe',
      'Admin dashboard for product management',
      'Order tracking and history'
    ],
    challenges: [
      'Implementing secure payment processing',
      'Optimizing database queries for large product catalogs',
      'Creating responsive design for all devices',
      'Managing state across complex user flows'
    ],
    lessons: [
      'Learned advanced Next.js patterns and optimization techniques',
      'Gained experience with payment processing and security',
      'Improved understanding of database design and optimization',
      'Enhanced skills in responsive design and user experience'
    ],
    category: 'fullstack',
    featured: true
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    description: 'A comprehensive full-stack task management application with real-time collaboration and team features.',
    longDescription: 'Developed a complete task management solution using React, Node.js, Express.js, and Socket.io for real-time collaboration. The application includes project organization, task assignment, deadline tracking, and team communication features. Built RESTful APIs for data management and implemented real-time updates with WebSocket connections.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    technologies: ['React', 'Node.js', 'Express.js', 'Socket.io', 'MongoDB', 'Material-UI'],
    liveUrl: 'https://demo-tasks.com',
    githubUrl: 'https://github.com/ogbajeleo/task-management',
    features: [
      'Real-time task updates and notifications',
      'Team collaboration and assignment',
      'Project organization and categorization',
      'Deadline tracking and reminders',
      'File attachments and comments',
      'Progress analytics and reporting'
    ],
    challenges: [
      'Implementing real-time synchronization',
      'Managing complex state with multiple users',
      'Optimizing performance with large datasets',
      'Creating intuitive user interface'
    ],
    lessons: [
      'Mastered real-time web technologies',
      'Improved understanding of WebSocket implementation',
      'Enhanced skills in state management and data synchronization',
      'Gained experience in collaborative application design'
    ],
    category: 'fullstack',
    featured: true
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with location-based forecasts and interactive maps.',
    longDescription: 'Created a responsive weather dashboard using React and various weather APIs. The application provides current weather conditions, 7-day forecasts, and interactive maps. Features include location search, weather alerts, and customizable themes. Built with a focus on performance and user experience.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
    technologies: ['React', 'TypeScript', 'Chart.js', 'OpenWeather API', 'Mapbox', 'TailwindCSS'],
    liveUrl: 'https://demo-weather.com',
    githubUrl: 'https://github.com/ogbajeleo/weather-dashboard',
    features: [
      'Current weather and detailed forecasts',
      'Interactive weather maps',
      'Location search and favorites',
      'Weather alerts and notifications',
      'Responsive design for all devices',
      'Customizable themes and preferences'
    ],
    challenges: [
      'Integrating multiple weather APIs',
      'Creating smooth map interactions',
      'Optimizing API calls and caching',
      'Designing intuitive data visualization'
    ],
    lessons: [
      'Gained experience with external API integration',
      'Improved skills in data visualization',
      'Enhanced understanding of responsive design',
      'Learned advanced React patterns and optimization'
    ],
    category: 'frontend',
    featured: true
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing my work and skills.',
    longDescription: 'Designed and developed a personal portfolio website using Next.js and Framer Motion for animations. The site features a clean, modern design with smooth animations, project showcases, and contact functionality. Built with SEO optimization and performance in mind.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'TailwindCSS', 'EmailJS'],
    liveUrl: 'https://omogbaje.vercel.app',
    githubUrl: 'https://github.com/ogbajeleo/portfolio',
    features: [
      'Responsive design for all devices',
      'Smooth animations and transitions',
      'Project showcase with detailed views',
      'Contact form with email integration',
      'SEO optimized for search engines',
      'Dark/light mode toggle'
    ],
    challenges: [
      'Creating engaging animations without affecting performance',
      'Implementing responsive design across all devices',
      'Optimizing for SEO and search engine visibility',
      'Integrating contact form functionality'
    ],
    lessons: [
      'Mastered modern web development practices',
      'Improved skills in animation and user experience',
      'Enhanced understanding of SEO and performance optimization',
      'Gained experience in portfolio design and development'
    ],
    category: 'frontend',
    featured: false
  },
  {
    id: 'restaurant-booking',
    title: 'Restaurant Booking System',
    description: 'A comprehensive restaurant booking and management system with admin dashboard.',
    longDescription: 'Developed a full-stack restaurant booking system with customer-facing booking interface and admin dashboard for restaurant management. Features include table availability, reservation management, customer notifications, and analytics. Built with scalability and user experience in mind.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Express', 'Socket.io', 'Bootstrap'],
    liveUrl: 'https://demo-restaurant.com',
    isNDA: true,
    features: [
      'Table availability and booking system',
      'Customer reservation management',
      'Admin dashboard for restaurant staff',
      'Real-time notifications and updates',
      'Analytics and reporting',
      'Multi-restaurant support'
    ],
    challenges: [
      'Managing complex booking logic and availability',
      'Implementing real-time updates for table status',
      'Creating intuitive admin interface',
      'Handling concurrent booking requests'
    ],
    lessons: [
      'Gained experience in complex business logic implementation',
      'Improved skills in real-time application development',
      'Enhanced understanding of database design for booking systems',
      'Learned advanced Vue.js patterns and optimization'
    ],
    category: 'fullstack',
    featured: true
  },
  {
    id: 'mobile-fitness-app',
    title: 'Fitness Tracking App',
    description: 'A mobile fitness tracking application with workout plans and progress monitoring.',
    longDescription: 'Built a cross-platform fitness tracking application using React Native. The app includes workout tracking, exercise libraries, progress monitoring, and social features. Features personalized workout plans, nutrition tracking, and community challenges.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo', 'Chart.js'],
    liveUrl: 'https://demo-fitness.com',
    githubUrl: 'https://github.com/ogbajeleo/fitness-app',
    features: [
      'Workout tracking and exercise library',
      'Progress monitoring and analytics',
      'Personalized workout plans',
      'Nutrition tracking and meal planning',
      'Social features and challenges',
      'Offline functionality and sync'
    ],
    challenges: [
      'Implementing offline functionality',
      'Creating smooth animations for workout tracking',
      'Managing complex state with Redux',
      'Optimizing performance for mobile devices'
    ],
    lessons: [
      'Mastered React Native development patterns',
      'Gained experience with mobile app optimization',
      'Improved skills in offline-first application design',
      'Enhanced understanding of mobile user experience'
    ],
    category: 'mobile',
    featured: false
  }
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.id === slug);
};

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(project => project.category === category);
};
