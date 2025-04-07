import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const Gallery = () => {
  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      title: 'Landscape Photography',
      category: 'Nature'
    },
    {
      url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
      title: 'Urban Architecture',
      category: 'City'
    },
    {
      url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
      title: 'Mountain Vista',
      category: 'Nature'
    },
    {
      url: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad',
      title: 'City Lights',
      category: 'City'
    },
    {
      url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      title: 'Forest Path',
      category: 'Nature'
    },
    {
      url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df',
      title: 'Urban Sunset',
      category: 'City'
    }
  ];

  return (
    <AnimatedSection>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Photography Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg aspect-square">
              <img 
                src={photo.url} 
                alt={photo.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-lg">{photo.title}</h3>
                <p className="text-gray-200">{photo.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Gallery;