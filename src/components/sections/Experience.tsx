import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import type { Experience as ExpType } from '../../types';

export const Experience: React.FC = () => {
  const experiences: ExpType[] = [
    {
      id: '1',
      role: 'Junior Front-End Engineer',
      company: 'AutoMate Solutions',
      location: 'Ho Chi Minh City, Vietnam',
      period: '2025 - Present',
      description: [
        'Developed high-performance appointment booking interfaces using React 19 and TypeScript.',
        'Helped build real-time notification features using WebSockets (Pusher) for instant booking updates.',
        'Used Clean Architecture principles to keep code readable, organized, and easy to maintain.',
        'Improved frontend rendering performance to ensure a smooth and fast user experience.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white border-t border-border-custom">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Experience</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text-primary">
            Work Experience
          </h3>
        </motion.div>

        <div className="relative border-l border-slate-200 ml-4 md:ml-8 pl-8 md:pl-12 flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline marker node */}
              <div className="absolute -left-[45px] md:-left-[61px] top-1.5 w-6 h-6 rounded-full border-4 border-white bg-primary shadow-md flex items-center justify-center">
                <Briefcase className="w-2.5 h-2.5 text-white" />
              </div>

              <div className="bg-card p-6 md:p-8 rounded-2xl border border-border-custom hover:border-blue-200 transition-colors duration-300">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <h4 className="text-xl font-bold text-text-primary">{exp.role}</h4>
                    <span className="text-lg font-semibold text-primary">{exp.company}</span>
                  </div>

                  <div className="flex flex-col gap-1.5 text-sm text-text-secondary md:items-end">
                    <div className="flex items-center gap-1.5 font-medium">
                      <Calendar className="w-4 h-4 text-text-secondary" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-text-secondary" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="list-disc pl-5 text-text-secondary flex flex-col gap-2.5 text-sm md:text-base leading-relaxed">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="hover:text-text-primary transition-colors duration-200">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
