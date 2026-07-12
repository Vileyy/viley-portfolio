import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Compass, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white border-t border-border-custom">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">About Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text-primary">
            Building High-Quality Web Experiences
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <h4 className="text-2xl font-bold text-text-primary flex items-center gap-2">
              <Compass className="w-6 h-6 text-primary" /> My Career Goal
            </h4>
            <p className="text-text-secondary leading-relaxed">
              I am a frontend developer who loves building high-quality websites. My goal is to write clean, easy-to-read code that helps companies scale and maintain their software easily.
            </p>
            <p className="text-text-secondary leading-relaxed">
              I always focus on improving web speed, making user interactions smooth, and keeping the development process simple and efficient.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <h4 className="text-2xl font-bold text-text-primary flex items-center gap-2">
              <Heart className="w-6 h-6 text-secondary" /> My Passions
            </h4>
            <p className="text-text-secondary leading-relaxed">
              Besides writing code, I love learning about new web technologies, UI/UX designs, and how to improve site performance. For me, coding is a balance between logic and visual beauty.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                'Clean Architecture',
                'Performance Tuning',
                'Real-time Features',
                'Smooth User Experience'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-text-primary font-medium text-sm">
                  <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
