import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const filters = ['All', 'Analytics', 'Python', 'SQL', 'BI'];

export const projects = [
  {
    id: 2,
    category: 'python',
    tag: 'Python Analysis',
    tagBg: 'bg-sky',
    year: '2024',
    title: 'Customer Churn Analysis',
    description:
      'Analyzed 6,687 customers to surface a 26.86% churn rate, isolating a high-risk California international-plan segment and revealing competitive offers as the leading driver.',
    illustrationBg: 'bg-sky',
    illustration: (
      <svg viewBox="0 0 320 260" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="16" y="16" width="288" height="228" rx="14" fill="#2C2A24" fillOpacity="0.85" />
        <rect x="16" y="16" width="288" height="36" rx="14" fill="#2C2A24" />
        <circle cx="38" cy="34" r="5" fill="#F87171" />
        <circle cx="54" cy="34" r="5" fill="#FCD34D" />
        <circle cx="70" cy="34" r="5" fill="#4ADE80" />
        <rect x="30" y="64" width="16" height="6" rx="3" fill="white" fillOpacity="0.2" />
        <rect x="56" y="64" width="120" height="6" rx="3" fill="#F9C8D4" />
        <rect x="56" y="80" width="80" height="6" rx="3" fill="#C8E6D8" />
        <rect x="56" y="96" width="160" height="6" rx="3" fill="#FAE8C0" />
        <rect x="72" y="112" width="100" height="6" rx="3" fill="#C4DCFA" />
        <path d="M80 188C108 160 126 154 154 168C178 180 201 180 240 132" stroke="#C8E6D8" strokeWidth="8" strokeLinecap="round" />
      </svg>
    ),
    flip: true,
    role: 'Analyst',
    client: 'Subscription Business',
    deliverables: ['Churn segmentation', 'Retention insights', 'Tableau storytelling'],
    overview: 'I identified high-churn segments and surfaced competitive offers as the true risk driver, then translated findings into retention priorities and customer-targeting insights.',
    outcome: 'The project highlighted an overlooked high-churn demographic and shifted retention focus to the most vulnerable customer group.',
    linkLabel: 'Read churn analysis',
    liveUrl: 'https://public.tableau.com/app/profile/aman.chaudhary5705/viz/ChurnCustomerAnalysis_17575950054100/Story1'
  },
  {
    id: 3,
    category: 'sql',
    tag: 'Database Design',
    tagBg: 'bg-rose',
    year: '2024',
    title: 'School Management Database Design',
    description:
      'Designed an ERD and MySQL schema to upgrade Paschimanchal English High, using normalization to break school management data into clean, reliable tables.',
    illustrationBg: 'bg-sage',
    illustration: (
      <svg viewBox="0 0 320 260" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="12" width="120" height="236" rx="24" fill="white" fillOpacity="0.9" />
        <rect x="108" y="42" width="104" height="196" rx="12" fill="#FAF8F4" />
        <rect x="116" y="50" width="52" height="8" rx="4" fill="#2C2A24" fillOpacity="0.25" />
        <rect x="112" y="150" width="44" height="36" rx="8" fill="#C8E6D8" fillOpacity="0.7" />
        <rect x="162" y="150" width="44" height="36" rx="8" fill="#FAE8C0" fillOpacity="0.7" />
        <rect x="112" y="192" width="94" height="36" rx="8" fill="#C4DCFA" fillOpacity="0.6" />
        <path d="M128 108H192" stroke="#2C2A24" strokeOpacity="0.35" strokeWidth="6" strokeLinecap="round" />
        <path d="M128 124H172" stroke="#2C2A24" strokeOpacity="0.25" strokeWidth="6" strokeLinecap="round" />
      </svg>
    ),
    flip: false,
    role: 'Database Designer',
    client: 'Paschimanchal English High',
    deliverables: ['ERD design', 'MySQL schema', 'Data normalization'],
    overview: 'I developed a normalized school management database that separates student, teacher, class, and enrollment data into structured MySQL tables to eliminate redundancy and improve integrity.',
    outcome: 'This design makes the system easier to maintain, prevents insert/update/delete anomalies, and sets the school up for more reliable reporting and growth.',
    linkLabel: 'View normalized tables',
    liveUrl: 'https://docs.google.com/spreadsheets/d/1FilBByfIX08QWxB5EdnbzVCGRZxNu2t5bx0llkJyzY'
  },
  {
    id: 4,
    category: 'bi',
    tag: 'BI + Forecasting',
    tagBg: 'bg-sand',
    year: '2025',
    title: 'Marketing Funnel Forecasting',
    description:
      'Combined historical campaign data with forecasting methods to highlight growth opportunities and budget priorities across channels.',
    illustrationBg: 'bg-rose',
    illustration: (
      <svg viewBox="0 0 320 260" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="56" y="36" width="96" height="180" rx="18" fill="#F9C8D4" fillOpacity="0.55" />
        <rect x="106" y="24" width="96" height="180" rx="18" fill="#C4DCFA" fillOpacity="0.65" />
        <rect x="156" y="14" width="108" height="196" rx="18" fill="white" fillOpacity="0.96" />
        <rect x="167" y="42" width="86" height="50" rx="8" fill="#FAE8C0" fillOpacity="0.7" />
        <rect x="167" y="100" width="40" height="40" rx="8" fill="#C8E6D8" fillOpacity="0.75" />
        <rect x="213" y="100" width="40" height="40" rx="8" fill="#F9C8D4" fillOpacity="0.75" />
        <path d="M176 150L194 132L208 146L238 116" stroke="#2C2A24" strokeOpacity="0.5" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    flip: true,
    role: 'Business Analyst',
    client: 'Growth Marketing',
    deliverables: ['Forecast model', 'Funnel reporting', 'Channel recommendations'],
    overview: 'I translated campaign metrics into a forward-looking view of conversion and spend so leadership could compare channels and plan budgets with more confidence.',
    outcome: 'The forecast surfaced high-value channels and gave the marketing team a more data-driven way to allocate budget.',
    linkLabel: 'See forecasting approach',
    liveUrl: '#'
  },
  {
    id: 5,
    category: 'python',
    tag: 'ML Thesis',
    tagBg: 'bg-rose',
    year: '2025',
    title: 'Retail Purchasing Behavior',
    description:
      'Built a behavior-aware ML model predicting purchase intent from dwell time, shopper movement, and in-store interactions, outperforming demographic baselines.',
    illustrationBg: 'bg-sand',
    illustration: (
      <svg viewBox="0 0 320 260" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="30" width="280" height="200" rx="22" fill="white" fillOpacity="0.92" />
        <rect x="32" y="46" width="88" height="18" rx="9" fill="#F9C8D4" />
        <rect x="124" y="46" width="140" height="18" rx="9" fill="#C4DCFA" />
        <rect x="32" y="84" width="72" height="12" rx="6" fill="#C8E6D8" />
        <rect x="32" y="106" width="236" height="14" rx="7" fill="#FAE8C0" />
        <path d="M58 160C78 136 110 118 150 136C190 154 216 140 252 120" stroke="#2C2A24" strokeWidth="10" strokeLinecap="round" />
        <circle cx="92" cy="180" r="10" fill="#F9C8D4" />
        <circle cx="148" cy="170" r="10" fill="#C4DCFA" />
        <circle cx="204" cy="158" r="10" fill="#C8E6D8" />
      </svg>
    ),
    flip: false,
    role: 'ML Researcher',
    client: 'Consumer Electronics',
    deliverables: ['Predictive modeling', 'Behavior analysis', 'Ethical AI recommendations'],
    overview: 'Optimized a purchase-intent model using shopper movement and interaction data, and proposed layout, cross-sell, and promotion strategies with ethical AI controls.',
    outcome: 'The study delivered more accurate intent predictions and a privacy-aware recommendation framework for retail deployment.',
    linkLabel: 'Explore thesis project',
    liveUrl: 'https://www.chaudhary-aman.com.np/Retail.pdf'
  },
  {
    id: 6,
    category: 'python',
    tag: 'Lead Automation',
    tagBg: 'bg-sand',
    year: '2025',
    title: 'Automated Real Estate Lead Generation',
    description:
      'Automated data collection from Facebook and TikTok, segmented high-intent leads, and reduced outreach time using Python, n8n, and Google Sheets.',
    illustrationBg: 'bg-sage',
    illustration: (
      <svg viewBox="0 0 320 260" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="24" y="24" width="272" height="212" rx="20" fill="white" fillOpacity="0.94" />
        <rect x="40" y="46" width="88" height="16" rx="8" fill="#2C2A24" />
        <rect x="40" y="74" width="220" height="12" rx="6" fill="#F9C8D4" />
        <rect x="40" y="96" width="180" height="12" rx="6" fill="#C4DCFA" />
        <rect x="40" y="118" width="120" height="12" rx="6" fill="#C8E6D8" />
        <path d="M72 168H248" stroke="#2C2A24" strokeWidth="6" strokeLinecap="round" />
        <path d="M72 188H180" stroke="#2C2A24" strokeWidth="6" strokeLinecap="round" />
      </svg>
    ),
    flip: true,
    role: 'Automation Engineer',
    client: 'Real Estate Growth',
    deliverables: ['Lead scraping', 'Intent segmentation', 'n8n workflow'],
    overview: 'Built a custom web scraper and workflow automation to aggregate listings and leads, then segmented prospects by geography and price for faster outreach.',
    outcome: 'Generated 10 qualified leads and reduced lead response time by 20%, improving conversion efficiency for partner firms.',
    linkLabel: 'View automation case',
    liveUrl: '#'
  },
  {
    id: 7,
    category: 'analytics',
    tag: 'Location Model',
    tagBg: 'bg-sage',
    year: '2024',
    title: 'Town Recommendation System',
    description:
      'Ranked Devon and Dorset towns with a weighted percent-rank model, identifying Colyton as the top investment pick and testing price predictors across government datasets.',
    illustrationBg: 'bg-rose',
    illustration: (
      <svg viewBox="0 0 320 260" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="32" y="30" width="256" height="200" rx="18" fill="white" fillOpacity="0.94" />
        <rect x="52" y="54" width="36" height="18" rx="9" fill="#F9C8D4" />
        <rect x="98" y="54" width="116" height="18" rx="9" fill="#C4DCFA" />
        <rect x="220" y="54" width="40" height="18" rx="9" fill="#C8E6D8" />
        <rect x="52" y="90" width="220" height="12" rx="6" fill="#FAE8C0" />
        <rect x="52" y="114" width="180" height="12" rx="6" fill="#C4DCFA" />
        <line x1="72" y1="170" x2="120" y2="130" stroke="#2C2A24" strokeWidth="6" strokeLinecap="round" />
        <circle cx="128" cy="120" r="10" fill="#F9C8D4" />
        <circle cx="172" cy="142" r="10" fill="#C8E6D8" />
      </svg>
    ),
    flip: false,
    role: 'Data Analyst',
    client: 'UK Location Intelligence',
    deliverables: ['Location scoring', 'Regression testing', 'Town ranking'],
    overview: 'Integrated multiple UK datasets into a weighted percent-rank model, highlighting top town picks and revealing that broadband, crime, and schools had limited price effect.',
    outcome: 'Colyton emerged as the top investment choice, with analysis showing location factors dominated linear price predictors.',
    linkLabel: 'View recommendation model',
    liveUrl: 'https://www.chaudhary-aman.com.np/town-analysis.pdf',
    external: true
  },
];

export const categoryMap = {
  All: null,
  Analytics: 'analytics',
  Python: 'python',
  SQL: 'sql',
  BI: 'bi'
};

const Work = ({ onSelectProject, onViewAll }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const filteredProjects = projects.filter(p =>
    activeFilter === 'All' ? true : p.category === categoryMap[activeFilter]
  );

  const displayProjects = activeFilter === 'All' ? filteredProjects.slice(0, 3) : filteredProjects;

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: 'top 85%' },
          rotate: 1.5,
          opacity: 0,
          y: 30,
          duration: 0.9,
          delay: i * 0.2,
          ease: 'power3.out',
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleProjectClick = (project) => {
    if (project.external && project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener noreferrer');
      return;
    }

    if (onSelectProject) {
      onSelectProject(project);
    }
  };

  return (
    <section ref={sectionRef} className="w-full bg-white overflow-hidden" style={{ padding: 'clamp(60px, 10vh, 100px) 0' }}>
      <div className="max-w-[1280px] mx-auto w-full" style={{ padding: '0 clamp(20px, 6vw, 80px)' }}>

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-[24px] md:gap-8 mb-[40px] md:mb-[64px]">
          <div>
            <span className="font-body text-[12px] uppercase tracking-[3px] text-hint mb-[12px] md:mb-[16px] block font-semibold">
              Selected work
            </span>
            <h2 className="font-display font-bold text-[36px] md:text-[52px] text-ink leading-[1.1]">
              Data projects I&apos;ve delivered
            </h2>
          </div>

          {/* Filter buttons — scrollable row on mobile */}
          <div className="mobile-scroll-x flex items-center gap-[8px] overflow-x-auto flex-nowrap md:flex-wrap pb-[4px]" style={{ WebkitOverflowScrolling: 'touch' }}>
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`
                  rounded-pill px-[20px] py-[8px] font-body text-[14px] transition-all duration-200
                  ${activeFilter === f
                    ? 'bg-ink text-white border border-ink'
                    : 'bg-white border border-[#D0CEC8] text-muted hover:border-ink hover:text-ink'}
                `}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-[20px] md:gap-[32px]">
          <AnimatePresence mode="popLayout">
            {displayProjects.map((project, idx) => {
              const IllustrationPane = (
                <div className={`w-full md:w-1/2 ${project.illustrationBg} flex items-center justify-center p-[20px] md:p-8`} style={{ height: '200px', minHeight: '200px' }}>
                  {project.illustration}
                </div>
              );

              const ContentPane = (
                <div className="w-full md:w-1/2 bg-white p-[28px] md:p-[48px] flex flex-col justify-center">
                  {/* Tag + year */}
                  <div className="flex items-center gap-[12px] mb-[12px]">
                    <span className={`${project.tagBg} text-ink rounded-pill px-[14px] py-[5px] font-body text-[12px] font-medium`}>
                      {project.tag}
                    </span>
                    <span className="font-body text-[13px] text-hint">{project.year}</span>
                  </div>
                  {/* Title */}
                  <h3 className="font-display font-bold text-ink leading-[1.15] mb-[12px] md:mb-[16px]" style={{ fontSize: 'clamp(22px, 5vw, 36px)' }}>
                    {project.title}
                  </h3>
                  {/* Description */}
                  <p className="font-body text-[14px] md:text-[16px] text-muted leading-[1.7] max-w-[380px] mb-[24px] md:mb-[32px]">
                    {project.description}
                  </p>
                  {/* Link */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleProjectClick(project);
                    }}
                    className="group font-body text-[15px] font-medium text-ink inline-flex items-center gap-1 hover:gap-2 transition-all w-fit cursor-pointer bg-transparent border-none p-0"
                  >
                    View project
                    <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </div>
              );

              return (
                <div
                  key={project.id}
                  ref={el => cardRefs.current[idx] = el}
                >
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className={`rounded-card-lg overflow-hidden flex flex-col md:h-[440px] border border-border ${project.flip ? 'md:flex-row-reverse' : 'md:flex-row'
                      }`}
                  >
                    {IllustrationPane}
                    {ContentPane}
                  </motion.div>
                </div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        {activeFilter === 'All' && filteredProjects.length > 3 && (
          <div className="flex justify-center mt-[64px]">
            <button
              onClick={onViewAll}
              className="font-body text-[15px] font-medium text-ink border-[1.5px] border-ink rounded-pill px-[40px] py-[14px] bg-transparent transition-all duration-200 hover:bg-ink hover:text-white cursor-pointer"
            >
              View all projects →
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Work;
