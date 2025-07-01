import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Clock, 
  Users, 
  Globe, 
  Heart, 
  Brain,
  Target,
  Award,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  MapPin,
  Lightbulb
} from 'lucide-react';
import AnimatedCounter from '../components/ui/AnimatedCounter';

const Mission = () => {
  const problemStats = [
    {
      number: 30,
      suffix: '%',
      label: 'Teacher Time Lost',
      description: 'Of working hours spent on non-pedagogical administrative tasks',
      icon: Clock,
      color: 'error'
    },
    {
      number: 200,
      suffix: 'M+',
      label: 'Affected Students',
      description: 'Primary school students in Sub-Saharan Africa alone',
      icon: Users,
      color: 'warning'
    },
    {
      number: 90,
      suffix: '%',
      label: 'Schools Without Digital Systems',
      description: 'Primary schools still relying on paper-based administration',
      icon: BarChart3,
      color: 'primary'
    }
  ];

  const solutionPrinciples = [
    {
      icon: Zap,
      title: 'Work with Existing Workflows',
      description: 'Instead of forcing teachers to abandon familiar methods, CleverCard digitizes handwritten documents through AI-powered OCR, seamlessly bridging traditional and digital approaches.',
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      icon: Globe,
      title: 'Leverage Available Technology',
      description: 'Built for smartphones, not computer labs. Our mobile-first, offline-capable design works with the infrastructure that already exists in teachers\' pockets.',
      gradient: 'from-accent-500 to-accent-600'
    },
    {
      icon: Brain,
      title: 'Transform Data into Insight',
      description: 'Convert inert paper records into actionable intelligence. Generate professional reports in minutes and provide personalized learning recommendations for every student.',
      gradient: 'from-success-500 to-success-600'
    }
  ];

  const teamValues = [
    {
      icon: Heart,
      title: 'Educator-First Design',
      description: 'Every feature is designed with deep empathy for the daily challenges teachers face.'
    },
    {
      icon: Shield,
      title: 'Data for Good',
      description: 'We believe student data should empower learning, not exploit it. Privacy and security are non-negotiable.'
    },
    {
      icon: Target,
      title: 'Unwavering Integrity',
      description: 'We build solutions that work, not just solutions that sell. Our success is measured by teacher time saved and student outcomes improved.'
    },
    {
      icon: Globe,
      title: 'Global Vision, Local Roots',
      description: 'Born in Bamenda, built for the world. We understand local challenges while thinking globally.'
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
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" />
              <span>Born in Bamenda, Built for the World</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Our Mission: <br />
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Unlock Every Child's Genius
              </span>
            </h1>
            
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              CleverCard exists to create a world where every child's unique talents are seen, nurtured, 
              and celebrated—regardless of their school's resources or infrastructure. We're transforming 
              education by solving the foundational crisis that holds back millions of teachers and students.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
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
              The <span className="text-error-600">Tripartite Crisis</span> in Education
            </h2>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto">
              For hundreds of millions of students across the developing world, a foundational barrier 
              prevents educational progress: the administrative operating system of schools themselves.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {problemStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 rounded-2xl p-8 border border-${stat.color}-200 text-center`}
                >
                  <div className={`w-16 h-16 bg-${stat.color}-500 rounded-xl flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className={`text-4xl font-bold text-${stat.color}-900 mb-2`}>
                    <AnimatedCounter
                      end={stat.number}
                      suffix={stat.suffix}
                      duration={2.5}
                    />
                  </div>
                  
                  <h3 className={`text-xl font-bold text-${stat.color}-900 mb-4`}>
                    {stat.label}
                  </h3>
                  
                  <p className={`text-${stat.color}-700 leading-relaxed`}>
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Detailed Problem Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-error-50 to-error-100 rounded-2xl p-8 border border-error-200"
            >
              <div className="w-16 h-16 bg-error-500 rounded-xl flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-error-900 mb-4">Teacher Burnout Crisis</h3>
              <p className="text-error-700 leading-relaxed mb-4">
                Teachers spend 20-40% of their professional time on manual administrative tasks: 
                calculating grades, transcribing marks, and handwriting reports.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-error-500 rounded-full"></div>
                  <span className="text-sm text-error-700">9-18 hours lost per week per teacher</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-error-500 rounded-full"></div>
                  <span className="text-sm text-error-700">Reduced time for lesson planning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-error-500 rounded-full"></div>
                  <span className="text-sm text-error-700">Barrier to teacher retention</span>
                </div>
              </div>
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
              <h3 className="text-2xl font-bold text-warning-900 mb-4">The Data Black Hole</h3>
              <p className="text-warning-700 leading-relaxed mb-4">
                When student performance exists only on paper, it's invisible to analysis. 
                Schools operate without early warning systems or evidence-based decisions.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-warning-500 rounded-full"></div>
                  <span className="text-sm text-warning-700">No early intervention for struggling students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-warning-500 rounded-full"></div>
                  <span className="text-sm text-warning-700">Hidden institutional weaknesses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-warning-500 rounded-full"></div>
                  <span className="text-sm text-warning-700">Anecdotal vs. empirical decisions</span>
                </div>
              </div>
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
              <h3 className="text-2xl font-bold text-primary-900 mb-4">The Infrastructure Gap</h3>
              <p className="text-primary-700 leading-relaxed mb-4">
                Only 40% of primary schools in Sub-Saharan Africa have electricity. 
                Student-to-computer ratios exceed 50-to-1, making conventional EdTech non-viable.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-sm text-primary-700">Limited computer infrastructure</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-sm text-primary-700">Intermittent internet connectivity</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-sm text-primary-700">Paper becomes necessity, not choice</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Principles Section */}
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
              Our <span className="text-primary-600">Solution Principles</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto">
              CleverCard is precisely engineered to thrive within existing constraints. 
              We meet schools where they are and guide them into digital efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutionPrinciples.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 group"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${principle.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {principle.title}
                  </h3>
                  
                  <p className="text-neutral-600 leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              );
            })}
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
                <Lightbulb className="h-4 w-4" />
                <span>Our Origin Story</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                From Classroom <br />
                <span className="text-accent-600">Frustration</span> to <br />
                Global <span className="text-primary-600">Innovation</span>
              </h2>

              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                CleverCard wasn't conceived in a distant Silicon Valley boardroom. It was born from 
                first-hand experience in the classrooms of Bamenda, Cameroon, where we witnessed 
                the daily struggle of dedicated educators.
              </p>

              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                We watched passionate teachers spend their weekends buried in paperwork, their 
                enthusiasm dimmed by administrative overload. We saw brilliant students whose 
                unique talents remained invisible to a system that only had time for grades.
              </p>

              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                We knew there had to be a better way—a solution that respects traditional methods 
                but embraces modern technology. That's why we built CleverCard: a solution by us, 
                for us, and now, for the world.
              </p>

              <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6">
                <blockquote className="text-lg italic text-neutral-700">
                  "Every child deserves to have their genius recognized, regardless of their 
                  school's resources or their teacher's available time. Technology should amplify 
                  human potential, not replace human connection."
                </blockquote>
                <div className="mt-4 flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold">
                    C
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">CleverCard Founding Team</p>
                    <p className="text-sm text-neutral-600">Bamenda, Cameroon</p>
                  </div>
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
                      <MapPin className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">Bamenda, Cameroon</h3>
                    <p className="text-neutral-600">Where innovation meets tradition</p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3">
                      <div className="w-8 h-8 bg-error-500 rounded-full flex items-center justify-center">
                        <Heart className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-neutral-700 font-medium">Witnessed teacher burnout firsthand</span>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3">
                      <div className="w-8 h-8 bg-warning-500 rounded-full flex items-center justify-center">
                        <Users className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-neutral-700 font-medium">Saw brilliant students go unnoticed</span>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                        <Brain className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-neutral-700 font-medium">Designed AI-powered solution</span>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3">
                      <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                        <Globe className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-neutral-700 font-medium">Built for global impact</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              These principles guide every decision we make, every feature we build, 
              and every partnership we form.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <div className="bg-gradient-to-r from-primary-500 to-accent-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Goals Section */}
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
              Our <span className="text-primary-600">Impact Goals</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We measure success not just in downloads or revenue, but in the real-world 
              impact we create for teachers, students, and families.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                number: 24,
                suffix: ' hrs',
                label: 'Time Saved Per Teacher',
                description: 'Weekly hours returned to teaching',
                color: 'primary'
              },
              {
                icon: TrendingUp,
                number: 25,
                suffix: '%',
                label: 'Performance Improvement',
                description: 'Average student outcome increase',
                color: 'success'
              },
              {
                icon: Users,
                number: 1000,
                suffix: '+',
                label: 'Active Teachers',
                description: 'Year 1 target user base',
                color: 'accent'
              },
              {
                icon: Award,
                number: 50,
                suffix: ' schools',
                label: 'Pilot Partners',
                description: 'Initial implementation sites',
                color: 'warning'
              }
            ].map((goal, index) => {
              const Icon = goal.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className={`bg-gradient-to-br from-${goal.color}-50 to-${goal.color}-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-${goal.color}-200`}>
                    <div className={`w-16 h-16 bg-${goal.color}-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className={`text-4xl font-bold text-${goal.color}-900 mb-2`}>
                      <AnimatedCounter
                        end={goal.number}
                        suffix={goal.suffix}
                        duration={2.5}
                      />
                    </div>
                    
                    <h3 className={`text-lg font-semibold text-${goal.color}-900 mb-3`}>
                      {goal.label}
                    </h3>
                    
                    <p className={`text-${goal.color}-700 text-sm`}>
                      {goal.description}
                    </p>
                  </div>
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
              Join Our Mission
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Whether you're a teacher, administrator, parent, or education advocate, 
              you can be part of the solution. Together, we can unlock every child's potential.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold flex items-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <CheckCircle className="h-5 w-5 group-hover:animate-bounce" />
                <span>Start Free Trial</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-3 border border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                <Users className="h-5 w-5" />
                <span>Partner with Us</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Mission;