import { Metadata } from 'next';
import AboutIntro from '../components/about/AboutIntro';
import Experience from '../components/about/Experience';
import Education from '../components/about/Education';
import Portfolio from '../components/about/Portfolio';

export const metadata: Metadata = {
  title: 'About Me - Flutter Developer Portfolio',
  description: 'Learn more about my background, skills, and experience as a Flutter developer. Discover my education, work history, and the tools I use.',
  openGraph: {
    title: 'About Me - Flutter Developer Portfolio',
    description: 'Learn more about my background, skills, and experience as a Flutter developer. Discover my education, work history, and the tools I use.',
    images: [{ url: '/images/og-about.jpg' }],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <AboutIntro />
      <Experience />
      <Education />
      <Portfolio />
    </div>
  );
} 