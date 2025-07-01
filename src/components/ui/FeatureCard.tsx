import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  gradient?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  delay = 0,
  gradient = 'from-primary-500 to-accent-500'
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
        
        <h3 className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-neutral-600 leading-relaxed">
          {description}
        </p>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  );
};

export default FeatureCard;