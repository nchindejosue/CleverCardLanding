import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  BarChart3, 
  Users, 
  Shield, 
  Globe,
  Camera,
  Calculator,
  MessageSquare,
  BookOpen,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Monitor,
  Tablet
} from 'lucide-react';

const Features = () => {
  const [activeTab, setActiveTab] = useState('teachers');

  const tabs = [
    { id: 'teachers', label: 'For Teachers', icon: Users },
    { id: 'students', label: 'For Students', icon: BookOpen },
    { id: 'parents', label: 'For Parents', icon: Users },
    { id: 'admins', label: 'For Admins', icon: BarChart3 }
  ];

  const teacherFeatures = [
    {
      icon: Camera,
      title: 'AI-Powered OCR',
      description: 'Transform handwritten registers and mark sheets into digital data instantly',
      demo: 'Scan any handwritten document and watch it become perfectly organized digital data in seconds.',
      benefits: ['99.5% accuracy rate', 'Works with any handwriting', 'Supports multiple languages']
    },
    {
      icon: Calculator,
      title: 'Automatic Grading Engine',
      description: 'Calculate totals, averages, ranks, and grades automatically',
      demo: 'Input raw scores and get complete grade reports with rankings, percentages, and insights.',
      benefits: ['Instant calculations', 'Zero human error', 'Customizable grading schemes']
    },
    {
      icon: MessageSquare,
      title: 'AI Smart Remarks',
      description: 'Generate personalized, meaningful comments for each student',
      demo: 'Get tailored feedback suggestions based on individual student performance patterns.',
      benefits: ['Personalized comments', 'Professional language', 'Time-saving automation']
    },
    {
      icon: BarChart3,
      title: 'Class Analytics Dashboard',
      description: 'Beautiful, color-coded performance charts and insights',
      demo: 'Visualize class performance trends, identify struggling students, and track improvement.',
      benefits: ['Visual insights', 'Trend analysis', 'Early intervention alerts']
    }
  ];

  const studentFeatures = [
    {
      icon: Brain,
      title: 'AI Study Companion',
      description: 'Your personal AI tutor available 24/7',
      demo: 'Ask questions, get explanations, and receive study guidance tailored to your learning style.',
      benefits: ['Personalized learning', '24/7 availability', 'Adaptive difficulty']
    },
    {
      icon: BookOpen,
      title: 'National Exam Question Bank',
      description: 'Comprehensive library of past exam questions',
      demo: 'Access thousands of questions filtered by year, subject, and topic for targeted practice.',
      benefits: ['10,000+ questions', 'Smart filtering', 'Progress tracking']
    },
    {
      icon: Award,
      title: 'Personalized Quizzes',
      description: 'AI-generated quizzes based on your weak points',
      demo: 'Take adaptive quizzes that focus on areas where you need the most improvement.',
      benefits: ['Adaptive learning', 'Weakness targeting', 'Progress monitoring']
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Track your progress and identify improvement areas',
      demo: 'See detailed analytics of your performance across subjects and topics.',
      benefits: ['Detailed insights', 'Progress tracking', 'Goal setting']
    }
  ];

  const parentFeatures = [
    {
      icon: BarChart3,
      title: 'Real-time Progress Updates',
      description: 'Stay informed about your child\'s academic journey',
      demo: 'Receive instant notifications about grades, assignments, and school activities.',
      benefits: ['Real-time updates', 'Comprehensive reports', 'Easy communication']
    },
    {
      icon: MessageSquare,
      title: 'Teacher Communication',
      description: 'Direct communication channel with teachers',
      demo: 'Chat with teachers, schedule meetings, and stay involved in your child\'s education.',
      benefits: ['Direct messaging', 'Meeting scheduling', 'Progress discussions']
    },
    {
      icon: BookOpen,
      title: 'Home Study Support',
      description: 'Tools and resources to support learning at home',
      demo: 'Access study materials, homework help, and learning resources for home support.',
      benefits: ['Study resources', 'Homework assistance', 'Learning tips']
    },
    {
      icon: Award,
      title: 'Achievement Tracking',
      description: 'Celebrate your child\'s milestones and achievements',
      demo: 'Track achievements, view certificates, and celebrate learning milestones together.',
      benefits: ['Achievement badges', 'Progress certificates', 'Milestone tracking']
    }
  ];

  const adminFeatures = [
    {
      icon: BarChart3,
      title: 'School-wide Analytics',
      description: 'Comprehensive insights into school performance',
      demo: 'View detailed analytics across all classes, subjects, and grade levels.',
      benefits: ['Complete overview', 'Performance trends', 'Data-driven decisions']
    },
    {
      icon: Users,
      title: 'Teacher Management',
      description: 'Manage staff, classes, and administrative tasks',
      demo: 'Oversee teacher performance, class assignments, and administrative workflows.',
      benefits: ['Staff oversight', 'Class management', 'Administrative efficiency']
    },
    {
      icon: Shield,
      title: 'Data Security & Privacy',
      description: 'Enterprise-grade security for sensitive educational data',
      demo: 'Ensure all student and staff data is protected with industry-leading security.',
      benefits: ['Data encryption', 'Privacy compliance', 'Secure access controls']
    },
    {
      icon: Globe,
      title: 'Multi-campus Support',
      description: 'Manage multiple school locations from one dashboard',
      demo: 'Oversee multiple campuses, compare performance, and standardize processes.',
      benefits: ['Multi-location support', 'Centralized management', 'Standardized reporting']
    }
  ];

  const getFeatures = () => {
    switch (activeTab) {
      case 'teachers': return teacherFeatures;
      case 'students': return studentFeatures;
      case 'parents': return parentFeatures;
      case 'admins': return adminFeatures;
      default: return teacherFeatures;
    }
  };

  const coreFeatures = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and security protocols protect all data',
      stats: '256-bit encryption'
    },
    {
      icon: Globe,
      title: 'Offline-First Design',
      description: 'Works without internet, syncs when connection is restored',
      stats: '100% offline capable'
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform',
      description: 'Available on iOS, Android, and web browsers',
      stats: '3 platforms supported'
    },
    {
      icon: Clock,
      title: 'Real-time Sync',
      description: 'Instant synchronization across all devices and users',
      stats: '<1 second sync time'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Powerful Features for
              <br />
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Every User
              </span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              CleverCard provides tailored experiences for teachers, students, parents, and administrators. 
              Discover how our AI-powered platform transforms education for everyone.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
                      : 'bg-white text-neutral-700 hover:bg-primary-50 border border-neutral-200'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Feature Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {getFeatures().map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 group"
                  >
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-neutral-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-neutral-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-4 mb-6">
                      <p className="text-sm text-neutral-700 italic">
                        <strong>Demo:</strong> {feature.demo}
                      </p>
                    </div>

                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-500" />
                          <span className="text-sm text-neutral-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Core Technology Section */}
      <section className="py-20 bg-gradient-to-r from-neutral-900 via-primary-900 to-accent-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Built on Cutting-Edge Technology
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              CleverCard leverages the latest in AI, cloud computing, and mobile technology 
              to deliver a seamless, secure, and powerful educational experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                    <div className="bg-gradient-to-r from-primary-500 to-accent-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-300 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="text-accent-400 font-bold text-lg">
                      {feature.stats}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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
              How CleverCard <span className="text-primary-600">Works</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From setup to insights, CleverCard makes complex educational administration 
              simple and intuitive. Here's how it works for teachers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Setup & Scan',
                description: 'Download the app, create your account, and scan your school\'s blank report card template. Our AI learns your format instantly.',
                icon: Camera
              },
              {
                step: '02',
                title: 'Input & Process',
                description: 'Take a photo of your completed mark sheet. Our AI extracts all data, calculates grades, and generates insights automatically.',
                icon: Brain
              },
              {
                step: '03',
                title: 'Review & Share',
                description: 'Review the processed data, make any adjustments, and generate beautiful digital report cards with a single tap.',
                icon: CheckCircle
              }
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 text-center relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="absolute top-4 right-4 text-6xl font-bold text-primary-100 group-hover:text-primary-200 transition-colors duration-300">
                      {step.step}
                    </div>
                    
                    <div className="bg-gradient-to-r from-primary-500 to-accent-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-neutral-900 mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-neutral-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {index < 2 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="h-8 w-8 text-primary-300" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Experience the Future of Education
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Join thousands of educators who have already transformed their teaching experience. 
              Try CleverCard today and see the difference AI can make.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold flex items-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300 mx-auto group"
            >
              <Smartphone className="h-5 w-5 group-hover:animate-bounce" />
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Features;