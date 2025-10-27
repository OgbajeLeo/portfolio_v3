export interface Experience {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  technologies: string[];
  achievements: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  gpa?: string;
  relevantCoursework?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
}

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    website: string;
    linkedin: string;
    github: string;
    summary: string;
  };
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  skills: {
    technical: string[];
    soft: string[];
  };
  languages: {
    name: string;
    proficiency: 'Native' | 'Fluent' | 'Conversational' | 'Basic';
  }[];
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: 'Ogbaje Leo Arome',
    title: 'Frontend Web Developer & Software Engineer',
    email: 'leonardaromeh@gmail.com',
    phone: '+234 (0)9036787860 ',
    location: 'Abuja, Nigeria',
    website: 'https://omogbaje.vercel.app',
    linkedin: 'https://linkedin.com/in/ogbajeleo',
    github: 'https://github.com/ogbajeleo',
    summary: 'Passionate Frontend Web Developer with 3+ years of experience building end-to-end web applications. Specialized in React, Next.js,Vue.js Node.js, and TypeScript with expertise in frontend development. Proven track record of delivering scalable solutions and collaborating effectively with cross-functional teams.'
  },
  experience: [
    {
      company: 'Sora Financials Technology (SFx)',
      position: 'Frontend Developer',
      location: 'Cyprus',
      startDate: 'January 2024',
      endDate: 'Present',
      description: [
        'Lead frontend development for multiple client projects using React, Next.js, Node.js, and TypeScript',
        'Implement RESTful APIs and database schemas for scalable web applications',
        'Collaborate with UX/UI designers to implement pixel-perfect, responsive designs',
        'Optimize application performance resulting in 40% faster load times',
        'Mentor junior developers and conduct code reviews to maintain high code quality standards',
        'Implement modern development practices including CI/CD pipelines and automated testing'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'TailwindCSS', 'SmileID', 'Sumsub', 'Jest', 'Cypress'],
      achievements: [
        'Improved application performance by 40% through code optimization',
        'Led team of 3 frontend developers on major project',
        'Implemented automated testing reducing bugs by 60%'
      ]
    },
    {
      company: 'Gen6ixx Venture',
      position: 'Frontend Developer (Freelancer)',
      location: 'Remote, Nigeria',
      startDate: 'January 2024',
      endDate: 'March 2024',
      description: [
        'Developed web applications for various clients using modern JavaScript frameworks',
        'Built RESTful APIs and integrated with frontend applications using Node.js and Express',
        'Implemented state management solutions using Redux and Context API',
        'Designed and optimized database schemas for improved application performance',
        'Worked with design teams to ensure consistent user experience across all platforms',
        'Participated in agile development processes and sprint planning'
      ],
      technologies: ['React', 'Vue.js', 'Node.js', 'JavaScript', 'Redux', 'REST APIs', 'MongoDB', 'SASS', 'Webpack'],
      achievements: [
        'Delivered 15+ client projects on time and within budget',
        'Improved team productivity by implementing reusable component library',
        'Received client satisfaction rating of 4.8/5.0'
      ]
    },
    {
      company: 'Trendx',
      position: 'Frontend Developer',
      location: 'Cross River, Nigeria',
      startDate: 'January 2024',
      endDate: 'March 2024',
      description: [
        'Developed web applications for various clients using modern JavaScript frameworks',
        'Built RESTful APIs and integrated with frontend applications using Node.js and Express',
        'Implemented state management solutions using Redux and Context API',
        'Designed and optimized database schemas for improved application performance',
        'Worked with design teams to ensure consistent user experience across all platforms',
        'Participated in agile development processes and sprint planning'
      ],
      technologies: ['React', 'Vue.js', 'Node.js', 'JavaScript', 'Redux', 'REST APIs', 'MongoDB', 'SASS', 'Webpack'],
      achievements: [
        'Delivered 15+ client projects on time and within budget',
        'Improved team productivity by implementing reusable component library',
        'Received client satisfaction rating of 4.8/5.0'
      ]
    },
    {
      company: 'StartupXYZ',
      position: 'Junior Full-Stack Developer',
      location: 'Remote',
      startDate: 'January 2021',
      endDate: 'May 2021',
      description: [
        'Assisted in developing full-stack web applications using React, Node.js, and modern CSS',
        'Participated in API development and database design for web applications',
        'Participated in code reviews and learned best practices from senior developers',
        'Contributed to bug fixes and feature implementations',
        'Worked with version control systems and collaborative development workflows'
      ],
      technologies: ['React', 'Node.js', 'HTML5', 'CSS3', 'JavaScript', 'MongoDB', 'Git', 'GitHub'],
      achievements: [
        'Successfully completed 3-month internship program',
        'Contributed to 5+ feature implementations',
        'Demonstrated strong learning ability and technical growth'
      ]
    }
  ],
  education: [
    {
      institution: 'The Federal Polytechnic Idah',
      degree: 'Higher National Diploma',
      field: 'Computer Science',
      location: 'Idah, Kogi State, Nigeria',
      startDate: 'November 2019',
      endDate: '20th January, 2022',
      gpa: '3.77/4.0',
      relevantCoursework: [
        'Data Structures and Algorithms',
        'Software Engineering',
        'Database Systems',
        'Web Development',
        'System Design & Architecture',
        'Expert System',
        'Mobile Application Development',
        'Human-Computer Interaction'
      ]
    }
  ],
  certifications: [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'March 2023',
      credentialId: 'AWS-CCP-123456',
      url: 'https://aws.amazon.com/verification'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta (Facebook)',
      date: 'January 2023',
      url: 'https://coursera.org/verify/certificate'
    },
    {
      name: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: 'November 2022',
      url: 'https://freecodecamp.org/certification'
    }
  ],
  skills: {
    technical: [
      'React & Next.js', 'TypeScript & JavaScript', 'Node.js & Express.js',
      'TailwindCSS & CSS3', 'HTML5', 'REST APIs & GraphQL', 'MongoDB & PostgreSQL',
      'Firebase & Supabase', 'Git & GitHub', 'AWS & Vercel',
      'Figma', 'Jest & Cypress', 'Webpack & Vite'
    ],
    soft: [
      'Problem Solving', 'Team Collaboration', 'Communication', 'Time Management',
      'Adaptability', 'Leadership', 'Mentoring', 'Project Management',
      'Client Relations', 'Continuous Learning', 'Attention to Detail'
    ]
  },
  languages: [
    { name: 'English', proficiency: 'Native' },
  
  ]
};
