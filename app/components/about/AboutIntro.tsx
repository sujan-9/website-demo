'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SiFlutter, SiDart, SiFirebase, SiGithub } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const AboutIntro = () => {
  return (
    <section className="py-16 bg-white dark:bg-flutter-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-flutter-navy dark:text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-flutter-blue mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-flutter-blue/20 to-flutter-teal/20 flex items-center justify-center rounded-2xl">
                <span className="text-2xl font-bold text-flutter-blue">Profile Photo</span>
              </div>
              {/* Replace with actual image when available */}
              {/* <Image 
                src="/images/profile.jpg" 
                alt="Flutter Developer" 
                fill
                className="object-cover rounded-2xl"
              /> */}
            </div>
            
            {/* Decorator */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-flutter-blue/10 rounded-full z-0"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-flutter-teal/10 rounded-full z-0"></div>
          </motion.div>
          
          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-flutter-navy dark:text-white mb-4">
              Flutter Developer & UI/UX Enthusiast
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Hi there! I'm a passionate Flutter developer with extensive experience in creating beautiful, 
              responsive, and performant cross-platform applications. My journey with Flutter began in 2018,
              and I've been crafting exceptional mobile and web experiences ever since.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I specialize in developing scalable applications with clean architecture, ensuring maintainable 
              and testable code. I'm particularly passionate about animations, custom UI components, and 
              optimizing app performance to provide the best user experience possible.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              When I'm not coding, you'll find me exploring new tech, contributing to open-source projects, 
              or sharing my knowledge through blog posts and community forums.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <div>
                <h3 className="text-lg font-semibold text-flutter-navy dark:text-white mb-2">Primary Stack</h3>
                <div className="flex space-x-4">
                  <div className="flex flex-col items-center">
                    <SiFlutter className="w-8 h-8 text-flutter-blue mb-1" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Flutter</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiDart className="w-8 h-8 text-flutter-teal mb-1" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Dart</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiFirebase className="w-8 h-8 text-flutter-yellow mb-1" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Firebase</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-flutter-navy dark:text-white mb-2">Tools</h3>
                <div className="flex space-x-4">
                  <div className="flex flex-col items-center">
                    <VscCode className="w-8 h-8 text-blue-500 mb-1" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">VS Code</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiGithub className="w-8 h-8 text-gray-800 dark:text-white mb-1" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">GitHub</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro; 