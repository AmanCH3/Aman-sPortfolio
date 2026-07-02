import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { projects } from './Work';

const AllProjects = ({ onBack, onSelectProject }) => {
  // Lock body scroll while overlay is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleProjectClick = (project) => {
    if (project.external && project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener noreferrer');
      return;
    }
    onSelectProject(project);
  };

  return (
    <motion.div 
      className="fixed inset-0 w-full h-full overflow-y-auto bg-[#FAF8F4] z-[100]"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="sticky top-0 left-0 right-0 h-[80px] bg-[#FAF8F4]/90 backdrop-blur-md border-b border-border flex items-center px-[24px] lg:px-[80px] z-50">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-ink font-body text-[15px] font-medium hover:opacity-70 transition-opacity bg-transparent border-none cursor-pointer p-0"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </button>
      </nav>

      <div className="pt-[100px] pb-[80px] px-[24px] lg:px-[80px] max-w-[1280px] mx-auto">
        <div className="mb-[64px]">
          <span className="font-body text-[12px] uppercase tracking-[3px] text-hint mb-[16px] block font-semibold">
            Archive
          </span>
          <h1 className="font-display font-bold text-[48px] lg:text-[72px] text-ink leading-[1.1]">
            All Projects
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-[24px] border border-border overflow-hidden flex flex-col cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => handleProjectClick(project)}
            >
              <div className={`w-full aspect-[4/3] ${project.illustrationBg} p-[40px] flex items-center justify-center overflow-hidden`}>
                <div className="w-full max-w-[400px] h-full transform transition-transform duration-700 hover:scale-110">
                  {project.illustration}
                </div>
              </div>
              <div className="p-[32px] flex flex-col flex-grow">
                <div className="flex items-center gap-[12px] mb-[16px]">
                  <span className={`${project.tagBg} text-ink rounded-pill px-[12px] py-[4px] font-body text-[11px] font-semibold tracking-wide `}>
                    {project.tag}
                  </span>
                  <span className="font-body text-[13px] text-hint font-medium">{project.year}</span>
                </div>
                <h3 className="font-display font-bold text-[28px] text-ink mb-[12px]">{project.title}</h3>
                <p className="font-body text-[16px] text-muted leading-relaxed mb-[24px] line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-auto pt-[20px] border-t border-border flex items-center text-[15px] font-medium text-ink group">
                  View full case study 
                  <span className="ml-[6px] inline-block transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AllProjects;
