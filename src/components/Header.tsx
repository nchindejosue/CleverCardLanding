import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Download, Smartphone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Features', href: '/features' },
    {
      name: 'Solutions',
      href: '#',
      dropdown: [
        { name: 'For Schools', href: '/solutions/for-schools' },
        { name: 'For Teachers', href: '/solutions/for-teachers' },
        { name: 'For Parents & Students', href: '/solutions/for-parents-and-students' },
      ]
    },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Our Mission', href: '/mission-and-story' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-neutral-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <img
                src="/mrXH9dvMZ8_v8GckhibKP.png"
                alt="CleverCard"
                className="h-10 w-10 lg:h-12 lg:w-12 transition-transform duration-300 group-hover:rotate-12"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </motion.div>
            <span className="text-xl lg:text-2xl font-display font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              CleverCard
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsSolutionsOpen(true)}
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                  >
                    <button className="flex items-center space-x-1 text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium">
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    <AnimatePresence>
                      {isSolutionsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-neutral-200 py-2"
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium relative ${
                      location.pathname === item.href ? 'text-primary-600' : ''
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.href && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block"
          >
            <button className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow">
              <Download className="h-4 w-4" />
              <span>Download App</span>
            </button>
          </motion.div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-neutral-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-neutral-200 shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <div className="text-neutral-700 font-medium py-2">{item.name}</div>
                      <div className="pl-4 space-y-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-neutral-600 hover:text-primary-600 py-2 transition-colors duration-200"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-neutral-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-lg mt-6"
              >
                <Smartphone className="h-4 w-4" />
                <span>Download App</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;