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
  Maximize2,
  Camera,
  Cpu
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
import { ProjectMockup } from './ProjectMockup';
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
  const [activeViews, setActiveViews] = useState<Record<string, 'screenshot' | 'interactive'>>({
    orbit: 'screenshot',
    atlas: 'screenshot'
  });

  const toggleView = (projectId: string, view: 'screenshot' | 'interactive') => {
    setActiveViews(prev => ({ ...prev, [projectId]: view }));
  };

  const projects: Project[] = [
    {
      id: 'orbit',
      title: 'O.R.B.I.T (Sales OS · Galvanek)',
      subtitle: 'Call Center V2 & Schedule Simulation Platform',
      category: 'client',
      clientName: 'Galvanek GmbH (Germany)',
      companyName: 'AutoMate Solutions',
      role: 'Frontend Developer (Schedule Simulation & Call Center V2)',
      period: '2025 - Present',
      description: 'A large-scale B2B sales management and schedule simulation platform engineered for the German market. Features multi-salesperson calendar coordination, automated travel route optimization, real-time sync, and iterative simulation algorithms.',
      longDescription: 'Owned and developed the Schedule Simulation engine and Call Center V2 calendar, enabling sales dispatchers to model visit itineraries with zero overlap, automated travel segments, and minimal travel overhead.',
      highlights: [
        'Call Center V2 Multi-Resource Calendar: Built high-precision week calendar (Europe/Berlin CET) rendering customer visit cards ([V] Konzeptanalyse, Erstgespräch), travel segments (Heimfahrt, Fahrt zu Kunde), and regional destination tags (Plauen, Chemnitz).',
        'Schedule Simulation Workflows: Engineered iterative simulation workflows with snapshot caching, comparison views, and on-demand state loading.',
        'Geospatial & Route Polylines: Integrated Leaflet map polylines for real-time route visualization synchronized with calendar state.',
        'Derived Analytics & KPI Dashboards: Developed KPI dashboards using Recharts (average travel per lead, visits per week, efficiency ratio).',
        'Real-time Sync & Testing: Integrated Pusher WebSockets for instant multi-user state synchronization and built comprehensive E2E test suites with Playwright & Bun test.'
      ],
      metrics: [
        { label: 'Conflict Gate', value: '100% Collision-free' },
        { label: 'Travel Overhead', value: '-18.4% Avg' },
        { label: 'Data Sync', value: 'Live Pusher WebSocket' }
      ],
      technologies: ['React 18', 'TypeScript', 'Vite', 'Recharts', 'Leaflet', 'Pusher / WebSockets', 'FullCalendar', 'TanStack Query', 'Playwright', 'Bun test'],
      imageUrl: orbitImg,
      mockupType: 'orbit',
      confidential: true,
      featured: true
    },
    {
      id: 'atlas',
      title: 'Galvanek Atlas (Montago Web)',
      subtitle: 'Enterprise Construction Management & Subcontractor ERP',
      category: 'client',
      clientName: 'Galvanek-Bau (Germany)',
      companyName: 'AutoMate Solutions',
      role: 'Frontend Developer',
      period: '2025 - Present',
      description: 'A comprehensive enterprise ERP platform custom-built for large-scale German construction operations. Supports multi-tier stakeholders (Platform Admin, Project Managers, Site Owners, Subcontractors) across the complete construction lifecycle.',
      longDescription: 'Engineered core operational workflows including subcontractor vendor assignment, site management, dynamic inspection reports, and architectural blueprint markup.',
      highlights: [
        'Operational Business Suite: Built and maintained core modules including Customer Management, Project Management, Protocol Dashboard, Subcontractors (Vendors), and Team Management.',
        'Interactive Scheduling: Implemented drag-and-drop Kanban boards (@dnd-kit) and interactive Gantt charts (dhtmlx) for milestone and trade tracking.',
        'Architectural Blueprint Markup: Developed defect inspection annotation tool using Konva canvas for on-site protocol inspections directly on architectural plans.',
        'Geospatial Vendor Matching: Integrated Leaflet maps with Germany 5-digit postcode (PLZ) database for subcontractor radius assignment.',
        'System Settings & Live Audit Feed: Built User Management with RBAC, Service Catalog, and real-time operational Activity Logs tracking all vendor actions.'
      ],
      metrics: [
        { label: 'User Roles', value: '4 Tiers (RBAC)' },
        { label: 'Core Modules', value: '10+ Integrated' },
        { label: 'Inspection Protocol', value: '100% Digital / Konva' }
      ],
      technologies: ['React 18', 'TypeScript', 'Ant Design 5', 'Leaflet', 'Konva (Canvas)', 'DHTMLX Gantt', '@dnd-kit', 'Pusher WebSockets', 'JWT / RBAC'],
      imageUrl: atlasImg,
      mockupType: 'atlas',
      confidential: true,
      featured: true
    },
    {
      id: 'halora-app',
      title: 'Halora Cosmetic App',
      subtitle: 'Mobile E-Commerce Shopping Experience',
      category: 'personal',
      description: 'A mobile cosmetics shopping app with a simple shopping cart, secure Stripe credit card payments, and Cash on Delivery (COD) options.',
      longDescription: 'Built using MVVM architecture to make code maintainable and sync database updates in real time.',
      technologies: ['React Native (Expo)', 'Firebase DB', 'Firebase Auth', 'Cloudinary', 'Stripe / COD', 'MVVM Architecture'],
      imageUrl: haloraCosmeticImg,
      liveUrl: 'https://youtu.be/kbDpjS7Xgls',
      githubUrl: 'https://github.com/Vileyy/user-halora-app',
      mockupType: 'image'
    },
    {
      id: 'halora-web',
      title: 'Halora Cosmetic Website',
      subtitle: 'Modern Headless Storefront & Brand Experience',
      category: 'personal',
      description: 'A modern e-commerce storefront for a cosmetics brand. Features custom animations, lightning-fast pages, and optimal UX.',
      longDescription: 'Deployed on Vercel with optimal performance scoring and fully responsive client layout.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      imageUrl: haloraCosmeticWebImg,
      liveUrl: 'https://halora-cosmetic.vercel.app/',
      githubUrl: 'https://github.com/Vileyy/halora-user-web',
      mockupType: 'image'
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="projects" className="py-24 bg-card border-t border-border-custom relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-50/40 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Portfolios & Real-World Work
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary">
            Featured Projects & Client Systems
          </h2>
          <p className="text-text-secondary text-base max-w-2xl mx-auto mt-3">
            A blend of enterprise-grade commercial platforms built for European clients and personal software products.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-border-custom shadow-sm gap-1">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-text-secondary hover:text-text-primary hover:bg-slate-50'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setSelectedCategory('client')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === 'client'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-blue-600 hover:bg-blue-50/60'
              }`}
            >
              <Building2 className="w-4 h-4" />
              Client & Enterprise ({projects.filter((p) => p.category === 'client').length})
            </button>
            <button
              onClick={() => setSelectedCategory('personal')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === 'personal'
                  ? 'bg-primary text-white shadow-sm'
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
          className="flex flex-col gap-24 lg:gap-32"
        >
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            const isClientProject = project.category === 'client';
            const isMobileApp = project.technologies.includes('React Native (Expo)');
            const currentView = activeViews[project.id] || 'screenshot';

            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center group"
              >
                {/* Visual Showcase Box (Mockup / Image) */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className={`relative overflow-hidden rounded-[2rem] border transition-all duration-300 ${
                      isClientProject
                        ? 'border-slate-800 bg-slate-950 shadow-2xl shadow-slate-950/20'
                        : 'border-border-custom bg-gradient-to-tr from-slate-50 to-blue-50/30 p-8 md:p-12 shadow-sm group-hover:shadow-md'
                    }`}
                  >
                    {isClientProject ? (
                      <div className="flex flex-col w-full">
                        {/* macOS Browser Chrome Topbar with View Toggle */}
                        <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="flex gap-1.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                            </div>
                            <span className="text-slate-400 font-mono text-[11px] ml-2 hidden sm:inline">
                              {project.id === 'orbit' ? 'https://orbit.galvanek.de/call-center' : 'https://atlas.galvanek-bau.de/dashboard'}
                            </span>
                          </div>

                          {/* Switcher: Live Screenshot vs Interactive UI */}
                          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
                            <button
                              onClick={() => toggleView(project.id, 'screenshot')}
                              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                                currentView === 'screenshot'
                                  ? 'bg-blue-600 text-white shadow'
                                  : 'text-slate-400 hover:text-white'
                              }`}
                            >
                              <Camera className="w-3 h-3" />
                              <span>Live UI</span>
                            </button>
                            <button
                              onClick={() => toggleView(project.id, 'interactive')}
                              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                                currentView === 'interactive'
                                  ? 'bg-blue-600 text-white shadow'
                                  : 'text-slate-400 hover:text-white'
                              }`}
                            >
                              <Cpu className="w-3 h-3" />
                              <span>Simulation</span>
                            </button>
                          </div>
                        </div>

                        {/* View Content */}
                        <div className="relative">
                          {currentView === 'screenshot' && project.imageUrl ? (
                            <div 
                              onClick={() => setActiveModalProject(project)}
                              className="relative cursor-pointer group/screenshot overflow-hidden bg-slate-950 flex items-center justify-center p-2"
                            >
                              <img
                                src={project.imageUrl}
                                alt={`${project.title} Production Interface`}
                                className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover/screenshot:scale-[1.01]"
                              />
                              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover/screenshot:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 text-white text-xs font-semibold backdrop-blur-md shadow-lg border border-white/20">
                                  <Maximize2 className="w-3.5 h-3.5" /> Click to Enlarge & View Specs
                                </span>
                              </div>
                            </div>
                          ) : (
                            <div className="p-2 sm:p-3">
                              {project.mockupType === 'orbit' || project.mockupType === 'atlas' ? (
                                <ProjectMockup type={project.mockupType} />
                              ) : null}
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-auto max-h-[380px] object-contain transition-transform duration-700 group-hover:scale-[1.02] drop-shadow-2xl mx-auto"
                      />
                    )}
                  </motion.div>
                </div>

                {/* Content Details Box */}
                <div className={`lg:col-span-5 flex flex-col gap-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/* Category & Client Header Badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    {isClientProject ? (
                      <>
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                          <Building2 className="w-3.5 h-3.5 text-blue-600" />
                          Client: {project.clientName}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          In Production
                        </span>
                      </>
                    ) : (
                      <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-slate-100 text-text-secondary border border-slate-200">
                        {isMobileApp ? 'Personal Mobile App' : 'Personal Web App'}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary group-hover:text-primary transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-sm font-semibold text-text-secondary mt-1">
                        {project.subtitle}
                      </p>
                    )}
                  </div>

                  <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Operational Metrics (for Client Projects) */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 py-2">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-slate-50 rounded-xl p-2.5 border border-slate-100 flex flex-col">
                          <span className="text-[11px] text-text-muted">{metric.label}</span>
                          <span className="text-xs sm:text-sm font-bold text-text-primary mt-0.5">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Highlights Bullet Points */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="space-y-1.5 mt-1">
                      {project.highlights.slice(0, 2).map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-text-secondary">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span className="leading-snug">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech stack badging */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.technologies.slice(0, 6).map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-white border border-border-custom text-text-secondary shadow-2xs transition-colors duration-200"
                      >
                        {getTechIcon(tech)}
                        <span>{tech}</span>
                      </span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="text-[11px] font-medium px-2 py-1 rounded-lg bg-slate-100 text-text-muted">
                        +{project.technologies.length - 6} more
                      </span>
                    )}
                  </div>

                  {/* Action CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-3 mt-3 pt-4 border-t border-slate-100">
                    {isClientProject ? (
                      <>
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-xs sm:text-sm font-semibold hover:bg-blue-600 transition-all duration-300 shadow-md shadow-blue-500/20 cursor-pointer"
                        >
                          Deep-Dive Architecture & Specs <ArrowRight className="w-4 h-4" />
                        </button>
                        <span className="inline-flex items-center gap-1.5 text-xs text-text-muted font-medium bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                          <Lock className="w-3.5 h-3.5 text-amber-600" />
                          Commercial Client Software (NDA)
                        </span>
                      </>
                    ) : (
                      <>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-xs sm:text-sm font-semibold hover:bg-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                          >
                            {project.liveUrl.includes('youtu') ? (
                              <>
                                <Youtube className="w-4 h-4" /> Video Demo
                              </>
                            ) : (
                              <>
                                <ExternalLink className="w-4 h-4" /> Live Website
                              </>
                            )}
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border-custom bg-white text-text-primary text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-colors duration-300 shadow-sm"
                          >
                            <Github className="w-4 h-4" /> GitHub
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
