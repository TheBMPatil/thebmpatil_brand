import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const Portfolio = () => {
  return (
    <AnimatedSection>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">My Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Portfolio items will be added here */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Coming Soon</h3>
            <p className="text-gray-600">Portfolio content is being curated...</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Portfolio;