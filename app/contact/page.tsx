import { Metadata } from 'next';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact Me - Flutter Developer Portfolio',
  description: 'Get in touch with me for Flutter development projects, consultations, or any other inquiries. Fill out the contact form or connect with me through social media.',
  openGraph: {
    title: 'Contact Me - Flutter Developer Portfolio',
    description: 'Get in touch with me for Flutter development projects, consultations, or any other inquiries. Fill out the contact form or connect with me through social media.',
    images: [{ url: '/images/og-contact.jpg' }],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 bg-white dark:bg-flutter-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-flutter-navy dark:text-white mb-4">
              Get In Touch
            </h1>
            <div className="w-24 h-1 bg-flutter-blue mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm always interested in hearing about new projects and opportunities. 
              Feel free to reach out if you have any questions or just want to say hello!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </div>
  );
} 