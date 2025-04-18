'use client';

import { motion } from 'framer-motion';

// Experience data
const experiences = [
  {
    id: 1,
    title: 'Senior Flutter Developer',
    company: 'Tech Solutions Inc.',
    period: '2021 - Present',
    description: 'Leading development of complex Flutter applications for enterprise clients. Implementing clean architecture and best practices for large-scale applications. Mentoring junior developers and conducting code reviews.',
    achievements: [
      'Improved app performance by 40% through code optimization and implementing best practices',
      'Led development of 5+ successful Flutter applications deployed to both iOS and Android platforms',
      'Implemented CI/CD pipelines reducing build and deployment time by 60%'
    ]
  },
  {
    id: 2,
    title: 'Flutter Developer',
    company: 'Mobile Innovations Lab',
    period: '2019 - 2021',
    description: 'Developed cross-platform mobile applications using Flutter and Dart. Integrated Firebase services and implemented complex state management solutions.',
    achievements: [
      'Built and shipped 3 commercial Flutter applications with 100k+ downloads',
      'Designed and implemented custom UI components and animations',
      'Integrated RESTful APIs and GraphQL services with Flutter'
    ]
  },
  {
    id: 3,
    title: 'Mobile App Developer',
    company: 'StartUp Studio',
    period: '2018 - 2019',
    description: 'Worked on various mobile applications using different technologies. Transitioned to Flutter development after its stable release.',
    achievements: [
      'Successfully migrated a native Android app to Flutter, reducing codebase size by 40%',
      'Collaborated closely with designers to implement pixel-perfect UI',
      'Participated in agile development process, sprint planning and retrospectives'
    ]
  }
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Work Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey as a Flutter developer and the companies I've worked with.
          </p>
        </div>
        
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp) => (
            <motion.div 
              key={exp.id}
              className="bg-white dark:bg-flutter-dark rounded-xl shadow-md p-6 md:p-8"
              variants={itemVariants}
            >
              <div className="md:flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-flutter-navy dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-flutter-blue dark:text-flutter-sky font-medium">
                    {exp.company}
                  </p>
                </div>
                <div className="mt-2 md:mt-0 inline-block px-3 py-1 rounded-full bg-flutter-blue/10 text-flutter-blue dark:bg-flutter-blue/20 dark:text-flutter-sky text-sm font-medium">
                  {exp.period}
                </div>
              </div>
              
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                {exp.description}
              </p>
              
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-3">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-flutter-blue">•</span>
                      <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 