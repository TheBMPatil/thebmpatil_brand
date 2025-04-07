import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'Getting Started with Web Development',
      excerpt: 'A comprehensive guide for beginners looking to start their journey in web development.',
      date: '2025-03-01',
      readTime: '5 min read',
      category: 'Development'
    },
    {
      title: 'Modern React Best Practices',
      excerpt: 'Learn about the latest React patterns and practices for building scalable applications.',
      date: '2025-02-28',
      readTime: '8 min read',
      category: 'React'
    },
    {
      title: 'Photography Tips for Developers',
      excerpt: 'How to improve your photography skills while maintaining a developer lifestyle.',
      date: '2025-02-25',
      readTime: '6 min read',
      category: 'Photography'
    }
  ];

  return (
    <AnimatedSection>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Blog Posts</h1>
        <div className="max-w-4xl mx-auto space-y-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  {post.readTime}
                </span>
                <span className="bg-[#E9552E] text-white px-2 py-1 rounded-full text-xs">
                  {post.category}
                </span>
              </div>
              <h2 className="text-2xl font-semibold mb-3 text-[#1B1B1B]">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <a href="#" className="inline-flex items-center text-[#E9552E] hover:gap-2 transition-all">
                Read More <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Blog;