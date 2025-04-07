import React from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Facebook, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import logo from '../images/logo.png';

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <MessageCircle size={20} />, href: 'https://wa.me/yourwhatsapplink', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-[#F5E6D3] text-center py-8 text-sm text-[#3A3A3A]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center items-center gap-2 mb-2">
          <img src={logo} alt="BMP Logo" className="h-20 w-auto" />
          {/* <span className="font-bold text-lg text-[#E9552E]">BMP</span> */}
        </div>

        <div className="flex justify-center space-x-4 mb-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              aria-label={link.label}
              className="text-[#1B1B1B] hover:text-[#E9552E] transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        <p>© 2025 Bhagvat Patil. Built with passion by Bhagvat.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
