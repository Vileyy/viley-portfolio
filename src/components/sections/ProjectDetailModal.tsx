import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Building2, 
  Briefcase, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  Lock,
  Sparkles
} from 'lucide-react';
import type { Project } from '../../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  // Close on Escape key
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-border-custom overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 md:p-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white flex items-start justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col gap-2 relative z-10 pr-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/30">
                  <Building2 className="w-3.5 h-3.5" />
                  Client: {project.clientName || 'Enterprise Client'}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-slate-300 text-xs font-medium">
                  <Briefcase className="w-3.5 h-3.5" />
                  {project.companyName || 'AutoMate Solutions'}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-medium border border-amber-500/30">
                  <Lock className="w-3 h-3" />
                  Production Client Software
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold mt-1 text-white">
                {project.title}
              </h3>
              {project.subtitle && (
                <p className="text-slate-300 text-sm md:text-base font-medium">
                  {project.subtitle}
                </p>
              )}
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors relative z-10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 md:p-8 overflow-y-auto space-y-8 flex-1">
            {/* Overview */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Overview & Business Problem
              </h4>
              <p className="text-text-secondary leading-relaxed text-base">
                {project.description}
              </p>
              {project.longDescription && (
                <p className="text-text-secondary leading-relaxed text-base mt-2">
                  {project.longDescription}
                </p>
              )}
            </div>

            {/* Key Metrics / Highlights */}
            {project.metrics && project.metrics.length > 0 && (
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-text-primary mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-500" /> Operational Impact & Performance
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col">
                      <span className="text-xs text-text-secondary font-medium">{m.label}</span>
                      <span className="text-xl font-extrabold text-primary mt-1">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Engineering Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-text-primary mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-primary" /> Key Modules & Technical Contributions
                </h4>
                <div className="space-y-3">
                  {project.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50/70 border border-slate-100">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-text-secondary leading-relaxed">{h}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technology Stack */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-text-primary mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" /> Technology Stack & Libraries
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Confidentiality Notice */}
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60 text-xs text-amber-900 leading-relaxed flex items-start gap-2.5">
              <Lock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold block mb-0.5">Enterprise Client Notice:</strong>
                This application was engineered by Doan Quoc Hieu (Viley) at AutoMate Solutions specifically for enterprise client operations in Germany. Source code and internal live deployments are proprietary and protected under commercial NDA.
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 px-6 md:px-8 bg-slate-50 border-t border-slate-100 flex items-center justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
