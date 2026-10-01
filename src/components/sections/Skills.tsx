import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { 
  Layout, 
  MapPin, 
  Wifi, 
  Zap, 
  BarChart3,
  Calendar,
  Kanban as KanbanIcon,
  GanttChart,
  PenTool,
  ShieldCheck,
  TestTube,
  Layers
} from 'lucide-react';

import { FaReact } from 'react-icons/fa';
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiNextdotjs,
  SiAntdesign,
  SiLeaflet,
  SiPusher,
  SiBun
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

interface SkillItem {
  name: string;
  context?: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: SkillItem[];
}

export const Skills: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: 'Frontend & Mobile Core',
      subtitle: 'Primary technologies used across web platforms & mobile apps',
      badge: 'Core Stack',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200/60',
      icon: Layout,
      skills: [
        { name: 'React 18 / 19', icon: <FaReact className="w-4 h-4 text-[#61dafb]" /> },
        { name: 'TypeScript', icon: <SiTypescript className="w-3.5 h-3.5 text-[#3178c6] rounded-xs" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="w-4 h-4 text-slate-900" /> },
        { name: 'React Native (Expo)', icon: <TbBrandReactNative className="w-4 h-4 text-[#61dafb]" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-4 h-4 text-[#38bdf8]" /> },
        { name: 'Ant Design 5', icon: <SiAntdesign className="w-4 h-4 text-[#0170fe]" /> }
      ]
    },
    {
      title: 'Enterprise Features (Orbit · Atlas)',
      subtitle: 'Specialized domain modules engineered for European client platforms',
      badge: 'Client Systems',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200/60',
      icon: MapPin,
      skills: [
        { name: 'Leaflet (Maps & Polylines)', context: 'Orbit & Atlas', icon: <SiLeaflet className="w-4 h-4 text-[#199900]" /> },
        { name: 'Recharts Analytics', context: 'Orbit KPI', icon: <BarChart3 className="w-4 h-4 text-indigo-500" /> },
        { name: 'Konva Canvas (Blueprint Markup)', context: 'Atlas', icon: <PenTool className="w-4 h-4 text-rose-500" /> },
        { name: 'FullCalendar (Multi-TZ)', context: 'Orbit Berlin', icon: <Calendar className="w-4 h-4 text-blue-500" /> },
        { name: 'Kanban (@dnd-kit)', context: 'Atlas PM', icon: <KanbanIcon className="w-4 h-4 text-emerald-500" /> },
        { name: 'Interactive Gantt Charts', context: 'Atlas Trades', icon: <GanttChart className="w-4 h-4 text-amber-500" /> }
      ]
    },
    {
      title: 'Real-time, State & Testing',
      subtitle: 'System reliability, instant data synchronization & quality assurance',
      badge: 'Architecture & CI',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
      icon: Wifi,
      skills: [
        { name: 'Pusher & WebSockets', context: 'Live Sync', icon: <SiPusher className="w-4 h-4 text-[#300d4f]" /> },
        { name: 'TanStack Query (React Query)', context: 'Caching', icon: <Layers className="w-4 h-4 text-rose-500" /> },
        { name: 'Redux State Snapshots', context: 'Simulations', icon: <Layers className="w-4 h-4 text-purple-500" /> },
        { name: 'Playwright E2E Testing', context: 'CI Gates', icon: <TestTube className="w-4 h-4 text-emerald-600" /> },
        { name: 'Bun Test Runner', context: 'Fast Unit Tests', icon: <SiBun className="w-4 h-4 text-amber-700" /> },
        { name: 'JWT & RBAC Route Guards', context: 'Security', icon: <ShieldCheck className="w-4 h-4 text-violet-500" /> }
      ]
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="skills" className="py-20 bg-card border-t border-border-custom">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-primary text-xs font-bold uppercase tracking-wider mb-2">
            <Zap className="w-3.5 h-3.5" /> Technical Stack
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">
            Skills & Hands-on Technologies
          </h2>
          <p className="text-text-secondary text-sm mt-1 max-w-xl mx-auto">
            Practical skills honed in building mission-critical B2B applications, geospatial routing, real-time sync, and enterprise testing.
          </p>
        </motion.div>

        {/* Compact 3-Column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="bg-white p-6 rounded-3xl border border-border-custom shadow-xs hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-slate-50 text-primary border border-slate-100">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-text-primary">{cat.title}</h3>
                    </div>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${cat.badgeColor}`}>
                      {cat.badge}
                    </span>
                  </div>

                  <p className="text-xs text-text-secondary mb-4 leading-relaxed">
                    {cat.subtitle}
                  </p>

                  {/* Clean Skill Chips */}
                  <div className="flex flex-col gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-2 rounded-xl bg-slate-50/80 border border-slate-100 hover:bg-slate-100/70 transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-6 h-6 rounded-lg bg-white shadow-2xs border border-slate-100 flex items-center justify-center shrink-0">
                            {skill.icon}
                          </div>
                          <span className="text-xs font-semibold text-text-primary">{skill.name}</span>
                        </div>
                        {skill.context && (
                          <span className="text-[10px] font-medium text-text-muted bg-white px-2 py-0.5 rounded-md border border-slate-200/60 shadow-2xs">
                            {skill.context}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
