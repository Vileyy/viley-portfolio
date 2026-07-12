import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { 
  Layout, 
  Server, 
  Smartphone, 
  Cloud, 
  Database, 
  Cpu,
  Layers,
  Activity,
  Wifi,
  Zap,
  Code
} from 'lucide-react';

import { FaReact, FaNodeJs } from 'react-icons/fa';
import { 
  SiTypescript, 
  SiFirebase, 
  SiTailwindcss, 
  SiFlutter, 
  SiGooglecloud, 
  SiPostgresql, 
  SiMongodb,
  SiHtml5,
  SiCss,
  SiFastapi
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

const getSkillIcon = (name: string) => {
  const n = name.toLowerCase();
  
  if (n === 'react') return <FaReact className="w-4 h-4 text-[#61dafb]" />;
  if (n === 'typescript') return <SiTypescript className="w-4 h-4 text-[#3178c6] rounded-sm" />;
  if (n === 'html5 / css3') {
    return (
      <div className="flex items-center gap-0.5">
        <SiHtml5 className="w-4 h-4 text-[#e34f26]" />
        <SiCss className="w-4 h-4 text-[#1572b6]" />
      </div>
    );
  }
  if (n === 'tailwind css') return <SiTailwindcss className="w-4 h-4 text-[#38bdf8]" />;
  if (n === 'node.js') return <FaNodeJs className="w-4 h-4 text-[#339933]" />;
  if (n === 'fastapi') return <SiFastapi className="w-4 h-4 text-[#009688]" />;
  if (n === 'react native') return <TbBrandReactNative className="w-4 h-4 text-[#61dafb]" />;
  if (n === 'flutter') return <SiFlutter className="w-4 h-4 text-[#02569b]" />;
  if (n === 'firebase') return <SiFirebase className="w-4 h-4 text-[#ffa000]" />;
  if (n === 'google cloud') return <SiGooglecloud className="w-4 h-4 text-[#4285f4]" />;
  if (n === 'postgresql') return <SiPostgresql className="w-4 h-4 text-[#336791]" />;
  if (n === 'mongodb') return <SiMongodb className="w-4 h-4 text-[#47a248]" />;
  
  if (n === 'rest apis') return <Activity className="w-4 h-4 text-indigo-500" />;
  if (n === 'websockets & pusher') return <Wifi className="w-4 h-4 text-purple-500" />;
  if (n === 'clean architecture') return <Layers className="w-4 h-4 text-violet-500" />;
  if (n === 'performance opt') return <Zap className="w-4 h-4 text-yellow-500" />;
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
      category: 'Frontend',
      icon: Layout,
      skills: [
        { name: 'React', level: 'Expert' },
        { name: 'TypeScript', level: 'Expert' },
        { name: 'HTML5 / CSS3', level: 'Expert' },
        { name: 'Tailwind CSS', level: 'Expert' }
      ]
    },
    {
      category: 'Backend',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 'Advanced' },
        { name: 'FastAPI', level: 'Advanced' }
      ]
    },
    {
      category: 'Mobile',
      icon: Smartphone,
      skills: [
        { name: 'React Native', level: 'Advanced' },
        { name: 'Flutter', level: 'Intermediate' }
      ]
    },
    {
      category: 'Cloud',
      icon: Cloud,
      skills: [
        { name: 'Firebase', level: 'Advanced' },
        { name: 'Google Cloud', level: 'Intermediate' }
      ]
    },
    {
      category: 'Database',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', level: 'Advanced' },
        { name: 'MongoDB', level: 'Advanced' }
      ]
    },
    {
      category: 'Tools & Concepts',
      icon: Cpu,
      skills: [
        { name: 'REST APIs', level: 'Expert' },
        { name: 'WebSockets & Pusher', level: 'Advanced' },
        { name: 'Clean Architecture', level: 'Advanced' },
        { name: 'Performance Opt', level: 'Advanced' }
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
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Skills</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text-primary">
            My Technical Skills
          </h3>
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
                className="bg-white p-6 rounded-2xl border border-border-custom transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-text-primary">{group.category}</h4>
                </div>

                <div className="flex flex-col gap-4">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex justify-between items-center">
                      <span className="flex items-center gap-2 text-sm font-medium text-text-primary">
                        {getSkillIcon(skill.name)}
                        <span>{skill.name}</span>
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-text-secondary font-semibold">
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
