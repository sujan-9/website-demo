'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-flutter-blue to-flutter-teal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Your Next Flutter Project Together
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ready to bring your app idea to life? I specialize in creating beautiful, 
            fast, and reliable Flutter applications for mobile, web, and desktop platforms.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-3 rounded-lg bg-white text-flutter-blue font-bold hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
            <Link 
              href="/about" 
              className="px-8 py-3 rounded-lg border-2 border-white text-white font-bold hover:bg-white/10 transition-colors"
            >
              Learn More About Me
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction; 