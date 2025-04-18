import type { Metadata } from 'next';
import './styles/globals.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

export const metadata: Metadata = {
  title: 'Flutter Developer Portfolio',
  description: 'Personal website of a passionate Flutter Developer showcasing projects, skills, and blog posts about Flutter development.',
  keywords: ['Flutter', 'Developer', 'Dart', 'Mobile Development', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Flutter Developer' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    siteName: 'Flutter Developer Portfolio',
    title: 'Flutter Developer Portfolio',
    description: 'Personal website of a passionate Flutter Developer showcasing projects, skills, and blog posts about Flutter development.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Flutter Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flutter Developer Portfolio',
    description: 'Personal website of a passionate Flutter Developer showcasing projects, skills, and blog posts about Flutter development.',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 