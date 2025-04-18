import Link from 'next/link';
import Image from 'next/image';
import HeroSection from './components/home/HeroSection';
import FeaturedProjects from './components/home/FeaturedProjects';
import LatestBlogs from './components/home/LatestBlogs';
import Skills from './components/home/Skills';
import CallToAction from './components/home/CallToAction';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Skills />
      <FeaturedProjects />
      <LatestBlogs />
      <CallToAction />
    </div>
  );
} 