import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

const StatsSection = () => {
  const stats = [
    {
      number: 200,
      suffix: 'M+',
      label: 'Students in Sub-Saharan Africa',
      description: 'Primary school students who could benefit from digital solutions'
    },
    {
      number: 30,
      suffix: '%',
      label: 'Time Spent on Paperwork',
      description: 'Of teachers\' working hours lost to administrative tasks'
    },
    {
      number: 90,
      suffix: '%',
      label: 'Schools Without Digital Systems',
      description: 'Primary schools in developing regions still rely on paper'
    },
    {
      number: 24,
      suffix: 'hrs',
      label: 'Weekly Time Saved',
      description: 'Average time CleverCard saves teachers per week'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-neutral-900 via-primary-900 to-accent-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            The Numbers Tell the Story
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Behind every statistic is a teacher working late, a student's potential waiting to be unlocked, 
            and a school system ready for transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter
                    end={stat.number}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>
                <h3 className="text-lg font-semibold text-accent-300 mb-3">
                  {stat.label}
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;