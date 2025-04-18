'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiClock, FiTag, FiCalendar } from 'react-icons/fi';

// Dummy blog data with 5 posts
const blogPosts = [
  {
    id: 1,
    title: 'Flutter 3.22: What\'s New',
    slug: 'flutter-3-22-whats-new',
    excerpt: 'Explore the latest features, performance improvements, and breaking changes in Flutter 3.22, and how to migrate your projects.',
    content: 'Full content of the article goes here with detailed explanations, code examples, and more...',
    date: '2023-10-15',
    readTime: '6 min',
    category: 'Updates',
    tags: ['Flutter', 'Dart', 'Updates'],
    imageUrl: '/images/blogs/flutter-update.jpg',
    featured: true
  },
  {
    id: 2,
    title: 'Using Riverpod in Large Projects',
    slug: 'using-riverpod-in-large-projects',
    excerpt: 'Learn how to structure your Flutter application using Riverpod state management for better maintainability and scalability.',
    content: 'Full content of the article goes here with detailed explanations, code examples, and more...',
    date: '2023-09-28',
    readTime: '8 min',
    category: 'State Management',
    tags: ['Flutter', 'Riverpod', 'State Management'],
    imageUrl: '/images/blogs/riverpod.jpg',
    featured: true
  },
  {
    id: 3,
    title: 'Flutter Web Performance Optimization',
    slug: 'flutter-web-performance-optimization',
    excerpt: 'Practical tips and techniques to optimize your Flutter web applications for better performance and user experience.',
    content: 'Full content of the article goes here with detailed explanations, code examples, and more...',
    date: '2023-09-12',
    readTime: '7 min',
    category: 'Performance',
    tags: ['Flutter Web', 'Performance', 'Optimization'],
    imageUrl: '/images/blogs/performance.jpg',
    featured: false
  },
  {
    id: 4,
    title: 'Building Responsive Layouts in Flutter',
    slug: 'building-responsive-layouts-in-flutter',
    excerpt: 'A comprehensive guide to creating responsive UIs in Flutter that work well across different screen sizes and orientations.',
    content: 'Full content of the article goes here with detailed explanations, code examples, and more...',
    date: '2023-08-24',
    readTime: '10 min',
    category: 'UI/UX',
    tags: ['Flutter', 'Responsive', 'UI/UX', 'Layouts'],
    imageUrl: '/images/blogs/responsive.jpg',
    featured: false
  },
  {
    id: 5,
    title: 'Firebase Authentication in Flutter',
    slug: 'firebase-authentication-in-flutter',
    excerpt: 'Implement secure user authentication in your Flutter apps using Firebase Authentication services.',
    content: 'Full content of the article goes here with detailed explanations, code examples, and more...',
    date: '2023-08-10',
    readTime: '9 min',
    category: 'Backend',
    tags: ['Flutter', 'Firebase', 'Authentication', 'Security'],
    imageUrl: '/images/blogs/firebase-auth.jpg',
    featured: false
  },
];

// Available categories and tags for filtering
const categories = ['All Categories', 'Updates', 'State Management', 'Performance', 'UI/UX', 'Backend'];
const allTags = ['Flutter', 'Dart', 'Updates', 'Riverpod', 'State Management', 'Flutter Web', 'Performance', 'Optimization', 'Responsive', 'UI/UX', 'Layouts', 'Firebase', 'Authentication', 'Security'];

const BlogList = () => {
  const [activeCategory, setActiveCategory] = useState('All Categories');
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [posts, setPosts] = useState(blogPosts);
  
  // Filter posts based on category and tags
  const filterPosts = () => {
    let filtered = [...blogPosts];
    
    // Filter by category
    if (activeCategory !== 'All Categories') {
      filtered = filtered.filter(post => post.category === activeCategory);
    }
    
    // Filter by tags (if any are selected)
    if (activeTags.length > 0) {
      filtered = filtered.filter(post => 
        post.tags.some(tag => activeTags.includes(tag))
      );
    }
    
    setPosts(filtered);
  };
  
  // Handle category selection
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setActiveTags([]); // Reset tags when changing category
  };
  
  // Toggle tags
  const toggleTag = (tag: string) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter(t => t !== tag));
    } else {
      setActiveTags([...activeTags, tag]);
    }
  };
  
  // Apply filters when category or tags change
  useEffect(() => {
    filterPosts();
  }, [activeCategory, activeTags]);
  
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-flutter-navy dark:text-white mb-6">
            Explore Articles
          </h2>
          
          {/* Category filters */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
              Categories
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-flutter-blue text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-flutter-blue/10'
                  }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Tag filters */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
              Popular Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    activeTags.includes(tag)
                      ? 'bg-flutter-teal text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-flutter-teal/10'
                  }`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Blog posts grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    className="object-cover"
                  /> */}
                  
                  {post.featured && (
                    <div className="absolute top-4 right-4 px-2 py-1 bg-flutter-yellow text-xs font-bold rounded">
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2 space-x-4">
                    <span className="flex items-center">
                      <FiCalendar className="mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <FiClock className="mr-1" />
                      {post.readTime}
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
                    {post.tags.map((tag, i) => (
                      <span 
                        key={i}
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
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-flutter-navy dark:text-white mb-2">
              No articles found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your filters to find what you're looking for.
            </p>
            <button 
              className="mt-4 px-4 py-2 bg-flutter-blue text-white rounded-lg hover:bg-flutter-navy transition-colors"
              onClick={() => {
                setActiveCategory('All Categories');
                setActiveTags([]);
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogList; 