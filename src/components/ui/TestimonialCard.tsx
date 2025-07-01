import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  school: string;
  content: string;
  rating: number;
  delay?: number;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  school,
  content,
  rating,
  delay = 0,
  image
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 relative overflow-hidden group"
    >
      <div className="absolute top-4 right-4 text-primary-200 group-hover:text-primary-300 transition-colors duration-300">
        <Quote className="h-8 w-8" />
      </div>
      
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-neutral-300'
            }`}
          />
        ))}
      </div>
      
      <p className="text-neutral-700 mb-6 italic leading-relaxed">
        "{content}"
      </p>
      
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-neutral-900">{name}</h4>
          <p className="text-sm text-neutral-600">{role}</p>
          <p className="text-sm text-primary-600 font-medium">{school}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;