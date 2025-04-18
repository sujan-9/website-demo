'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { SiFlutter } from 'react-icons/si';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Check if current path matches the link
  const isActive = (path: string) => pathname === path;

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Set initial dark mode based on user preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        setIsDarkMode(true);
        document.documentElement.classList.add('dark');
      }
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-flutter-dark/90 backdrop-blur-sm shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <SiFlutter className="h-8 w-8 text-flutter-blue" />
            <span className="font-bold text-xl text-flutter-navy dark:text-white">Flutter<span className="text-flutter-blue">Dev</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/"
              className={`nav-link ${isActive('/') ? 'active-nav-link' : ''}`}
            >
              Home
            </Link>
            <Link 
              href="/about"
              className={`nav-link ${isActive('/about') ? 'active-nav-link' : ''}`}
            >
              About
            </Link>
            <Link 
              href="/blog"
              className={`nav-link ${isActive('/blog') ? 'active-nav-link' : ''}`}
            >
              Blog
            </Link>
            <Link 
              href="/contact"
              className={`nav-link ${isActive('/contact') ? 'active-nav-link' : ''}`}
            >
              Contact
            </Link>
            
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <FiSun className="h-5 w-5 text-flutter-yellow" />
              ) : (
                <FiMoon className="h-5 w-5 text-flutter-navy" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <FiSun className="h-5 w-5 text-flutter-yellow" />
              ) : (
                <FiMoon className="h-5 w-5 text-flutter-navy" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Open menu"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6 text-flutter-navy dark:text-white" />
              ) : (
                <FiMenu className="h-6 w-6 text-flutter-navy dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-flutter-dark shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/"
              className={`block px-3 py-2 rounded-md ${
                isActive('/') 
                  ? 'bg-flutter-blue/10 text-flutter-blue dark:text-flutter-sky' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              href="/about"
              className={`block px-3 py-2 rounded-md ${
                isActive('/about') 
                  ? 'bg-flutter-blue/10 text-flutter-blue dark:text-flutter-sky' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              href="/blog"
              className={`block px-3 py-2 rounded-md ${
                isActive('/blog') 
                  ? 'bg-flutter-blue/10 text-flutter-blue dark:text-flutter-sky' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link 
              href="/contact"
              className={`block px-3 py-2 rounded-md ${
                isActive('/contact') 
                  ? 'bg-flutter-blue/10 text-flutter-blue dark:text-flutter-sky' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 