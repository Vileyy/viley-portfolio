import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Youtube,
  Layers,
  Globe
} from 'lucide-react';
import type { Project } from '../../types';

import { FaReact } from 'react-icons/fa';
import { 
  SiTypescript, 
  SiFirebase, 
  SiCloudinary, 
  SiStripe, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiVercel
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

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
  if (name.includes('mvvm') || name.includes('architecture')) return <Layers className="w-3.5 h-3.5 text-purple-500" />;
  return <Globe className="w-3.5 h-3.5 text-slate-400" />;
};
import haloraCosmeticImg from '../../assets/halora_cosmetic.png';
import haloraCosmeticWebImg from '../../assets/halora_cosmetic_web.png';

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: '2',
      title: 'Halora Cosmetic App',
      description: 'A mobile cosmetics shopping app with a simple shopping cart, secure Stripe credit card payments, and Cash on Delivery (COD) options.',
      technologies: ['React Native (Expo)', 'Firebase DB', 'Firebase Auth', 'Cloudinary', 'Stripe / COD', 'MVVM Architecture'],
      imageUrl: haloraCosmeticImg,
      liveUrl: 'https://youtu.be/kbDpjS7Xgls',
      githubUrl: 'https://github.com/Vileyy/user-halora-app',
      longDescription: 'Built using MVVM architecture to make code maintainable and sync database updates in real time.'
    },
    {
      id: '3',
      title: 'Halora Cosmetic Website',
      description: 'A modern e-commerce storefront for a cosmetics brand. Features custom animations, lightning-fast pages, and optimal UX.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      imageUrl: haloraCosmeticWebImg,
      liveUrl: 'https://halora-cosmetic.vercel.app/',
      githubUrl: 'https://github.com/Vileyy/halora-user-web',
      longDescription: 'Deployed on Vercel with optimal performance scoring and fully responsive client layout.'
    }
  ];

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
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="py-24 bg-card border-t border-border-custom relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-blue-50/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Projects</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text-primary">
            Featured Projects
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-24 lg:gap-32"
        >
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const isMobileApp = project.technologies.includes('React Native (Expo)');

            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center group"
              >
                {/* Image Showcase Box */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-[2rem] border border-border-custom bg-gradient-to-tr from-slate-50 to-blue-50/30 p-8 md:p-12 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300"
                  >
                    {/* Glowing effect under mockup */}
                    <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none" />
                    
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-auto max-h-[380px] object-contain transition-transform duration-700 group-hover:scale-[1.02] drop-shadow-2xl"
                    />
                  </motion.div>
                </div>

                {/* Content Details Box */}
                <div className={`lg:col-span-5 flex flex-col gap-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-blue-50 text-primary">
                      {isMobileApp ? 'Mobile Application' : 'Web Application'}
                    </span>
                  </div>

                  <h4 className="text-3xl font-extrabold text-text-primary group-hover:text-primary transition-colors duration-300 leading-tight">
                    {project.title}
                  </h4>
                  
                  <p className="text-text-secondary text-base leading-relaxed">
                    {project.description}
                  </p>

                  {project.longDescription && (
                    <div className="flex items-start gap-2 text-sm text-text-muted italic bg-slate-50/80 p-3.5 rounded-xl border border-slate-100">
                      <span>💡</span>
                      <p>{project.longDescription}</p>
                    </div>
                  )}

                  {/* Tech badging */}
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-border-custom text-text-secondary shadow-sm transition-colors duration-200 hover:border-slate-300"
                      >
                        {getTechIcon(tech)}
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-100">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                      >
                        {project.liveUrl.includes('youtu') ? (
                          <>
                            <Youtube className="w-4.5 h-4.5" /> Video Demo
                          </>
                        ) : (
                          <>
                            <ExternalLink className="w-4.5 h-4.5" /> Live Website
                          </>
                        )}
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border-custom bg-white text-text-primary text-sm font-semibold hover:bg-slate-50 transition-colors duration-300 shadow-sm"
                      >
                        <Github className="w-4.5 h-4.5" /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
