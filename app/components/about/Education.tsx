'use client';

import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiCalendar } from 'react-icons/fi';

// Education data
const education = [
  {
    id: 1,
    degree: 'Master of Computer Science',
    institution: 'University of Technology',
    period: '2016 - 2018',
    description: 'Specialized in Mobile Computing and Application Development. Thesis focused on optimizing performance in cross-platform mobile applications.'
  },
  {
    id: 2,
    degree: 'Bachelor of Computer Science',
    institution: 'State University',
    period: '2012 - 2016',
    description: 'Graduated with Honors. Courses included Data Structures, Algorithms, Software Engineering, and Mobile Application Development.'
  }
];

// Certification data
const certifications = [
  {
    id: 1,
    name: 'Flutter Certified Developer',
    issuer: 'Google',
    date: 'May 2020',
    credentialUrl: '#'
  },
  {
    id: 2,
    name: 'Firebase Developer Certification',
    issuer: 'Google Cloud',
    date: 'August 2021',
    credentialUrl: '#'
  },
  {
    id: 3,
    name: 'Mobile Application Architecture',
    issuer: 'Coursera',
    date: 'January 2019',
    credentialUrl: '#'
  }
];

const Education = () => {
  return (
    <section className="py-16 bg-white dark:bg-flutter-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Education & Certifications</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My academic background and professional certifications that help me excel as a Flutter developer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center mb-8">
              <FiBookOpen className="w-8 h-8 text-flutter-blue mr-3" />
              <h3 className="text-2xl font-bold text-flutter-navy dark:text-white">
                Education
              </h3>
            </div>
            
            <div className="space-y-8">
              {education.map((item) => (
                <div key={item.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-bold text-flutter-navy dark:text-white">
                      {item.degree}
                    </h4>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <FiCalendar className="mr-1" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-flutter-blue dark:text-flutter-sky font-medium mt-1">
                    {item.institution}
                  </p>
                  
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center mb-8">
              <FiAward className="w-8 h-8 text-flutter-teal mr-3" />
              <h3 className="text-2xl font-bold text-flutter-navy dark:text-white">
                Certifications
              </h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-bold text-flutter-navy dark:text-white">
                    {cert.name}
                  </h4>
                  
                  <div className="flex justify-between mt-2">
                    <p className="text-flutter-blue dark:text-flutter-sky font-medium">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {cert.date}
                    </p>
                  </div>
                  
                  <div className="mt-4">
                    <a 
                      href={cert.credentialUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-flutter-blue dark:text-flutter-sky font-medium text-sm hover:underline inline-flex items-center"
                    >
                      View Credential
                      <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education; 