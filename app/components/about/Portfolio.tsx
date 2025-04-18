'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';

// Portfolio data with more projects
const allProjects = [
  {
    id: 1,
    title: 'Flutter E-Commerce App',
    category: 'Mobile App',
    description: 'A fully-featured e-commerce application with product browsing, cart management, secure checkout, and order tracking. Built with Flutter and Firebase.',
    tags: ['Flutter', 'Firebase', 'Riverpod', 'Stripe'],
    imageUrl: '/images/projects/ecommerce-app.jpg',
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: 2,
    title: 'Task Management Dashboard',
    category: 'Web App',
    description: 'A sophisticated task management application with real-time updates, team collaboration features, and customizable workflows. Built with Flutter Web and Firebase.',
    tags: ['Flutter Web', 'Firebase', 'Provider', 'Material Design'],
    imageUrl: '/images/projects/task-dashboard.jpg',
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: 3,
    title: 'Flutter Weather App',
    category: 'Mobile App',
    description: 'A beautiful weather application with animated transitions, detailed forecasts, and location-based services. Uses OpenWeatherMap API and follows clean architecture.',
    tags: ['Flutter', 'API Integration', 'Animations', 'Clean Architecture'],
    imageUrl: '/images/projects/weather-app.jpg',
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: 4,
    title: 'Social Networking Platform',
    category: 'Mobile App',
    description: 'A social platform for connecting with friends, sharing content, and messaging. Features include real-time chat, media sharing, and notifications.',
    tags: ['Flutter', 'Firebase', 'Cloud Functions', 'GetX'],
    imageUrl: '/images/projects/social-app.jpg',
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: 5,
    title: 'Fitness Tracker',
    category: 'Mobile App',
    description: 'A comprehensive fitness tracking application with workout plans, progress monitoring, and health stats visualization. Integrates with health services.',
    tags: ['Flutter', 'Health API', 'Charts', 'SQLite'],
    imageUrl: '/images/projects/fitness-app.jpg',
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: 6,
    title: 'Recipe Finder',
    category: 'Mobile App',
    description: 'A recipe discovery app allowing users to find recipes based on ingredients they have, dietary restrictions, and cuisine preferences.',
    tags: ['Flutter', 'REST API', 'Bloc', 'Animations'],
    imageUrl: '/images/projects/recipe-app.jpg',
    githubUrl: '#',
    liveUrl: '#'
  }
];

// Filter categories
const categories = ['All', 'Mobile App', 'Web App', 'UI Kit'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [projects, setProjects] = useState(allProjects);
  
  // Filter projects by category
  const filterProjects = (category: string) => {
    setActiveCategory(category);
    
    if (category === 'All') {
      setProjects(allProjects);
    } else {
      const filtered = allProjects.filter(project => project.category === category);
      setProjects(filtered);
    }
  };
  
  return (
    <section id="portfolio" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">My Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A selection of Flutter projects that showcase my skills and expertise.
          </p>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-flutter-blue text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-flutter-blue/10 dark:hover:bg-flutter-blue/20'
              }`}
              onClick={() => filterProjects(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-flutter-dark rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                <div className="absolute inset-0 bg-flutter-blue/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">Project Image</span>
                </div>
                {/* Uncomment when you have actual images */}
                {/* <Image 
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                /> */}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-flutter-navy dark:text-flutter-sky">
                    {project.title}
                  </h3>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-flutter-blue/10 text-flutter-blue dark:bg-flutter-blue/20 dark:text-flutter-sky">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-flutter-blue dark:text-gray-300 dark:hover:text-flutter-sky flex items-center"
                    aria-label="GitHub repository"
                  >
                    <FiGithub className="h-5 w-5 mr-1" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-flutter-blue dark:text-gray-300 dark:hover:text-flutter-sky flex items-center"
                    aria-label="Live demo"
                  >
                    <span className="text-sm">Demo</span>
                    <FiExternalLink className="h-5 w-5 ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 