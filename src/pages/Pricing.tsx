import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  X, 
  Star, 
  Users, 
  Smartphone, 
  Shield, 
  Zap,
  BarChart3,
  Brain,
  Clock,
  Globe,
  ArrowRight,
  Phone,
  Mail,
  Calendar
} from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      description: 'Perfect for trying CleverCard',
      price: { monthly: 0, annual: 0 },
      badge: null,
      features: [
        { name: '1 class, up to 20 students', included: true },
        { name: 'Basic OCR scanning', included: true },
        { name: 'Simple report generation', included: true },
        { name: 'Mobile app access', included: true },
        { name: 'Community support', included: true },
        { name: 'Advanced analytics', included: false },
        { name: 'AI-powered insights', included: false },
        { name: 'Unlimited classes', included: false },
        { name: 'Priority support', included: false },
        { name: 'Admin dashboard', included: false }
      ],
      cta: 'Start Free',
      popular: false
    },
    {
      name: 'Teacher Pro',
      description: 'For dedicated educators',
      price: { monthly: 5, annual: 50 },
      badge: 'Most Popular',
      features: [
        { name: 'Unlimited classes & students', included: true },
        { name: 'Advanced OCR with 99.5% accuracy', included: true },
        { name: 'Professional report generation', included: true },
        { name: 'AI-powered student insights', included: true },
        { name: 'Performance analytics dashboard', included: true },
        { name: 'Automated grade calculations', included: true },
        { name: 'Smart comment suggestions', included: true },
        { name: 'Offline-first functionality', included: true },
        { name: 'Priority email support', included: true },
        { name: 'Admin dashboard', included: false }
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'School Plan',
      description: 'For institutions & administrators',
      price: { monthly: 'Custom', annual: 'Custom' },
      badge: 'Enterprise',
      features: [
        { name: 'Everything in Teacher Pro', included: true },
        { name: 'School-wide admin dashboard', included: true },
        { name: 'Multi-teacher management', included: true },
        { name: 'Institutional analytics', included: true },
        { name: 'Custom onboarding & training', included: true },
        { name: 'Dedicated account manager', included: true },
        { name: 'Priority phone support', included: true },
        { name: 'Custom integrations', included: true },
        { name: 'Data export & reporting', included: true },
        { name: 'SLA guarantee', included: true }
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'How does the free trial work?',
      answer: 'You get full access to Teacher Pro features for 14 days, no credit card required. After the trial, you can continue with the free plan or upgrade to maintain premium features.'
    },
    {
      question: 'Can I use CleverCard offline?',
      answer: 'Yes! CleverCard is built offline-first. You can scan documents, generate reports, and view data without internet. Everything syncs automatically when you\'re back online.'
    },
    {
      question: 'How accurate is the handwriting recognition?',
      answer: 'Our AI achieves 99.5% accuracy on clear handwriting. The verification interface lets you quickly correct any errors before finalizing your data.'
    },
    {
      question: 'What happens to my data if I cancel?',
      answer: 'Your data remains accessible for 90 days after cancellation. You can export all your information at any time. We never delete student data without explicit permission.'
    },
    {
      question: 'Do you offer discounts for developing countries?',
      answer: 'Yes! We offer significant discounts for teachers and schools in developing regions. Contact us to learn about our education equity pricing.'
    },
    {
      question: 'Can I upgrade or downgrade my plan anytime?',
      answer: 'Absolutely. You can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at your next billing cycle.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mbah',
      role: 'Primary School Teacher',
      school: 'Government Primary School Bamenda',
      content: 'The Teacher Pro plan paid for itself in the first week. I saved 8 hours of work and my reports look more professional than ever.',
      rating: 5
    },
    {
      name: 'Dr. Emmanuel Fon',
      role: 'School Principal',
      school: 'Sacred Heart College',
      content: 'The School Plan dashboard gives us insights we never had before. We can finally make data-driven decisions about our curriculum.',
      rating: 5
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
              Simple, <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Choose the plan that fits your needs. Start free, upgrade when you're ready. 
              All plans include our core AI-powered features with no hidden fees.
            </p>
          </motion.div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <div className="bg-white rounded-xl p-2 shadow-lg border border-neutral-200">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                    !isAnnual 
                      ? 'bg-primary-600 text-white shadow-md' 
                      : 'text-neutral-600 hover:text-primary-600'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 relative ${
                    isAnnual 
                      ? 'bg-primary-600 text-white shadow-md' 
                      : 'text-neutral-600 hover:text-primary-600'
                  }`}
                >
                  Annual
                  <span className="absolute -top-2 -right-2 bg-success-500 text-white text-xs px-2 py-1 rounded-full">
                    Save 17%
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-primary-500 scale-105' 
                    : 'border-neutral-200 hover:border-primary-300'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">{plan.name}</h3>
                  <p className="text-neutral-600 mb-6">{plan.description}</p>

                  <div className="mb-8">
                    {typeof plan.price.monthly === 'number' ? (
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-neutral-900">
                          ${isAnnual ? plan.price.annual : plan.price.monthly}
                        </span>
                        <span className="text-neutral-600 ml-2">
                          {plan.price.monthly === 0 ? 'forever' : isAnnual ? '/year' : '/month'}
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-neutral-900">Custom</span>
                        <span className="text-neutral-600 ml-2">pricing</span>
                      </div>
                    )}
                    {isAnnual && plan.price.monthly > 0 && (
                      <p className="text-sm text-success-600 mt-1">
                        Save ${(plan.price.monthly * 12) - plan.price.annual} per year
                      </p>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-success-500 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-neutral-400 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${
                          feature.included ? 'text-neutral-700' : 'text-neutral-400'
                        }`}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg hover:shadow-xl'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
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
              Why Choose <span className="text-primary-600">CleverCard</span>?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Compare our features with traditional methods and see why thousands of 
              educators are making the switch to CleverCard.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: 'Time Savings',
                traditional: '6+ hours per term',
                clevercard: '15 minutes per term',
                improvement: '95% faster'
              },
              {
                icon: BarChart3,
                title: 'Data Insights',
                traditional: 'No analytics',
                clevercard: 'AI-powered insights',
                improvement: 'Complete visibility'
              },
              {
                icon: Shield,
                title: 'Data Security',
                traditional: 'Paper can be lost',
                clevercard: 'Bank-level encryption',
                improvement: '100% secure'
              },
              {
                icon: Smartphone,
                title: 'Accessibility',
                traditional: 'Office-bound',
                clevercard: 'Works anywhere',
                improvement: 'Total mobility'
              }
            ].map((comparison, index) => {
              const Icon = comparison.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 text-center"
                >
                  <div className="bg-gradient-to-r from-primary-500 to-accent-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">{comparison.title}</h3>
                  
                  <div className="space-y-3">
                    <div className="bg-white/60 rounded-lg p-3">
                      <p className="text-sm text-neutral-600 mb-1">Traditional Method</p>
                      <p className="font-semibold text-neutral-800">{comparison.traditional}</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3 border-2 border-primary-200">
                      <p className="text-sm text-primary-600 mb-1">With CleverCard</p>
                      <p className="font-semibold text-primary-800">{comparison.clevercard}</p>
                    </div>
                    
                    <div className="bg-success-100 rounded-lg p-2">
                      <p className="text-sm font-bold text-success-700">{comparison.improvement}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Our Users Say
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what educators are saying about 
              the value CleverCard brings to their teaching.
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
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-neutral-300'
                      }`}
                    />
                  ))}
                </div>
                
                <p className="text-neutral-700 mb-6 italic leading-relaxed text-lg">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">{testimonial.name}</h4>
                    <p className="text-sm text-neutral-600">{testimonial.role}</p>
                    <p className="text-sm text-primary-600 font-medium">{testimonial.school}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-neutral-600">
              Got questions? We've got answers. If you don't see what you're looking for, 
              feel free to reach out to our support team.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-100"
              >
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Sales Section */}
      <section className="py-20 bg-gradient-to-r from-neutral-900 via-primary-900 to-accent-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready for School-Wide Implementation?
              </h2>
              <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                Our School Plan is designed for institutions that want to transform their 
                entire administrative system. Get custom pricing, dedicated support, and 
                comprehensive training for your staff.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success-400" />
                  <span className="text-neutral-300">Custom onboarding & training</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success-400" />
                  <span className="text-neutral-300">Dedicated account manager</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success-400" />
                  <span className="text-neutral-300">Priority support & SLA guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success-400" />
                  <span className="text-neutral-300">Volume discounts available</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Contact Our Sales Team</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Call Us</p>
                    <p className="text-neutral-300">+237 674 063 317</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email Us</p>
                    <p className="text-neutral-300">sales@clevercard.app</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-success-500 rounded-xl flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Schedule a Demo</p>
                    <p className="text-neutral-300">Book a personalized walkthrough</p>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-8 bg-gradient-to-r from-primary-600 to-accent-600 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
              >
                <span>Schedule Demo</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Start Your Free Trial Today
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Join thousands of educators who have already transformed their teaching experience. 
              No credit card required, no commitment, just results.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold flex items-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300 mx-auto group"
            >
              <Smartphone className="h-5 w-5 group-hover:animate-bounce" />
              <span>Download CleverCard Free</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;