'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiClock } from 'react-icons/fi';

type Post = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  imageUrl: string;
};

type RelatedPostsProps = {
  posts: Post[];
};

const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  if (!posts || posts.length === 0) return null;
  
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-flutter-navy dark:text-white mb-8">
          Related Articles
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.article
              key={post.id}
              className="bg-white dark:bg-flutter-dark rounded-xl shadow-md overflow-hidden h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
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
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <FiClock className="mr-1" />
                  <span>{post.readTime} read</span>
                </div>
                
                <Link href={`/blog/${post.slug}`} className="block group-hover:text-flutter-blue transition-colors mb-3">
                  <h3 className="text-xl font-bold text-flutter-navy dark:text-white group-hover:text-flutter-blue dark:group-hover:text-flutter-sky transition-colors">
                    {post.title}
                  </h3>
                </Link>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-flutter-blue dark:text-flutter-sky font-medium text-sm inline-flex items-center hover:underline mt-auto"
                >
                  Read article
                  <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts; 