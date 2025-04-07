import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Mail, Phone, MapPin, Send, Github, Instagram, Facebook, Twitter, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/the_bhagvat_mutthe_/', label: 'Instagram' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/thebmpatil', label: 'LinkedIn' },
    { icon: <MessageCircle size={20} />, href: 'https://wa.me/+918408921072', label: 'WhatsApp' },
    { icon: <Github size={20} />, href: 'https://github.com/TheBMPatil', label: 'GitHub' },
    { icon: <Twitter size={20} />, href: 'https://x.com/BhagvatMutthe', label: 'Twitter' },
    // { icon: <Facebook size={20} />, href: 'https://www.facebook.com/bhagvat.mutthe/', label: 'Facebook' },
  ];

  return (
    <AnimatedSection>
      <section id="contact" className='md:py-2 md:px-[10%]' >
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-12">Get in Touch</h1>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Info Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Mail className="text-[#E9552E]" />
                  <span>bmpatil.dev@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-[#E9552E]" />
                  <span>+91 84089 21072</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-[#E9552E]" />
                  <span>Pune, India</span>
                </div>
              </div>

              {/* Social Icons with Labels */}
              <div className="flex gap-6 flex-wrap">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    title={link.label}
                    className="flex items-center gap-2 text-[#1B1B1B] hover:text-[#E9552E] transition-colors"
                  >
                    {link.icon}
                    <span className="text-sm font-medium">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form Section */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E9552E] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E9552E] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E9552E] focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled
                  className="w-full bg-[#E9552E] text-white px-6 py-3 rounded-md opacity-50 cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={16} />
                </button>

              </form>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Contact;
