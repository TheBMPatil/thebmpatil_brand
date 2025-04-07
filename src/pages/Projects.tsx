import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online shopping platform built with React and Node.js',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management solution with real-time updates',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      github: '#',
      live: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website showcasing my work and skills',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <AnimatedSection>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#E9552E]">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-gray-100 px-2 py-1 rounded-md text-sm">{tech}</span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.github} className="flex items-center gap-1 text-gray-600 hover:text-[#E9552E]">
                  <Github size={16} />
                  <span>Code</span>
                </a>
                <a href={project.live} className="flex items-center gap-1 text-gray-600 hover:text-[#E9552E]">
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;