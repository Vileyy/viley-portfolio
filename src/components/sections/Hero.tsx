import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import avatarImg from '../../assets/avt_viley.jpg';
import { FaReact } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs } from 'react-icons/si';

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden py-20 bg-slate-50/50">
      {/* Premium floating background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 left-10 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-200/30 to-cyan-200/30 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 50, -40, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-indigo-200/20 via-purple-100/20 to-blue-200/30 blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-white/40 to-white" />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-text-primary">
            Hi, I'm <span className="text-gradient bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Doan Quoc Hieu</span>
            <br />
            <span className="text-2xl md:text-3xl text-text-secondary font-semibold mt-2 block">Nickname: Viley</span>
          </h1>

          <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Junior Front-End Engineer
          </p>

          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl">
            Passionate about building responsive, pixel-perfect, and modern web & mobile user interfaces. Focused on delivering premium, high-performance user experiences.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <button
              onClick={scrollToProjects}
              className="px-7 py-3.5 rounded-xl bg-primary text-white font-semibold shadow-lg shadow-blue-500/25 hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/35 cursor-pointer"
            >
              View Projects
            </button>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl border border-border-custom bg-white/80 backdrop-blur-md text-text-primary font-semibold hover:bg-blue-50/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center shadow-sm"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 mt-4">
            <a href="https://github.com/Vileyy" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-border-custom bg-white/50 backdrop-blur-sm hover:border-primary text-text-secondary hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 shadow-sm">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/doanhieu21/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-border-custom bg-white/50 backdrop-blur-sm hover:border-primary text-text-secondary hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 shadow-sm">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:doanquochieu2104@gmail.com" className="p-2.5 rounded-xl border border-border-custom bg-white/50 backdrop-blur-sm hover:border-primary text-text-secondary hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 shadow-sm">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Profile Image Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end relative"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative group"
          >
            {/* Spinning decorative orbital borders */}
            <div className="absolute inset-0 rounded-[2.5rem] border border-dashed border-blue-200/50 animate-[spin_40s_linear_infinite] scale-[1.08] pointer-events-none" />
            <div className="absolute inset-0 rounded-[2.5rem] border border-dashed border-cyan-200/40 animate-[spin_25s_linear_infinite_reverse] scale-[1.14] pointer-events-none" />

            {/* Floating React Icon */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 p-3.5 bg-white rounded-2xl border border-slate-100 shadow-lg text-[#61dafb] z-20 hover:scale-110 transition-transform duration-200"
            >
              <FaReact className="w-6 h-6 animate-[spin_8s_linear_infinite]" />
            </motion.div>

            {/* Floating TypeScript Icon */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-2 p-3.5 bg-white rounded-2xl border border-slate-100 shadow-lg text-[#3178c6] z-20 hover:scale-110 transition-transform duration-200"
            >
              <SiTypescript className="w-6 h-6 rounded-sm" />
            </motion.div>

            {/* Floating Next.js Icon */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1, ease: "easeInOut" }}
              className="absolute top-12 -right-6 p-3.5 bg-white rounded-2xl border border-slate-100 shadow-lg text-slate-900 z-20 hover:scale-110 transition-transform duration-200"
            >
              <SiNextdotjs className="w-6 h-6" />
            </motion.div>

            {/* Premium Glow ring */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-blue-400 to-cyan-300 opacity-20 blur-2xl group-hover:opacity-55 transition-opacity duration-500" />
            
            {/* Secondary glow for depth */}
            <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-r from-blue-500 to-cyan-500 opacity-15 blur-md group-hover:opacity-35 transition-opacity duration-500" />

            {/* Main Avatar Container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl bg-slate-50 transition-all duration-500 group-hover:border-blue-100/80 group-hover:shadow-[0_25px_60px_-15px_rgba(59,130,246,0.12)]">
              <img
                src={avatarImg}
                alt="Doan Quoc Hieu (Viley)"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              />

              {/* Status Badge overlay (bottom right) */}
              <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-md border border-slate-100/50 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="w-2 h-2 rounded-full bg-emerald-500 absolute left-3.5" />
                <span className="text-[11px] font-bold text-text-primary uppercase tracking-wider pl-1.5">Active Now</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
        <span className="text-xs text-text-secondary font-semibold tracking-widest uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-text-secondary" />
        </motion.div>
      </div>
    </section>
  );
};
