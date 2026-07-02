import React from 'react';
import { motion } from 'framer-motion';

const ProjectDetails = ({ project, onBack }) => {
  if (!project) return null;

  const roleLabel = project.role || `Lead ${project.tag}`;
  const clientLabel = project.client || 'Independent project';
  const deliverables = project.deliverables || ['Analysis', 'Dashboard', 'Insights'];
  const overview = project.overview || project.description || 'A focused data project built to turn raw information into clear decisions.';
  const outcome = project.outcome || 'The work produced a practical, action-oriented outcome with measurable value.';
  const ctaLabel = project.linkLabel || 'Explore project';
  const ctaHref = project.liveUrl || '#';

  return (
    <motion.div
      className="w-full min-h-screen bg-cream"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Top Navbar */}
      <nav className="sticky top-0 left-0 right-0 h-[80px] bg-cream/90 backdrop-blur-md border-b border-border flex items-center px-[24px] lg:px-[80px] z-50">
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

      {/* Hero Header */}
      <header className="pt-[80px] pb-[28px] px-[24px] lg:px-[80px] max-w-[1280px] mx-auto text-center flex flex-col items-center">
        <motion.div 
          className="flex items-center gap-[12px] mb-[24px]"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        >
          <span className={`${project.tagBg} text-ink rounded-pill px-[14px] py-[5px] font-body text-[13px] font-medium`}>
            {project.tag}
          </span>
          <span className="font-body text-[14px] text-hint font-medium">{project.year}</span>
        </motion.div>
        
        <motion.h1 
          className="font-display font-bold text-[48px] lg:text-[72px] text-ink leading-[1.1] mb-[24px] max-w-[900px]"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        >
          {project.title}
        </motion.h1>
        
        <motion.p 
          className="font-body text-[18px] lg:text-[22px] text-muted leading-[1.6] max-w-[720px]"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
        >
          {project.description}
        </motion.p>
      </header>

      {/* Large Illustration / Cover */}
      <motion.div 
        className="w-full px-[24px] lg:px-[80px] max-w-[1100px] mx-auto mb-[48px]"
        initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className={`w-full aspect-[21/9] md:h-[420px] ${project.illustrationBg} rounded-[24px] lg:rounded-[32px] flex items-center justify-center p-[40px] lg:p-[48px] overflow-hidden shadow-sm border border-black/5`}>
          <div className="w-full max-w-[600px] h-full flex items-center justify-center transform">
            {project.illustration}
          </div>
        </div>
      </motion.div>

      {/* Details Grid */}
      <div className="px-[24px] lg:px-[80px] max-w-[1000px] mx-auto pb-[160px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[64px]">
          
          <motion.div 
            className="md:col-span-4 flex flex-col gap-[40px]"
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <div>
              <h4 className="font-body text-[14px] uppercase tracking-[2px] text-hint font-semibold mb-[12px]">Role</h4>
              <p className="font-body text-[16px] text-ink font-medium">{roleLabel}</p>
            </div>
            <div>
              <h4 className="font-body text-[14px] uppercase tracking-[2px] text-hint font-semibold mb-[12px]">Client</h4>
              <p className="font-body text-[16px] text-ink font-medium">{clientLabel}</p>
            </div>
            <div>
              <h4 className="font-body text-[14px] uppercase tracking-[2px] text-hint font-semibold mb-[12px]">Deliverables</h4>
              <ul className="flex flex-col gap-2">
                {deliverables.map((item) => (
                  <li key={item} className="font-body text-[16px] text-ink font-medium">{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="md:col-span-8 flex flex-col gap-[64px]"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h3 className="font-display font-bold text-[32px] text-ink mb-[24px]">Project Overview</h3>
              <p className="font-body text-[18px] text-muted leading-[1.8] mb-[24px]">
                {overview}
              </p>
              <p className="font-body text-[18px] text-muted leading-[1.8]">
                {outcome}
              </p>
            </div>

            <div className="pt-[32px] border-t border-border">
              <a href={ctaHref} className="inline-flex items-center gap-[12px] bg-ink text-white rounded-pill px-[32px] py-[16px] font-display font-medium text-[16px] transition-transform hover:-translate-y-1 hover:shadow-md cursor-pointer">
                {ctaLabel}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
