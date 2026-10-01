import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { 
  Layout, 
  Smartphone, 
  Layers, 
  Activity, 
  Wifi, 
  Zap, 
  Code,
  MapPin,
  BarChart3,
  Calendar,
  Kanban as KanbanIcon,
  GanttChart,
  PenTool,
  ShieldCheck,
  TestTube
} from 'lucide-react';

import { FaReact, FaNodeJs } from 'react-icons/fa';
import { 
  SiTypescript, 
  SiFirebase, 
  SiTailwindcss, 
  SiFlutter, 
  SiAntdesign,
  SiLeaflet,
  SiPusher,
  SiBun,
  SiHtml5,
  SiCss,
  SiFastapi
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

const getSkillIcon = (name: string) => {
  const n = name.toLowerCase();
  
  if (n.includes('react native')) return <TbBrandReactNative className="w-4 h-4 text-[#61dafb]" />;
  if (n.includes('react')) return <FaReact className="w-4 h-4 text-[#61dafb]" />;
  if (n.includes('typescript')) return <SiTypescript className="w-4 h-4 text-[#3178c6] rounded-sm" />;
  if (n.includes('html5')) {
    return (
      <div className="flex items-center gap-0.5">
        <SiHtml5 className="w-4 h-4 text-[#e34f26]" />
        <SiCss className="w-4 h-4 text-[#1572b6]" />
      </div>
    );
  }
  if (n.includes('tailwind')) return <SiTailwindcss className="w-4 h-4 text-[#38bdf8]" />;
  if (n.includes('ant design')) return <SiAntdesign className="w-4 h-4 text-[#0170fe]" />;
  if (n.includes('node.js')) return <FaNodeJs className="w-4 h-4 text-[#339933]" />;
  if (n.includes('fastapi')) return <SiFastapi className="w-4 h-4 text-[#009688]" />;
  if (n.includes('flutter')) return <SiFlutter className="w-4 h-4 text-[#02569b]" />;
  if (n.includes('firebase')) return <SiFirebase className="w-4 h-4 text-[#ffa000]" />;
  if (n.includes('leaflet')) return <SiLeaflet className="w-4 h-4 text-[#199900]" />;
  if (n.includes('pusher') || n.includes('websocket')) return <SiPusher className="w-4 h-4 text-[#300d4f]" />;
  if (n.includes('bun')) return <SiBun className="w-4 h-4 text-[#fbf0df] bg-slate-800 rounded-sm" />;
  if (n.includes('recharts') || n.includes('analytics')) return <BarChart3 className="w-4 h-4 text-indigo-500" />;
  if (n.includes('fullcalendar') || n.includes('calendar')) return <Calendar className="w-4 h-4 text-blue-500" />;
  if (n.includes('kanban') || n.includes('dnd-kit')) return <KanbanIcon className="w-4 h-4 text-emerald-500" />;
  if (n.includes('gantt')) return <GanttChart className="w-4 h-4 text-amber-500" />;
  if (n.includes('konva') || n.includes('canvas')) return <PenTool className="w-4 h-4 text-rose-500" />;
  if (n.includes('playwright') || n.includes('test')) return <TestTube className="w-4 h-4 text-emerald-600" />;
  if (n.includes('jwt') || n.includes('rbac') || n.includes('security')) return <ShieldCheck className="w-4 h-4 text-violet-500" />;
  if (n.includes('rest') || n.includes('api')) return <Activity className="w-4 h-4 text-indigo-500" />;
  if (n.includes('query') || n.includes('redux') || n.includes('state') || n.includes('architecture')) return <Layers className="w-4 h-4 text-violet-500" />;
  if (n.includes('performance')) return <Zap className="w-4 h-4 text-yellow-500" />;
  return <Code className="w-4 h-4 text-slate-400" />;
};

interface Skill {
  name: string;
  level: 'Expert' | 'Advanced' | 'Intermediate';
}

interface SkillGroup {
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: Skill[];
}

export const Skills: React.FC = () => {
  const skillGroups: SkillGroup[] = [
    {
      category: 'Frontend Core',
      icon: Layout,
      skills: [
        { name: 'React 18 / 19', level: 'Expert' },
        { name: 'TypeScript', level: 'Expert' },
        { name: 'Tailwind CSS', level: 'Expert' },
        { name: 'Ant Design 5', level: 'Expert' }
      ]
    },
    {
      category: 'Geospatial & Visualization',
      icon: MapPin,
      skills: [
        { name: 'Leaflet Maps & Polylines', level: 'Advanced' },
        { name: 'Recharts Analytics', level: 'Advanced' },
        { name: 'Konva Canvas Annotation', level: 'Advanced' },
        { name: 'FullCalendar (Multi-TZ)', level: 'Advanced' }
      ]
    },
    {
      category: 'State & Realtime Comms',
      icon: Wifi,
      skills: [
        { name: 'WebSockets & Pusher', level: 'Advanced' },
        { name: 'TanStack Query (React Query)', level: 'Advanced' },
        { name: 'Redux Toolkit / State Snapshots', level: 'Advanced' },
        { name: 'REST APIs & Clean Architecture', level: 'Expert' }
      ]
    },
    {
      category: 'Enterprise UI & Workflows',
      icon: Layers,
      skills: [
        { name: 'Kanban (@dnd-kit drag-drop)', level: 'Advanced' },
        { name: 'Interactive Gantt Charts', level: 'Advanced' },
        { name: 'JWT & RBAC Guards', level: 'Advanced' },
        { name: 'Performance Optimization', level: 'Advanced' }
      ]
    },
    {
      category: 'Testing & Tooling',
      icon: TestTube,
      skills: [
        { name: 'Playwright E2E Testing', level: 'Advanced' },
        { name: 'Bun Test Runner', level: 'Advanced' },
        { name: 'GitLab CI & Quality Gates', level: 'Advanced' },
        { name: 'Vite & Modern Tooling', level: 'Expert' }
      ]
    },
    {
      category: 'Mobile & Backend',
      icon: Smartphone,
      skills: [
        { name: 'React Native (Expo)', level: 'Advanced' },
        { name: 'Node.js', level: 'Advanced' },
        { name: 'FastAPI', level: 'Intermediate' },
        { name: 'Firebase', level: 'Advanced' }
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } }
  };

  return (
    <section id="skills" className="py-24 bg-card border-t border-border-custom">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-primary text-xs font-bold uppercase tracking-wider mb-2">
            <Zap className="w-3.5 h-3.5" /> Technical Arsenal
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">
            Engineering & Domain Skills
          </h2>
          <p className="text-text-secondary text-sm md:text-base mt-2 max-w-xl mx-auto">
            Practical skills honed in building mission-critical B2B applications, geospatial routing, real-time sync, and enterprise testing.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(59, 130, 246, 0.08)' }}
                className="bg-white p-6 rounded-3xl border border-border-custom transition-all duration-300 shadow-xs"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-2xl bg-blue-50 text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-text-primary">{group.category}</h3>
                </div>

                <div className="flex flex-col gap-3.5">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex justify-between items-center">
                      <span className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-text-primary">
                        {getSkillIcon(skill.name)}
                        <span>{skill.name}</span>
                      </span>
                      <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-100 text-text-secondary font-semibold">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
