import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

const ProcessAccordionItem = ({ number, title, subtitle, icon, colorClass, isOpen, onClick }) => {
  return (
    <div className={`mb-3 relative rounded-[16px] border ${isOpen ? 'border-[#E8E6E0] shadow-sm bg-white' : 'border-[#E8E6E0]/60 bg-white/70 hover:bg-white'} overflow-hidden transition-all duration-300`}>
      <button 
        className="w-full px-5 py-4 flex items-center justify-between cursor-pointer border-none bg-transparent"
        onClick={onClick}
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-[10px] bg-slate-50 border border-[#E8E6E0]/40 flex items-center justify-center flex-shrink-0">
            <div className="w-8 h-8 flex items-center justify-center scale-[0.6] origin-center">
              {icon}
            </div>
          </div>
          <div className="flex flex-col items-start gap-1 text-left">
            <span className="font-display font-bold text-ink text-[16px] leading-tight">{title}</span>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold" style={{ color: colorClass, fontSize: '14px' }}>{number}</span>
            </div>
          </div>
        </div>
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <svg className="w-5 h-5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 text-left">
              <div className="h-[1px] w-full bg-[#F0EDE8] mb-3"></div>
              <p className="font-body text-[14px] text-muted leading-[1.6]">
                {subtitle}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    numberColor: '#F9C8D4',
    stage: 'Define',
    description: 'Clarify the business question, identify the metrics, and frame the problem clearly.',
    icon: (
      <svg viewBox="0 0 80 80" className="w-20 h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="34" cy="34" r="20" stroke="#2C2A24" strokeWidth="3" />
        {/* Wireframe lines inside circle */}
        <line x1="22" y1="30" x2="46" y2="30" stroke="#2C2A24" strokeWidth="2" strokeOpacity="0.4" strokeLinecap="round" />
        <line x1="22" y1="36" x2="46" y2="36" stroke="#2C2A24" strokeWidth="2" strokeOpacity="0.4" strokeLinecap="round" />
        <line x1="22" y1="42" x2="40" y2="42" stroke="#2C2A24" strokeWidth="2" strokeOpacity="0.4" strokeLinecap="round" />
        {/* Handle */}
        <line x1="49" y1="49" x2="63" y2="63" stroke="#2C2A24" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '02',
    numberColor: '#FAE8C0',
    stage: 'Analyze',
    description: 'Clean the data, explore patterns, and validate findings with careful analysis.',
    icon: (
      <svg viewBox="0 0 80 80" className="w-20 h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Artboard outer */}
        <rect x="10" y="10" width="60" height="60" rx="6" stroke="#2C2A24" strokeWidth="2.5" />
        {/* Inner components */}
        <rect x="18" y="18" width="24" height="18" rx="4" fill="#F9C8D4" fillOpacity="0.7" />
        <rect x="18" y="42" width="24" height="20" rx="4" fill="#C4DCFA" fillOpacity="0.7" />
        <rect x="48" y="18" width="16" height="16" rx="4" fill="#C8E6D8" fillOpacity="0.7" />
        <rect x="48" y="40" width="16" height="10" rx="3" fill="#FAE8C0" fillOpacity="0.7" />
        <rect x="48" y="56" width="16" height="6" rx="3" fill="#F9C8D4" fillOpacity="0.5" />
      </svg>
    ),
  },
  {
    number: '03',
    numberColor: '#C4DCFA',
    stage: 'Visualize',
    description: 'Build dashboards and reports that make performance and trends easy to understand.',
    icon: (
      <svg viewBox="0 0 80 80" className="w-20 h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Window frame */}
        <rect x="8" y="14" width="64" height="52" rx="8" fill="#2C2A24" fillOpacity="0.08" stroke="#2C2A24" strokeWidth="2" />
        {/* Title bar */}
        <rect x="8" y="14" width="64" height="18" rx="8" fill="#2C2A24" fillOpacity="0.08" />
        <rect x="8" y="24" width="64" height="8" fill="#2C2A24" fillOpacity="0.08" />
        {/* Dots */}
        <circle cx="20" cy="23" r="3.5" fill="#F87171" />
        <circle cx="30" cy="23" r="3.5" fill="#FCD34D" />
        <circle cx="40" cy="23" r="3.5" fill="#4ADE80" />
        {/* Code lines */}
        <rect x="16" y="40" width="36" height="5" rx="2.5" fill="#F9C8D4" />
        <rect x="16" y="51" width="48" height="5" rx="2.5" fill="#C8E6D8" />
        <rect x="24" y="40" width="0" height="0" />
        <rect x="16" y="62" width="28" height="5" rx="2.5" fill="#FAE8C0" />
        <rect x="52" y="40" width="12" height="5" rx="2.5" fill="#C4DCFA" />
      </svg>
    ),
  },
  {
    number: '04',
    numberColor: '#C8E6D8',
    stage: 'Recommend',
    description: 'Translate findings into clear action points and practical next steps.',
    icon: (
      <svg viewBox="0 0 80 80" className="w-20 h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Rocket body */}
        <path d="M40 12 L52 38 L40 50 L28 38 Z" fill="#2C2A24" />
        {/* Left fin */}
        <path d="M28 38 L18 50 L28 50 Z" fill="#2C2A24" fillOpacity="0.6" />
        {/* Right fin */}
        <path d="M52 38 L62 50 L52 50 Z" fill="#2C2A24" fillOpacity="0.6" />
        {/* Flame */}
        <ellipse cx="40" cy="54" rx="7" ry="10" fill="#FAE8C0" />
        <ellipse cx="40" cy="56" rx="4" ry="6" fill="#F9C8D4" fillOpacity="0.7" />
        {/* Stars */}
        <circle cx="16" cy="20" r="2.5" fill="#2C2A24" fillOpacity="0.35" />
        <circle cx="66" cy="28" r="2" fill="#2C2A24" fillOpacity="0.35" />
        <circle cx="62" cy="14" r="3" fill="#2C2A24" fillOpacity="0.2" />
        {/* Window porthole */}
        <circle cx="40" cy="33" r="6" fill="white" fillOpacity="0.7" />
        <circle cx="40" cy="33" r="4" stroke="#2C2A24" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
];

const Process = () => {
  const [openAccordion, setOpenAccordion] = useState(-1);
  const [learningOpen, setLearningOpen] = useState(false);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRefs.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="w-full bg-cream py-section-y overflow-hidden">
      <div className="max-w-[1280px] mx-auto w-full px-section-x flex flex-col items-center">

        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span className="font-body text-[12px] uppercase tracking-[3px] text-hint mb-[8px] md:mb-[16px] font-semibold">
            My process
          </span>
          <h2 className="font-display font-bold text-ink leading-[1.1] mb-[12px] md:mb-[16px]" style={{ fontSize: 'clamp(26px, 7vw, 52px)' }}>
            How I turn raw data into useful insight
          </h2>
          <p className="font-body text-[16px] md:text-[17px] text-muted max-w-[500px] leading-[1.7]">
            Every project follows a practical flow from question to decision-ready insight.
          </p>
        </div>

        {/* Mobile Accordion View */}
        <div className="flex flex-col md:hidden w-full mt-[32px] text-left relative z-10">
          {steps.map((step, idx) => (
            <ProcessAccordionItem 
              key={step.stage}
              isOpen={openAccordion === idx}
              onClick={() => setOpenAccordion(openAccordion === idx ? -1 : idx)}
              number={step.number}
              title={step.stage}
              subtitle={step.description}
              colorClass={step.numberColor}
              icon={step.icon}
            />
          ))}
        </div>

        {/* Desktop Cards grid + connector row */}
        <div className="hidden md:block mt-[72px] w-full relative">

          {/* Connector dashed line (behind cards) */}
          <div className="absolute top-[88px] left-[8%] right-[8%] pointer-events-none z-0 hidden lg:flex items-center">
            <div className="w-full border-t-[1.5px] border-dashed border-border" />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] md:gap-[20px] relative z-10">
            {steps.map((step, idx) => (
              <div
                key={step.stage}
                ref={el => cardRefs.current[idx] = el}
                className="bg-white rounded-card border border-border p-[24px] md:p-[40px] min-h-[auto] md:min-h-[360px] flex flex-col"
              >
                {/* Step number */}
                <span
                  className="font-display font-bold text-[40px] md:text-[64px] leading-none mb-[12px] md:mb-[20px] select-none"
                  style={{ color: step.numberColor }}
                >
                  {step.number}
                </span>

                {/* Icon illustration */}
                <div className="mb-[2px] w-[48px] h-[48px] md:w-[80px] md:h-[80px]">
                  {step.icon}
                </div>

                {/* Stage name */}
                <h3 className="font-display font-bold text-[20px] md:text-[22px] text-ink mt-[12px] md:mt-[16px] mb-[6px] md:mb-[12px]">
                  {step.stage}
                </h3>

                {/* Description */}
                <p className="font-body text-[14px] md:text-[15px] text-muted leading-[1.6] md:leading-[1.7]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-[40px] w-full max-w-[980px] mx-auto">
            <button
              type="button"
              onClick={() => setLearningOpen(!learningOpen)}
              className="w-full rounded-[28px] border border-border bg-white p-[24px] md:p-[30px] shadow-sm transition duration-300 hover:shadow-xl hover:border-sky/40 flex items-start justify-between gap-4 text-left"
            >
              <div className="min-w-0">
                <span className="font-body text-[12px] uppercase tracking-[3px] text-hint mb-[8px] block">
                  Currently engaged
                </span>
                <h3 className="font-display font-bold text-ink text-[26px] md:text-[28px] leading-tight mb-[10px]">
                  Learning Azure Data Engineering
                </h3>
                <p className="font-body text-[15px] md:text-[16px] text-muted leading-[1.8] max-w-[860px]">
                  Click to uncover the Azure-first skills and cloud pipeline practices I’m building right now for analytics-ready data.
                </p>
              </div>
              <div className={`mt-1 shrink-0 transition-transform duration-300 ${learningOpen ? 'rotate-180' : 'rotate-0'}`}>
                <svg className="w-6 h-6 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            <AnimatePresence>
              {learningOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 rounded-[28px] border border-[#E6EEF7] bg-[#F6F9FD] p-[24px] md:p-[30px]">
                    <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] items-start">
                      <div className="rounded-[24px] bg-white border border-border p-[24px] shadow-sm">
                        <span className="inline-flex rounded-full bg-sky/10 px-3 py-1 text-[12px] font-semibold text-sky mb-4">Azure Data Engineering</span>
                        <h4 className="font-display text-[20px] font-semibold text-ink mb-4">Azure data pipelines and analytics-ready architecture</h4>
                        <p className="font-body text-[14px] text-muted leading-[1.8] mb-5">
                          I’m building modern Azure data engineering capabilities with a focus on reliable end-to-end pipelines, cloud-scale transformation, and governed data delivery for analytics teams.
                        </p>
                        <div className="space-y-4 font-body text-[14px] text-ink/85">
                          <div>
                            <strong className="font-semibold">Azure Data Factory</strong> orchestration for efficient ETL flows and automated schedule-based data movement.
                          </div>
                          <div>
                            <strong className="font-semibold">Azure Synapse / Databricks</strong> for scalable transformation, analytics engineering, and fast query performance.
                          </div>
                          <div>
                            <strong className="font-semibold">Azure Data Lake Storage</strong> design for secure raw, curated, and production-ready datasets.
                          </div>
                        </div>
                      </div>

                      <div className="rounded-[24px] bg-slate-50 border border-border p-[20px] shadow-sm flex items-start justify-center">
                        <div className="text-center font-body text-[14px] text-ink/90 leading-[1.7] px-4">
                          <span className="block text-[13px] uppercase tracking-[2px] text-sky font-semibold mb-3">Learning focus</span>
                          <p className="text-[15px] leading-[1.8]">
                            Building Azure pipeline reliability with hands-on experience in Data Factory workflows, Synapse analytics, and Data Lake governance.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      <span className="inline-flex items-center justify-center rounded-full bg-[#FBCFE8] px-4 py-2 text-[12px] font-semibold text-[#BE185D]">Azure Data Factory</span>
                      <span className="inline-flex items-center justify-center rounded-full bg-[#BFDBFE] px-4 py-2 text-[12px] font-semibold text-[#1D4ED8]">Azure Synapse</span>
                      <span className="inline-flex items-center justify-center rounded-full bg-[#FEF3C7] px-4 py-2 text-[12px] font-semibold text-[#92400E]">Data Lake Storage</span>
                      <span className="inline-flex items-center justify-center rounded-full bg-[#D1FAE5] px-4 py-2 text-[12px] font-semibold text-[#047857]">Governed data pipelines</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;
