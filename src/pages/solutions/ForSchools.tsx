import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  Shield, 
  TrendingUp,
  Clock,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  Target,
  Zap,
  Globe,
  Brain,
  DollarSign,
  UserCheck,
  Settings,
  FileText,
  Smartphone
} from 'lucide-react';
import AnimatedCounter from '../../components/ui/AnimatedCounter';

const ForSchools = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Massive Time Savings',
      description: 'Teachers save 24+ hours per week on administrative tasks',
      metric: '85% reduction in paperwork time',
      color: 'primary'
    },
    {
      icon: TrendingUp,
      title: 'Improved Student Outcomes',
      description: 'Data-driven insights lead to better educational decisions',
      metric: '25% average performance improvement',
      color: 'success'
    },
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Reduce paper costs and administrative overhead',
      metric: '40% reduction in admin costs',
      color: 'warning'
    },
    {
      icon: UserCheck,
      title: 'Teacher Retention',
      description: 'Happier teachers stay longer and perform better',
      metric: '60% improvement in job satisfaction',
      color: 'accent'
    }
  ];

  const features = [
    {
      icon: BarChart3,
      title: 'School-Wide Analytics Dashboard',
      description: 'Get a comprehensive view of your entire institution\'s performance with real-time analytics, trend analysis, and actionable insights.',
      capabilities: [
        'Real-time performance tracking across all classes',
        'Subject-wise analysis and trend identification',
        'Early warning system for at-risk students',
        'Teacher performance and workload monitoring'
      ]
    },
    {
      icon: Users,
      title: 'Multi-Teacher Management',
      description: 'Seamlessly manage multiple teachers, classes, and administrative workflows from a single, intuitive platform.',
      capabilities: [
        'Centralized teacher account management',
        'Class and student assignment tools',
        'Collaborative grading and reporting',
        'Standardized report card templates'
      ]
    },
    {
      icon: Shield,
      title: 'Enterprise Security & Compliance',
      description: 'Bank-level security with full compliance to educational data protection standards and local regulations.',
      capabilities: [
        '256-bit encryption for all data',
        'GDPR and local compliance ready',
        'Role-based access controls',
        'Audit trails and data backup'
      ]
    },
    {
      icon: Brain,
      title: 'AI-Powered Institutional Insights',
      description: 'Leverage artificial intelligence to identify patterns, predict outcomes, and optimize your school\'s performance.',
      capabilities: [
        'Predictive analytics for student success',
        'Curriculum gap identification',
        'Resource allocation optimization',
        'Automated report generation'
      ]
    }
  ];

  const implementationSteps = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Our team conducts a comprehensive assessment of your current systems and creates a customized implementation plan.',
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'System Setup & Configuration',
      description: 'We configure CleverCard to match your school\'s specific needs, including report card templates and grading schemes.',
      duration: '1 week'
    },
    {
      step: '03',
      title: 'Teacher Training & Onboarding',
      description: 'Comprehensive training sessions ensure all staff are comfortable and confident using the new system.',
      duration: '2-3 weeks'
    },
    {
      step: '04',
      title: 'Pilot Testing & Refinement',
      description: 'Start with a small group of teachers to test the system and make any necessary adjustments.',
      duration: '2-4 weeks'
    },
    {
      step: '05',
      title: 'Full Deployment & Support',
      description: 'Roll out to the entire school with ongoing support and monitoring to ensure smooth operation.',
      duration: 'Ongoing'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Emmanuel Fon',
      role: 'Principal',
      school: 'Sacred Heart College, Bamenda',
      content: 'CleverCard transformed our school administration. We now have insights we never had before, and our teachers are happier and more productive.',
      results: [
        '30% reduction in administrative time',
        '25% improvement in student outcomes',
        '90% teacher satisfaction rate'
      ]
    },
    {
      name: 'Sister Mary Catherine',
      role: 'Head Administrator',
      school: 'St. Joseph\'s Primary School',
      content: 'The implementation was seamless, and the support team was exceptional. Our data is now secure, accessible, and actionable.',
      results: [
        '100% paperless administration',
        '50% faster report generation',
        '95% parent satisfaction with reports'
      ]
    }
  ];

  const pricingTiers = [
    {
      name: 'Small School',
      description: 'Perfect for schools with 1-10 teachers',
      price: 'Starting at $200/month',
      features: [
        'Up to 10 teacher accounts',
        'Basic analytics dashboard',
        'Email support',
        'Standard onboarding'
      ]
    },
    {
      name: 'Medium School',
      description: 'Ideal for schools with 11-50 teachers',
      price: 'Starting at $500/month',
      features: [
        'Up to 50 teacher accounts',
        'Advanced analytics & insights',
        'Priority support',
        'Custom training sessions'
      ]
    },
    {
      name: 'Large Institution',
      description: 'For schools with 50+ teachers',
      price: 'Custom pricing',
      features: [
        'Unlimited teacher accounts',
        'Full enterprise features',
        'Dedicated account manager',
        'Custom integrations'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users className="h-4 w-4" />
                <span>For School Administrators</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                Empower Your <br />
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  Entire School
                </span> <br />
                with Data-Driven Insights
              </h1>

              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Transform your school's administrative efficiency and educational outcomes 
                with CleverCard's comprehensive institutional platform. Get the insights 
                you need to make informed decisions and drive student success.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Calendar className="h-5 w-5 group-hover:animate-bounce" />
                  <span>Schedule Demo</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 hover:bg-primary-50 transition-all duration-300 group"
                >
                  <Phone className="h-5 w-5" />
                  <span>Contact Sales</span>
                </motion.button>
              </div>

              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-1">
                    <AnimatedCounter end={50} suffix="+" />
                  </div>
                  <p className="text-sm text-neutral-600">Schools Using CleverCard</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-success-600 mb-1">
                    <AnimatedCounter end={98} suffix="%" />
                  </div>
                  <p className="text-sm text-neutral-600">Admin Satisfaction Rate</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-neutral-200">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900">School Dashboard</h3>
                    <p className="text-sm text-neutral-600">Real-time Analytics</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-success-50 rounded-lg">
                    <span className="text-sm font-medium text-success-700">Overall Performance</span>
                    <div className="text-success-600 font-bold">+15%</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-primary-50 rounded-lg">
                    <span className="text-sm font-medium text-primary-700">Active Teachers</span>
                    <div className="text-primary-600 font-bold">45/45</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-accent-50 rounded-lg">
                    <span className="text-sm font-medium text-accent-700">Reports Generated</span>
                    <div className="text-accent-600 font-bold">1,250</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-warning-50 rounded-lg">
                    <span className="text-sm font-medium text-warning-700">Time Saved This Month</span>
                    <div className="text-warning-600 font-bold">480 hrs</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Measurable <span className="text-primary-600">Impact</span> for Your School
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              CleverCard delivers quantifiable results that transform your school's 
              efficiency, teacher satisfaction, and student outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gradient-to-br from-${benefit.color}-50 to-${benefit.color}-100 rounded-2xl p-6 text-center border border-${benefit.color}-200`}
                >
                  <div className={`w-16 h-16 bg-${benefit.color}-500 rounded-xl flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className={`text-xl font-bold text-${benefit.color}-900 mb-3`}>
                    {benefit.title}
                  </h3>
                  
                  <p className={`text-${benefit.color}-700 mb-4 leading-relaxed`}>
                    {benefit.description}
                  </p>
                  
                  <div className={`bg-${benefit.color}-200 rounded-lg p-3`}>
                    <p className={`text-sm font-bold text-${benefit.color}-800`}>
                      {benefit.metric}
                    </p>
                  </div>
                </motion.div>
              );
            })}
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
              Enterprise-Grade <span className="text-primary-600">Features</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              CleverCard's School Plan includes everything you need to manage your 
              institution effectively, from individual classrooms to school-wide analytics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-3 rounded-xl">
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

                  <div className="space-y-3">
                    {feature.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-success-500 flex-shrink-0" />
                        <span className="text-sm text-neutral-700">{capability}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
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
              Seamless <span className="text-primary-600">Implementation</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our proven implementation process ensures a smooth transition with minimal 
              disruption to your school's operations.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></div>

            <div className="space-y-12">
              {implementationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:space-x-8 space-y-6 lg:space-y-0`}
                >
                  <div className="flex-1 lg:text-right lg:pr-8">
                    <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                      <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                        <Clock className="h-4 w-4" />
                        <span>{step.duration}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.step}
                    </div>
                  </div>

                  <div className="flex-1 lg:pl-8">
                    {/* Spacer for alternating layout */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              Success Stories
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              See how schools like yours have transformed their operations and 
              improved outcomes with CleverCard.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <p className="text-white text-lg mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-neutral-300">{testimonial.role}</p>
                    <p className="text-sm text-accent-300 font-medium">{testimonial.school}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="text-white font-semibold mb-3">Results Achieved:</h5>
                  {testimonial.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success-400" />
                      <span className="text-neutral-300 text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
              Flexible <span className="text-primary-600">Pricing</span> for Every School
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Choose the plan that fits your school's size and needs. All plans include 
              our core features with scalable pricing as you grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                  index === 1 
                    ? 'border-primary-500 scale-105' 
                    : 'border-neutral-200 hover:border-primary-300'
                }`}
              >
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">{tier.name}</h3>
                  <p className="text-neutral-600 mb-6">{tier.description}</p>

                  <div className="mb-8">
                    <span className="text-3xl font-bold text-neutral-900">{tier.price}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0" />
                        <span className="text-sm text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      index === 1
                        ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg hover:shadow-xl'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    Contact Sales
                  </motion.button>
                </div>
              </motion.div>
            ))}
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
              Ready to Transform Your School?
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Join the growing number of schools that have revolutionized their 
              administration with CleverCard. Schedule a demo today and see the difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold flex items-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Calendar className="h-5 w-5 group-hover:animate-bounce" />
                <span>Schedule Demo</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-3 border border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                <Phone className="h-5 w-5" />
                <span>Call Sales Team</span>
              </motion.button>
            </div>

            <div className="mt-8 flex items-center justify-center space-x-6 text-primary-100">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">Free consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">Custom implementation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">Ongoing support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ForSchools;