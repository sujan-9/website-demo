import { Metadata } from 'next';
import BlogHeader from '../components/blog/BlogHeader';
import BlogList from '../components/blog/BlogList';

export const metadata: Metadata = {
  title: 'Blog - Flutter Developer Portfolio',
  description: 'Read my latest articles about Flutter development, mobile app best practices, and cross-platform techniques.',
  openGraph: {
    title: 'Blog - Flutter Developer Portfolio',
    description: 'Read my latest articles about Flutter development, mobile app best practices, and cross-platform techniques.',
    images: [{ url: '/images/og-blog.jpg' }],
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20">
      <BlogHeader />
      <BlogList />
    </div>
  );
} 