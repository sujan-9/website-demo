'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'Flutter E-Commerce App',
    description: 'A modern e-commerce mobile application built with Flutter, Firebase, and Riverpod. Features include user authentication, product browsing, cart management, and secure checkout.',
    tags: ['Flutter', 'Firebase', 'Riverpod', 'Stripe'],
    imageUrl: '/images/projects/ecommerce-app.jpg',
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: 2,
    title: 'Task Management Dashboard',
    description: 'A sophisticated task management application with real-time updates, team collaboration features, and customizable workflows. Built with Flutter Web and Firebase.',
    tags: ['Flutter Web', 'Firebase', 'Provider', 'Material Design'],
    imageUrl: '/images/projects/task-dashboard.jpg',
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: 3,
    title: 'Flutter Weather App',
    description: 'A beautiful weather application with animated transitions, detailed forecasts, and location-based services. Uses OpenWeatherMap API and follows clean architecture.',
    tags: ['Flutter', 'API Integration', 'Animations', 'Clean Architecture'],
    imageUrl: '/images/projects/weather-app.jpg',
    githubUrl: '#',
    liveUrl: '#'
  }
];

const FeaturedProjects = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent Flutter projects that showcase my skills and expertise 
            in building beautiful, functional, and performant applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="card group overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative h-48 w-full overflow-hidden rounded-t-xl bg-gray-200 dark:bg-gray-700">
                <div className="absolute inset-0 bg-flutter-blue/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">Project Image</span>
                </div>
                {/* Uncomment when you have actual images */}
                {/* <Image 
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                /> */}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-flutter-navy dark:text-flutter-sky">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-flutter-blue dark:text-gray-300 dark:hover:text-flutter-sky"
                      aria-label="GitHub repository"
                    >
                      <FiGithub className="h-5 w-5" />
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-flutter-blue dark:text-gray-300 dark:hover:text-flutter-sky"
                      aria-label="Live demo"
                    >
                      <FiExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-flutter-blue/10 text-flutter-blue dark:bg-flutter-blue/20 dark:text-flutter-sky"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/about#portfolio" className="btn-outline">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects; 