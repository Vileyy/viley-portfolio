import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Award, 
  CheckCircle2
} from 'lucide-react';
import automateLogo from '../../assets/automate_solutions_logo.png';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white border-t border-border-custom relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-primary text-xs font-bold uppercase tracking-wider mb-2">
            <Briefcase className="w-3.5 h-3.5" /> Career Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">
            Work Experience
          </h2>
          <p className="text-text-secondary text-sm mt-1 max-w-lg mx-auto">
            Hands-on frontend engineering for mission-critical European client systems at AutoMate Solutions.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="flex flex-col gap-8">
          {/* Main Job Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card p-6 md:p-8 rounded-3xl border border-border-custom shadow-xs hover:border-blue-300 transition-colors"
          >
            {/* Header with Company Logo */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3.5">
                <div className="h-11 px-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center shadow-xs">
                  <img src={automateLogo} alt="AutoMATE Solutions" className="h-5 w-auto object-contain" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg md:text-xl font-bold text-text-primary">Frontend Developer</h3>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                      Full-time
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-primary">AutoMate Solutions (ASOL)</p>
                </div>
              </div>

              <div className="flex flex-col sm:items-end text-xs text-text-secondary gap-1">
                <div className="flex items-center gap-1.5 font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Dec 2025 - Present</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Ho Chi Minh City, Vietnam</span>
                </div>
              </div>
            </div>

              {/* Compact 2-Column Client Engagements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {/* Project 1: Orbit */}
              <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 flex flex-col justify-between gap-3">
                <div>
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span className="text-xs font-bold text-text-primary flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                      ORBIT | Enterprise Sales OS
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200/60">
                      Galvanek Bau GmbH (DE)
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed mb-3">
                    Shipped 180+ roadmap tasks across Call Center V2, Multi-Calendar Scheduling (Berlin CET), and Payroll/Commissions.
                  </p>
                  <ul className="space-y-1.5 text-xs text-text-secondary">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Real-time Pusher Sync:</strong> Custom promise wrappers & timeout guards eliminating websocket race conditions.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Automated Testing:</strong> 4,900+ Bun unit tests (80.5% coverage floor) and 78 Playwright E2E test suites with CI worker scaling.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Booking Guardrails:</strong> Distance-week warnings & conflict gates eliminating double-booking incidents.</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-200/60 text-[10px]">
                  {['React 19', 'TypeScript', 'Pusher', 'Playwright (78 suites)', 'Bun (4.9k tests)'].map((t, i) => (
                    <span key={i} className="px-1.5 py-0.5 bg-white rounded border border-slate-200 text-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project 2: Atlas */}
              <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 flex flex-col justify-between gap-3">
                <div>
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span className="text-xs font-bold text-text-primary flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#FF6933]" />
                      ATLAS | Construction Management
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-orange-50 text-orange-800 border border-orange-200/60">
                      Galvanek Bau GmbH (DE)
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed mb-3">
                    German field engineering ERP for project, vendor, construction-site, and protocol management.
                  </p>
                  <ul className="space-y-1.5 text-xs text-text-secondary">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                      <span><strong>5-Role RBAC Matrix:</strong> Architected matrix across Admin, Project Lead, Site Supervisor, Vendor, and Auditor (100% route security).</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                      <span><strong>Bautagebuch & Blueprints:</strong> Digital construction logs & Konva canvas defect markup for paperless site protocols.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                      <span><strong>Role-based E2E Gates:</strong> Playwright test suites validating permission boundaries & preventing privilege escalation.</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-200/60 text-[10px]">
                  {['React', 'TypeScript', 'RBAC (5 Roles)', 'Konva', 'Playwright E2E'].map((t, i) => (
                    <span key={i} className="px-1.5 py-0.5 bg-white rounded border border-slate-200 text-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education Card (Compact) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card p-5 md:p-6 rounded-3xl border border-border-custom shadow-xs hover:border-slate-300 transition-colors flex flex-wrap items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-50 text-primary">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm md:text-base font-bold text-text-primary">
                  Bachelor of Engineering in Information Technology
                </h4>
                <p className="text-xs text-text-secondary">Thu Dau Mot University • Oct 2021 - Dec 2025</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-text-primary border border-slate-200">
                GPA: 3.1 / 4.0
              </span>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1">
                <Award className="w-3 h-3 text-amber-600" /> Excellent Thesis Award
              </span>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                English B2
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
