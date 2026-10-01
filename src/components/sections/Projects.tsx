import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Youtube, 
  Layers, 
  Globe, 
  Building2, 
  Lock, 
  Sparkles, 
  BarChart3, 
  GanttChart, 
  Kanban as KanbanIcon, 
  PenTool, 
  Calendar, 
  ShieldCheck, 
  TestTube,
  ArrowRight,
  CheckCircle2,
  Maximize2
} from 'lucide-react';
import type { Project, ProjectCategory } from '../../types';

import { FaReact } from 'react-icons/fa';
import { 
  SiTypescript, 
  SiFirebase, 
  SiCloudinary, 
  SiStripe, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiVercel,
  SiLeaflet,
  SiAntdesign,
  SiPusher,
  SiBun
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

import haloraCosmeticImg from '../../assets/halora_cosmetic.png';
import haloraCosmeticWebImg from '../../assets/halora_cosmetic_web.png';
import orbitImg from '../../assets/orbit_galvanek.png';
import atlasImg from '../../assets/atlas_galvanek.png';
import automateLogo from '../../assets/automate_solutions_logo.png';
import { ProjectDetailModal } from './ProjectDetailModal';

const getTechIcon = (tech: string) => {
  const name = tech.toLowerCase();
  
  if (name.includes('react native')) return <TbBrandReactNative className="w-3.5 h-3.5 text-[#61dafb]" />;
  if (name.includes('react')) return <FaReact className="w-3.5 h-3.5 text-[#61dafb]" />;
  if (name.includes('next.js')) return <SiNextdotjs className="w-3.5 h-3.5 text-slate-900" />;
  if (name.includes('typescript')) return <SiTypescript className="w-3.5 h-3.5 text-[#3178c6] rounded-sm" />;
  if (name.includes('firebase')) return <SiFirebase className="w-3.5 h-3.5 text-[#ffa000]" />;
  if (name.includes('cloudinary')) return <SiCloudinary className="w-3.5 h-3.5 text-[#3448c5]" />;
  if (name.includes('stripe')) return <SiStripe className="w-3.5 h-3.5 text-[#635bff]" />;
  if (name.includes('tailwind')) return <SiTailwindcss className="w-3.5 h-3.5 text-[#38bdf8]" />;
  if (name.includes('vercel')) return <SiVercel className="w-3.5 h-3.5 text-slate-900" />;
  if (name.includes('leaflet')) return <SiLeaflet className="w-3.5 h-3.5 text-[#199900]" />;
  if (name.includes('ant design')) return <SiAntdesign className="w-3.5 h-3.5 text-[#0170fe]" />;
  if (name.includes('pusher')) return <SiPusher className="w-3.5 h-3.5 text-[#300d4f]" />;
  if (name.includes('bun')) return <SiBun className="w-3.5 h-3.5 text-[#fbf0df] bg-slate-800 rounded-sm" />;
  if (name.includes('recharts') || name.includes('chart')) return <BarChart3 className="w-3.5 h-3.5 text-indigo-500" />;
  if (name.includes('fullcalendar') || name.includes('calendar')) return <Calendar className="w-3.5 h-3.5 text-blue-500" />;
  if (name.includes('gantt')) return <GanttChart className="w-3.5 h-3.5 text-amber-500" />;
  if (name.includes('kanban') || name.includes('dnd-kit')) return <KanbanIcon className="w-3.5 h-3.5 text-emerald-500" />;
  if (name.includes('konva') || name.includes('canvas')) return <PenTool className="w-3.5 h-3.5 text-rose-500" />;
  if (name.includes('playwright') || name.includes('test')) return <TestTube className="w-3.5 h-3.5 text-green-600" />;
  if (name.includes('jwt') || name.includes('rbac')) return <ShieldCheck className="w-3.5 h-3.5 text-violet-500" />;
  if (name.includes('mvvm') || name.includes('architecture')) return <Layers className="w-3.5 h-3.5 text-purple-500" />;
  return <Globe className="w-3.5 h-3.5 text-slate-400" />;
};

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'orbit',
      title: 'O.R.B.I.T (Sales OS · Galvanek)',
      subtitle: 'Call Center V2 & Multi-Calendar Scheduling Platform',
      category: 'client',
      clientName: 'Galvanek Bau GmbH (Germany)',
      companyName: 'AutoMate Solutions',
      role: 'Frontend Developer (Call Center V2 & Schedule Simulation)',
      period: 'Dec 2025 - Present',
      description: 'A large-scale B2B sales management and dispatch platform engineered for the German market. Shipped 180+ roadmap tasks across Call Center V2, multi-calendar scheduling, 8-stage conversion funnel, and payroll/commissions.',
      longDescription: 'Engineered real-time appointment synchronization and travel-time recalculation using Pusher, implementing custom promise wrappers and timeout guards to eliminate websocket race conditions during concurrent bookings.',
      highlights: [
        'Call Center V2 Calendar: Built precision week calendar (Berlin CET) rendering customer visits, travel buffers, return-home segments, and destination tags.',
        'Real-time Pusher Sync: Eliminated websocket race conditions & UI deadlocks during concurrent bookings with custom promise wrappers.',
        'Booking Guardrails: Distant-week warnings, setter blocker rules, and conflict-detection gates preventing double-booking incidents.',
        'Automated Testing: Maintained 4,900+ Bun unit tests (80.5% line coverage floor) and 78 Playwright E2E test suites with CI worker scaling.'
      ],
      metrics: [
        { label: 'Unit Tests', value: '4,900+ Bun (80.5%)' },
        { label: 'E2E Suites', value: '78 Playwright' },
        { label: 'Data Sync', value: 'Live Pusher WS' }
      ],
      technologies: ['React 19', 'TypeScript', 'Pusher', 'Playwright', 'Bun test', 'Leaflet', 'Recharts', 'FullCalendar'],
      imageUrl: orbitImg,
      confidential: true,
      featured: true
    },
    {
      id: 'atlas',
      title: 'Galvanek Atlas (Montago Web ERP)',
      subtitle: 'Enterprise Construction Management & Subcontractor Platform',
      category: 'client',
      clientName: 'Galvanek Bau GmbH (Germany)',
      companyName: 'AutoMate Solutions',
      role: 'Frontend Developer',
      period: 'Dec 2025 - Present',
      description: 'A comprehensive enterprise ERP platform custom-built for German field engineering operations. Supports project, vendor, construction-site, and report management.',
      longDescription: 'Architected a comprehensive RBAC matrix across 5 distinct user roles (Admin, Project Lead, Site Supervisor, Vendor, Auditor), securing 100% of restricted routes, views, and contextual actions.',
      highlights: [
        '5-Role RBAC Matrix: Architected secure access matrix across 5 user tiers, protecting 100% of restricted views and contextual actions.',
        'Bautagebuch & Realtime Documents: Built digital construction logs enabling synchronous collaboration between HQ and on-site staff.',
        'Architectural Blueprint Markup: Built defect annotation tools using Konva canvas for on-site protocol inspections directly on plans.',
        'Interactive Scheduling: Implemented drag-and-drop Kanban boards (@dnd-kit) and Gantt timelines for trade tracking.',
        'Role-based E2E Gates: Implemented Playwright test suites to validate permission boundaries and prevent privilege escalation.'
      ],
      metrics: [
        { label: 'RBAC Matrix', value: '5 User Roles' },
        { label: 'Route Security', value: '100% Protected' },
        { label: 'Construction Logs', value: 'Digital Bautagebuch' }
      ],
      technologies: ['React', 'TypeScript', 'RBAC (5 Roles)', 'Konva', 'DHTMLX Gantt', '@dnd-kit', 'Playwright E2E'],
      imageUrl: atlasImg,
      confidential: true,
      featured: true
    },
    {
      id: 'halora-app',
      title: 'Halora Cosmetics: Mobile App',
      subtitle: 'Cross-Platform Retail Shopping Experience',
      category: 'personal',
      description: 'A cross-platform (iOS/Android) mobile shopping application featuring variant selection, order tracking, multi-criteria reviews, and AI-driven capabilities via OpenRouter API.',
      longDescription: 'Co-awarded Best Graduation Project (2025). Features presentation/business-logic/data layered architecture, Redux Toolkit & Persist, Stripe payment gateway, and OpenRouter AI beauty chatbot.',
      technologies: ['React Native', 'Expo', 'TypeScript', 'Redux Toolkit', 'Firebase', 'Stripe', 'OpenRouter API'],
      imageUrl: haloraCosmeticImg,
      liveUrl: 'https://youtu.be/kbDpjS7Xgls',
      githubUrl: 'https://github.com/Vileyy/user-halora-app'
    },
    {
      id: 'halora-web',
      title: 'Halora Cosmetics: Web Platform',
      subtitle: 'Full-Stack E-Commerce & Admin Dashboard',
      category: 'personal',
      description: 'A full-featured e-commerce platform with customer storefront and admin dashboard, backed by Firebase Auth and Realtime Database.',
      longDescription: 'Awarded Best Graduation Project (highest thesis defense score) at Thu Dau Mot University (2025). Features Redux cart/inventory state and Cloudinary CDN for automatic WebP/AVIF format conversion (-40% payload).',
      technologies: ['React', 'Redux', 'Firebase', 'Cloudinary', 'Tailwind CSS', 'Vercel'],
      imageUrl: haloraCosmeticWebImg,
      liveUrl: 'https://halora-cosmetic.vercel.app/',
      githubUrl: 'https://github.com/Vileyy/halora-user-web'
    }
  ];

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === 'all') return true;
    return project.category === selectedCategory;
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="projects" className="py-20 bg-card border-t border-border-custom relative overflow-hidden">
      {/* Background subtle decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-50/40 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-primary text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Featured Work
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">
            Projects & Client Systems
          </h2>
          <p className="text-text-secondary text-sm mt-1 max-w-xl mx-auto">
            Real-world enterprise systems engineered for European clients alongside personal software products.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-2xl bg-white border border-border-custom shadow-xs gap-1">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-primary text-white shadow-xs'
                  : 'text-text-secondary hover:text-text-primary hover:bg-slate-50'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setSelectedCategory('client')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === 'client'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-blue-600 hover:bg-blue-50/60'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              Client & Enterprise ({projects.filter((p) => p.category === 'client').length})
            </button>
            <button
              onClick={() => setSelectedCategory('personal')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === 'personal'
                  ? 'bg-primary text-white shadow-xs'
                  : 'text-text-secondary hover:text-text-primary hover:bg-slate-50'
              }`}
            >
              Personal Apps ({projects.filter((p) => p.category === 'personal').length})
            </button>
          </div>
        </div>

        {/* Project List */}
        <motion.div
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-16 lg:gap-20"
        >
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            const isClientProject = project.category === 'client';
            const isMobileApp = project.technologies.includes('React Native (Expo)');

            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group bg-white p-6 sm:p-8 rounded-3xl border border-border-custom shadow-xs hover:border-slate-300 transition-colors"
              >
                {/* Visual Showcase Box (Real Screenshot in macOS Window Frame) */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  {isClientProject ? (
                    <div 
                      onClick={() => setActiveModalProject(project)}
                      className="cursor-pointer group/frame overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-blue-500/50"
                    >
                      {/* macOS Window Top Bar */}
                      <div className="bg-slate-900/90 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                          </div>
                          <span className="text-slate-400 font-mono text-[11px] ml-2">
                            {project.id === 'orbit' ? 'orbit.galvanek.de/call-center-v2' : 'atlas.galvanek-bau.de/dashboard'}
                          </span>
                        </div>
                        <span className="text-[10px] text-emerald-400 font-mono font-medium flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live UI
                        </span>
                      </div>

                      {/* Screenshot Container with Click to Enlarge Overlay */}
                      <div className="relative overflow-hidden bg-slate-950">
                        <img
                          src={project.imageUrl}
                          alt={`${project.title} Production Interface`}
                          className="w-full h-auto object-cover max-h-[360px] transition-transform duration-500 group-hover/frame:scale-[1.01]"
                        />
                        <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover/frame:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900/95 text-white text-xs font-semibold backdrop-blur-md shadow-lg border border-white/20">
                            <Maximize2 className="w-3.5 h-3.5" /> Enlarge Screenshot & Specs
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-2xl border border-border-custom bg-slate-50 p-6 flex items-center justify-center">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-auto max-h-[300px] object-contain drop-shadow-md mx-auto"
                      />
                    </div>
                  )}
                </div>

                {/* Content Details Box */}
                <div className={`lg:col-span-5 flex flex-col gap-3.5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/* Badges: Company & Client */}
                  <div className="flex flex-wrap items-center gap-2">
                    {isClientProject ? (
                      <>
                        <div className="h-6 px-2 bg-slate-950 rounded-md border border-slate-800 flex items-center justify-center">
                          <img src={automateLogo} alt="AutoMATE Solutions" className="h-3 w-auto object-contain" />
                        </div>
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                          <Building2 className="w-3 h-3 text-blue-600" />
                          Client: {project.clientName}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                          In Production
                        </span>
                      </>
                    ) : (
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-text-secondary border border-slate-200">
                        {isMobileApp ? 'Personal Mobile App' : 'Personal Web App'}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-text-primary leading-tight">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-xs font-semibold text-text-secondary mt-0.5">
                        {project.subtitle}
                      </p>
                    )}
                  </div>

                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Clean 3-Metric Strip */}
                  {project.metrics && (
                    <div className="grid grid-cols-3 gap-2 py-1">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-slate-50 rounded-xl p-2 border border-slate-100 flex flex-col">
                          <span className="text-[10px] text-text-muted">{metric.label}</span>
                          <span className="text-xs font-bold text-text-primary mt-0.5">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Highlights (2 bullets max to prevent vertical bloating) */}
                  {project.highlights && (
                    <div className="space-y-1 mt-0.5">
                      {project.highlights.slice(0, 2).map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-xs text-text-secondary">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span className="leading-snug">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech stack badging */}
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.technologies.slice(0, 6).map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200/80 text-text-secondary"
                      >
                        {getTechIcon(tech)}
                        <span>{tech}</span>
                      </span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-slate-100 text-text-muted">
                        +{project.technologies.length - 6}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-2.5 mt-2 pt-3 border-t border-slate-100">
                    {isClientProject ? (
                      <>
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-blue-600 transition-all shadow-xs cursor-pointer"
                        >
                          Deep-Dive Architecture & Specs <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <span className="inline-flex items-center gap-1 text-[11px] text-text-muted bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200/60">
                          <Lock className="w-3 h-3 text-amber-600" /> Commercial NDA
                        </span>
                      </>
                    ) : (
                      <>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-blue-600 transition-all shadow-xs"
                          >
                            {project.liveUrl.includes('youtu') ? (
                              <>
                                <Youtube className="w-3.5 h-3.5" /> Video Demo
                              </>
                            ) : (
                              <>
                                <ExternalLink className="w-3.5 h-3.5" /> Live Site
                              </>
                            )}
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border-custom bg-white text-text-primary text-xs font-semibold hover:bg-slate-50 transition-colors shadow-2xs"
                          >
                            <Github className="w-3.5 h-3.5" /> GitHub
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Modal Dialog */}
      <ProjectDetailModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
