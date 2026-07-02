import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

/* ─── Experience data ──────────────────────────────────── */
const experienceCards = [
  {
    id: 1,
    role: 'Data Analyst Intern',
    company: 'Creabiz',
    period: 'Mar 2026 – Present',
    type: 'Live production work',
    current: true,
    accent: '#C8E6D8',
    accentDark: '#3BA876',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <rect x="4" y="8" width="32" height="24" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M12 20l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bullets: [
      'Delivered SQL and Python analysis in a live production environment.',
      'Built 5 automated Tableau dashboards tracking 12 KPIs and saving 10 hours per week.',
      'Optimized a 100k-row data pipeline in Google Sheets and Python, improving quality 25%.',
    ],
    tags: ['SQL', 'Python', 'Tableau', 'Google Sheets'],
  },
  {
    id: 2,
    role: 'Data Science Specialist',
    company: 'Commonwealth Bank',
    period: 'Sep 2025 – Dec 2025',
    type: 'Job Simulation',
    current: false,
    accent: '#C4DCFA',
    accentDark: '#4A8FE7',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2" />
        <path d="M14 22l3-8 4 5 4-3 3 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bullets: [
      'Built predictive models with Python (scikit-learn) and reached 85% forecast accuracy.',
      'Ran EDA on financial datasets to uncover customer patterns that guided strategy.',
      'Built preprocessing pipelines for feature engineering, normalization, and missing values.',
    ],
    tags: ['Python', 'scikit-learn', 'Pandas', 'EDA'],
  },
  {
    id: 3,
    role: 'Data Specialist',
    company: 'Deloitte Australia',
    period: 'Aug 2025 – Dec 2025',
    type: 'Job Simulation',
    current: false,
    accent: '#F9C8D4',
    accentDark: '#E06B84',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <rect x="6" y="6" width="28" height="28" rx="6" stroke="currentColor" strokeWidth="2" />
        <rect x="12" y="18" width="4" height="10" rx="1" fill="currentColor" opacity="0.5" />
        <rect x="18" y="14" width="4" height="14" rx="1" fill="currentColor" opacity="0.5" />
        <rect x="24" y="10" width="4" height="18" rx="1" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    bullets: [
      'Analyzed telecom data to surface trends that supported a 15% retention improvement.',
      'Built Power BI dashboards to visualize KPIs and support data-driven decisions.',
      'Cleaned 500K+ records with Python and R, while reducing report generation time with SQL.',
    ],
    tags: ['Power BI', 'Python', 'R', 'SQL'],
  },
];

