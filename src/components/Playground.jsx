import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Playground = () => {
  const sectionRef = useRef(null);
  const row1Refs = useRef([]);
  const row2Refs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(row1Refs.current, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 40,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power3.out',
      });
      gsap.from(row2Refs.current, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 40,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        delay: 0.2,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const cardClass =
    'relative rounded-card overflow-hidden cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.02] hover:brightness-103';

  return (
    <section ref={sectionRef} className="w-full bg-white overflow-hidden" style={{ padding: 'clamp(60px, 10vh, 100px) 0' }}>
      <div className="max-w-[1280px] mx-auto w-full" style={{ padding: '0 clamp(20px, 6vw, 80px)' }}>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-[60px]">
          <div>
            <span className="font-body text-[12px] uppercase tracking-[3px] text-hint mb-[16px] block font-semibold">
              Data discoveries
            </span>
            <h2 className="font-display font-bold text-ink leading-[1.1]" style={{ fontSize: 'clamp(32px, 8vw, 52px)' }}>
              Data experiments
            </h2>
            <p className="font-body text-[15px] md:text-[17px] text-muted max-w-[620px] leading-[1.6] md:leading-[1.7] mt-4">
              A set of quick experiments, practical perspectives, and book ideas that show how I frame data as decisions, stories, and high-impact tests.
            </p>
          </div>
          <a
            href="#"
            className="font-body text-[15px] text-ink font-medium hover:underline underline-offset-4 flex-shrink-0 pb-1"
          >
            Try one idea →
          </a>
        </div>

        {/* Grid — 3 cols on desktop, 1 col on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[12px] md:gap-[20px]">

          {/* CELL 1 — Noise Field Generator (col-span 2, row 1) */}
          <div
            ref={el => row1Refs.current[0] = el}
            className={`${cardClass} col-span-1 md:col-span-2`}
            style={{ height: '220px', background: '#F9C8D4' }}
          >
            {/* Topographic wave illustration */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 640 320" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <path d="M320,160 C440,80 600,120 660,160 C600,200 440,240 320,160 C200,80 20,120 -20,160 C20,200 200,240 320,160Z" fill="white" fillOpacity="0.08"/>
              <path d="M320,160 C400,100 540,130 600,160 C540,190 400,220 320,160 C240,100 100,130 40,160 C100,190 240,220 320,160Z" fill="white" fillOpacity="0.12"/>
              <path d="M320,160 C380,118 490,140 540,160 C490,180 380,202 320,160 C260,118 150,140 100,160 C150,180 260,202 320,160Z" fill="white" fillOpacity="0.16"/>
              <path d="M320,160 C365,130 445,148 480,160 C445,172 365,185 320,160 C275,130 195,148 160,160 C195,172 275,185 320,160Z" fill="white" fillOpacity="0.20"/>
              <path d="M320,160 C348,143 395,153 420,160 C395,167 348,174 320,160 C292,143 245,153 220,160 C245,167 292,174 320,160Z" fill="white" fillOpacity="0.25"/>
              <path d="M320,160 C335,152 358,156 370,160 C358,164 335,168 320,160 C305,152 282,156 270,160 C282,164 305,168 320,160Z" fill="white" fillOpacity="0.35"/>
              {/* Outer extended */}
              <path d="M320,160 C480,40 700,100 760,160 C700,220 480,280 320,160 C160,40 -60,100 -120,160 C-60,220 160,280 320,160Z" fill="#FAF8F4" fillOpacity="0.1"/>
              <path d="M320,160 C520,20 760,80 820,160 C760,240 520,300 320,160 C120,20 -120,80 -180,160 C-120,240 120,300 320,160Z" fill="#FAF8F4" fillOpacity="0.06"/>
            </svg>
            {/* Bottom overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-[120px]"
              style={{ background: 'linear-gradient(to bottom, transparent, #F9C8D4)' }} />
            <div className="absolute bottom-0 left-0 p-6 flex flex-col gap-2">
              <span className="bg-white text-ink rounded-pill px-[12px] py-[4px] font-body text-[12px] font-medium w-fit">Insight</span>
              <h3 className="font-display font-bold text-[22px] text-white">Customer Pulse</h3>
              <p className="font-body text-[13px] text-white/80 max-w-[440px]">
                Fact: a 5% lift in retention often beats a 20% acquisition boost — the most powerful analytics work is about holding value, not just chasing volume.
              </p>
              <p className="font-body text-[12px] text-white/70 max-w-[440px]">
                Book pick: <strong>Noticer</strong> — Alex Hormozi shows why pattern recognition and clear thinking are the real edge in analysis.
              </p>
            </div>
          </div>

          {/* CELL 2 — Rotating Geometry (col-span 1, row 1) */}
          <div
            ref={el => row1Refs.current[1] = el}
            className={`${cardClass} col-span-1`}
            style={{ height: '220px', background: '#C4DCFA' }}
          >
            {/* Isometric cube wireframe */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 213 320" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
              {/* Top face */}
              <polygon points="106,80 166,114 106,148 46,114" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.8"/>
              {/* Left face */}
              <polygon points="46,114 106,148 106,220 46,186" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.8"/>
              {/* Right face */}
              <polygon points="166,114 106,148 106,220 166,186" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.8"/>
              {/* Internal back edges (subtle) */}
              <line x1="46" y1="114" x2="46" y2="186" stroke="white" strokeWidth="1.5" strokeOpacity="0.8"/>
              <line x1="166" y1="114" x2="166" y2="186" stroke="white" strokeWidth="1.5" strokeOpacity="0.8"/>
              <line x1="106" y1="80" x2="106" y2="148" stroke="white" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 3"/>
            </svg>
            <div className="absolute bottom-0 left-0 right-0 h-[120px]"
              style={{ background: 'linear-gradient(to bottom, transparent, #C4DCFA)' }} />
            <div className="absolute bottom-0 left-0 p-6 flex flex-col gap-2">
              <span className="bg-white text-ink rounded-pill px-[12px] py-[4px] font-body text-[12px] font-medium w-fit">Analysis</span>
              <h3 className="font-display font-bold text-[22px] text-ink">Revenue Funnel</h3>
              <p className="font-body text-[13px] text-ink/80 max-w-[220px]">
                Fact: a conversion rate is only useful when it is tied to one clear hypothesis — reduce friction, then measure the business impact.
              </p>
              <p className="font-body text-[12px] text-ink/60 max-w-[220px]">
                Book pick: <strong>Lean Analytics</strong> — the right metric can shift a team from guessing to making progress.
              </p>
            </div>
          </div>

          {/* CELL 3 — Wave Playground (col-span 1, row 2) */}
          <div
            ref={el => row2Refs.current[0] = el}
            className={`${cardClass} col-span-1`}
            style={{ height: '220px', background: '#FAE8C0' }}
          >
            {/* Sine waves */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 213 280" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,100 C35,70 70,130 106,100 C142,70 177,130 213,100" fill="none" stroke="white" strokeWidth="2.5" strokeOpacity="0.6" strokeLinecap="round"/>
              <path d="M0,130 C35,100 70,160 106,130 C142,100 177,160 213,130" fill="none" stroke="white" strokeWidth="2.5" strokeOpacity="0.4" strokeLinecap="round"/>
              <path d="M0,160 C35,130 70,190 106,160 C142,130 177,190 213,160" fill="none" stroke="white" strokeWidth="2.5" strokeOpacity="0.25" strokeLinecap="round"/>
            </svg>
            <div className="absolute bottom-0 left-0 right-0 h-[120px]"
              style={{ background: 'linear-gradient(to bottom, transparent, #FAE8C0)' }} />
            <div className="absolute bottom-0 left-0 p-6 flex flex-col gap-2">
              <span className="bg-white text-ink rounded-pill px-[12px] py-[4px] font-body text-[12px] font-medium w-fit">Data fact</span>
              <h3 className="font-display font-bold text-[22px] text-ink">Demand Horizon</h3>
              <p className="font-body text-[13px] text-ink/80 max-w-[240px]">
                Fact: even strong models fail when the assumptions are hidden — the best analysts treat every forecast like a testable story.
              </p>
              <p className="font-body text-[12px] text-ink/60 max-w-[240px]">
                Book pick: <strong>Also I Want You To Be Rich</strong> — David McRaney reminds us that behavior and choice are the data behind every outcome.
              </p>
            </div>
          </div>

          {/* CELL 4 — Particle System (col-span 1, row 2) */}
          <div
            ref={el => row2Refs.current[1] = el}
            className={`${cardClass} col-span-1`}
            style={{ height: '220px', background: '#C8E6D8' }}
          >
            {/* Scatter circles + connection lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 213 280" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              {/* Connection lines */}
              <line x1="30" y1="60" x2="80" y2="90" stroke="white" strokeWidth="0.5" strokeOpacity="0.3"/>
              <line x1="80" y1="90" x2="120" y2="70" stroke="white" strokeWidth="0.5" strokeOpacity="0.3"/>
              <line x1="120" y1="70" x2="175" y2="50" stroke="white" strokeWidth="0.5" strokeOpacity="0.3"/>
              <line x1="40" y1="140" x2="90" y2="160" stroke="white" strokeWidth="0.5" strokeOpacity="0.3"/>
              <line x1="90" y1="160" x2="140" y2="145" stroke="white" strokeWidth="0.5" strokeOpacity="0.3"/>
              <line x1="140" y1="145" x2="185" y2="170" stroke="white" strokeWidth="0.5" strokeOpacity="0.3"/>
              <line x1="30" y1="60" x2="40" y2="140" stroke="white" strokeWidth="0.5" strokeOpacity="0.2"/>
              <line x1="120" y1="70" x2="140" y2="145" stroke="white" strokeWidth="0.5" strokeOpacity="0.2"/>
              {/* Circles */}
              <circle cx="30" cy="60" r="5" fill="white" fillOpacity="0.8"/>
              <circle cx="80" cy="90" r="3" fill="white" fillOpacity="0.6"/>
              <circle cx="120" cy="70" r="6" fill="white" fillOpacity="0.5"/>
              <circle cx="175" cy="50" r="2.5" fill="white" fillOpacity="0.7"/>
              <circle cx="55" cy="30" r="3" fill="white" fillOpacity="0.4"/>
              <circle cx="150" cy="110" r="4" fill="white" fillOpacity="0.5"/>
              <circle cx="40" cy="140" r="5" fill="white" fillOpacity="0.7"/>
              <circle cx="90" cy="160" r="3.5" fill="white" fillOpacity="0.6"/>
              <circle cx="140" cy="145" r="6" fill="white" fillOpacity="0.45"/>
              <circle cx="185" cy="170" r="2.5" fill="white" fillOpacity="0.8"/>
              <circle cx="100" cy="200" r="4" fill="white" fillOpacity="0.35"/>
              <circle cx="160" cy="210" r="3" fill="white" fillOpacity="0.5"/>
              <circle cx="20" cy="200" r="2" fill="white" fillOpacity="0.6"/>
              <circle cx="60" cy="220" r="5" fill="white" fillOpacity="0.3"/>
              <circle cx="190" cy="230" r="3" fill="white" fillOpacity="0.55"/>
              <circle cx="200" cy="80" r="2.5" fill="white" fillOpacity="0.45"/>
              <circle cx="10" cy="100" r="3" fill="white" fillOpacity="0.5"/>
            </svg>
            <div className="absolute bottom-0 left-0 right-0 h-[120px]"
              style={{ background: 'linear-gradient(to bottom, transparent, #C8E6D8)' }} />
            <div className="absolute bottom-0 left-0 p-6 flex flex-col gap-2">
              <span className="bg-white text-ink rounded-pill px-[12px] py-[4px] font-body text-[12px] font-medium w-fit">New idea</span>
              <h3 className="font-display font-bold text-[22px] text-ink">Signal Scout</h3>
              <p className="font-body text-[13px] text-ink/80 max-w-[240px]">
                Fact: the first analysis is rarely the right one — look for the smallest signal that changes what you would do next.
              </p>
              <p className="font-body text-[12px] text-ink/60 max-w-[240px]">
                Book pick: <strong>Noticer</strong> — early pattern spotting helps you build better tests and smarter questions.
              </p>
            </div>
          </div>

          {/* CELL 5 — Kinetic Type (col-span 1, row 2) */}
          <div
            ref={el => row2Refs.current[2] = el}
            className={`${cardClass} col-span-1`}
            style={{ height: '220px', background: '#2C2A24' }}
          >
            {/* Ghost large letterforms */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 213 280" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
              <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle"
                fontFamily="'Clash Display', sans-serif" fontSize="160" fontWeight="700"
                fill="white" fillOpacity="0.07" letterSpacing="-8">KT</text>
              <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle"
                fontFamily="'Clash Display', sans-serif" fontSize="80" fontWeight="700"
                fill="white" fillOpacity="0.9" letterSpacing="-3">KT</text>
            </svg>
            <div className="absolute bottom-0 left-0 right-0 h-[120px]"
              style={{ background: 'linear-gradient(to bottom, transparent, #2C2A24)' }} />
            <div className="absolute bottom-0 left-0 p-6 flex flex-col gap-2">
              <span className="bg-white text-ink rounded-pill px-[12px] py-[4px] font-body text-[12px] font-medium w-fit">Learning tip</span>
              <h3 className="font-display font-bold text-[22px] text-white">Insight Snapshot</h3>
              <p className="font-body text-[13px] text-white/70 max-w-[260px]">
                Fact: the best dashboards answer one clear question at a glance.
              </p>
              <p className="font-body text-[12px] text-white/60 max-w-[260px]">
                Book pick: <strong>Storytelling with Data</strong> — make your insights memorable and actionable.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Playground;
