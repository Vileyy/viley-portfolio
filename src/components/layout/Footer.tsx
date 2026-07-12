import React from 'react';
import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-card border-t border-border-custom pt-20 pb-10 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-blue-50/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-16">
          {/* Column 1: Brand details */}
          <div className="md:col-span-5 flex flex-col gap-4 text-center md:text-left">
            <span className="text-2xl font-extrabold tracking-tight text-text-primary">
              VILEY<span className="text-primary">.</span>
            </span>
            <p className="text-text-secondary text-sm max-w-sm leading-relaxed mx-auto md:mx-0">
              Junior Front-End Engineer focused on building responsive, pixel-perfect, and modern web & mobile experiences.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-4 flex flex-col gap-4 items-center md:items-start">
            <h5 className="text-sm font-bold text-text-primary uppercase tracking-wider">Navigation</h5>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2.5 text-center md:text-left">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    className="text-sm text-text-secondary hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social & Top button */}
          <div className="md:col-span-3 flex flex-col gap-4 items-center md:items-end">
            <h5 className="text-sm font-bold text-text-primary uppercase tracking-wider">Connect</h5>
            
            <div className="flex items-center gap-3">
              {/* GitHub */}
              <a 
                href="https://github.com/Vileyy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-xl border border-border-custom bg-white hover:bg-slate-900 hover:text-white hover:border-slate-900 text-text-secondary transition-all duration-300 shadow-sm" 
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/doanhieu21/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-xl border border-border-custom bg-white hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] text-text-secondary transition-all duration-300 shadow-sm" 
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              {/* Email */}
              <a 
                href="mailto:doanquochieu2104@gmail.com" 
                className="p-3 rounded-xl border border-border-custom bg-white hover:bg-[#EA4335] hover:text-white hover:border-[#EA4335] text-text-secondary transition-all duration-300 shadow-sm" 
                aria-label="Email"
              >
                <SiGmail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-border-custom flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted text-center sm:text-left">
            &copy; {currentYear} Doan Quoc Hieu. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="group p-3 rounded-full border border-border-custom hover:border-primary bg-white hover:bg-blue-50/50 text-text-secondary hover:text-primary transition-all duration-300 shadow-sm cursor-pointer hover:-translate-y-1 flex items-center justify-center gap-1.5"
            aria-label="Back to top"
          >
            <span className="text-xs font-bold pl-1 hidden group-hover:inline transition-all duration-300">Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
