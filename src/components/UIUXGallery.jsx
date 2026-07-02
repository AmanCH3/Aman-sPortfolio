import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import consultancyImg from '../assets/UIUX/consultancy/Design.png';
import everestImg from '../assets/UIUX/everestTravel/Group 335 (1).png';
import myKitchenImg from '../assets/UIUX/mykithcen/my kitchen.png';
import fitnessFrame7 from '../assets/UIUX/FitnessAPP/Frame 7.png';
import fitnessFrame8 from '../assets/UIUX/FitnessAPP/Frame 8.png';
import khanaBanamImg from '../assets/UIUX/KhanaBanam/Frame 34.png';
import khanaBanamAppImg from '../assets/UIUX/KhanaBanamAPP/Group 336.png';
import wheelerImg from '../assets/UIUX/Wheeler/Group 333.png';

const uiuxProjects = [
  {
    id: 'uiux-1',
    title: 'Fitness App',
    category: 'Mobile App',
    year: '2025',
    cover: fitnessFrame7,
    images: [fitnessFrame7, fitnessFrame8],
    accent: '#C8E6D8',
    tags: ['Mobile', 'Health', 'Figma'],
  },
  {
    id: 'uiux-2',
    title: 'Khana Banam',
    category: 'Recipe Website',
    year: '2025',
    cover: khanaBanamImg,
    images: [khanaBanamImg],
    accent: '#FAE8C0',
    tags: ['Web Design', 'Food', 'UI'],
  },
  {
    id: 'uiux-3',
    title: 'Khana Banam App',
    category: 'Recipe App',
    year: '2025',
    cover: khanaBanamAppImg,
    images: [khanaBanamAppImg],
    accent: '#F9C8D4',
    tags: ['Mobile', 'Food', 'UX Research'],
  },
  {
    id: 'uiux-4',
    title: 'Wheeler',
    category: 'Two Wheeler Servicing',
    year: '2025',
    cover: wheelerImg,
    images: [wheelerImg],
    accent: '#C4DCFA',
    tags: ['Mobile', 'Services', 'Prototype'],
  },
  {
    id: 'uiux-5',
    title: 'Consultancy Platform',
    category: 'Web Design',
    year: '2025',
    cover: consultancyImg,
    images: [consultancyImg],
    accent: '#F9C8D4',
    tags: ['UI Design', 'Web', 'Figma'],
  },
  {
    id: 'uiux-6',
    title: 'Everest Travel',
    category: 'Travel App',
    year: '2025',
    cover: everestImg,
    images: [everestImg],
    accent: '#C4DCFA',
    tags: ['Mobile', 'Travel', 'UX'],
  },
  {
    id: 'uiux-7',
    title: 'MyKitchen',
    category: 'Kitchen App',
    year: '2025',
    cover: myKitchenImg,
    images: [myKitchenImg],
    accent: '#C8E6D8',
    tags: ['Mobile', 'Food', 'Prototype'],
  },
];

const UIUXGallery = ({ onBack }) => {
  const [lightbox, setLightbox] = useState(null);

  return (
    <motion.div
      className="w-full min-h-screen bg-[#FAF8F4]"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Top Nav */}
      <nav className="sticky top-0 h-[72px] bg-[#FAF8F4]/90 backdrop-blur-md border-b border-border flex items-center justify-between px-[24px] lg:px-[80px] z-50">
        <button
          onClick={onBack}
          className="flex items-center gap-[8px] text-ink font-body text-[15px] font-medium hover:opacity-60 transition-opacity bg-transparent border-none cursor-pointer p-0"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <div className="flex items-center gap-[10px]">
          <span className="font-body text-[12px] uppercase tracking-[3px] text-hint font-semibold">Analytics Work</span>
          <span className="w-1 h-1 rounded-full bg-hint inline-block" />
          <span className="font-body text-[13px] text-hint">{uiuxProjects.length} Projects</span>
        </div>
      </nav>

      {/* Header */}
      <div className="pt-[36px] pb-[28px] px-[24px] lg:px-[80px] max-w-[1280px] mx-auto">
        <motion.span
          className="font-body text-[12px] uppercase tracking-[3px] text-hint font-semibold block mb-[12px]"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
        >
          Selected analytics
        </motion.span>
        <motion.h1
          className="font-display font-bold text-ink leading-[1.1]"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        >
          Data Work
        </motion.h1>
        <motion.p
          className="font-body text-[17px] text-muted leading-relaxed mt-[12px] max-w-[480px]"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
        >
          Business-focused analysis projects that turn raw data into reporting, dashboards, and clear recommendations.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <div className="px-[24px] lg:px-[80px] max-w-[1280px] mx-auto pb-[80px]">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {uiuxProjects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setLightbox(proj)}
              className="group bg-white rounded-[24px] overflow-hidden border border-border cursor-pointer"
              whileHover={{ y: -6 }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 20px 60px rgba(44,42,36,0.10)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              {/* Cover */}
              <div className="w-full overflow-hidden relative flex items-center justify-center" style={{ background: proj.accent + '55', minHeight: 240 }}>
                <img
                  src={proj.cover}
                  alt={proj.title}
                  className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  style={{ maxHeight: 340, display: 'block' }}
                />
                <div className="absolute inset-0 bg-[#2C2A24]/0 group-hover:bg-[#2C2A24]/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-ink font-body text-[14px] font-semibold px-[20px] py-[10px] rounded-pill shadow-md">
                    View ↗
                  </span>
                </div>
                {/* Multi-image badge */}
                {proj.images.length > 1 && (
                  <div className="absolute top-[12px] right-[12px] bg-[#2C2A24]/70 text-white font-body text-[11px] font-semibold px-[10px] py-[4px] rounded-pill backdrop-blur-sm">
                    {proj.images.length} screens
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-[24px]">
                <div className="flex items-center gap-[6px] mb-[8px] flex-wrap">
                  {proj.tags.map(t => (
                    <span
                      key={t}
                      className="font-body text-[11px] font-semibold uppercase tracking-wide text-ink rounded-pill px-[10px] py-[4px]"
                      style={{ background: proj.accent + '80' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-display font-bold text-[20px] text-ink leading-snug mb-[2px]">{proj.title}</h3>
                <p className="font-body text-[13px] text-hint">{proj.category} · {proj.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[200] bg-[#2C2A24]/85 backdrop-blur-sm flex items-start justify-center p-[24px] overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="relative bg-white rounded-[24px] overflow-hidden w-full mt-[24px] mb-[48px]"
              style={{ maxWidth: 860 }}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
            >
              {/* All screens stacked vertically - scrollable */}
              {lightbox.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${lightbox.title} screen ${i + 1}`}
                  className="w-full block"
                  style={{ borderBottom: i < lightbox.images.length - 1 ? '1px solid #E8E6E0' : 'none' }}
                />
              ))}

              {/* Footer bar */}
              <div className="p-[24px] border-t border-border flex items-center justify-between sticky bottom-0 bg-white">
                <div>
                  <h3 className="font-display font-bold text-[22px] text-ink">{lightbox.title}</h3>
                  <p className="font-body text-[13px] text-hint mt-[2px]">{lightbox.category} · {lightbox.year}</p>
                </div>
                <button
                  onClick={() => setLightbox(null)}
                  className="w-[40px] h-[40px] rounded-full bg-[#F4F2EC] flex items-center justify-center text-ink hover:bg-[#E8E6E0] transition-colors cursor-pointer border-none flex-shrink-0"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default UIUXGallery;
