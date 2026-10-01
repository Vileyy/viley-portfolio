import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Building2, 
  Layers, 
  CheckCircle2, 
  Zap, 
  Lock,
  Sparkles
} from 'lucide-react';
import type { Project } from '../../types';
import automateLogo from '../../assets/automate_solutions_logo.png';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 my-6 max-h-[92vh] flex flex-col"
        >
          {/* Header */}
          <div className="px-6 py-5 bg-slate-950 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-3">
              <div className="h-8 px-2.5 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-center">
                <img src={automateLogo} alt="AutoMATE Solutions" className="h-4 w-auto object-contain" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">{project.title}</h3>
                  <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Production
                  </span>
                </div>
                <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                  <Building2 className="w-3 h-3 text-blue-400" /> Client: {project.clientName}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-700">
            {/* Real Production Screenshot Showcase */}
            {project.imageUrl && (
              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
                <div className="bg-slate-900 px-3 py-1.5 border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                    <span className="font-mono text-slate-400 ml-2">Live Client Production Interface</span>
                  </div>
                  <span className="text-emerald-400 font-medium">Verified Active Deployment</span>
                </div>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-auto object-cover max-h-[380px]"
                />
              </div>
            )}

            {/* Overview & Core Role */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-7 flex flex-col gap-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Project Overview
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {project.description}
                  </p>
                  {project.longDescription && (
                    <p className="text-xs text-text-muted leading-relaxed mt-2 italic bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      💡 {project.longDescription}
                    </p>
                  )}
                </div>

                {/* Key Contributions */}
                {project.highlights && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary mb-2 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-primary" /> Key Engineering Responsibilities
                    </h4>
                    <div className="space-y-2">
                      {project.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-text-secondary">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-snug">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Metrics & Tech */}
              <div className="md:col-span-5 flex flex-col gap-4">
                {/* Metrics */}
                {project.metrics && (
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary mb-2.5 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-amber-500" /> Operational Metrics
                    </h4>
                    <div className="space-y-2">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="flex justify-between items-center text-xs">
                          <span className="text-text-muted font-medium">{m.label}</span>
                          <span className="font-bold text-text-primary">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary mb-2">
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200/80 text-text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* NDA Notice */}
                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/70 text-[11px] text-amber-900 leading-snug flex items-start gap-2">
                  <Lock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Enterprise NDA Protected:</strong> Commercial proprietary software developed for German market operations.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-text-muted">Developed at AutoMate Solutions (ASOL)</span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
