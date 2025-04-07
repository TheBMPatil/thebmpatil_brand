import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const Courses = () => {
  const courses = [
    {
      title: 'Web Development Fundamentals',
      description: 'Learn the basics of HTML, CSS, and JavaScript',
      duration: '8 weeks',
      level: 'Beginner'
    },
    {
      title: 'React Mastery',
      description: 'Advanced React patterns and best practices',
      duration: '10 weeks',
      level: 'Intermediate'
    },
    {
      title: 'Full Stack Development',
      description: 'Build complete web applications from scratch',
      duration: '12 weeks',
      level: 'Advanced'
    }
  ];

  return (
    <AnimatedSection>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Available Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#E9552E]">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Duration: {course.duration}</span>
                <span>Level: {course.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Courses;