import React from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Smartphone, 
  Brain, 
  Users, 
  BarChart3, 
  Shield,
  Zap,
  Heart,
  Globe,
  ArrowRight,
  Play,
  CheckCircle,
  Star
} from 'lucide-react';
import FeatureCard from '../components/ui/FeatureCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import StatsSection from '../components/ui/StatsSection';
import AnimatedCounter from '../components/ui/AnimatedCounter';

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered OCR',
      description: 'Transform handwritten registers and mark sheets into digital data instantly with our advanced AI recognition technology.',
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      icon: Zap,
      title: 'Automated Grading',
      description: 'Calculate totals, averages, ranks, and grades automatically. What used to take hours now happens in seconds.',
      gradient: 'from-accent-500 to-accent-600'
    },
    {
      icon: BarChart3,
      title: 'Smart Analytics',
      description: 'Identify learning patterns, track progress, and get actionable insights to help every student succeed.',
      gradient: 'from-success-500 to-success-600'
    },
    {
      icon: Users,
      title: 'Multi-Role Platform',
      description: 'One app, four experiences. Tailored interfaces for teachers, students, parents, and administrators.',
      gradient: 'from-warning-500 to-warning-600'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Built with industry-leading security standards. Your data is encrypted and protected at every level.',
      gradient: 'from-error-500 to-error-600'
    },
    {
      icon: Globe,
      title: 'Offline-First',
      description: 'Works without internet connection. Data syncs automatically when you\'re back online.',
      gradient: 'from-primary-600 to-accent-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mbah',
      role: 'Primary School Teacher',
      school: 'Government Primary School Bamenda',
      content: 'CleverCard gave me my weekends back. What used to take me 6 hours of calculations now takes 5 minutes. I can focus on what I love - teaching.',
      rating: 5
    },
    {
      name: 'Dr. Emmanuel Fon',
      role: 'School Principal',
      school: 'Sacred Heart College',
      content: 'The insights we get from CleverCard help us make data-driven decisions. We\'ve seen a 23% improvement in our students\' performance.',
      rating: 5
    },
    {
      name: 'Grace Tabi',
      role: 'Parent',
      school: 'Mother of 3 students',
      content: 'Finally, I understand exactly how my children are performing. The AI study companion has been a game-changer for exam preparation.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M96%2095h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-9-10h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                <span>Born in Bamenda, Built for the World</span>
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold text-neutral-900 mb-6 leading-tight">
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  Transform
                </span>
                <br />
                Education with
                <br />
                <span className="relative">
                  AI Power
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-2 left-0 h-3 bg-gradient-to-r from-primary-400 to-accent-400 opacity-30 rounded-full"
                  />
                </span>
              </h1>

              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                CleverCard empowers educators with AI-powered tools that transform administrative burdens 
                into developmental opportunities. Save time, gain insights, and focus on what matters most - teaching.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Download className="h-5 w-5 group-hover:animate-bounce" />
                  <span>Download Free App</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 hover:bg-primary-50 transition-all duration-300 group"
                >
                  <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Watch Demo</span>
                </motion.button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-neutral-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success-500" />
                  <span>Free to start</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success-500" />
                  <span>Works offline</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success-500" />
                  <span>Secure & private</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="bg-white rounded-3xl shadow-2xl p-8 border border-neutral-200"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                      <Smartphone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900">CleverCard App</h3>
                      <p className="text-sm text-neutral-600">AI-Powered Education Platform</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-success-50 rounded-lg">
                      <span className="text-sm font-medium text-success-700">Mark Sheet Processed</span>
                      <CheckCircle className="h-4 w-4 text-success-500" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-primary-50 rounded-lg">
                      <span className="text-sm font-medium text-primary-700">Reports Generated</span>
                      <div className="text-primary-600 font-bold">32/32</div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-accent-50 rounded-lg">
                      <span className="text-sm font-medium text-accent-700">Time Saved Today</span>
                      <div className="text-accent-600 font-bold">4.2 hrs</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  x: [0, 10, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -right-6 bg-gradient-to-r from-warning-400 to-warning-500 text-white p-4 rounded-2xl shadow-lg"
              >
                <Brain className="h-6 w-6" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  x: [0, -10, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-r from-success-400 to-success-500 text-white p-4 rounded-2xl shadow-lg"
              >
                <BarChart3 className="h-6 w-6" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              The Global <span className="text-error-600">Paperwork Crisis</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Across Africa, Asia, and the developing world, dedicated educators are drowning in administrative tasks, 
              while brilliant students' potential remains hidden in paper-based systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-error-50 to-error-100 rounded-2xl p-8 border border-error-200"
            >
              <div className="w-16 h-16 bg-error-500 rounded-xl flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-error-900 mb-4">Teacher Burnout</h3>
              <p className="text-error-700 leading-relaxed">
                Teachers spend up to 30% of their time on paperwork instead of teaching, 
                leading to exhaustion and reduced passion for education.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-warning-50 to-warning-100 rounded-2xl p-8 border border-warning-200"
            >
              <div className="w-16 h-16 bg-warning-500 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-warning-900 mb-4">Data Blindness</h3>
              <p className="text-warning-700 leading-relaxed">
                Paper records can't be analyzed, leaving schools unable to identify trends, 
                spot at-risk students, or make informed decisions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200"
            >
              <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Digital Divide</h3>
              <p className="text-primary-700 leading-relaxed">
                90% of schools in developing regions lack computer infrastructure, 
                forcing reliance on outdated paper-based systems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Powerful Features, <span className="text-primary-600">Simple Experience</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              CleverCard combines cutting-edge AI technology with intuitive design to create 
              a solution that works for everyone - from tech-savvy teachers to traditional educators.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
                gradient={feature.gradient}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-accent-500 rounded-full"></span>
                <span>Our Origin Story</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                Born in <span className="text-accent-600">Bamenda</span>,
                <br />Built for the World
              </h2>

              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                CleverCard wasn't born in a distant Silicon Valley boardroom. It emerged from the 
                classrooms of Bamenda, Cameroon, where we witnessed dedicated educators spending 
                their weekends buried in paperwork, their passion dimmed by administrative overload.
              </p>

              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                We saw brilliant students whose unique talents were invisible to a system that 
                only had time for grades. We knew there had to be a better way—a solution that 
                respects traditional methods but embraces modern technology.
              </p>

              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full border-2 border-white flex items-center justify-center text-white font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">The CleverCard Team</p>
                  <p className="text-sm text-neutral-600">Educators turned innovators</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-accent-100 to-primary-100 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M20%2020c0-11.046-8.954-20-20-20v20h20z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Globe className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">Bamenda, Cameroon</h3>
                    <p className="text-neutral-600">Where innovation meets tradition</p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3">
                      <div className="w-8 h-8 bg-success-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-neutral-700 font-medium">Local problem identification</span>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                        <Brain className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-neutral-700 font-medium">AI-powered solution design</span>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3">
                      <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                        <Globe className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-neutral-700 font-medium">Global impact vision</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Trusted by <span className="text-primary-600">Educators</span> Worldwide
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what teachers, administrators, 
              and parents are saying about CleverCard.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Teaching?
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Join thousands of educators who have already discovered the power of AI-assisted teaching. 
              Download CleverCard today and reclaim your time for what matters most.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold flex items-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                <span>Download for Android</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold flex items-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Smartphone className="h-5 w-5 group-hover:animate-bounce" />
                <span>Download for iOS</span>
              </motion.button>
            </div>

            <div className="flex items-center justify-center space-x-6 text-primary-100">
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span className="text-sm">10,000+ Downloads</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span className="text-sm">100% Secure</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;