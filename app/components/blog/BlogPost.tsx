'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiClock, FiCalendar, FiUser, FiTag } from 'react-icons/fi';
import React from 'react';

type BlogPostProps = {
  post: {
    title: string;
    slug: string;
    date: string;
    readTime: string;
    author: string;
    category: string;
    tags: string[];
    imageUrl: string;
    content: string;
  };
};

const BlogPost = ({ post }: BlogPostProps) => {
  // In a real app, we would use a markdown parser to render the content
  // For demonstration, we'll manually handle basic markdown-like content
  const formatContent = (content: string) => {
    // Split the content into paragraphs
    return content.split('\n').map((line, index) => {
      line = line.trim();
      
      // Skip empty lines
      if (!line) return null;
      
      // Headers
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{line.substring(2)}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold mt-6 mb-3">{line.substring(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-bold mt-5 mb-2">{line.substring(4)}</h3>;
      }
      
      // List items
      if (line.startsWith('- ')) {
        return <li key={index} className="ml-6 mb-2">{line.substring(2)}</li>;
      }
      if (line.match(/^\d+\. /)) {
        const numberEnd = line.indexOf('. ');
        return <li key={index} className="ml-6 mb-2">{line.substring(numberEnd + 2)}</li>;
      }
      
      // Code blocks
      if (line.startsWith('```') && line.endsWith('```')) {
        // Skip language identifier lines
        if (line.length <= 6) return null;
        
        // Extract the code
        const code = line.substring(3, line.length - 3);
        return (
          <pre key={index} className="code-block my-4">
            <code>{code}</code>
          </pre>
        );
      }
      
      // Regular paragraph
      return <p key={index} className="mb-4 leading-relaxed">{line}</p>;
    });
  };
  
  return (
    <section className="py-12 bg-white dark:bg-flutter-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-flutter-navy dark:text-white mb-4">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center">
                <FiCalendar className="mr-1" />
                <span>{post.date}</span>
              </div>
              
              <div className="flex items-center">
                <FiClock className="mr-1" />
                <span>{post.readTime} read</span>
              </div>
              
              <div className="flex items-center">
                <FiUser className="mr-1" />
                <span>{post.author}</span>
              </div>
              
              <div className="flex items-center">
                <FiTag className="mr-1" />
                <span>{post.category}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {post.tags.map((tag, i) => (
                <Link 
                  href={`/blog?tag=${encodeURIComponent(tag)}`} 
                  key={i}
                  className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-flutter-blue/10 text-flutter-blue dark:bg-flutter-blue/20 dark:text-flutter-sky hover:bg-flutter-blue/20 dark:hover:bg-flutter-blue/30 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="relative h-64 md:h-96 w-full mb-8 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-flutter-blue/20 flex items-center justify-center">
              <span className="text-xl font-bold text-white">Blog Image</span>
            </div>
            {/* Uncomment when you have actual images */}
            {/* <Image 
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
            /> */}
          </div>
          
          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {formatContent(post.content)}
          </div>
          
          {/* Share and Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-2">
                  Share this post
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-flutter-blue dark:hover:text-flutter-sky">
                    Twitter
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-flutter-blue dark:hover:text-flutter-sky">
                    Facebook
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-flutter-blue dark:hover:text-flutter-sky">
                    LinkedIn
                  </a>
                </div>
              </div>
              
              <Link
                href="/blog"
                className="px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-flutter-blue/10 dark:hover:bg-flutter-blue/20 transition-colors"
              >
                Back to Blog
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPost; 