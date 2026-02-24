export const projectsData = {
  featured: {
    id: 1,
    title: 'Vacation Management System',
    description: 'Full-stack web application for managing vacations with role-based access control and admin panel. Built with React,Redux, Node.js, Sequelize, and MySQL.',
    longDescription: 'A comprehensive vacation management system demonstrating full-stack capabilities with complex features including user authentication via JWT, role-based authorization, React admin dashboard with data visualization, RESTful API design, and solid database architecture with Sequelize ORM.',
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'JWT', 'Bootstrap'],
    github: 'https://github.com/michaeluzn/vacation-management-system',
    demo: '#',
    challenges: [
      'Implemented JWT-based authentication with refresh token rotation',
      'Designed role-based authorization for users and admins',
      'Built complex Redux state management for multi-step workflows',
      'Optimized MySQL queries and created proper database indexes',
      'Implemented image upload functionality with validation',
    ],
  },
  additional: [
    {
      id: 2,
      title: 'Task Management Application',
      description: 'React-based task management tool with real-time updates and filter functionality.',
      technologies: ['React', 'Context API', 'LocalStorage', 'Bootstrap'],
      github: 'https://github.com/michaeluzn/task-manager',
      features: [
        'Create, update, and delete tasks with persistence',
        'Filter tasks by status and priority',
        'Responsive design optimized for mobile',
      ],
    },
    {
      id: 3,
      title: 'Store Management System',
      description: 'Mini inventory management system showcasing data structure and CRUD operations.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/michaeluzn/store-manager',
      features: [
        'Product inventory tracking',
        'Stock level alerts',
        'Sales reporting dashboard',
      ],
    },
  ],
};

export const skillsData = {
  frontend: [
    { name: 'React', level: 90 },
    { name: 'Redux', level: 85 },
    { name: 'Bootstrap', level: 88 },
    { name: 'JavaScript ES6+', level: 90 },
    { name: 'Responsive Design', level: 88 },
    { name: 'React Router', level: 85 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 85 },
    { name: 'MySQL', level: 80 },
    { name: 'Sequelize ORM', level: 82 },
    { name: 'REST APIs', level: 87 },
    { name: 'JWT Authentication', level: 86 },
  ],
  tools: [
    { name: 'Git & GitHub', level: 85 },
    { name: 'VS Code', level: 90 },
    { name: 'npm / yarn', level: 88 },
    { name: 'Postman', level: 82 },
    { name: 'DevTools', level: 87 },
  ],
};

export const aboutContent = {
  intro: 'Full Stack Developer specialized in building scalable, maintainable applications with React and Node.js. Recently completed intensive training focused on clean architecture and best practices.',
  journey: 'My development journey has been centered on understanding how to build products that are both performant and maintainable. I\'m particularly passionate about writing clean code, implementing proper separation of concerns, and creating intuitive user experiences.',
  focus: [
    'Building robust REST APIs with Node.js and Express',
    'Creating responsive, user-centric interfaces with React',
    'Designing clean database schemas with proper normalization',
    'Implementing secure authentication and authorization systems',
    'Writing maintainable code following SOLID principles',
  ],
};
