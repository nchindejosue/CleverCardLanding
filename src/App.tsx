import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import ForSchools from './pages/solutions/ForSchools';
import ForTeachers from './pages/solutions/ForTeachers';
import ForParents from './pages/solutions/ForParents';
import Pricing from './pages/Pricing';
import Mission from './pages/Mission';
import Blog from './pages/Blog';
import Help from './pages/Help';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50 to-accent-50">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/solutions/for-schools" element={<ForSchools />} />
            <Route path="/solutions/for-teachers" element={<ForTeachers />} />
            <Route path="/solutions/for-parents-and-students" element={<ForParents />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/mission-and-story" element={<Mission />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;