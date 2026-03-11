export const projectsData = {
  featured: {
    id: 1,
    title: 'Vacation Management System',
    description: 'Full-stack web application for managing vacations with role-based access control and admin panel. Built with React,Redux, Node.js, Sequelize, and MySQL.',
    longDescription: 'A comprehensive vacation management system demonstrating full stack capabilities with complex features including user authentication via JWT, role-based authorization, a React admin dashboard with data visualization, and a robust RESTful API architecture',
    technologies: ['React', 'Redux', 'Bootstrap', 'Sequelize', 'JWT', 'Node.js', 'Express', 'MySQL', 'Docker', 'Socket.IO' , ' AWS S3', 'Joi Validation'],
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
  additional: [
    {
      id: 2,
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
    {
      id: 3,
      title: 'RAG Support Bot',
      description: 'An AI-powered support bot that utilizes Retrieval-Augmented Generation (RAG) to provide accurate and contextually relevant responses to user queries.',
      technologies: ['React', 'Node.js', 'Python', 'Express'],
      github: 'https://github.com/MichaelAlonU/RAG-Support-Bot',
      features: [
        'Integrates a RAG model to retrieve relevant information from a knowledge base and generate responses',
        'Provides a user-friendly interface for submitting queries and receiving AI-generated responses',
        'Demonstrates the application of RAG in a practical support bot scenario',
        `Currently WIP - Stay tuned for updates!`         
      ],
    },
  ],
};

export const skillsData = {
  frontend: [
    { name: 'React' },
    { name: 'TypeScript' },
    { name: 'Redux' },
    // { name: 'Responsive UI Design' },
    { name: 'React Router' },
  ],
  backend: [
    { name: 'Node.js' },
    { name: 'Express' },
    { name: 'REST API Design' },
    { name: 'JWT Authentication & Role based Authorization' },
    { name: 'MySQL' },
    { name: 'Sequelize ORM' },
    { name: 'Request Validation (Joi)' },
    { name: 'File Upload & AWS S3 Integration' },
    { name: 'Real time updates with Socket.io' },

  ],
  tools: [
    { name: 'Git & GitHub' },
    { name: 'Docker (basic)' },
    { name: 'VS Code' },
    { name: 'npm' },
    { name: 'Postman' },
    { name: 'DevTools' },
  ],
};

export const aboutContent = {
  intro: 'Full Stack Developer with a strong backend focus, building web applications primarily with Node.js, Express, and MySQL.',
  journey: 'Experienced in designing REST APIs, implementing authentication and authorization flows, and structuring applications with clear separation of concerns. Recently completed an intensive full stack training program with exposure to clean architecture principles and generative AI integration. \n I approach development with an emphasis on maintainability, readability, and long term scalability, with a growing interest in backend architecture and system design.',
  focus: [
    'Deepening backend architecture and system design understanding',
    'Designing well structured relational database schemas',
    'Implementing secure authentication and authorization systems',
    // `I enjoy turning complex requirements into clear, structured systems.`
  ],
};
