'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiClock, FiTag } from 'react-icons/fi';

// Dummy blog data
const blogPosts = [
  {
    id: 1,
    title: 'Flutter 3.22: What\'s New',
    slug: 'flutter-3-22-whats-new',
    excerpt: 'Explore the latest features, performance improvements, and breaking changes in Flutter 3.22, and how to migrate your projects.',
    date: '2023-10-15',
    readTime: '6 min',
    category: 'Updates',
    tags: ['Flutter', 'Dart', 'Updates'],
    imageUrl: '/images/blogs/flutter-update.jpg',
  },
  {
    id: 2,
    title: 'Using Riverpod in Large Projects',
    slug: 'using-riverpod-in-large-projects',
    excerpt: 'Learn how to structure your Flutter application using Riverpod state management for better maintainability and scalability.',
    date: '2023-09-28',
    readTime: '8 min',
    category: 'State Management',
    tags: ['Flutter', 'Riverpod', 'State Management'],
    imageUrl: '/images/blogs/riverpod.jpg',
  },
  {
    id: 3,
    title: 'Flutter Web Performance Optimization',
    slug: 'flutter-web-performance-optimization',
    excerpt: 'Practical tips and techniques to optimize your Flutter web applications for better performance and user experience.',
    date: '2023-09-12',
    readTime: '7 min',
    category: 'Performance',
    tags: ['Flutter Web', 'Performance', 'Optimization'],
    imageUrl: '/images/blogs/performance.jpg',
  }
];

const LatestBlogs = () => {
  return (
    <section className="py-16 bg-white dark:bg-flutter-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Latest Articles</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I write about Flutter development, mobile app best practices, and the latest trends in cross-platform development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="card group overflow-hidden h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative h-48 w-full overflow-hidden rounded-t-xl bg-gray-200 dark:bg-gray-700">
                <div className="absolute inset-0 bg-flutter-blue/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">Blog Image</span>
                </div>
                {/* Uncomment when you have actual images */}
                {/* <Image 
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                /> */}
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2 space-x-4">
                  <span className="flex items-center">
                    <FiClock className="mr-1" />
                    {post.readTime}
                  </span>
                  <span className="flex items-center">
                    <FiTag className="mr-1" />
                    {post.category}
                  </span>
                </div>
                
                <Link href={`/blog/${post.slug}`} className="block group-hover:text-flutter-blue transition-colors mb-3">
                  <h3 className="text-xl font-bold text-flutter-navy dark:text-white group-hover:text-flutter-blue dark:group-hover:text-flutter-sky transition-colors">
                    {post.title}
                  </h3>
                </Link>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-flutter-blue/10 text-flutter-blue dark:bg-flutter-blue/20 dark:text-flutter-sky"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-flutter-blue dark:text-flutter-sky font-medium inline-flex items-center hover:underline mt-auto"
                >
                  Read more
                  <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/blog" className="btn-primary">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs; 