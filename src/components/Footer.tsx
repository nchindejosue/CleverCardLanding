import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Download,
  Smartphone,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '/features' },
      { name: 'For Schools', href: '/solutions/for-schools' },
      { name: 'For Teachers', href: '/solutions/for-teachers' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Download App', href: '#download' }
    ],
    company: [
      { name: 'Our Mission & Story', href: '/mission-and-story' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact Us', href: '#contact' }
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'How-to Guides', href: '/help#guides' },
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#facebook', label: 'Facebook' },
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
    { icon: Instagram, href: '#instagram', label: 'Instagram' }
  ];

  return (
    <footer className="bg-neutral-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/" className="flex items-center space-x-3 mb-6 group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 12 }}
                  className="relative"
                >
                  <img
                    src="/mrXH9dvMZ8_v8GckhibKP.png"
                    alt="CleverCard"
                    className="h-12 w-12"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </motion.div>
                <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  CleverCard
                </span>
              </Link>
              
              <p className="text-neutral-300 mb-6 leading-relaxed max-w-md">
                Empowering educators with AI-powered tools that transform administrative burdens 
                into developmental opportunities. Born in Bamenda, built for the world.
              </p>

              {/* App Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-4 py-3 rounded-lg font-medium flex items-center space-x-2 text-sm group"
                >
                  <Download className="h-4 w-4 group-hover:animate-bounce" />
                  <span>Download for Android</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm text-white px-4 py-3 rounded-lg font-medium flex items-center space-x-2 text-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <Smartphone className="h-4 w-4 group-hover:animate-bounce" />
                  <span>Download for iOS</span>
                </motion.button>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 text-sm text-neutral-400">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-primary-400" />
                  <span>Bamenda, Cameroon</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary-400" />
                  <span>+237 674 063 317 / +237 655 597 986</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary-400" />
                  <span>contact@clevercard.app</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-neutral-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-neutral-400 text-sm"
            >
              © {new Date().getFullYear()} CleverCard Initiative. All rights reserved.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-4"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-neutral-400 hover:text-white hover:bg-primary-600 transition-all duration-300 border border-white/20"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;