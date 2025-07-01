import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Download, Smartphone, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import DownloadPopup from './DownloadPopup';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isDownloadPopupOpen, setIsDownloadPopupOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('nav.features'), href: '/features' },
    {
      name: t('nav.solutions'),
      href: '#',
      dropdown: [
        { name: t('nav.forSchools'), href: '/solutions/for-schools' },
        { name: t('nav.forTeachers'), href: '/solutions/for-teachers' },
        { name: t('nav.forParents'), href: '/solutions/for-parents-and-students' },
      ]
    },
    { name: t('nav.pricing'), href: '/pricing' },
    { name: t('nav.mission'), href: '/mission-and-story' },
    { name: t('nav.blog'), href: '/blog' },
  ];

  return (
    <>
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

            {/* Language Toggle & CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Language Toggle */}
              <div className="relative">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center space-x-2 text-neutral-700 hover:text-primary-600 transition-colors duration-200 p-2 rounded-lg hover:bg-primary-50"
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-sm font-medium">{language.toUpperCase()}</span>
                  <ChevronDown className="h-3 w-3" />
                </button>
                <AnimatePresence>
                  {isLanguageOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-neutral-200 py-2"
                    >
                      <button
                        onClick={() => {
                          setLanguage('en');
                          setIsLanguageOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-primary-50 transition-colors duration-200 ${
                          language === 'en' ? 'text-primary-600 bg-primary-50' : 'text-neutral-700'
                        }`}
                      >
                        English
                      </button>
                      <button
                        onClick={() => {
                          setLanguage('fr');
                          setIsLanguageOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-primary-50 transition-colors duration-200 ${
                          language === 'fr' ? 'text-primary-600 bg-primary-50' : 'text-neutral-700'
                        }`}
                      >
                        Français
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Download Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => setIsDownloadPopupOpen(true)}
                  className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
                >
                  <Download className="h-4 w-4" />
                  <span>{t('nav.downloadApp')}</span>
                </button>
              </motion.div>
            </div>

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
                {/* Language Toggle Mobile */}
                <div className="flex items-center justify-between py-2 border-b border-neutral-200">
                  <span className="text-neutral-700 font-medium">Language</span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setLanguage('en')}
                      className={`px-3 py-1 rounded text-sm ${
                        language === 'en' ? 'bg-primary-600 text-white' : 'bg-neutral-100 text-neutral-700'
                      }`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => setLanguage('fr')}
                      className={`px-3 py-1 rounded text-sm ${
                        language === 'fr' ? 'bg-primary-600 text-white' : 'bg-neutral-100 text-neutral-700'
                      }`}
                    >
                      FR
                    </button>
                  </div>
                </div>

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
                  onClick={() => {
                    setIsDownloadPopupOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-lg mt-6"
                >
                  <Smartphone className="h-4 w-4" />
                  <span>{t('nav.downloadApp')}</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <DownloadPopup 
        isOpen={isDownloadPopupOpen} 
        onClose={() => setIsDownloadPopupOpen(false)} 
      />
    </>
  );
};

export default Header;