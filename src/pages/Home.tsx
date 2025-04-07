import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { Code, BookOpen, Camera, Wrench, ArrowRight, Calendar, Clock, ExternalLink, Github, Send } from 'lucide-react';

const Home = () => {
  const services = [
    { icon: <Code size={32} />, title: 'Web Development' },
    { icon: <BookOpen size={32} />, title: 'Teaching / Courses' },
    { icon: <Camera size={32} />, title: 'Photography' },
    { icon: <Wrench size={32} />, title: 'Freelance Projects' },
  ];

  const previewCourses = [
    {
      title: 'Web Development Fundamentals',
      description: 'Learn the basics of HTML, CSS, and JavaScript',
      duration: '8 weeks',
    },
    {
      title: 'React Mastery',
      description: 'Advanced React patterns and best practices',
      duration: '10 weeks',
    },
    {
      title: 'Full Stack Development',
      description: 'Build complete web applications from scratch',
      duration: '12 weeks',
    },
  ];

  const previewProjects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online shopping platform',
      tech: ['React', 'Node.js'],
    },
    {
      title: 'Task Management App',
      description: 'Real-time collaborative task management',
      tech: ['React', 'Firebase'],
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio with animations',
      tech: ['React', 'Tailwind'],
    },
  ];

  const previewPhotos = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    'https://images.unsplash.com/photo-1449034446853-66c86144b0ad',
  ];

  return (
    <div>
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm Bhagvat — <br />
          <span className="text-[#E9552E]">Developer | Educator | Creator</span>
        </h1>
        <p className="text-lg md:text-xl text-[#3A3A3A] mb-8">
          Crafting clean code, impactful content, and creative solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/portfolio"
            className="bg-[#E9552E] text-white px-6 py-3 rounded-2xl shadow hover:bg-[#cf482a] transform hover:scale-105 transition-all duration-200"
          >
            Explore Portfolio
          </Link>
          <Link 
            to="/courses"
            className="bg-[#1B1B1B] text-white px-6 py-3 rounded-2xl shadow hover:bg-[#333] transform hover:scale-105 transition-all duration-200"
          >
            Start Learning
          </Link>
        </div>
      </motion.section>

      {/* What I Do Section */}
      <AnimatedSection className="py-16 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">What I Do</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              <div className="text-[#E9552E] mb-4 flex justify-center">{service.icon}</div>
              <p className="font-medium">{service.title}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Courses Preview */}
      <AnimatedSection className="bg-[#D3D3D3] py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Start Learning with Me</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {previewCourses.map((course, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3 text-[#E9552E]">{course.title}</h3>
                <p className="text-gray-600 mb-2">{course.description}</p>
                <p className="text-sm text-gray-500">Duration: {course.duration}</p>
              </motion.div>
            ))}
          </div>
          <Link to="/courses" className="inline-block mt-8 text-[#E9552E] font-semibold hover:underline">
            View All Courses <ArrowRight className="inline ml-1" size={16} />
          </Link>
        </div>
      </AnimatedSection>

      {/* Projects Preview */}
      <AnimatedSection className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Selected Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {previewProjects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3 text-[#E9552E]">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-100 px-2 py-1 rounded-md text-sm">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <Link to="/projects" className="inline-block mt-8 text-[#E9552E] font-semibold hover:underline">
            See All Projects <ArrowRight className="inline ml-1" size={16} />
          </Link>
        </div>
      </AnimatedSection>

      {/* Gallery Preview */}
      <AnimatedSection className="bg-[#D3D3D3] py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Through My Lens</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {previewPhotos.map((photo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg aspect-square"
              >
                <img 
                  src={photo}
                  alt="Gallery preview"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
          <Link to="/gallery" className="inline-block mt-8 text-[#E9552E] font-semibold hover:underline">
            View Full Gallery <ArrowRight className="inline ml-1" size={16} />
          </Link>
        </div>
      </AnimatedSection>

      {/* Blog Preview */}
      <AnimatedSection className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">From My Blog</h2>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-3">
              <span className="flex items-center gap-1">
                <Calendar size={16} />
                2025-03-01
              </span>
              <span className="flex items-center gap-1">
                <Clock size={16} />
                5 min read
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Getting Started with Web Development</h3>
            <p className="text-gray-600 mb-4">A comprehensive guide for beginners looking to start their journey in web development.</p>
            <Link to="/blog" className="text-[#E9552E] font-semibold hover:underline">
              Read All Articles <ArrowRight className="inline ml-1" size={16} />
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Contact Preview */}
      <AnimatedSection className="bg-[#D3D3D3] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Have a project or collaboration in mind?</h2>
          <p className="text-[#E9552E] mb-8">Let's build something amazing together.</p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#E9552E] text-white px-8 py-3 rounded-md hover:bg-[#cf482a] transition-colors"
          >
            Get in Touch
            <Send size={16} />
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;