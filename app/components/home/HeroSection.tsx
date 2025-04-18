'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SiFlutter, SiDart, SiFirebase } from 'react-icons/si';

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
          <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-flutter-blue to-flutter-teal opacity-30"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text content */}
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="block">Flutter Developer</span>
              <span className="flutter-gradient-text">Building Beautiful Apps</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              Hi! I'm a passionate Flutter developer creating beautiful, responsive, 
              and performant cross-platform applications with modern UI/UX.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link href="/blog" className="btn-outline">
                Read My Blog
              </Link>
            </div>
            
            <div className="mt-8 flex items-center gap-4 justify-center md:justify-start">
              <span className="text-gray-600 dark:text-gray-400">Tech Stack:</span>
              <div className="flex gap-4">
                <SiFlutter className="w-8 h-8 text-flutter-blue" title="Flutter" />
                <SiDart className="w-8 h-8 text-flutter-teal" title="Dart" />
                <SiFirebase className="w-8 h-8 text-flutter-yellow" title="Firebase" />
              </div>
            </div>
          </motion.div>
          
          {/* Image/Illustration */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[400px] w-full">
              {/* Placeholder for actual image - replace with your own */}
              <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-gradient-to-r from-flutter-blue/10 to-flutter-teal/10 p-2">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-flutter-blue rounded-full opacity-10 animate-pulse"></div>
                  <SiFlutter className="w-32 h-32 md:w-48 md:h-48 text-flutter-blue relative z-10" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path 
            fill="currentColor" 
            className="text-white dark:text-flutter-dark fill-current"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z">
          </path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection; 