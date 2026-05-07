export const projectsData = {
  featured: [
    {
      id: 1,
      title: 'Vacation Management System',
      description:
        'Full-stack web application for managing vacations with role-based access control and admin panel. Built with React,Redux, Node.js, Sequelize, and MySQL.',
      longDescription:
        'A comprehensive vacation management system demonstrating full stack capabilities with complex features including user authentication via JWT, role-based authorization, a React admin dashboard with data visualization, and a robust RESTful API architecture',
      image: 'vacationView',
      technologies: ['React', 'Redux', 'Bootstrap', 'Sequelize', 'JWT', 'Node.js', 'Express', 'MySQL', 'Docker', 'Socket.IO', ' AWS S3', 'Joi Validation'],
      github: 'https://github.com/MichaelAlonU/45782-1-project-3',
      demo: 'https://michaelalonu.github.io/vercel-front',
      challenges: [
        'Implemented JWT-based authentication with refresh token rotation',
        'Designed role-based authorization for users and admins',
        'Built complex Redux state management for multi-step workflows',
        'Designed relational database structure and optimized queries using Sequelize ORM',
        'Implemented image upload functionality with validation',
      ],
    },
    {
      id: 2,
      title: 'AI Interactive Portfolio',
      description:
        'Conversational AI portfolio that replaces static browsing with an interactive experience powered by LLMs, voice synthesis, and session-aware dialogue.',
      longDescription:
        'Full-stack AI application designed to present projects, architecture decisions, and technical experience through natural conversation. Built with a modular backend architecture, contextual memory, voice synthesis, and production deployment considerations.',
      image: 'aiPortfolioView',
      technologies: [
        'React',
        'TypeScript',
        'FastAPI',
        'Python',
        'Groq LLM',
        'AI Voice Synthesis',
        'SQLite',
        'Render',
        'Vercel',
      ],

      github: 'https://github.com/MichaelAlonU/AI-Interactive-Portfolio',
      demo: 'https://michael-ai-interactive-portfolio.vercel.app/',

      challenges: [
        'Designed a modular conversational backend with intent-based response flow',
        'Implemented session-aware memory for contextual multi-turn conversations',
        'Integrated AI voice synthesis with provider fallback handling',
        'Solved production deployment issues across Render and Vercel environments',
        'Built structured AI responses to guide conversations toward technical topics',
      ],
    },
    {
      id: 3,
      title: 'Multi Provider AI Gateway',
      longDescription:
        'Backend oriented AI routing system with provider abstraction, fallback handling, caching, rate limiting, and latency observability.',
      image: 'aiMultiProviderView',
      technologies: ['Python', 'FastAPI', 'Rest APIs', 'JavaScript', 'HTML / CSS'],
      github: 'https://github.com/MichaelAlonU/Multi-Provider-AI-Gateway',
      challenges: [
        'Handling unreliable AI providers with automatic fallback between services',
        'Reducing redundant API calls using normalized in-memory caching',
        'Measuring and exposing latency per request for better observability',
        'Preventing abuse with IP-based rate limiting',
        'Designing a unified abstraction layer over multiple AI providers'
      ],
    },
  ],

  additional: [

    {
      id: 4,
      title: 'Car ML System',
      description: `An interactive web application that predicts used car prices using machine learning.
                    Users can submit corrections to improve the dataset and retrain the model, demonstrating a complete ML feedback loop.`,
      technologies: [`Python`, `Flask`, `Machine Learning`, `Random Forest`, `Docker`, `Docker Compose`, `REST API`, `Axios`, `HTML / CSS`],
      github: 'https://github.com/MichaelAlonU/Car-Price-Prediction-FS-ML-Project',
      features: [
        'Flask REST API serving a Random Forest prediction model',
        'Dynamic frontend inputs based on dataset relationships',
        'User feedback loop enabling dataset improvement and model retraining',
      ],
    },
  ],
};

export const skillsData = {
  frontend: [
    { name: 'React' },
    { name: 'TypeScript' },
    { name: 'Redux' },
    { name: 'React Router' },
  ],
  backend: [
    { name: 'Node.js' },
    { name: 'Express' },
    { name: 'REST API Design' },
    { name: 'FastAPI' },
    { name: 'Python' },
    { name: 'LLM Integration' },
    { name: 'JWT Authentication & Role based Authorization' },
    { name: 'MySQL' },
    { name: 'Sequelize ORM' },
    { name: 'Request Validation (Joi)' },
    { name: 'File Upload & AWS S3 Integration' },
    { name: 'Real time updates with Socket.io' },
    { name: 'AI API Orchestration' },
    { name: 'Prompt Engineering' },
    { name: 'Deployment & Environment Configuration' },

  ],
  tools: [
    { name: 'Git & GitHub' },
    { name: 'Docker & Containerization' },
    { name: 'VS Code' },
    { name: 'npm' },
    { name: 'Postman' },
    { name: 'DevTools' },
  ],
};

export const aboutContent = {
  intro:
  'Backend focused Full Stack Developer building AI-integrated web applications with Python, FastAPI, Node.js, React, and modern API architectures.',
  journey: 'Experienced in designing REST APIs, implementing authentication and authorization flows, and structuring applications with clear separation of concerns. Recently completed an intensive full stack training program with exposure to clean architecture principles and generative AI integration. \n I approach development with an emphasis on maintainability, readability, and long term scalability, with a growing interest in backend architecture and system design.',
  focus: [
    'Deepening backend architecture and system design understanding',
    'Designing well structured relational database schemas',
    'Implementing secure authentication and authorization systems',
    // `I enjoy turning complex requirements into clear, structured systems.`
  ],
};
