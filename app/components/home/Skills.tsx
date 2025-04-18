'use client';

import { motion } from 'framer-motion';
import { 
  SiFlutter, 
  SiDart, 
  SiFirebase, 
  SiGithub, 
  SiAndroid,
  SiIos,
  SiGooglecloud,
  SiAdobexd,
  SiFigma 
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

// Skill data
const skills = [
  { name: 'Flutter', icon: SiFlutter, color: 'text-flutter-blue' },
  { name: 'Dart', icon: SiDart, color: 'text-flutter-teal' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-flutter-yellow' },
  { name: 'Android', icon: SiAndroid, color: 'text-green-500' },
  { name: 'iOS', icon: SiIos, color: 'text-gray-400' },
  { name: 'VS Code', icon: VscCode, color: 'text-blue-500' },
  { name: 'GitHub', icon: SiGithub, color: 'text-gray-800 dark:text-white' },
  { name: 'Google Cloud', icon: SiGooglecloud, color: 'text-red-500' },
  { name: 'Adobe XD', icon: SiAdobexd, color: 'text-pink-500' },
  { name: 'Figma', icon: SiFigma, color: 'text-purple-500' },
];

export default function Skills() {
  return (
    <section className="py-16 bg-white dark:bg-flutter-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">My Tech Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            As a Flutter developer, I specialize in creating cross-platform mobile applications 
            with a focus on performance and beautiful UI. Here are the technologies I work with:
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-md transition-all"
                variants={itemVariants}
              >
                <IconComponent className={`w-12 h-12 ${skill.color} mb-4`} />
                <span className="font-medium text-gray-900 dark:text-white">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
} 