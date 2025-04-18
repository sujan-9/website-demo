'use client';

import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiGithub, FiTwitter, FiLinkedin, FiCodepen } from 'react-icons/fi';

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white dark:bg-flutter-dark rounded-xl shadow-md p-6 md:p-8"
    >
      <h2 className="text-2xl font-bold text-flutter-navy dark:text-white mb-6">
        Contact Information
      </h2>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <FiMail className="h-6 w-6 text-flutter-blue mt-1 mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Email
            </h3>
            <a 
              href="mailto:contact@flutterdev.com" 
              className="text-gray-600 dark:text-gray-300 hover:text-flutter-blue dark:hover:text-flutter-sky"
            >
              contact@flutterdev.com
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <FiMapPin className="h-6 w-6 text-flutter-blue mt-1 mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Location
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              San Francisco, CA, United States
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Connect With Me
        </h3>
        
        <div className="flex space-x-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-flutter-blue hover:text-white dark:hover:bg-flutter-blue transition-colors"
            aria-label="GitHub"
          >
            <FiGithub className="h-6 w-6" />
          </a>
          
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-flutter-blue hover:text-white dark:hover:bg-flutter-blue transition-colors"
            aria-label="Twitter"
          >
            <FiTwitter className="h-6 w-6" />
          </a>
          
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-flutter-blue hover:text-white dark:hover:bg-flutter-blue transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="h-6 w-6" />
          </a>
          
          <a 
            href="https://codepen.io" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-flutter-blue hover:text-white dark:hover:bg-flutter-blue transition-colors"
            aria-label="CodePen"
          >
            <FiCodepen className="h-6 w-6" />
          </a>
        </div>
      </div>
      
      <div className="mt-10 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <h3 className="text-lg font-semibold text-flutter-navy dark:text-white mb-3">
          Availability
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          I'm currently available for freelance work and consulting. 
          If you have a project that needs Flutter expertise, let's talk!
        </p>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Available for new projects
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo; 