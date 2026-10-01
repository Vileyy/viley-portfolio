import React from 'react';
import { motion } from 'framer-motion';
import { Compass, CheckCircle2, Cpu, Globe } from 'lucide-react';

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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-primary text-xs font-bold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5" /> Professional Background
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">
            Engineering Enterprise Solutions & Modern Web
          </h2>
          <p className="text-text-secondary text-sm md:text-base mt-2 max-w-xl mx-auto">
            Combining strong product intuition with solid software architecture for European clients and consumer-facing apps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <h3 className="text-2xl font-bold text-text-primary flex items-center gap-2">
              <Globe className="w-6 h-6 text-primary" /> Engineering Philosophy
            </h3>
            <p className="text-text-secondary leading-relaxed text-sm md:text-base">
              I am a Frontend Software Engineer with hands-on experience building real-world business applications for international clients (such as German enterprise partners).
            </p>
            <p className="text-text-secondary leading-relaxed text-sm md:text-base">
              My engineering philosophy revolves around clean architectural boundaries, defensive programming, and zero-compromise UX. Whether tackling complex schedule simulations with multi-timezone sync or large-scale multi-role ERPs, I focus on building software that scales seamlessly and remains maintainable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <h3 className="text-2xl font-bold text-text-primary flex items-center gap-2">
              <Cpu className="w-6 h-6 text-secondary" /> Core Competencies
            </h3>
            <p className="text-text-secondary leading-relaxed text-sm md:text-base">
              Bridging the gap between heavy enterprise backend logic and crisp, responsive frontend interfaces through rigorous automated testing and modern design systems.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-1">
              {[
                'Enterprise Multi-Role RBAC',
                'Real-Time WebSockets (Pusher)',
                'Complex State & Snapshots',
                'Geospatial Routing (Leaflet)',
                'Automated E2E Testing',
                'Performance & Web Vitals'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-text-primary font-medium text-xs sm:text-sm p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
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
