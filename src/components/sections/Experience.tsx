import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Briefcase, 
  Building2, 
  GraduationCap, 
  Award, 
  CheckCircle2 
} from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white border-t border-border-custom relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-primary text-xs font-bold uppercase tracking-wider mb-2">
            <Briefcase className="w-3.5 h-3.5" /> Career Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">
            Work Experience & Client Engagements
          </h2>
          <p className="text-text-secondary text-sm md:text-base mt-2 max-w-xl mx-auto">
            Hands-on software engineering for high-traffic European client systems, scalable architectures, and mission-critical enterprise workflows.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-blue-100 ml-4 md:ml-8 pl-8 md:pl-12 flex flex-col gap-12">
          {/* Item 1: AutoMate Solutions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Timeline marker node */}
            <div className="absolute -left-[45px] md:-left-[61px] top-1.5 w-7 h-7 rounded-full border-4 border-white bg-primary shadow-md flex items-center justify-center ring-4 ring-blue-100">
              <Briefcase className="w-3 h-3 text-white" />
            </div>

            <div className="bg-card p-6 md:p-8 rounded-3xl border border-border-custom shadow-xs hover:border-blue-300 transition-colors duration-300">
              {/* Header */}
              <div className="flex flex-wrap justify-between items-start gap-4 mb-6 pb-6 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl md:text-2xl font-bold text-text-primary">Frontend Developer</h3>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                      Full-time
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-lg font-bold text-primary">AutoMate Solutions (ASOL)</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 text-xs sm:text-sm text-text-secondary md:items-end">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Calendar className="w-4 h-4 text-text-secondary" />
                    <span>Dec 2025 - Present</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-text-secondary" />
                    <span>Ho Chi Minh City, Vietnam</span>
                  </div>
                </div>
              </div>

              {/* Client Project 1: O.R.B.I.T */}
              <div className="mb-8 p-5 md:p-6 rounded-2xl bg-blue-50/40 border border-blue-100/80">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 ring-4 ring-blue-200" />
                    <h4 className="text-base md:text-lg font-bold text-text-primary">
                      Project: O.R.B.I.T — Sales Schedule Simulation
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-md bg-white border border-blue-200 text-blue-700 shadow-2xs">
                    <Building2 className="w-3.5 h-3.5 text-blue-600" /> Client: Galvanek GmbH (Germany)
                  </span>
                </div>

                <p className="text-xs md:text-sm text-text-secondary leading-relaxed mb-4">
                  A high-concurrency B2B sales management and route optimization platform for field sales operations across Germany.
                </p>

                <ul className="space-y-2 text-xs md:text-sm text-text-secondary leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Schedule Simulation Module:</strong> Owned and developed the core simulation engine, enabling users to configure, simulate, and analyze iterative visit schedules across synchronized calendar, map, and KPI views.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Berlin Timezone Calendar Engine:</strong> Engineered a precision week-based calendar (CET/CEST) rendering customer visits, travel buffers, return-home events, and blockers with zero timezone drift and 100% collision prevention.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Analytics & Geospatial Routing:</strong> Developed interactive Recharts dashboards for per-iteration efficiency comparisons and integrated Leaflet polylines for live travel route visualization.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span><strong>Real-time Sync & Testing:</strong> Connected Pusher WebSockets for instant multi-user state synchronization and implemented E2E regression tests with Playwright and Bun test.</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-blue-100">
                  {['React 18', 'TypeScript', 'Vite', 'Recharts', 'Leaflet', 'Pusher', 'FullCalendar', 'Playwright', 'Bun'].map((tech, idx) => (
                    <span key={idx} className="text-[11px] font-medium px-2 py-0.5 rounded bg-white border border-blue-200/80 text-blue-900">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Client Project 2: Galvanek Atlas */}
              <div className="p-5 md:p-6 rounded-2xl bg-orange-50/40 border border-orange-100/80">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF6933] ring-4 ring-orange-200" />
                    <h4 className="text-base md:text-lg font-bold text-text-primary">
                      Project: Galvanek Atlas (Montago Web)
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-md bg-white border border-orange-200 text-orange-800 shadow-2xs">
                    <Building2 className="w-3.5 h-3.5 text-orange-600" /> Client: Galvanek-Bau (Germany)
                  </span>
                </div>

                <p className="text-xs md:text-sm text-text-secondary leading-relaxed mb-4">
                  A large-scale construction ERP platform managing multi-role workflows across Project Managers, Admins, Site Owners, and Subcontractor Vendors.
                </p>

                <ul className="space-y-2 text-xs md:text-sm text-text-secondary leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                    <span><strong>Core Enterprise Modules:</strong> Developed and maintained project management, vendors, customers, construction sites, dynamic inspection reports, and real-time chat.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                    <span><strong>Interactive Scheduling:</strong> Implemented drag-and-drop Kanban boards using <code className="text-xs bg-white px-1 py-0.5 rounded border border-orange-200">@dnd-kit</code> and interactive Gantt charts (dhtmlx) for site milestone tracking.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                    <span><strong>Digital Blueprint Annotation:</strong> Built architectural defect annotation tools with Konva canvas, enabling site engineers to mark defects and generate official compliance protocols.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                    <span><strong>Postcode Matching & RBAC:</strong> Integrated Leaflet maps with Germany's 5-digit postcode (PLZ) system for vendor radius selection, protected by JWT refresh-token rotation and strict route guards.</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-orange-100">
                  {['React 18', 'TypeScript', 'Ant Design 5', 'Leaflet', 'Konva', 'DHTMLX Gantt', '@dnd-kit', 'Pusher', 'JWT / RBAC'].map((tech, idx) => (
                    <span key={idx} className="text-[11px] font-medium px-2 py-0.5 rounded bg-white border border-orange-200/80 text-orange-950">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Item 2: Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            {/* Timeline marker node */}
            <div className="absolute -left-[45px] md:-left-[61px] top-1.5 w-7 h-7 rounded-full border-4 border-white bg-slate-700 shadow-md flex items-center justify-center ring-4 ring-slate-100">
              <GraduationCap className="w-3 h-3 text-white" />
            </div>

            <div className="bg-card p-6 md:p-8 rounded-3xl border border-border-custom shadow-xs hover:border-slate-300 transition-colors duration-300">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-text-primary">Bachelor of Engineering in Information Technology</h3>
                  <span className="text-base font-semibold text-primary">Thu Dau Mot University</span>
                </div>

                <div className="flex flex-col gap-1 text-xs sm:text-sm text-text-secondary md:items-end">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Calendar className="w-4 h-4 text-text-secondary" />
                    <span>Oct 2021 - Dec 2025</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-text-secondary" />
                    <span>Binh Duong, Vietnam</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-3">
                <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-text-primary border border-slate-200">
                  GPA: 3.1 / 4.0
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                  <Award className="w-3.5 h-3.5 text-amber-600" /> Excellent Graduation Project Award
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  English Proficiency: B2 Level
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
