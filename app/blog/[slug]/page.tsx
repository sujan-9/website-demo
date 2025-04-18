import type { Metadata } from 'next';
import BlogPost from '../../components/blog/BlogPost';
import RelatedPosts from '../../components/blog/RelatedPosts';

// Dummy blog data (in a real app, this would come from a database or CMS)
const blogPosts = [
  {
    id: 1,
    title: 'Flutter 3.22: What\'s New',
    slug: 'flutter-3-22-whats-new',
    excerpt: 'Explore the latest features, performance improvements, and breaking changes in Flutter 3.22, and how to migrate your projects.',
    content: `
      # Flutter 3.22: What's New

      Flutter 3.22 introduces several exciting features and improvements that enhance the developer experience and application performance.

      ## Performance Improvements

      The Flutter team has focused on reducing the framework's footprint and improving runtime performance. Some key improvements include:

      - Reduced application binary size by optimizing asset compilation
      - Improved widget rebuild performance with better diffing algorithms
      - Enhanced shader compilation to reduce jank on first run

      ## New Widgets and Features

      Several new widgets have been added to the framework:

      \`\`\`dart
      // Example of the new FancyContainer widget
      FancyContainer(
        width: 200,
        height: 100,
        gradient: LinearGradient(
          colors: [Colors.blue, Colors.purple],
        ),
        child: Text('Hello Flutter 3.22!'),
      )
      \`\`\`

      ## Migration Guide

      If you're upgrading from an earlier version, here are the key steps:

      1. Update your Flutter SDK to the latest version
      2. Run 'flutter pub upgrade' to update dependencies
      3. Check for deprecated APIs in your codebase
      4. Test thoroughly, especially UI components and animations

      ## Conclusion

      Flutter 3.22 represents a significant step forward for the framework, with a focus on performance and developer experience. The new features make it even more powerful for building beautiful, responsive applications.
    `,
    date: '2023-10-15',
    readTime: '6 min',
    author: 'Flutter Dev',
    category: 'Updates',
    tags: ['Flutter', 'Dart', 'Updates'],
    imageUrl: '/images/blogs/flutter-update.jpg',
    featured: true
  },
  // Add more posts here...
];

type Props = {
  params: {
    slug: string;
  };
};

// Generate metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Find the post with the matching slug
  const post = blogPosts.find(post => post.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }
  
  return {
    title: `${post.title} - Flutter Developer Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      authors: [post.author],
      tags: post.tags,
      publishedTime: post.date,
      images: [{ url: post.imageUrl }],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  // Find the post with the matching slug
  const post = blogPosts.find(post => post.slug === params.slug);
  
  // Find related posts (posts with overlapping tags, excluding the current post)
  const relatedPosts = post 
    ? blogPosts
        .filter(p => 
          p.id !== post.id && 
          p.tags.some(tag => post.tags.includes(tag))
        )
        .slice(0, 3) // Limit to 3 related posts
    : [];
  
  if (!post) {
    return (
      <div className="min-h-screen pt-28 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-flutter-navy dark:text-white mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <a 
            href="/blog" 
            className="btn-primary"
          >
            Back to Blog
          </a>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-20">
      <BlogPost post={post} />
      {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}
    </div>
  );
} 