/* ─── Mobile accordion item ────────────────────────────── */
const MobileExperienceItem = ({ card, isOpen, onClick, nodeRef }) => (
  <div className="relative flex gap-4">
    {/* Mini timeline spine for mobile */}
    <div className="flex flex-col items-center flex-shrink-0 pt-4">
      <div
        ref={nodeRef}
        className="exp-node relative z-10 w-8 h-8 rounded-full flex items-center justify-center border-[2px] bg-white"
        style={{
          borderColor: card.accentDark,
          boxShadow: `0 0 0 3px ${card.accent}40`,
        }}
      >
        <div className="w-4 h-4" style={{ color: card.accentDark }}>{card.icon}</div>
      </div>
      <div className="w-[2px] flex-1 mt-0" style={{ backgroundColor: card.accent + '40' }} />
    </div>

    {/* Card */}
    <div className="flex-1 pb-3">
      <div
        className={`mb-0 relative rounded-[16px] border overflow-hidden transition-all duration-300 ${
          isOpen
            ? 'border-[#E8E6E0] shadow-sm bg-white'
            : 'border-[#E8E6E0]/60 bg-white/70 hover:bg-white'
        }`}
      >
        <button
          className="w-full px-4 py-3.5 flex items-center justify-between cursor-pointer border-none bg-transparent"
          onClick={onClick}
        >
          <div className="flex flex-col items-start gap-0.5 text-left">
            <span className="font-display font-bold text-ink text-[15px] leading-tight">
              {card.role}
            </span>
            <span className="font-body text-[12px] text-muted">
              {card.company} · {card.period}
            </span>
          </div>
          <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
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
              <div className="px-4 pb-4 pt-1">
                <div className="h-[1px] w-full bg-[#F0EDE8] mb-3" />

                {card.current && (
                  <div className="flex items-center gap-2 mb-3">
                    <span className="relative flex h-2 w-2">
                      <span
                        className="absolute inline-flex h-full w-full rounded-full opacity-75"
                        style={{ backgroundColor: card.accentDark, animation: 'livePulse 2s ease-in-out infinite' }}
                      />
                      <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: card.accentDark }} />
                    </span>
                    <span className="font-body text-[11px] uppercase tracking-[1.5px] font-semibold" style={{ color: card.accentDark }}>
                      Current Role
                    </span>
                  </div>
                )}

                <span
                  className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[1.5px] font-semibold mb-3"
                  style={{ backgroundColor: card.accent + '40', color: card.accentDark }}
                >
                  {card.type}
                </span>

                <ul className="grid gap-2.5 font-body text-[13px] text-ink/80 leading-[1.7]">
                  {card.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2.5">
                      <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: card.accent }} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide border"
                      style={{ borderColor: card.accent, color: card.accentDark, backgroundColor: card.accent + '20' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  </div>
);

/* ─── Card content shared component ────────────────────── */
const CardContent = ({ card, align }) => (
  <div
    className="group relative bg-white rounded-[20px] border border-border p-6 max-w-[480px] w-full transition-all duration-400 hover:shadow-[0_20px_50px_rgba(44,42,36,0.08)] hover:-translate-y-1 cursor-default"
    style={{
      borderLeft: align === 'left' ? `3px solid ${card.accentDark}` : undefined,
      borderRight: align === 'right' ? `3px solid ${card.accentDark}` : undefined,
    }}
  >
    {/* Decorative gradient orb */}
    <div
      className="absolute -top-12 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full blur-3xl pointer-events-none"
      style={{
        width: '120px',
        height: '120px',
        background: card.accent,
        ...(align === 'right' ? { right: '20px' } : { left: '20px' }),
      }}
    />

    {/* Header */}
    <div className={`flex flex-col gap-2 mb-4 ${align === 'right' ? 'items-end text-right' : 'items-start text-left'}`}>
      {card.current && (
        <div className="flex items-center gap-2 mb-1">
          <span className="relative flex h-2 w-2">
            <span
              className="absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ backgroundColor: card.accentDark, animation: 'livePulse 2s ease-in-out infinite' }}
            />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: card.accentDark }} />
          </span>
          <span className="font-body text-[11px] uppercase tracking-[1.5px] font-semibold" style={{ color: card.accentDark }}>
            Current Role
          </span>
        </div>
      )}

      <span
        className="inline-block w-fit rounded-full px-3 py-1 text-[10px] uppercase tracking-[1.5px] font-semibold"
        style={{ backgroundColor: card.accent + '40', color: card.accentDark }}
      >
        {card.type}
      </span>

      <h3 className="font-display text-[20px] font-bold text-ink leading-[1.15] mt-1">
        {card.role}
      </h3>

      <div className="font-body text-[13px] text-muted leading-[1.6] flex items-center gap-2">
        <span className="font-semibold text-ink/80">{card.company}</span>
        <span className="w-1 h-1 rounded-full bg-hint" />
        <span>{card.period}</span>
      </div>
    </div>

    {/* Divider */}
    <div className="h-[1px] w-full bg-border/60 mb-4" />

    {/* Bullets */}
    <ul className={`grid gap-3 font-body text-[13px] text-ink/80 leading-[1.8] ${align === 'right' ? 'text-right' : 'text-left'}`}>
      {card.bullets.map((bullet, i) => (
        <li key={i} className={`flex gap-2.5 ${align === 'right' ? 'flex-row-reverse' : ''}`}>
          <span
            className="mt-[8px] inline-block h-[6px] w-[6px] rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-125"
            style={{ backgroundColor: card.accent }}
          />
          <span>{bullet}</span>
        </li>
      ))}
    </ul>

    {/* Tags */}
    <div className={`flex flex-wrap gap-2 mt-4 ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
      {card.tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide border transition-all duration-300 hover:scale-105"
          style={{
            borderColor: card.accent,
            color: card.accentDark,
            backgroundColor: card.accent + '20',
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

/* ─────────────────────────────────────────────────────────
   ScrollLine — a single SVG line drawn by scroll progress
   ───────────────────────────────────────────────────────── */
const ScrollLine = React.forwardRef(({ containerRef, nodePositions, color = '#2C2A24' }, ref) => {
  const svgRef = useRef(null);
  const pathRef = useRef(null);

  // Build the path data from node center positions
  const buildPath = useCallback(() => {
    if (!containerRef.current || nodePositions.length < 2) return '';
    const containerRect = containerRef.current.getBoundingClientRect();
    const points = nodePositions.map((pos) => ({
      x: pos.x - containerRect.left,
      y: pos.y - containerRect.top,
    }));

    // Smooth bezier through all points
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cpY = (prev.y + curr.y) / 2;
      d += ` C ${prev.x} ${cpY}, ${curr.x} ${cpY}, ${curr.x} ${curr.y}`;
    }
    return d;
  }, [containerRef, nodePositions]);

  useEffect(() => {
    if (!pathRef.current || !containerRef.current || nodePositions.length < 2) return;

    const pathEl = pathRef.current;
    const d = buildPath();
    if (!d) return;

    pathEl.setAttribute('d', d);
    const length = pathEl.getTotalLength();

    // Initial state: fully hidden
    gsap.set(pathEl, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    // Scrub the line drawing tied to scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
        end: 'bottom 60%',
        scrub: 0.8,
      },
    });

    tl.to(pathEl, {
      strokeDashoffset: 0,
      ease: 'none',
    });

    return () => tl.kill();
  }, [nodePositions, buildPath, containerRef]);

  // Make SVG cover the whole container
  if (nodePositions.length < 2) return null;

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ overflow: 'visible' }}
    >
      {/* Ghost trail (faint background) */}
      <path
        d={buildPath()}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeOpacity="0.08"
        strokeLinecap="round"
      />
      {/* Animated drawn line */}
      <path
        ref={pathRef}
        fill="none"
        stroke="url(#expLineGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="expLineGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={experienceCards[0].accentDark} />
          <stop offset="50%" stopColor={experienceCards[1].accentDark} />
          <stop offset="100%" stopColor={experienceCards[2].accentDark} />
        </linearGradient>
      </defs>
    </svg>
  );
});

ScrollLine.displayName = 'ScrollLine';

/* ─── Main component ───────────────────────────────────── */
const Experience = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const nodeRefs = useRef([]);
  const desktopContainerRef = useRef(null);
  const tabletContainerRef = useRef(null);
  const [openMobile, setOpenMobile] = useState(0);
  const [desktopNodePositions, setDesktopNodePositions] = useState([]);
  const [tabletNodePositions, setTabletNodePositions] = useState([]);

  // Collect node center positions after layout
  const collectNodePositions = useCallback(() => {
    // Desktop nodes
    if (desktopContainerRef.current) {
      const nodes = desktopContainerRef.current.querySelectorAll('.exp-node');
      const positions = Array.from(nodes).map((node) => {
        const rect = node.getBoundingClientRect();
        return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
      });
      if (positions.length >= 2) setDesktopNodePositions(positions);
    }
    // Tablet nodes
    if (tabletContainerRef.current) {
      const nodes = tabletContainerRef.current.querySelectorAll('.exp-node');
      const positions = Array.from(nodes).map((node) => {
        const rect = node.getBoundingClientRect();
        return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
      });
      if (positions.length >= 2) setTabletNodePositions(positions);
    }
  }, []);

  useEffect(() => {
    // Wait for layout to settle, then collect positions
    const timer = setTimeout(collectNodePositions, 300);
    window.addEventListener('resize', collectNodePositions);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', collectNodePositions);
    };
  }, [collectNodePositions]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards in with stagger
      gsap.from(cardsRef.current.filter(Boolean), {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });

      // Animate nodes: start small & muted, pop in as scroll progresses
      const allNodes = sectionRef.current?.querySelectorAll('.exp-node') || [];
      allNodes.forEach((node, i) => {
        gsap.from(node, {
          scrollTrigger: {
            trigger: node,
            start: 'top 85%',
          },
          scale: 0.4,
          opacity: 0,
          duration: 0.5,
          delay: i * 0.1,
          ease: 'back.out(2)',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="w-full bg-white overflow-hidden"
      style={{ padding: 'clamp(50px, 7vh, 80px) 0' }}
    >
      <div className="max-w-[1200px] mx-auto w-full px-section-x">

        {/* ── Section header ─────────────────────────── */}
        <div className="flex flex-col items-center text-center mb-[48px] md:mb-[64px]">
          <span className="font-body text-[12px] uppercase tracking-[3px] text-hint mb-[8px] md:mb-[16px] font-semibold">
            Professional experience
          </span>
          <h2
            className="font-display font-bold text-ink leading-[1.08] mb-[12px] md:mb-[16px]"
            style={{ fontSize: 'clamp(28px, 5.5vw, 44px)' }}
          >
            Selected analytics experience
          </h2>
          <p className="font-body text-[14px] md:text-[15px] text-muted max-w-[540px] leading-[1.8]">
            Compact, aligned summaries of simulated and live analytics work using Python, SQL, Tableau and Power BI.
          </p>
        </div>

        {/* ── Mobile (< md) — accordion with mini spine ── */}
        <div className="flex flex-col md:hidden w-full">
          {experienceCards.map((card, idx) => (
            <MobileExperienceItem
              key={card.id}
              card={card}
              isOpen={openMobile === idx}
              onClick={() => setOpenMobile(openMobile === idx ? -1 : idx)}
            />
          ))}
        </div>

        {/* ── Tablet single-column timeline (md – xl) ──── */}
        <div ref={tabletContainerRef} className="hidden md:block xl:hidden relative">
          <ScrollLine
            containerRef={tabletContainerRef}
            nodePositions={tabletNodePositions}
          />
          {experienceCards.map((card, idx) => (
            <div
              key={card.id}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="relative flex gap-5"
            >
              {/* Timeline spine */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className="exp-node relative z-10 w-11 h-11 rounded-full flex items-center justify-center border-[3px] bg-white"
                  style={{
                    borderColor: card.accentDark,
                    boxShadow: `0 0 0 4px ${card.accent}50`,
                  }}
                >
                  <div className="w-5 h-5" style={{ color: card.accentDark }}>{card.icon}</div>
                </div>
                {/* Invisible spacer — the ScrollLine SVG draws the actual line */}
                {idx < experienceCards.length - 1 && (
                  <div className="w-[2px] flex-1" />
                )}
              </div>
              <div className="pb-8 flex-1">
                <CardContent card={card} align="left" />
              </div>
            </div>
          ))}
        </div>

        {/* ── Desktop alternating timeline (>= xl) ───── */}
        <div ref={desktopContainerRef} className="hidden xl:block relative">
          <ScrollLine
            containerRef={desktopContainerRef}
            nodePositions={desktopNodePositions}
          />
          {experienceCards.map((card, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={card.id}
                ref={(el) => (cardsRef.current[idx] = el)}
                className="relative grid gap-6"
                style={{
                  gridTemplateColumns: '1fr 48px 1fr',
                  minHeight: '240px',
                }}
              >
                {/* Left content or spacer */}
                {isLeft ? (
                  <div className="flex justify-end">
                    <CardContent card={card} align="right" />
                  </div>
                ) : (
                  <div />
                )}

                {/* Center node */}
                <div className="flex flex-col items-center relative">
                  <div
                    className="exp-node relative z-10 w-12 h-12 rounded-full flex items-center justify-center border-[3px] bg-white transition-shadow duration-300"
                    style={{
                      borderColor: card.accentDark,
                      boxShadow: `0 0 0 4px ${card.accent}50`,
                    }}
                  >
                    <div className="w-5 h-5" style={{ color: card.accentDark }}>
                      {card.icon}
                    </div>
                  </div>
                  {/* Invisible spacer */}
                  {idx < experienceCards.length - 1 && (
                    <div className="w-[2px] flex-1" />
                  )}
                </div>

                {/* Right content or spacer */}
                {!isLeft ? (
                  <div className="flex justify-start">
                    <CardContent card={card} align="left" />
                  </div>
                ) : (
                  <div />
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;
